'use client'

import { Toaster } from 'react-hot-toast'
import AutoLogout from '@/components/AutoLogout'

const GlobalClient = () => {
  return (
    <>
      <Toaster />
      <AutoLogout />
    </>
  )
}

export default GlobalClient
