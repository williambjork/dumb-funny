import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  console.log(products);

  return (
    <div
      className=" grid grid-flow-row md:grid-cols-2 gap-4
                      max-w-xl justify-center m-auto"
    >
      {products.map((product) => (
        <div className=" m-3">
          <ProductCard
            key={product.id}
            url={product.slug}
            title={product.title}
            image={product.image.url}
            price={product.price}
            brand={product.brand}
          />
        </div>
      ))}
    </div>
  );
}
