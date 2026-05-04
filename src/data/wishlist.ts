import { createClient } from '@/utils/supabase/server'

export async function getWishlist() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return []

  const { data } = await supabase
    .from('wishlist_items')
    .select('product_handle')
    .eq('user_id', user.id)

  return data || []
}

export async function isProductInWishlist(productHandle: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return false

  const { data } = await supabase
    .from('wishlist_items')
    .select('id')
    .eq('user_id', user.id)
    .eq('product_handle', productHandle)
    .single()

  return !!data
}
