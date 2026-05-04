'use client'

import ButtonPrimary from '@/shared/Button/ButtonPrimary'
import ButtonThird from '@/shared/Button/ButtonThird'
import { Checkbox, CheckboxField } from '@/shared/checkbox'
import { DescriptionDetails, DescriptionList, DescriptionTerm } from '@/shared/description-list'
import { Field, FieldGroup, Fieldset, Label, Legend } from '@/shared/fieldset'
import { Subheading } from '@/shared/heading'
import { Input } from '@/shared/input'
import { Radio, RadioField, RadioGroup } from '@/shared/radio'
import { Select } from '@/shared/select'
import {
  CreditCardIcon,
  CreditCardPosIcon,
  InternetIcon,
  Route02Icon,
  Tick02Icon,
  UserCircle02Icon,
  Wallet03Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon, IconSvgElement } from '@hugeicons/react'
import clsx from 'clsx'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import { User } from '@supabase/supabase-js'
import { createOrder } from '@/app/actions/order'

type Tab = 'ContactInfo' | 'ShippingAddress' | 'PaymentMethod'

const Information = ({ user }: { user: User | null }) => {
  const [tabActive, setTabActive] = useState<Tab>('ContactInfo')
  const [paymentMethodSelected, setPaymentMethodSelected] = useState(false)
  const [shippingAddressProvided, setShippingAddressProvided] = useState(false)
  
  const [formData, setFormData] = useState<any>({
    email: user?.email || '',
    phone: user?.phone || '',
    'first-name': '',
    'last-name': '',
    address: '',
    city: '',
    country: 'United States',
    'postal-code': '',
  })
  const fullName = user?.user_metadata?.full_name || user?.user_metadata?.name || ''
  const email = user?.email || ''

  const handleScrollToEl = (id: string) => {
    const element = document.getElementById(id)
    setTimeout(() => {
      element?.scrollIntoView({ behavior: 'smooth' })
    }, 80)
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <div id="ContactInfo" className="scroll-mt-5 rounded-xl border">
        <TabHeader
          title="Contact information"
          icon={UserCircle02Icon}
          value={user ? `${fullName || user.email}` : 'Not logged in'}
          onClickChange={() => {
            setTabActive('ContactInfo')
            handleScrollToEl('ContactInfo')
          }}
        />
        <div className={clsx('border-t px-4 py-7 sm:px-6', tabActive !== 'ContactInfo' && 'invisible hidden')}>
          <ContactInfo
            user={user}
            onClose={(data) => {
              setFormData((prev: any) => ({ ...prev, ...data }))
              setTabActive('ShippingAddress')
              handleScrollToEl('ShippingAddress')
            }}
          />
        </div>
      </div>

      <div id="ShippingAddress" className="scroll-mt-5 rounded-xl border">
        <TabHeader
          title="Shipping address"
          icon={Route02Icon}
          value={shippingAddressProvided ? 'Address provided' : 'No address provided'}
          onClickChange={() => {
            setTabActive('ShippingAddress')
            handleScrollToEl('ShippingAddress')
          }}
        />
        <div className={clsx('border-t px-4 py-7 sm:px-6', tabActive !== 'ShippingAddress' && 'invisible hidden')}>
          <ShippingAddress
            onClose={(data) => {
              setFormData((prev: any) => ({ ...prev, ...data }))
              setShippingAddressProvided(true)
              setTabActive('PaymentMethod')
              handleScrollToEl('PaymentMethod')
            }}
          />
        </div>
      </div>

      <div id="PaymentMethod" className="scroll-mt-5 rounded-xl border">
        <TabHeader
          title="Payment method"
          icon={CreditCardPosIcon}
          value={paymentMethodSelected ? 'Payment method selected' : 'No payment method selected'}
          onClickChange={() => {
            setTabActive('PaymentMethod')
            handleScrollToEl('PaymentMethod')
          }}
        />
        <div className={clsx('border-t px-4 py-7 sm:px-6', tabActive !== 'PaymentMethod' && 'invisible hidden')}>
          <PaymentMethod
            formData={formData}
            isSelected={paymentMethodSelected}
            onSelected={() => setPaymentMethodSelected(true)}
            onClose={() => {
              setTabActive('ShippingAddress')
              handleScrollToEl('ShippingAddress')
            }}
          />
        </div>
      </div>
    </div>
  )
}

