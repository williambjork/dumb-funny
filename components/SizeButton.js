import React from 'react'

export default function SizeButton({size, handleSizeSelection}) {
  return (
    <button onClick={handleSizeSelection} className="border border-black rounded-full p-1 px-3
                            hover:border-emerald-500 hover:text-emerald-500">{size}</button>
  )
}

