import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <div>
        <nav className='flex justify-center m-auto gap-12'>
            <Link href="/">Home</Link>
            <Link href="/">Store</Link>
            <Link href="/">About</Link>
            <Link href="/">My Account</Link>
        </nav>
    </div>
  )
}

export default Nav