const TabHeader = ({
  title,
  icon,
  value,
  onClickChange,
}: {
  title: string
  icon: IconSvgElement
  value: string
  onClickChange: () => void
}) => {
  return (
    <div className="flex flex-col items-start gap-5 p-5 sm:flex-row sm:p-6">
      <HugeiconsIcon icon={icon} size={24} className="sm:mt-1.5" />
      <div className="sm:pl-3">
        <h3 className="flex items-center gap-3 text-neutral-700 dark:text-neutral-400">
          <span className="tracking-tight uppercase">{title}</span>
          <HugeiconsIcon icon={Tick02Icon} size={24} className="mb-1 text-primary-500" />
        </h3>
        <div className="mt-1 text-sm font-semibold">{value}</div>
      </div>
      <button
        className="rounded-lg bg-neutral-50 px-4 py-2 text-sm font-medium hover:bg-neutral-100 sm:ml-auto dark:bg-neutral-800 dark:hover:bg-neutral-700"
        onClick={onClickChange}
        type="button"
      >
        Change
      </button>
    </div>
  )
}

const ContactInfo = ({ onClose, user }: { onClose: (data: any) => void; user: User | null }) => {
  return (
    <form
      action="#"
      method="POST"
      onSubmit={(e) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target as HTMLFormElement))
        onClose(data)
      }}
    >
      <Fieldset>
        <FieldGroup className="mt-0!">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold">Contact infomation</h3>
            <p className="text-sm">
              Do not have an account?{` `}
              <Link href="/login" className="font-medium underline">
                Log in
              </Link>
            </p>
          </div>
          <Field className="max-w-lg">
            <Label>Your phone number</Label>
            <Input defaultValue={user?.phone || ''} type="tel" name="phone" />
          </Field>
          <Field className="max-w-lg">
            <Label>Email address</Label>
            <Input type="email" name="email" defaultValue={user?.email || ''} />
          </Field>
          <Field>
            <CheckboxField>
              <Checkbox name="newsletter" defaultChecked />
              <Label>Email me news and offers</Label>
            </CheckboxField>
          </Field>

          {/* ============ */}
          <div className="flex flex-wrap gap-2.5 pt-4">
            <ButtonPrimary type="submit">Next to shipping address</ButtonPrimary>
            <ButtonThird type="button" onClick={onClose}>
              Cancel
            </ButtonThird>
          </div>
        </FieldGroup>
      </Fieldset>
    </form>
  )
}

const ShippingAddress = ({ onClose }: { onClose: (data: any) => void }) => {
  return (
    <form
      action="#"
      method="POST"
      onSubmit={(e) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target as HTMLFormElement))
        onClose(data)
      }}
    >
      <Fieldset>
        <FieldGroup className="mt-0!">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
            <Field>
              <Label>First name</Label>
              <Input defaultValue="" name="first-name" />
            </Field>
            <Field>
              <Label>Last name</Label>
              <Input defaultValue="" name="last-name" />
            </Field>
          </div>

          {/* ============ */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4">
            <Field className="sm:col-span-2">
              <Label>Address</Label>
              <Input placeholder="" defaultValue={''} type={'text'} name="address" />
            </Field>
            <Field>
              <Label>Apt, Suite *</Label>
              <Input defaultValue="55U - DD5 " name="apt-suite" />
            </Field>
          </div>

          {/* ============ */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
            <Field>
              <Label>City</Label>
              <Input defaultValue="" name="city" />
            </Field>
            <Field>
              <Label>Country</Label>
              <Select defaultValue="United States" name="country">
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="Mexico">Mexico</option>
                <option value="France">France</option>
                <option value="England">England</option>
              </Select>
            </Field>
            <Field>
              <Label>State/Province</Label>
              <Input defaultValue="" name="state-province" />
            </Field>
            <Field>
              <Label>Postal code</Label>
              <Input defaultValue="" name="postal-code" />
            </Field>
          </div>

          <Field className="max-w-lg">
            <Legend>Address type</Legend>
            <RadioGroup
              className="mt-1.5 grid grid-cols-1 gap-2 space-y-0! sm:grid-cols-2 sm:gap-3"
              name="address-type"
              defaultValue="at-home"
              aria-label="Address type"
            >
              <RadioField>
                <Label>
                  <span className="text-sm font-medium">
                    Home <span className="font-light">(All Day Delivery)</span>
                  </span>
                </Label>
                <Radio value="at-home" defaultChecked />
              </RadioField>

              <RadioField>
                <Label>
                  <span className="text-sm font-medium">
                    Office{' '}
                    <span className="font-light">
                      (Delivery <span className="font-medium">9 AM - 5 PM</span>)
                    </span>
                  </span>
                </Label>
                <Radio value="at-office" />
              </RadioField>
            </RadioGroup>
          </Field>

          {/* ============ */}
          <div className="flex flex-wrap gap-2.5 pt-6">
            <ButtonPrimary type="submit">Next to payment method</ButtonPrimary>
            <ButtonThird type="button" onClick={onClose}>
              Cancel
            </ButtonThird>
          </div>
        </FieldGroup>
      </Fieldset>
    </form>
  )
}

