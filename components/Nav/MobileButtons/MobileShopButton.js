import { useRouter } from 'next/router';
import React from 'react'

function MobileShopButton({url}) {

    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault;
        router.push(url);
    } 

  return (
    <div className=''>
        <button onClick={handleClick}  
                className="font-syne  text-emerald-500 mt-1 px-3 py-1 text-5xl font-bold">
        SHOP
        </button>
    </div>
  )
}

export default MobileShopButton