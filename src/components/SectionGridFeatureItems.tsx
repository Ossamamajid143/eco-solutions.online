'use client'

import HeaderFilterSection from '@/components/HeaderFilterSection'
import ProductCard from '@/components/ProductCard'
import { TProductItem } from '@/data/data'
import ButtonPrimary from '@/shared/Button/ButtonPrimary'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { FC, useMemo, useState } from 'react'

//
export interface SectionGridFeatureItemsProps {
  data: TProductItem[]
}

const SectionGridFeatureItems: FC<SectionGridFeatureItemsProps> = ({ data }) => {
  const categories = useMemo(() => {
    const allCats = data.map((item) => item.category).filter(Boolean) as string[]
    return Array.from(new Set(allCats)).slice(0, 10) // Show up to 10 categories
  }, [data])

  const [activeCategory, setActiveCategory] = useState(categories[0] || 'Office Products')

  const filteredData = useMemo(() => {
    return data.filter((item) => item.category === activeCategory).slice(0, 12) // Show up to 12 products per category
  }, [data, activeCategory])

  return (
    <div className="nc-SectionGridFeatureItems relative">
      <HeaderFilterSection 
        categories={categories} 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <div className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-4`}>
        {filteredData.map((item) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </div>
      <div className="mt-16 flex items-center justify-center">
        <ButtonPrimary href="/collections/all">
          Show me more
          <ArrowRightIcon className="ms-2 h-5 w-5" />
        </ButtonPrimary>
      </div>
    </div>
  )
}

export default SectionGridFeatureItems