const PaymentMethod = ({
  onClose,
  onSelected,
  isSelected,
  formData,
}: {
  onClose: () => void
  onSelected: () => void
  isSelected: boolean
  formData: any
}) => {
  const [mothodActive, setMethodActive] = useState<'Credit-Card' | 'Wallet' | 'COD'>('Credit-Card')

  useEffect(() => {
    if (mothodActive) {
      onSelected()
    }
  }, [mothodActive, onSelected])

  const renderDebitCredit = () => {
    const active = mothodActive === 'Credit-Card'
    return (
      <div>
        <RadioGroup
          name="payment-method"
          aria-label="Payment method"
          onChange={(e) => {
            setMethodActive(e as any)
            onSelected()
          }}
          value={mothodActive}
        >
          <RadioField className="sm:gap-x-6">
            <Radio className="pt-3" value="Credit-Card" defaultChecked={active} />
            <Label className="flex items-center gap-x-4 sm:gap-x-6">
              <div
                className={clsx(
                  'rounded-xl border-2 border-neutral-600 p-2.5 dark:border-neutral-300',
                  active ? 'opacity-100' : 'opacity-25'
                )}
              >
                <HugeiconsIcon icon={CreditCardIcon} size={24} />
              </div>
              <p className="font-medium sm:text-base">Debit / Credit Card</p>
            </Label>
          </RadioField>
        </RadioGroup>

        <div className={clsx('py-6 sm:pl-10', active ? 'block' : 'hidden')}>
          <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
            You will be redirected to our secure payment gateway to complete your purchase safely.
          </p>
        </div>
      </div>
    )
  }


  const renderCOD = () => {
    const active = mothodActive === 'COD'
    return (
      <div>
        <RadioGroup
          name="payment-method"
          aria-label="Payment method"
          value={mothodActive}
          onChange={(e) => {
            setMethodActive(e as any)
            onSelected()
          }}
        >
          <RadioField className="sm:gap-x-6">
            <Radio className="pt-3" value="COD" defaultChecked={active} />
            <Label className="flex items-center gap-x-4 sm:gap-x-6">
              <div
                className={clsx(
                  'rounded-xl border-2 border-neutral-600 p-2.5 dark:border-neutral-300',
                  active ? 'opacity-100' : 'opacity-25'
                )}
              >
                <HugeiconsIcon icon={Wallet03Icon} size={24} />
              </div>
              <p className="font-medium sm:text-base">Cash on Delivery (COD)</p>
            </Label>
          </RadioField>
        </RadioGroup>

        <div className={clsx('py-6 sm:pl-10', active ? 'block' : 'hidden')}>
          <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
            Pay with cash upon delivery. Please ensure you have the exact amount ready for the delivery partner.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form
      action={createOrder}
    >
      {Object.entries(formData).map(([key, value]) => (
        <input key={key} type="hidden" name={key} value={value as string} />
      ))}
      <Fieldset>
        <FieldGroup className="mt-0!">
          {renderDebitCredit()}
          {renderCOD()}

          <div className="flex flex-wrap gap-2.5 pt-4">
            {isSelected && (
              <ButtonPrimary className="min-w-56" type="submit">
                {mothodActive === 'Credit-Card' ? 'Proceed to payment' : 'Confirm order'}
              </ButtonPrimary>
            )}
            <ButtonThird type="button" onClick={onClose}>
              Back to shipping address
            </ButtonThird>
          </div>
        </FieldGroup>
      </Fieldset>
    </form>
  )
}

export default Information
