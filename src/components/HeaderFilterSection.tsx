'use client'

import ButtonPrimary from '@/shared/Button/ButtonPrimary'
import Nav from '@/shared/Nav/Nav'
import NavItem from '@/shared/Nav/NavItem'
import { Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { FilterIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import clsx from 'clsx'
import { FC, useState } from 'react'
import { Divider } from './Divider'
import { FilterSortByMenuListBox } from './FilterSortByMenu'
import { FiltersMenuTabs } from './FiltersMenu'
import Heading from './Heading/Heading'

export interface HeaderFilterSectionProps {
  className?: string
  heading?: string
  categories?: string[]
  onCategoryChange?: (category: string) => void
  activeCategory?: string
}

const HeaderFilterSection: FC<HeaderFilterSectionProps> = ({ 
  className = 'mb-12', 
  heading,
  categories = ['Office Products', 'Beauty and personal Care', 'Sports', 'Toys'],
  onCategoryChange,
  activeCategory
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      <div className="flex flex-col items-center text-center mb-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-[1px] bg-orange-500"></div>
          <span className="text-orange-500 font-bold text-xs uppercase tracking-widest">OUR PRODUCTS</span>
          <div className="w-8 h-[1px] bg-orange-500"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 dark:text-white">Shop By Category</h2>
      </div>

      <div className="flex flex-col justify-center w-full">
        <Nav className="justify-center gap-x-8 flex-wrap gap-y-4">
          {categories.map((item, index) => (
            <NavItem 
              key={index} 
              isActive={activeCategory === item} 
              onClick={() => onCategoryChange && onCategoryChange(item)}
              className={clsx(
                "pb-2 text-lg font-semibold transition-all whitespace-nowrap",
                activeCategory === item ? "text-indigo-950 border-b-2 border-indigo-950" : "text-orange-500"
              )}
            >
              {item}
            </NavItem>
          ))}
        </Nav>
      </div>

      <Transition
        as={'div'}
        show={isOpen}
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Divider className="my-8" />
        <div className="flex flex-wrap items-center gap-2.5">
          <FiltersMenuTabs />
          <FilterSortByMenuListBox className="ml-auto" />
        </div>
      </Transition>
    </div>
  )
}

export default HeaderFilterSection
