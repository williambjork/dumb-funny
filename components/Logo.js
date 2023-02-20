import Image from 'next/image'
import React from 'react'
import logo from "../src/images/dumbfunny-logo.png"

function Logo() {
  return (
    <div>
        <Image src={logo} height={33} alt="Dumb Funny Logo"/>
    </div>
  )
}

export default Logo