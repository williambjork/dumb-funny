import React from "react";
import Product from "./Product";

export default function ProductList() {

    
  
    const products = [
    { title: "Hoodie", price: 80 },
    { title: "Hat", price: 35 },
    { title: "Pants", price: 60 },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold">Products</h2>
      <div>
        {products.map((product) => (
          <div className=" m-3">
          <Product title={product.title} price={product.price} />
          </div>
        ))}
      </div>
    </div>
  );
}


