import { Metadata } from 'next'
import LoginClient from './LoginClient'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login page for the application',
}

export default function PageLogin() {
  return <LoginClient />
}
