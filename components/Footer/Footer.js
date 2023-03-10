import React from 'react'
import { CgSmileUpside } from "react-icons/cg";
import { BsGlobe } from "react-icons/bs";
import Link from 'next/link';


function Footer() {
  return (
    <>
    <div className='flex  font-spacemono -rotate-90 text-xs absolute bottom-28 -right-7 -mr-14
                    hover:skew-y-3 hover:cursor-default'>
                      <div className='mr-2 mt-sm  rotate-90'>
                      
                      <CgSmileUpside />
                      </div>
                      William Björk 2023 & Beyond
                      </div>
                      <div className='absolute bottom-3 ml-3 hover:animate-spin cursor-pointer'>
                        <Link href="https://github.com/williambjork"
                                    aria-label="Check out my Github!">
                          <BsGlobe  size={20} />
                        </Link>
                      </div>
                      </>
  )
}

export default Footer