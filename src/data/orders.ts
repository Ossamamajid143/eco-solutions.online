import { createClient } from '@/utils/supabase/server'

export async function getOrderById(id: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return null

  const { data: order, error } = await supabase
    .from('orders')
    .select(`
      *,
      order_items (
        *,
        product:product_handle
      )
    `)
    .eq('id', id)
    .eq('user_id', user.id)
    .single()

  if (error || !order) return null

  return order
}

export async function getUserOrders() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return []

  const { data: orders, error } = await supabase
    .from('orders')
    .select(`
      *,
      order_items (
        *
      )
    `)
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  if (error || !orders) return []

  return orders
}
