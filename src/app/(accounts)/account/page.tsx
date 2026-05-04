
import ButtonPrimary from '@/shared/Button/ButtonPrimary'
import { Field, Fieldset, Label } from '@/shared/fieldset'
import { Input, InputGroup } from '@/shared/input'
import { Select } from '@/shared/select'

import {
  Calendar01Icon,
  ImageAdd02Icon,
  Mail01Icon,
  MapsLocation01Icon,
  SmartPhone01Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Metadata } from 'next'
import Form from 'next/form'
import Image from 'next/image'
import { createClient } from '@/utils/supabase/server'

export const metadata: Metadata = {
  title: 'Account',
  description: 'Account page',
}

const Page = async () => {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const fullName = user?.user_metadata?.full_name || user?.user_metadata?.name || ''
  const email = user?.email || ''
  const phone = user?.phone || ''

  const handleSubmit = async (formData: FormData) => {
    'use server'
    const formObject = Object.fromEntries(formData.entries())
    console.log(formObject)
    // Update the account
  }

  return (
    <div className="flex flex-col gap-y-10 sm:gap-y-12">
      {/* HEADING */}
      <h1 className="text-2xl font-semibold sm:text-3xl">Account infomation</h1>

      <Form action={handleSubmit}>
        <Fieldset className="flex flex-col md:flex-row">
          <div className="flex shrink-0 items-start">
            {/* AVATAR */}
            <div className="relative flex size-32 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
              <div className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center text-neutral-500 dark:text-neutral-400">
                <HugeiconsIcon icon={ImageAdd02Icon} size={30} color="currentColor" strokeWidth={1.5} />
                <span className="mt-1 text-xs">Change Image</span>
              </div>
              <input type="file" name="avatar" className="absolute inset-0 cursor-pointer opacity-0" />
            </div>
          </div>
          <div className="mt-10 max-w-3xl grow space-y-7 md:mt-0 md:pl-16">
            <Field>
              <Label>Full name</Label>
              <Input name="full-name" defaultValue={fullName} />
            </Field>

            {/* ---- */}
            <Field>
              <Label>Email</Label>
              <InputGroup>
                <HugeiconsIcon data-slot="icon" icon={Mail01Icon} size={16} />
                <Input name="email" type="email" defaultValue={email} placeholder="example@email.com" />
              </InputGroup>
            </Field>

            {/* ---- */}
            <Field className="max-w-lg">
              <Label>Date of birth</Label>
              <InputGroup>
                <HugeiconsIcon data-slot="icon" icon={Calendar01Icon} size={16} />
                <Input name="date-of-birth" type="date" defaultValue="1990-07-22" />
              </InputGroup>
            </Field>
            {/* ---- */}
            <Field>
              <Label>Addess</Label>
              <InputGroup>
                <HugeiconsIcon data-slot="icon" icon={MapsLocation01Icon} size={16} />
                <Input name="address" defaultValue="" placeholder="Your address" />
              </InputGroup>
            </Field>

            {/* ---- */}
            <Field>
              <Label>Gender</Label>
              <Select name="gender" defaultValue="Male">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Select>
            </Field>

            {/* ---- */}
            <Field>
              <Label>Phone number</Label>
              <InputGroup>
                <HugeiconsIcon data-slot="icon" icon={SmartPhone01Icon} size={16} />
                <Input name="phone-number" defaultValue={phone} />
              </InputGroup>
            </Field>

            <div className="pt-2">
              <ButtonPrimary type="submit">Update account</ButtonPrimary>
            </div>
          </div>
        </Fieldset>
      </Form>
    </div>
  )
}

export default Page
