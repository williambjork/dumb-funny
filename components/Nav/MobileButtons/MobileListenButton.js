import { useRouter } from 'next/router';
import React from 'react'

function MobileListenButton({url}) {
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault;
        router.push(url);
    } 
  return (
    <div className=''>
    <button onClick={handleClick} className="text-red-500 px-3 py-1 text-5xl font-bold font-syne">
      LISTEN
      </button>

      </div>
  )
}

export default MobileListenButton