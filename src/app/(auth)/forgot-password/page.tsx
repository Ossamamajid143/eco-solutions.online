import { Metadata } from 'next'
import ForgotPasswordClient from './ForgotPasswordClient'

export const metadata: Metadata = {
  title: 'Forgot Password',
  description: 'Reset your password',
}

export default function PageForgotPassword() {
  return <ForgotPasswordClient />
}
