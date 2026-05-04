'use client'

import { createClient } from '@/utils/supabase/client'
import ButtonPrimary from '@/shared/Button/ButtonPrimary'
import { Field, FieldGroup, Fieldset, Label } from '@/shared/fieldset'
import { Input } from '@/shared/input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SignupClient() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/login?message=Check your email to confirm your account')
      router.refresh()
    }
  }

  return (
    <div className="container mb-24 lg:mb-32">
      <h1 className="my-20 flex items-center justify-center text-3xl leading-[115%] font-semibold text-neutral-900 md:text-5xl md:leading-[115%] dark:text-neutral-100">
        Sign up
      </h1>
      <div className="mx-auto max-w-md space-y-6">
        {/* DISPLAY ERROR MESSAGES */}
        {error && (
          <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
            {error}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSignup}>
          <Fieldset>
            <FieldGroup className="sm:space-y-6">
              <Field>
                <Label>Email</Label>
                <Input type="email" name="email" required placeholder="example@example.com" />
              </Field>
              <Field>
                <Label>Password</Label>
                <Input type="password" name="password" required />
              </Field>

              <ButtonPrimary className="mt-2 w-full" type="submit" disabled={loading}>
                {loading ? 'Signing up...' : 'Continue'}
              </ButtonPrimary>
            </FieldGroup>
          </Fieldset>
        </form>

        {/* ==== */}
        <span className="block text-center text-sm text-neutral-700 dark:text-neutral-300">
          Already have an account? {` `}
          <Link className="text-primary-600 underline" href="/login">
            Sign in
          </Link>
        </span>
      </div>
    </div>
  )
}
