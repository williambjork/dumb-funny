import React from 'react'
import { useSnipcart } from "use-snipcart";
import { BsCart2 } from "react-icons/bs";


function Cart() {
    const { cart = {} } = useSnipcart();
  return (
    <div>
        <button className="snipcart-checkout flex font-spacemono">
          
          <div className="border border-black flex rounded-full pt-1 px-2 font-syne
                          hover:bg-emerald-500 hover:border-emerald-500 hover:text-white">
            <div className="">
              <BsCart2 />
            </div>
            <p className="ml-1 -mt-1">
              {cart.items?.count}
              </p>
          </div>

          <div className="ml-6 hover:underline">
            <p>${cart.subtotal?.toFixed(2)}</p>
          </div>

        </button>
    </div>
  )
}

export default Cart