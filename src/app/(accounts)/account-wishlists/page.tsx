import ProductCard from '@/components/ProductCard'
import { getProducts } from '@/data/data'
import ButtonPrimary from '@/shared/Button/ButtonPrimary'
import { createClient } from '@/utils/supabase/server'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Saved Products',
  description: 'Saved Products page',
}

const Page = async () => {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login?message=Please log in to view your wishlist')
  }

  const { data: wishlistItems } = await supabase
    .from('wishlist_items')
    .select('product_handle')
    .eq('user_id', user.id)

  const allProducts = await getProducts()
  const savedHandles = wishlistItems?.map(item => item.product_handle) || []
  
  const products = allProducts.filter(p => savedHandles.includes(p.handle))

  return (
    <div className="flex flex-col gap-y-10 sm:gap-y-12">
      <div>
        <h1 className="text-2xl font-semibold">Wishlists</h1>
        <p className="mt-4 text-neutral-500 dark:text-neutral-400">
          Check out your wishlists. You can add or remove items from your wishlists.
        </p>
      </div>

      {products.length === 0 ? (
        <div className="py-10 text-center">
          <p className="text-neutral-500 dark:text-neutral-400">Your wishlist is empty.</p>
          <ButtonPrimary href="/collections/all" className="mt-8">
            Explore Products
          </ButtonPrimary>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:gap-x-8 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>

          <div className="flex items-center justify-center pt-10">
            <ButtonPrimary>Show me more</ButtonPrimary>
          </div>
        </>
      )}
    </div>
  )
}

export default Page

