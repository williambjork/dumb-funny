import { Router, useRouter } from 'next/navigation'
import React from 'react'

export default function NavButton({title, url}) {

    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault;
        router.push(url);
    }

  return (
    <div className="text-sm border-emerald-500 px-3 py-1 font-bold rounded-lg bg-emerald-400 border">
        <button onClick={handleClick}>{title}</button>
    </div>
  )
}

