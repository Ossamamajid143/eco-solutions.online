'use client'

import { createClient } from '@/utils/supabase/client'
import ButtonPrimary from '@/shared/Button/ButtonPrimary'
import { Field, FieldGroup, Fieldset, Label } from '@/shared/fieldset'
import { Input } from '@/shared/input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginClient() {
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setMessage(null)
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/')
      router.refresh()
    }
  }

  return (
    <div>
      <div className="container mb-24 lg:mb-32">
        <h1 className="my-20 flex items-center justify-center text-3xl leading-[115%] font-semibold text-neutral-900 md:text-5xl md:leading-[115%] dark:text-neutral-100">
          Login
        </h1>
        <div className="mx-auto flex max-w-md flex-col gap-y-6">
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
          <form onSubmit={handleLogin}>
            <Fieldset>
              <FieldGroup className="sm:space-y-6">
                <Field>
                  <Label>Email</Label>
                  <Input type="email" name="email" required placeholder="example@example.com" />
                </Field>
                <Field>
                  <Label className="flex items-center justify-between gap-2">
                    <span>Password</span>
                    <Link className="text-sm font-normal text-primary-600" href="/forgot-password">
                      Forgot password?
                    </Link>
                  </Label>
                  <Input type="password" name="password" required />
                </Field>
                <ButtonPrimary className="mt-2 w-full" type="submit" disabled={loading}>
                  {loading ? 'Logging in...' : 'Continue'}
                </ButtonPrimary>
              </FieldGroup>
            </Fieldset>
          </form>

          {/* ==== */}
          <span className="block text-center text-sm text-neutral-700 dark:text-neutral-300">
            New user? {` `}
            <Link className="text-primary-600 underline" href="/signup">
              Create an account
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}
