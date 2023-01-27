import React from 'react'

export default function SizeButton({size, handleSizeSelection, isSelected}) {
  
  if(isSelected) {
    return (<button onClick={handleSizeSelection} className="border border-emerald-500 bg-emerald-500 text-white  rounded-full p-1 px-3
    hover:border-emerald-500 h">{size}</button>)
  }
  return (
    
    <button onClick={handleSizeSelection} className="border border-black rounded-full p-1 px-3
                            hover:border-emerald-500 hover:text-emerald-500">{size}</button>
  )
}

