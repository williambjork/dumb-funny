import { useRouter } from 'next/router';
import React from 'react'

function MobileMyAccountButton({url}) {
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault;
        router.push(url);
    } 
  return (
    <div className='border-t my-2 pt-2 border-black'>
       
    <button onClick={handleClick} 
    className="font-syne  text-black px-3  py-1 text-5xl font-bold ">
      MYSELF
      </button>

      </div>
  )
}

export default MobileMyAccountButton