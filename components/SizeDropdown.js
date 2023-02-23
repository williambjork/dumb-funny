import React from 'react'

function SizeDropdown({
    product,
    size,
    selectedSize,
    selectedIndex,
    handleClick,
  }) {
  return (
    <select
    className="mt-8 font-syne cursor-pointer"
    
    onChange={handleClick}>
     
      <option value={size} index={1} outOfStock={product.sizes[0]?.stock.inventory === 0 ? true : false}>
        {outOfStock ? <p>XS</p> : <p>nope</p>}
        
      </option>
      <option value={size}index={2}>
        S
      </option>
      <option value={size} index={3}>
        M
      </option>
      <option value={size}index={4}>
        L
      </option>
      <option value={size} index={5}>
        XL
      </option>
      <option value={size} index={6}>
        XXL
      </option>
   
  </select>
  )
}

export default SizeDropdown