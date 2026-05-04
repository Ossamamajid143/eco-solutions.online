import Logo from '@/components/Logo'
import { getCollections } from '@/data/data'
import { getNavigation } from '@/data/navigation'
import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'
import CartBtn from './CartBtn'
import HamburgerBtnMenu from './HamburgerBtnMenu'
import Navigation from './Navigation/Navigation'
import SearchBtnPopover from './SearchBtnPopover'
import { getCart } from '@/data/cart'
import { getWishlist } from '@/data/wishlist'

export interface HeaderProps {
  hasBorderBottom?: boolean
}

const Header: FC<HeaderProps> = async ({ hasBorderBottom = true }) => {
  const navigationMenu = await getNavigation()
  const allCollections = await getCollections()
  const cart = await getCart()
  const wishlist = await getWishlist()

  const cartItemCount = cart.totalQuantity
  const wishlistCount = wishlist.length

  return (
    <div className="relative z-10 w-full bg-white dark:bg-neutral-900">
      <div
        className={clsx(
          'relative border-neutral-200 dark:border-neutral-700',
          hasBorderBottom && 'border-b',
          !hasBorderBottom && 'has-[.header-popover-full-panel]:border-b'
        )}
      >
        <div className="container flex h-20 justify-between items-center">
          <div className="flex flex-1 items-center lg:hidden">
            <HamburgerBtnMenu />
          </div>

          <div className="flex items-center lg:flex-1">
            <Logo />
          </div>

          <div className="mx-4 hidden flex-2 justify-center lg:flex">
            <Navigation menu={navigationMenu} featuredCollection={allCollections[10]} />
          </div>

          <div className="flex flex-1 items-center justify-end gap-x-2.5 sm:gap-x-5">
            <SearchBtnPopover />
            
            <Link href="/login" className="relative -m-2.5 flex cursor-pointer items-center justify-center rounded-full p-2.5 hover:bg-neutral-100 focus-visible:outline-0 dark:hover:bg-neutral-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </Link>

            <Link href="/account-wishlists" className="relative -m-2.5 flex cursor-pointer items-center justify-center rounded-full p-2.5 hover:bg-neutral-100 focus-visible:outline-0 dark:hover:bg-neutral-800">
              {wishlistCount > 0 && (
                <div className="absolute top-2 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary-500 text-[10px] font-medium text-white">
                  <span className="mt-px">{wishlistCount}</span>
                </div>
              )}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </Link>

            <CartBtn itemCount={cartItemCount} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

