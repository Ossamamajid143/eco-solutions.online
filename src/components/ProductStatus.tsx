'use client'

import { FC } from 'react'

interface Props {
  status?: string
  className?: string
}

const ProductStatus: FC<Props> = ({
  status = 'New in',
}) => {
  if (!status) return null

  if (status.startsWith('-')) {
    return (
      <div className="absolute top-3 start-3 px-2 py-1 text-xs bg-orange-600 text-white font-bold rounded-sm shadow-md z-10">
        {status}
      </div>
    )
  }

  return (
    <div className="absolute top-3 start-3 px-2.5 py-1.5 text-xs bg-white dark:bg-neutral-900 shadow-md rounded-full text-neutral-700 dark:text-neutral-300 font-medium">
      {status}
    </div>
  )
}

export default ProductStatus
