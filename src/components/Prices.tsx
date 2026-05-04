import clsx from 'clsx'
import { FC } from 'react'

export interface PricesProps {
  className?: string
  price: number
  compareAtPrice?: number
  contentClass?: string
}

const Prices: FC<PricesProps> = ({
  className,
  price,
  compareAtPrice,
  contentClass = 'flex items-center gap-2 text-base font-semibold',
}) => {
  return (
    <div className={clsx(className, contentClass)}>
      {compareAtPrice && (
        <span className="text-neutral-500 line-through font-normal text-sm">
          ${compareAtPrice.toFixed(2)}
        </span>
      )}
      <span className="text-orange-600">${price.toFixed(2)}</span>
    </div>
  )
}

export default Prices
