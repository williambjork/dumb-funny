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
    <div className="max-w-sm justify-center m-auto" onClick={handleClick}>
      <div className="m-auto justify-items-center border p-3 rounded hover:shadow hover:bg-slate-100">
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

        <button className="border-2 rounded m-1 p-1 text-sm  bg-slate-200 hover:bg-slate-600 hover:text-white">
          Add to cart
        </button>
      </div>
    </div>
  );
}
