'use client'

import { useEffect } from 'react'
import { clearCart } from '@/app/actions/cart'
import { clearWishlist } from '@/app/actions/wishlist'
import { useRouter } from 'next/navigation'

export default function ClearCart() {
  const router = useRouter()

  useEffect(() => {
    let mounted = true

    const clear = async () => {
      await clearCart()
      await clearWishlist()
      if (mounted) {
        router.refresh()
      }
    }

    clear()

    return () => {
      mounted = false
    }
  }, [router])

  return null
}
