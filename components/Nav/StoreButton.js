import { useRouter } from 'next/navigation';
import React from 'react'

export default function StoreButton({url}) {
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault;
        router.push(url);
    } 
  return (
    <div className=''>
    <button onClick={handleClick} className="font-syne hover:text-emerald-500 px-3 py-1 text-sm font-bold">
      SHOP
      </button>

      </div>
  )
}

