import { useRouter } from 'next/navigation';
import React from 'react'

export default function LoginButton({url}) {

  const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault;
        router.push(url);
    } 
  return (
    <div className=''>
    <button onClick={handleClick} 
    className="hover:bg-black hover:text-white hover:border-black mr-3
               border-gray-300 rounded-full px-3 py-1 text-sm font-bold  border">
      
      
        LOGIN
      

      </button>

      </div>
  )
}

