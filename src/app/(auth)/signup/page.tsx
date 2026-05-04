import { Metadata } from 'next'
import SignupClient from './SignupClient'

export const metadata: Metadata = {
  title: 'Signup',
  description: 'Signup page for the application',
}

export default function PageSignUp() {
  return <SignupClient />
}
