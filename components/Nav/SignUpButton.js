import { useRouter } from 'next/router';
import React from 'react'

export default function SignUpButton({url}) {
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault;
        router.push(url);
    } 
  return (
    <div className=''>
    <button onClick={handleClick} className="hover:bg-teal-500 hover:border-teal-500 
                                            border border-black bg-black text-white rounded-sm px-3 py-1 font-bold text-sm ">
      SIGN UP
      </button>

      </div>
  )
}

