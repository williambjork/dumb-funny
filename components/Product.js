import { Router, useRouter } from "next/router";
import React from "react";

export default function Product({ title, price, url }) {

  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault;
    router.push(`/products/${url}`)
    console.log("click")
  }
  return (
    <div onClick={handleClick}>
      <div className="border p-3 rounded hover:shadow hover:bg-slate-100">
        <h2 className="text-xl font-bold">{title}</h2>
        <h3>Price: ${price}</h3>

        <button className="border-2 rounded m-1 p-1 text-sm  bg-slate-200 hover:bg-slate-600 hover:text-white">
          Add to cart
        </button>
      </div>
    </div>
  );
}
