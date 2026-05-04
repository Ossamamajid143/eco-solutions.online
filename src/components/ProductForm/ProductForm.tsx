'use client'

import { NotifyAddToCart } from '@/components/AddToCardButton'
import { TProductDetail } from '@/data/data'
import Form from 'next/form'
import React from 'react'
import toast from 'react-hot-toast'

import { addToCart } from '@/app/actions/cart'

const ProductForm = ({
  children,
  className,
  product,
}: {
  children?: React.ReactNode
  className?: string
  product: TProductDetail
}) => {
  const { featuredImage, title, price, handle } = product

  const notifyAddTocart = (quantity: number, size: string, color: string) => {
    toast.custom(
      (t) => (
        <NotifyAddToCart
          show={t.visible}
          imageUrl={featuredImage?.src || ''}
          quantity={quantity}
          size={size}
          color={color}
          title={title!}
          price={price!}
        />
      ),
      { position: 'top-right', id: 'nc-product-notify', duration: 4000 }
    )
  }

  const onFormSubmit = async (formData: FormData) => {
    const quantity = formData.get('quantity') ? Number(formData.get('quantity')) : 1
    const size = formData.get('size') ? String(formData.get('size')) : 'One Size'
    const color = formData.get('color') ? String(formData.get('color')) : 'Default'

    try {
      await addToCart(handle, quantity, size, color)
      notifyAddTocart(quantity, size, color)
    } catch (error) {
      console.error('Failed to add to cart:', error)
      toast.error('Failed to add to cart')
    }
  }

  return (
    <Form action={onFormSubmit} className={className}>
      {children}
    </Form>
  )
}

export default ProductForm
