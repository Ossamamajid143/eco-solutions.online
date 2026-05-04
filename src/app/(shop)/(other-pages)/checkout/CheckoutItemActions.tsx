'use client'

import React, { useState } from 'react'
import { removeFromCart } from '@/app/actions/cart'
import toast from 'react-hot-toast'

export default function CheckoutItemActions({ cartItemId }: { cartItemId: string }) {
  const [isLoading, setIsLoading] = useState(false)

  const handleRemove = async () => {
    setIsLoading(true)
    try {
      await removeFromCart(cartItemId)
      toast.success('Item removed from cart')
    } catch (error) {
      console.error(error)
      toast.error('Failed to remove item')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handleRemove}
      disabled={isLoading}
      className={`relative z-10 mt-3 flex items-center text-sm font-medium text-primary-600 hover:text-primary-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {isLoading ? 'Removing...' : 'Remove'}
    </button>
  )
}
