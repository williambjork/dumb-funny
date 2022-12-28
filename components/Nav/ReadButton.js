import { useRouter } from 'next/router';
import React from 'react'

export default function ReadButton({url}) {
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault;
        router.push(url);
    } 
  return (
    <div className=''>
    <button onClick={handleClick} className="hover:text-pink-500 px-3 py-1 text-sm font-bold">
      READ
      </button>

      </div>
  )
}

