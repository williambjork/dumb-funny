import { useRouter } from 'next/navigation';
import React from 'react'

export default function ReadButton({url}) {
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault;
        router.push("https://soundcloud.com/lghthd");
    } 
  return (
    <div className=''>
    <button onClick={handleClick} className="font-syne font-bold hover:text-pink-500 px-3 py-1 text-sm ">
      LISTEN
      </button>

      </div>
  )
}

