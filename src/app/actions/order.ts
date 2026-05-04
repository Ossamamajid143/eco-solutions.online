'use server'

import { stripe, checkStripeConfig } from '@/lib/stripe'
import { createClient } from '@/utils/supabase/server'
import { getCart } from '@/data/cart'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

export async function createOrder(formData: FormData) {
  checkStripeConfig()
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('User must be logged in to place an order')
  }

  const cart = await getCart()
  if (cart.lines.length === 0) {
    throw new Error('Cart is empty')
  }

  // 1. Create order in Supabase
  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert({
      user_id: user.id,
      total_amount: cart.cost.total,
      status: 'pending',
      contact_info: {
        email: user.email,
        phone: formData.get('phone'),
      },
      shipping_address: {
        firstName: formData.get('first-name'),
        lastName: formData.get('last-name'),
        address: formData.get('address'),
        city: formData.get('city'),
        country: formData.get('country'),
        postalCode: formData.get('postal-code'),
      }
    })
    .select()
    .single()

  if (orderError) throw orderError

  // 2. Create order items
  const orderItems = cart.lines.map((item: any) => ({
    order_id: order.id,
    product_handle: item.handle,
    quantity: item.quantity,
    price: item.price,
    size: item.size,
    color: item.color,
  }))

  const { error: itemsError } = await supabase
    .from('order_items')
    .insert(orderItems)

  if (itemsError) throw itemsError

  // 3. Handle payment method
  const headerList = await headers()
  const origin = headerList.get('origin')
  const paymentMethod = formData.get('payment-method') as string

  if (paymentMethod === 'COD') {
    // Redirect directly to success page for Cash on Delivery
    redirect(`/order-successful?order_id=${order.id}`)
  } else {
    // Create Stripe Session for Credit Card
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: cart.lines.map((item: any) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            images: item.image?.src ? [item.image.src] : [],
          },
          unit_amount: Math.round((item.price || 0) * 100),
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${origin}/order-successful?session_id={CHECKOUT_SESSION_ID}&order_id=${order.id}`,
      cancel_url: `${origin}/checkout`,
      customer_email: user.email,
      metadata: {
        orderId: order.id,
      },
    })

    // 4. Update order with Stripe Session ID
    await supabase
      .from('orders')
      .update({ stripe_session_id: session.id })
      .eq('id', order.id)

    if (session.url) {
      redirect(session.url)
    } else {
      throw new Error('Failed to create checkout session')
    }
  }
}
