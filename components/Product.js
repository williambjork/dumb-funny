import React from 'react'

export default function Product({title, price}) {
  return (
    <div className='border p-3 rounded hover:shadow hover:bg-slate-100'>
    
    <h2 className='text-xl font-bold'>{title}</h2>
    <h3>Price: ${price}</h3>
    <button className='border-2 rounded m-1 p-1 text-sm  bg-slate-200 hover:bg-slate-600 hover:text-white'>Add to cart</button>
    </div>
  )
}

