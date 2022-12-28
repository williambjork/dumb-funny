import { useRouter } from 'next/router';
import React from 'react'

export default function StoreButton({url}) {
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault;
        router.push(url);
    } 
  return (
    <div className=''>
    <button onClick={handleClick} className=" hover:text-emerald-500 px-3 py-1 text-sm font-bold">
      SHOP
      </button>

      </div>
  )
}

