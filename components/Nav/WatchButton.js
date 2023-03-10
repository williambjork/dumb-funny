import { useRouter } from 'next/navigation';
import React from 'react'

function WatchButton({url}) {
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault;
        router.push("https://www.youtube.com/watch?v=skobLzzlMn4&feature=youtu.be");
    } 
  return (
    <div className=''>
    <button onClick={handleClick} className="font-syne hover:text-amber-500 px-3 py-1 text-sm font-bold">
      WATCH
      </button>

      </div>
  )
}

export default WatchButton