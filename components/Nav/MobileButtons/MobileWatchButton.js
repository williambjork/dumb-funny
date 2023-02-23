import { useRouter } from 'next/router';
import React from 'react'

function MobileWatchButton() {
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault;
        router.push("https://www.youtube.com/watch?v=skobLzzlMn4&feature=youtu.be");
    } 
  return (
    <div className=''>
    <button onClick={handleClick} className="font-syne text-amber-500 px-3 py-1 text-5xl font-bold">
      WATCH
      </button>

      </div>
  )
}

export default MobileWatchButton