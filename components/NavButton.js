import { Router, useRouter } from 'next/router'
import React from 'react'

function NavButton({title, url}) {

    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault;
        router.push(url);
    }

  return (
    <div>
        <button onClick={handleClick}>{title}</button>
    </div>
  )
}

export default NavButton