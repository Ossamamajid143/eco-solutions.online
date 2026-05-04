'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

async function getSessionId() {
  const cookieStore = await cookies()
  let sessionId = cookieStore.get('cart_session_id')?.value

  if (!sessionId) {
    sessionId = crypto.randomUUID()
    // Set cookie for 30 days
    cookieStore.set('cart_session_id', sessionId, {
      maxAge: 60 * 60 * 24 * 30,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    })
  }
  return sessionId
}

export async function addToCart(productHandle: string, quantity: number = 1, size: string = 'One Size', color: string = 'Default') {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const sessionId = await getSessionId()

  const { data: existingItem } = await supabase
    .from('cart_items')
    .select('id, quantity')
    .eq(user ? 'user_id' : 'session_id', user ? user.id : sessionId)
    .eq('product_handle', productHandle)
    .eq('size', size)
    .eq('color', color)
    .single()

  if (existingItem) {
    // Update quantity
    await supabase
      .from('cart_items')
      .update({ quantity: existingItem.quantity + quantity })
      .eq('id', existingItem.id)
  } else {
    // Insert new item
    const insertData: any = {
      product_handle: productHandle,
      quantity,
      size,
      color,
    }
    
    if (user) {
      insertData.user_id = user.id
    } else {
      insertData.session_id = sessionId
    }

    await supabase.from('cart_items').insert(insertData)
  }

  if (user) {
    await supabase
      .from('wishlist_items')
      .delete()
      .eq('user_id', user.id)
      .eq('product_handle', productHandle)
  }

  revalidatePath('/', 'layout')
}

export async function removeFromCart(cartItemId: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const sessionId = await getSessionId()

  const query = supabase.from('cart_items').delete().eq('id', cartItemId)
  
  if (user) {
    query.eq('user_id', user.id)
  } else {
    query.eq('session_id', sessionId)
  }

  await query
  revalidatePath('/', 'layout')
}

export async function updateCartQuantity(cartItemId: string, quantity: number) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const sessionId = await getSessionId()

  const query = supabase.from('cart_items').update({ quantity }).eq('id', cartItemId)
  
  if (user) {
    query.eq('user_id', user.id)
  } else {
    query.eq('session_id', sessionId)
  }

  await query
  revalidatePath('/', 'layout')
}

export async function clearCart() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const sessionId = await getSessionId()

  const query = supabase.from('cart_items').delete()
  
  if (user) {
    query.eq('user_id', user.id)
  } else {
    query.eq('session_id', sessionId)
  }

  await query
  revalidatePath('/', 'layout')
}
