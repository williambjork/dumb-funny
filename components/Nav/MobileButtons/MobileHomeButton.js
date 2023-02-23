import { useRouter } from 'next/router';
import React from 'react'

function MobileHomeButton({url}) {
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault;
        router.push(url);
    } 
  return (
    <div className=''>
    <button onClick={handleClick} 
            className="font-syne border-black px-3 py-1  text-5xl font-bold border text-white bg-black">
        HOME
      </button>

      </div> )
}

export default MobileHomeButton