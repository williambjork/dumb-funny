import React from 'react'

export default function Product({title, price}) {
  return (
    <div className='border p-3'>
    
    <h2>{title}</h2>
    <h3>Price: ${price}</h3>
    <button className='border-2 rounded m-1 p-1 text-sm hover:bg-slate-300'>Add to cart</button>
    </div>
  )
}

