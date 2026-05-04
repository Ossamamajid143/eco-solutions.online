import AccordionInfo from '@/components/AccordionInfo'
import { Divider } from '@/components/Divider'
import LikeButton from '@/components/LikeButton'
import NcInputNumber from '@/components/NcInputNumber'
import Prices from '@/components/Prices'
import ProductColorOptions from '@/components/ProductForm/ProductColorOptions'
import ProductForm from '@/components/ProductForm/ProductForm'
import ProductSizeOptions from '@/components/ProductForm/ProductSizeOptions'
import SectionPromo2 from '@/components/SectionPromo2'
import SectionSliderProductCard from '@/components/SectionSliderProductCard'
import { getProductDetailByHandle, getProductReviews, getProducts } from '@/data/data'
import { isProductInWishlist } from '@/data/wishlist'
import Breadcrumb from '@/shared/Breadcrumb'
import ButtonPrimary from '@/shared/Button/ButtonPrimary'
import { StarIcon } from '@heroicons/react/24/solid'
import { ShoppingBag03Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Facebook01Icon, NewTwitterIcon, WhatsappIcon, PinterestIcon } from '@hugeicons/core-free-icons'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import GalleryImages from '../GalleryImages'
import Policy from '../Policy'
import ProductReviews from '../ProductReviews'
import ProductStatus from '../ProductStatus'

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }): Promise<Metadata> {
  const { handle } = await params
  const product = await getProductDetailByHandle(handle)
  const title = product?.title || 'product detail'
  const description = product?.description || 'product detail page'
  return {
    title,
    description,
  }
}

export default async function Page({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params
  const product = await getProductDetailByHandle(handle)
  const relatedProducts = (await getProducts()).slice(2, 8)
  const reviews = await getProductReviews(handle)
  const isInWishlist = await isProductInWishlist(handle)

  if (!product.id) {
    return notFound()
  }

  const { title, status, featuredImage, rating, reviewNumber, options, price, selectedOptions, images, breadcrumbs } =
    product
  const sizeSelected = selectedOptions?.find((option) => option.name === 'Size')?.value || ''
  const colorSelected = selectedOptions?.find((option) => option.name === 'Color')?.value || ''

  const renderRightSide = () => {
    return (
      <div className="w-full pt-10 lg:w-1/2 lg:pt-0 lg:pl-10 xl:pl-16">
        <div className="sticky top-8 flex flex-col gap-y-8">
          {/* ---------- 1 HEADING ----------  */}
          <div className="space-y-4">
            <Breadcrumb breadcrumbs={breadcrumbs} currentPage={product.title} />
            <span className="text-sm font-bold text-orange-600 uppercase tracking-widest">{product.category}</span>
            <h1 className="text-3xl font-bold text-indigo-950 sm:text-4xl leading-tight">{title}</h1>
            
            <div className="flex items-center gap-x-4 mt-6">
              <Prices 
                contentClass="text-2xl font-bold flex items-center gap-3" 
                price={price || 0} 
                compareAtPrice={product.compareAtPrice} 
              />
            </div>

            <div className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg">
              {product.description || "High-quality product from our curated selection. Perfect for your home or office."}
            </div>
          </div>

          <ProductForm product={product}>
            <div className="flex flex-col gap-y-8">
              {/* ---------- 3 VARIANTS AND SIZE LIST ----------  */}
              {options?.length > 0 && (
                <div className="flex flex-col gap-y-6">
                  <ProductColorOptions options={options} defaultColor={colorSelected} />
                  <ProductSizeOptions options={options} defaultSize={sizeSelected} />
                </div>
              )}

              {/*  ---------- 4  QTY AND ADD TO CART BUTTON */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center justify-between rounded-lg border border-neutral-200 px-4 py-3 bg-white dark:bg-neutral-900 min-w-[120px]">
                  <NcInputNumber name="quantity" defaultValue={1} />
                </div>

                <ButtonPrimary className="flex-1 bg-indigo-950 hover:bg-indigo-900 border-none py-4 text-lg font-bold" type="submit">
                  <span>ADD TO CART</span>
                </ButtonPrimary>
              </div>
            </div>
          </ProductForm>

          {/* SOCIAL SHARE AND META */}
          <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 space-y-6">
            <div className="flex flex-col gap-2 text-sm">
              <p><span className="font-bold text-indigo-950 dark:text-white uppercase mr-2">Category:</span> {product.category}</p>
              <p><span className="font-bold text-indigo-950 dark:text-white uppercase mr-2">Handle:</span> {product.handle}</p>
            </div>


            <div className="flex items-center gap-4">
              <span className="font-bold text-indigo-950 dark:text-white uppercase text-sm">Share:</span>
              <div className="flex gap-3">
                {[
                  { icon: Facebook01Icon, name: 'Facebook' },
                  { icon: NewTwitterIcon, name: 'Twitter' },
                  { icon: WhatsappIcon, name: 'Whatsapp' },
                  { icon: PinterestIcon, name: 'Pinterest' },
                ].map((social) => (
                  <button key={social.name} className="size-9 flex items-center justify-center rounded-full border border-neutral-200 hover:bg-indigo-950 hover:text-white transition-colors group">
                     <HugeiconsIcon icon={social.icon} size={18} color="currentColor" strokeWidth={1.5} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <AccordionInfo 
            data={[
              { name: 'Description', content: product.description || "High-quality product from our curated selection." },
              { name: 'Additional Information', content: "Weight: 1.5kg, Dimensions: 20x20x20cm, Material: Premium Quality." },
              { name: 'Delivery and Returns', content: "Free shipping on orders over $100. 30-day return policy." }
            ]}
          />
        </div>
      </div>
    )
  }

  const renderLeftSide = () => {
    const galleryImages = [featuredImage, ...(images || [])].map((item) => item?.src).filter(Boolean) as string[]

    return (
      <div className="w-full lg:w-1/2">
        <div className="relative group overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900">
          <GalleryImages images={galleryImages} gridType="grid1" />
          <LikeButton liked={isInWishlist} productHandle={product.handle} className="absolute top-5 right-5 z-10" />
          <ProductStatus status={status} />
        </div>
      </div>
    )
  }

  return (
    <main className="container mt-8 lg:mt-12 mb-20 lg:mb-32">
      <div className="lg:flex gap-10">
        {renderLeftSide()}
        {renderRightSide()}
      </div>

      <div className="mt-20">
        <Divider className="mb-20" />
        <SectionSliderProductCard
          data={relatedProducts}
          heading="Related Products"
          subHeading=""
          headingFontClassName="text-3xl font-bold text-indigo-950"
          headingClassName="mb-12 text-center"
        />
      </div>
    </main>
  )
}
