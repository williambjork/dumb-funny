import Image from "next/image";
import { Router, useRouter } from "next/router";
import React from "react";

export default function Product({ title, price, url, brand, id, image }) {

  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault;
    router.push(`/products/${url}`)
    console.log("click")
  }
  return (
    <div className="container mx-auto grid grid-cols-2 gap-4
                      max-w-xl justify-center m-auto" 
                      onClick={handleClick}
                      >
      <div className="relative block overflow-hidden m-auto justify-items-center border-dashed hover:border-solid border-2 px-12 border-black p-3 cursor-pointer hover:shadow ">
      
        
        <div
          className="col-start-1 justify-center m-auto
                      "
        >
          <Image src={image} height={200} width={200} />
        </div>
        <h3 className="font-spacemono font-bold">{title}</h3> 
        <h4 className="text-sm underline">{brand}</h4>
        <h3 className="font-spacemono mt-2"> ${price}</h3>

        <button className="snipcart-add-item border cursor-cell border-black m-1 p-1 text-sm mt-1 font-spacemono hover:bg-black hover:text-white">
          Add to cart
        </button>
      </div>
    </div>
  );
}
