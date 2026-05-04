import { Link } from '@/components/Link'
import Prices from '@/components/Prices'
import { getProductDetailByHandle } from '@/data/data'
import { getUserOrders } from '@/data/orders'
import { Button } from '@/shared/Button/Button'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Orders',
  description: 'Orders History page',
}

const Order = ({ order }: { order: any }) => {
  return (
    <div className="z-0 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
      <div className="flex flex-col bg-neutral-50 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-8 dark:bg-neutral-500/5">
        <div>
          <Link href={'/orders/' + order.id} className="text-lg font-semibold">
            #{order.number}
          </Link>
          <p className="mt-1.5 text-sm text-neutral-500 sm:mt-2 dark:text-neutral-400">{order.status}</p>
        </div>
        <div className="mt-3 flex gap-x-1.5 sm:mt-0">
          <Button color="light" size="smaller" href={'collections/all'}>
            Buy again
          </Button>
          <Button color="light" size="smaller" href={'/orders/' + order.id}>
            View order
          </Button>
        </div>
      </div>
      <div className="divide-y-neutral-200 divide-y border-t border-neutral-200 p-2 sm:p-8 dark:divide-neutral-700 dark:border-neutral-700">
        {order?.products?.map(({ id, featuredImage, price, handle, title, color, size, status, quantity }: any) => (
          <div key={id} className="flex py-4 first:pt-0 last:pb-0 sm:py-7">
            <div className="relative h-24 w-16 shrink-0 overflow-hidden rounded-xl bg-neutral-100 sm:w-20">
              <Image
                fill
                sizes="100px"
                src={featuredImage}
                alt={featuredImage.alt}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between">
                  <div>
                    <h3 className="line-clamp-1 text-base font-medium">{title}</h3>
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                      <span>{color}</span>
                      <span className="mx-2 h-4 border-l border-neutral-200 dark:border-neutral-700"></span>
                      <span>{size}</span>
                    </p>
                  </div>
                  <Prices className="mt-0.5 ml-2" price={price || 0} />
                </div>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <p className="flex items-center text-neutral-500 dark:text-neutral-400">
                  <span className="hidden sm:inline-block">Qty</span>
                  <span className="inline-block sm:hidden">x</span>
                  <span className="ml-2">{quantity}</span>
                </p>

                <div className="flex">
                  <Link href={'/products/' + handle} className="font-medium text-primary-600 dark:text-primary-500">
                    Leave review
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Page = async () => {
  const dbOrders = await getUserOrders()

  const orders = await Promise.all(
    dbOrders.map(async (dbOrder: any) => {
      const products = await Promise.all(
        dbOrder.order_items.map(async (item: any) => {
          const productDetail = await getProductDetailByHandle(item.product_handle)
          return {
            id: item.id,
            title: productDetail?.title || item.product_handle,
            handle: item.product_handle,
            featuredImage: productDetail?.featuredImage || { src: '', alt: '' },
            price: item.price,
            quantity: item.quantity,
            size: item.size,
            color: item.color,
            status: dbOrder.status,
          }
        })
      )

      const date = new Date(dbOrder.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })

      return {
        id: dbOrder.id,
        number: dbOrder.id.slice(0, 8).toUpperCase(),
        status: `Ordered on ${date} - ${dbOrder.status}`,
        products,
      }
    })
  )

  return (
    <div className="flex flex-col gap-y-10 sm:gap-y-12">
      {/* HEADING */}
      <div>
        <h1 className="text-2xl font-semibold">Order history</h1>
        <p className="mt-4 text-neutral-500 dark:text-neutral-400">
          Check the status of recent orders, manage returns, and discover similar products.
        </p>
      </div>
      {orders.length === 0 ? (
        <p className="text-neutral-500 dark:text-neutral-400">You have no orders yet.</p>
      ) : (
        orders.map((order) => (
          <Order key={order.id} order={order} />
        ))
      )}
    </div>
  )
}

export default Page
