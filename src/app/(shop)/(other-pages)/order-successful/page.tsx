import { Divider } from '@/components/Divider'
import Heading from '@/components/Heading/Heading'
import Prices from '@/components/Prices'
import { getProductDetailByHandle } from '@/data/data'
import { getOrderById } from '@/data/orders'
import ClearCart from './ClearCart'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Order Successful',
  description: 'Your order has been successfully placed.',
}

export default async function Page({ searchParams }: { searchParams: Promise<{ order_id?: string }> }) {
  const { order_id } = await searchParams

  if (!order_id) {
    return notFound()
  }

  const order = await getOrderById(order_id)

  if (!order) {
    return notFound()
  }

  // Fetch full product details for each order item
  const products = await Promise.all(
    order.order_items.map(async (item: any) => {
      const productDetail = await getProductDetailByHandle(item.product_handle)
      return {
        ...item,
        title: productDetail.title,
        handle: item.product_handle,
        featuredImage: productDetail.featuredImage,
      }
    })
  )

  const shipping = order.shipping_address || {}
  const contact = order.contact_info || {}

  return (
    <>
      <ClearCart />
      <main className="container">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-3xl">
          <div>
            <p className="text-xs font-medium uppercase">Thanks for ordering</p>
            <Heading className="mt-4">Payment successful!</Heading>

            <p className="mt-2.5 max-w-2xl text-neutral-500">
              We appreciate your order, we’re currently processing it. So hang tight and we’ll send you confirmation
              very soon!
            </p>

            <dl className="mt-16 text-sm">
              <dt className="text-neutral-500">Order number</dt>
              <dd>
                <div className="mt-2 text-lg font-medium">
                  #{order.id.slice(0, 8).toUpperCase()}
                </div>
              </dd>
            </dl>

            <ul
              role="list"
              className="mt-6 divide-y divide-neutral-200 border-t border-neutral-200 text-sm text-neutral-500 dark:divide-neutral-700 dark:border-neutral-700 dark:text-neutral-300"
            >
              {products.map((product) => (
                <li key={product.id} className="flex gap-x-2.5 py-6 sm:gap-x-6">
                  <div className="relative aspect-3/4 w-24 flex-none">
                    {product.featuredImage && (
                      <Image
                        alt={product.title}
                        src={product.featuredImage}
                        fill
                        sizes="200px"
                        className="rounded-md bg-neutral-100 object-cover"
                      />
                    )}
                  </div>
                  <div className="flex flex-auto flex-col gap-y-1.5">
                    <h3 className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                      <Link href={'/products/' + product.handle}>{product.title}</Link>
                    </h3>
                    <div className="flex items-center gap-x-2 text-neutral-500 dark:text-neutral-300">
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">{product.color}</p>
                      {product.size ? <p className="text-sm text-neutral-300">/</p> : null}
                      {product.size ? (
                        <p className="text-sm text-neutral-500 dark:text-neutral-300">{product.size}</p>
                      ) : null}
                    </div>
                    <Prices price={product.price} className="flex justify-start sm:hidden" />

                    <p className="mt-auto text-sm text-neutral-500 dark:text-neutral-300">Qty {product.quantity}</p>
                  </div>

                  <Prices price={product.price} className="hidden sm:block" />
                </li>
              ))}
            </ul>

            <dl className="space-y-6 border-t border-neutral-200 pt-6 text-sm font-medium text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
              <div className="flex items-center justify-between border-t border-neutral-200 pt-6 text-neutral-900 dark:border-neutral-700 dark:text-neutral-100">
                <dt className="text-base uppercase">Total</dt>
                <dd className="text-base">${order.total_amount.toFixed(2)}</dd>
              </div>
            </dl>

            <dl className="mt-12 grid grid-cols-2 gap-x-4 text-sm text-neutral-600 sm:mt-16 dark:text-neutral-300">
              <div>
                <dt className="font-medium text-neutral-900 uppercase">Shipping Address</dt>
                <dd className="mt-2">
                  <address className="uppercase not-italic">
                    <span className="block">{shipping.firstName} {shipping.lastName}</span>
                    <span className="block">{shipping.address}</span>
                    <span className="block">{shipping.city}, {shipping.postalCode}</span>
                    <span className="block">{shipping.country}</span>
                  </address>
                </dd>
              </div>
              <div>
                <dt className="font-medium uppercase">Contact Information</dt>
                <dd className="mt-2">
                   <p>{contact.email}</p>
                   <p>{contact.phone}</p>
                </dd>
              </div>
            </dl>

            <div className="mt-16 border-t border-neutral-200 py-6 text-right dark:border-neutral-700">
              <Link href="/collections/all" className="text-sm font-medium uppercase">
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        <Divider />
      </main>
    </>
  )
}
