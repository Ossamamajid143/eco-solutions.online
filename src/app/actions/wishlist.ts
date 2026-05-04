'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function addToWishlist(productHandle: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('User must be logged in to add to wishlist')
  }

  const { error } = await supabase
    .from('wishlist_items')
    .insert({
      user_id: user.id,
      product_handle: productHandle,
    })

  if (error && error.code !== '23505') { // Ignore unique constraint violations (already in wishlist)
    throw error
  }

  revalidatePath('/', 'layout')
}

export async function removeFromWishlist(productHandle: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return

  await supabase
    .from('wishlist_items')
    .delete()
    .eq('user_id', user.id)
    .eq('product_handle', productHandle)

  revalidatePath('/', 'layout')
}

export async function toggleWishlist(productHandle: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('Please log in to manage your wishlist')
  }

  // Check if it exists
  const { data: existing } = await supabase
    .from('wishlist_items')
    .select('id')
    .eq('user_id', user.id)
    .eq('product_handle', productHandle)
    .single()

  if (existing) {
    await removeFromWishlist(productHandle)
    return false // Removed
  } else {
    await addToWishlist(productHandle)
    return true // Added
  }
}

export async function clearWishlist() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return

  await supabase
    .from('wishlist_items')
    .delete()
    .eq('user_id', user.id)

  revalidatePath('/', 'layout')
}
