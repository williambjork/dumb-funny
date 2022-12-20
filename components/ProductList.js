import React from "react";
import Product from "./Product";

export default function ProductList({title, price}) {

    
  
    const products = [
    { title: "Hoodie", price: 80 },
    { title: "Hat", price: 35 },
    { title: "Pants", price: 60 },
  ];

  return (
    <div>
      {products.map((product) => (
        <Product title={title} price={price} />
      ))}
    </div>
  );
}


