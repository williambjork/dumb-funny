import React from "react";
import ProductList from "../components/ProductList"


export default function store() {

 

  return (
    <div className="">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <ProductList  />
      </main>
    </div>
  );
}


