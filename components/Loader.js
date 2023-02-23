import React from 'react'
import { BsGlobe } from "react-icons/bs"

function Loader() {
  return (
    <div><BsGlobe className="animate-spin" size={50} /></div>
  )
}

export default Loader