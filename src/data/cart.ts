import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { getProducts } from './data'

export async function getCart(id?: string) {
  const supabase = await createClient()
  const cookieStore = await cookies()
  const { data: { user } } = await supabase.auth.getUser()
  const sessionId = cookieStore.get('cart_session_id')?.value

  let query = supabase.from('cart_items').select('*')
  
  if (user) {
    query = query.eq('user_id', user.id)
  } else if (sessionId) {
    query = query.eq('session_id', sessionId)
  } else {
    // No user and no session, return empty cart
    return {
      id: 'empty-cart',
      note: '',
      createdAt: new Date().toISOString(),
      totalQuantity: 0,
      cost: { subtotal: 0, shipping: 0, tax: 0, total: 0, discount: 0 },
      lines: [],
    }
  }

  const { data: cartItems } = await query

  if (!cartItems || cartItems.length === 0) {
    return {
      id: 'empty-cart',
      note: '',
      createdAt: new Date().toISOString(),
      totalQuantity: 0,
      cost: { subtotal: 0, shipping: 0, tax: 0, total: 0, discount: 0 },
      lines: [],
    }
  }

  let subtotal = 0
  let totalQuantity = 0

  const products = await getProducts()

  const lines = cartItems.map((item) => {
    const product = products.find((p) => p.handle === item.product_handle)
    
    if (!product) return null

    const price = product.price || 0
    subtotal += price * item.quantity
    totalQuantity += item.quantity

    return {
      id: item.id, // Using the cart_items.id for line ID
      name: product.title,
      handle: product.handle,
      price: price,
      color: item.color || 'Default',
      inStock: true,
      size: item.size || 'One Size',
      quantity: item.quantity,
      image: product.featuredImage,
    }
  }).filter(Boolean) as any[]

  return {
    id: user ? `user-${user.id}` : `session-${sessionId}`,
    note: '',
    createdAt: new Date().toISOString(),
    totalQuantity,
    cost: {
      subtotal,
      shipping: subtotal > 0 ? 10 : 0, // simple mock shipping
      tax: subtotal * 0.1, // 10% mock tax
      total: subtotal + (subtotal > 0 ? 10 : 0) + (subtotal * 0.1),
      discount: 0,
    },
    lines,
  }
}
