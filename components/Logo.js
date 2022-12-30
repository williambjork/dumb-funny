import Image from 'next/image'
import React from 'react'
import logo from "../src/images/dumbfunny-logo.png"

function Logo() {
  return (
    <div>
        <Image src={logo} height={33} />
    </div>
  )
}

export default Logo