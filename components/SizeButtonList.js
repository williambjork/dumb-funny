import React from "react";
import { useState } from "react";
import SizeButton from "./SizeButton";

function SizeButtonList({
  product,
  size,
  selectedSize,
  selectedIndex,
  handleClick,
}) {
  return (
    <ul
      className="flex gap-3 mt-8 font-syne cursor-pointer
                            "
    >
      <li>
        <SizeButton
          outOfStock={product.sizes[0]?.stock.inventory === 0 ? true : false}
          size="XS"
          index={1}
          isSelected={selectedIndex === 1}
          handleClick={handleClick}
        />
      </li>
      <li>
        <SizeButton
          outOfStock={product.sizes[1]?.stock.inventory === 0 ? true : false}
          size="S"
          index={2}
          isSelected={selectedIndex === 2}
          handleClick={handleClick}
        />
      </li>
      <li>
        <SizeButton
          outOfStock={product.sizes[2]?.stock.inventory === 0 ? true : false}
          size="M"
          index={3}
          isSelected={selectedIndex === 3}
          handleClick={handleClick}
        />
      </li>
      <li>
        <SizeButton
          outOfStock={product.sizes[3]?.stock.inventory === 0 ? true : false}
          size="L"
          index={4}
          isSelected={selectedIndex === 4}
          handleClick={handleClick}
        />
      </li>
      <li>
        <SizeButton
          outOfStock={product.sizes[4]?.stock.inventory === 0 ? true : false}
          size="XL"
          index={5}
          isSelected={selectedIndex === 5}
          handleClick={handleClick}
        />
      </li>
      <li>
        <SizeButton
          outOfStock={product.sizes[5]?.stock.inventory === 0 ? true : false}
          size="XXL"
          index={6}
          isSelected={selectedIndex === 6}
          handleClick={handleClick}
        />
      </li>
    </ul>
  );
}

export default SizeButtonList;
