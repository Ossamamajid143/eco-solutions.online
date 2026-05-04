import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  appInfo: {
    name: 'Ecommerce Next.js',
    version: '0.1.0',
  },
})

export const checkStripeConfig = () => {
  console.log('Stripe Key Length:', process.env.STRIPE_SECRET_KEY?.length || 0)
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is missing from .env.local')
  }
}
