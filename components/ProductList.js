import React, { useContext } from "react";
import { DumbFunnyContext } from "../context/DumbFunnyContext";
import Product from "./Product"


export default function ProductList() {

  const { products } = useContext(DumbFunnyContext);

  console.log( products);

  return (
    <div className="mt-12 border border-x-slate-200 shadow-sm hover:shadow-lg">
      <h2 className="text-2xl font-bold mt-3">Products</h2>
      <div>
      {products.map(product => (
          <div className=" m-3">
          <Product key={product.data.id} title={product.data.title} price={product.data.price} />
          </div>
        ))}
      </div>
    </div>
  );
}


