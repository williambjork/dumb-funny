import React from 'react'

export default function Product({title, price}) {
  return (
    <div>
    <div>Product</div>
    <h2>{title}</h2>
    <h3>{price}</h3>
    </div>
  )
}

