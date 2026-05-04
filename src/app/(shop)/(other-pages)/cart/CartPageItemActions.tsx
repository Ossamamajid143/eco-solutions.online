'use client'

import { removeFromCart, updateCartQuantity } from '@/app/actions/cart'
import NcInputNumber from '@/components/NcInputNumber'
import Prices from '@/components/Prices'

export function CartPageItemActions({ cartItemId, initialQuantity, price }: { cartItemId: string; initialQuantity: number, price: number }) {
  const handleQuantityChange = async (val: number) => {
    await updateCartQuantity(cartItemId, val)
  }

  const handleRemove = async () => {
    await removeFromCart(cartItemId)
  }

  return (
    <>
      <div className="mt-3 flex w-full justify-between sm:hidden">
        <select
          name="qty"
          id="qty"
          defaultValue={initialQuantity}
          onChange={(e) => handleQuantityChange(Number(e.target.value))}
          className="form-select rounded-md bg-white px-2 py-1 text-xs outline-1 outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-neutral-800"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        <Prices contentClass="py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium h-full" price={price || 0} />
      </div>

      <div className="hidden text-center sm:block">
        <NcInputNumber defaultValue={initialQuantity} onChange={handleQuantityChange} />
      </div>

      <div className="hidden flex-1 justify-end sm:flex">
        <Prices price={price || 0} className="mt-0.5" />
      </div>

      {/* Render the Remove Button directly to avoid re-writing the layout */}
      <div className="absolute right-0 bottom-0 mt-3 flex items-center text-sm font-medium text-primary-600 hover:text-primary-500 sm:relative sm:mt-auto sm:pt-4">
         <button type="button" onClick={handleRemove}>Remove</button>
      </div>
    </>
  )
}
