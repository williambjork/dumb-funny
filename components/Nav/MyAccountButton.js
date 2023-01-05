import { useRouter } from 'next/navigation';
import React from 'react'

export default function MyAccountButton({url}) {
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault;
        router.push(url);
    } 
  return (
    <div className=''>
    <button onClick={handleClick} 
    className="font-syne hover:bg-cyan-500 hover:border-cyan-500 hover:text-white hover:rounded-none
            border-gray-300 rounded-sm px-3 ml-3 py-1 text-sm font-bold  border">
      MYSELF
      </button>

      </div>
  )
}

 