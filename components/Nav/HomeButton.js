import { useRouter } from 'next/navigation';
import React from 'react'


export default function HomeButton({url}) {
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault;
        router.push(url);
    } 
  return (
    <div className=''>
    <button onClick={handleClick} 
            className="font-syne border-black px-3 py-1 text-sm font-bold border hover:text-white hover:bg-black">
        HOME
      </button>

      </div>
  )
}
