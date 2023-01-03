import { useRouter } from 'next/router';
import React, { useContext } from 'react'
import { DumbFunnyContext } from "../../context/DumbFunnyContext";

const Product = () => {

  const { products } = useContext(DumbFunnyContext);

  const router = useRouter();
  const {productId} = router.query;

  console.log(productId);

  return (
    <div>
      <h1>Product!!!</h1>
    </div>
  )
}

export default Product