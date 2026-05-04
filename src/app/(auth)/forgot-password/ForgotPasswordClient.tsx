'use client'

import { createClient } from '@/utils/supabase/client'
import ButtonPrimary from '@/shared/Button/ButtonPrimary'
import { Field, FieldGroup, Fieldset, Label } from '@/shared/fieldset'
import { Input } from '@/shared/input'
import Link from 'next/link'
import { useState } from 'react'

export default function ForgotPasswordClient() {
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setMessage(null)
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
    })

    if (error) {
      setError(error.message)
    } else {
      setMessage('Password reset link sent to your email')
    }
    setLoading(false)
  }

  return (
    <div className="container mb-24 lg:mb-32">
      <header className="mx-auto mb-14 max-w-2xl text-center sm:mb-16 lg:mb-20">
        <h1 className="mt-20 flex items-center justify-center text-3xl leading-[1.15] font-semibold text-neutral-900 md:text-5xl md:leading-[1.15] dark:text-neutral-100">
          Reset Password
        </h1>
        <span className="mt-4 block text-sm text-neutral-700 sm:text-base dark:text-neutral-200">
          Enter the email address associated with your account and we'll send you a link to reset your password.
        </span>
      </header>

      <div className="mx-auto max-w-md space-y-6">
        {/* DISPLAY STATUS MESSAGES */}
        {error && (
          <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
            {error}
          </div>
        )}
        {message && (
          <div className="rounded-lg bg-green-50 p-4 text-sm text-green-600 dark:bg-green-900/20 dark:text-green-400">
            {message}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleReset}>
          <Fieldset>
            <FieldGroup className="sm:space-y-6">
              <Field>
                <Label>Email</Label>
                <Input type="email" name="email" required placeholder="example@example.com" />
              </Field>

              <ButtonPrimary className="mt-2 w-full" type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Reset Link'}
              </ButtonPrimary>
            </FieldGroup>
          </Fieldset>
        </form>

        {/* ==== */}
        <span className="block text-center text-sm text-neutral-700 dark:text-neutral-300">
          Remembered your password? {` `}
          <Link className="text-primary-600 underline" href="/login">
            Back to login
          </Link>
        </span>
      </div>
    </div>
  )
}
