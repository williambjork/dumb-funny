import { useRouter } from 'next/navigation';
import React from 'react'

function WatchButton({url}) {
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault;
        router.push(url);
    } 
  return (
    <div className=''>
    <button onClick={handleClick} className="hover:text-amber-500 px-3 py-1 text-sm font-bold">
      WATCH
      </button>

      </div>
  )
}

export default WatchButton