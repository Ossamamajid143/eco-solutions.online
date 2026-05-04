'use client'

import { useEffect, useRef } from 'react'
import { logout } from '@/app/auth/actions'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'

export default function AutoLogout() {
  const pathname = usePathname()
  const router = useRouter()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const TIMEOUT_MS = 30 * 60 * 1000 // 30 minutes

  useEffect(() => {
    // Do not run on auth pages
    if (pathname === '/login' || pathname === '/signup' || pathname === '/forgot-password') return

    const resetTimer = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(async () => {
        const supabase = createClient()
        const { data: { session } } = await supabase.auth.getSession()
        
        if (session) {
          await logout()
          router.push('/login')
        }
      }, TIMEOUT_MS)
    }

    // Set initial timer
    resetTimer()

    // Add event listeners for user activity
    const events = ['mousemove', 'keydown', 'scroll', 'click', 'touchstart']
    events.forEach(event => {
      window.addEventListener(event, resetTimer)
    })

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      events.forEach(event => {
        window.removeEventListener(event, resetTimer)
      })
    }
  }, [pathname, router])

  return null
}
