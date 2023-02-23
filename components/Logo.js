import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'
import logo from "../src/images/dumbfunny-logo.png"

function Logo({size}) {

  const router = useRouter();

  return (
    <div>
        <Image className='cursor-pointer' onClick={() => {router.push("/")}} src={logo} height={size} alt="Dumb Funny Logo"/>
    </div>
  )
}

export default Logo