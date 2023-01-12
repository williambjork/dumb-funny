import Image from "next/image";
import { Router, useRouter } from "next/router";
import React from "react";

export default function ProductCard({ title, price, url, brand, id, image }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault;
    router.push(`/products/${url}`);
    console.log("click");
  };
  return (
    <div
      className="w-12/12 border-dashed hover:border-solid border-2 px-12 border-black p-3 cursor-pointer hover:shadow "
      onClick={handleClick}
    >
      <div className="object-">
        <Image  src={image} height={300} width={300} />
      </div>

      <h3 className="font-spacemono font-bold">{title}</h3>
      <h4 className="text-sm underline">{brand}</h4>
      <h3 className="font-spacemono mt-2"> ${price}</h3>

      <button className="snipcart-add-item border cursor-cell border-black m-1 p-1 text-sm mt-1 font-spacemono hover:bg-black hover:text-white">
        Add to cart
      </button>
    </div>
  );
}