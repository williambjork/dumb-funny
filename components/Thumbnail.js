import Image from 'next/image'
import React from 'react'

function Thumbnail({image}) {
  return (
    <div className="">
        <Image  src={image} width={100} height={100}  />
      </div>
  )
}

export default Thumbnail