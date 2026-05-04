'use client'

import { removeFromCart, updateCartQuantity } from '@/app/actions/cart'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export function CartItemClientActions({ cartItemId, initialQuantity }: { cartItemId: string; initialQuantity: number }) {
  return (
    <div className="flex flex-1 items-end justify-between text-sm">
      <div className="inline-grid w-full max-w-16 grid-cols-1">
        <select
          name={`quantity-${cartItemId}`}
          aria-label={`Quantity`}
          className="col-start-1 row-start-1 appearance-none rounded-md py-0.5 ps-3 pe-8 text-xs/6 outline-1 -outline-offset-1 outline-neutral-900/10 focus:outline-1 dark:outline-white/15"
          defaultValue={initialQuantity}
          onChange={(e) => updateCartQuantity(cartItemId, Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 me-2 size-4 self-center justify-self-end text-neutral-500 dark:text-neutral-400"
        />
      </div>

      <div className="flex">
        <button
          type="button"
          onClick={() => removeFromCart(cartItemId)}
          className="font-medium text-primary-600 dark:text-primary-500 hover:text-primary-500"
        >
          Remove
        </button>
      </div>
    </div>
  )
}
