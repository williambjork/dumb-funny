import React from 'react'
import { RiCopyleftLine } from "react-icons/ri";

function Footer() {
  return (
    <div className='flex font-spacemono -rotate-90 text-xs absolute bottom-32 -right-7 -mr-12
                    hover:skew-y-3 hover:cursor-default'>
                      <div className='mr-1 mt-xs'>
                      <RiCopyleftLine />
                      </div>
                      William Björk 2023 & Beyond
                      </div>
  )
}

export default Footer