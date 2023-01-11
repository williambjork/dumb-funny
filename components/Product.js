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
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4
                      max-w-sm justify-center m-auto" 
                      onClick={handleClick}
                      >
      <div className="relative block overflow-hidden m-auto justify-items-center border-dashed border-2 px-12 border-black p-3  hover:shadow hover:bg-slate-100">
        <h2>{id}</h2>
        <h2 className="text-xl font-bold">{title}</h2>
        <div
          className="col-start-1 justify-center m-auto
                      "
        >
          <Image src={image} height={200} width={200} />
        </div>
        <h3>Price: ${price}</h3>
        <h4>Brand: {brand}</h4>

        <button className="snipcart-add-item border-2 rounded m-1 p-1 text-sm  bg-slate-200 hover:bg-slate-600 hover:text-white">
          Add to cart
        </button>
      </div>
    </div>
  );
}
