import { useRouter } from 'next/navigation';
import React from 'react'

export default function ListenButton({url}) {
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault;
        router.push(url);
    } 
  return (
    <div className=''>
    <button onClick={handleClick} className="hover:text-red-500 px-3 py-1 text-sm font-bold">
      LISTEN
      </button>

      </div>
  )
}

