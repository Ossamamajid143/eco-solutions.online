'use client'

import { TProductItem } from '@/data/data'
import NcImage from '@/shared/NcImage/NcImage'
import { Link } from '@/shared/link'
import { ArrowsPointingOutIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import { FC } from 'react'
import AddToCardButton from './AddToCardButton'
import LikeButton from './LikeButton'
import Prices from './Prices'
import ProductStatus from './ProductStatus'
import { useAside } from './aside'

interface Props {
  className?: string
  data: TProductItem
  isLiked?: boolean
}

const ProductCard: FC<Props> = ({ className = '', data, isLiked }) => {
  const { title, price, compareAtPrice, status, rating, options, handle, selectedOptions, reviewNumber, images, featuredImage } = data
  const color = selectedOptions?.find((option) => option.name === 'Color')?.value

  const { open: openAside, setProductQuickViewHandle } = useAside()

  const renderColorOptions = () => {
    const optionColorValues = options?.find((option) => option.name === 'Color')?.optionValues

    if (!optionColorValues?.length) {
      return null
    }

    return (
      <div className="flex gap-2">
        {optionColorValues.map((color: any) => (
          <div key={color.name} className="relative size-4 cursor-pointer overflow-hidden rounded-full">
            <div
              className="absolute inset-0 z-0 rounded-full bg-cover ring-1 ring-neutral-900/20 dark:ring-white/20"
              style={{
                backgroundColor: color.swatch?.color,
                backgroundImage: color.swatch?.image ? `url(${color.swatch.image})` : undefined,
              }}
            />
          </div>
        ))}
      </div>
    )
  }

  const renderGroupButtons = () => {
    return (
      <div className="absolute top-1/2 -translate-y-1/2 end-3 flex flex-col gap-2 transition-all opacity-0 group-hover:opacity-100 z-10">
        <button
          className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-white text-neutral-900 shadow-md hover:bg-neutral-100 transition-colors"
          type="button"
          onClick={() => {
            setProductQuickViewHandle(handle || '')
            openAside('product-quick-view')
          }}
          title="Quick view"
        >
          <ArrowsPointingOutIcon className="size-5" />
        </button>
        <button
          className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-white text-neutral-900 shadow-md hover:bg-neutral-100 transition-colors"
          type="button"
          title="Compare"
        >
          <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
          </svg>
        </button>
      </div>
    )
  }

  return (
    <>
      <div className={`product-card relative flex flex-col bg-transparent ${className}`}>
        <Link href={'/products/' + handle} className="absolute inset-0"></Link>

        <div className="group relative z-1 shrink-0 overflow-hidden rounded-3xl bg-neutral-50 dark:bg-neutral-300">
          <Link href={'/products/' + handle} className="block">
            {featuredImage?.src && (
              <NcImage
                containerClassName="flex aspect-[11/12] w-full"
                src={featuredImage.src}
                className="h-full w-full object-cover"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 40vw"
                alt={handle}
              />
            )}
          </Link>
          <ProductStatus status={status} />
          <LikeButton liked={isLiked} productHandle={handle} className="absolute end-3 top-3 z-10" />
          {renderGroupButtons()}
        </div>

        <div className="space-y-4 px-2.5 pt-5 pb-2.5 text-center">
          <span className="text-xs text-orange-600 uppercase font-semibold tracking-wide">{data.category}</span>
          <div>
            <h2 className="nc-ProductCard__title text-lg font-bold text-indigo-950 transition-colors line-clamp-1">{title}</h2>
          </div>

          <div className="flex items-center justify-center">
            <Prices price={price ?? 1} compareAtPrice={compareAtPrice} />
          </div>

          <AddToCardButton
            as={'button'}
            className="w-full flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-indigo-950 px-4 py-3 text-sm font-bold text-white shadow-lg hover:bg-indigo-900 transition-colors"
            title={title || ''}
            imageUrl={featuredImage?.src || ''}
            price={price || 0}
            quantity={1}
            size={selectedOptions?.find((option) => option.name === 'Size')?.value}
            color={selectedOptions?.find((option) => option.name === 'Color')?.value}
          >
            <span>Add To Cart</span>
          </AddToCardButton>
        </div>
      </div>
    </>
  )
}

export default ProductCard
