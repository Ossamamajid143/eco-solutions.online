'use client'

import ButtonPrimary from '@/shared/Button/ButtonPrimary'
import NcImage from '@/shared/NcImage/NcImage'
import clsx from 'clsx'
import { FC } from 'react'

// Placeholder for the generated image path
// In a real scenario, this would be imported or passed as a prop
const imagePath = '/images/shopsmart_illustration.png'

export interface SectionShopSmartProps {
  className?: string
}

const SectionShopSmart: FC<SectionShopSmartProps> = ({ className = '' }) => {
  return (
    <div className={clsx('nc-SectionShopSmart relative flex flex-col items-center lg:flex-row', className)}>
      <div className="relative flex-1 lg:max-w-[50%]">
        <NcImage
          src={imagePath}
          width={500}
          height={500}
          containerClassName="relative aspect-square w-full max-w-md mx-auto"
          className="object-contain"
          alt="Shop Smart Illustration"
        />
      </div>

      <div className="mt-12 lg:mt-0 lg:ml-16 flex-1 text-left">
        <div className="w-10 h-[2px] bg-orange-500 mb-6 underline--orange"></div>
        <span className="block text-orange-500 font-bold tracking-widest text-sm uppercase mb-4 font-inter">
          WHAT&apos;S HOT NOW?
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.2] mb-6 font-inter">
          Shop Smart: <br />
          From Cart to Doorstep, Fast
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed mb-10 max-w-lg">
          Suggests 24/7 availability and ongoing discounts or flash sales. Appeals to customers looking for variety and deals in one place.
        </p>
        <ButtonPrimary href="/about" className="bg-orange-500 hover:bg-orange-600 border-none outline-none ring-0">
          More About Us
        </ButtonPrimary>
      </div>
      
      <style jsx>{`
        .underline--orange {
          width: 40px;
          height: 2px;
          background-color: #f97316;
        }
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  )
}

export default SectionShopSmart
