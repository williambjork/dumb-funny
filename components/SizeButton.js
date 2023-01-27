import React, { useState } from "react";

export default function SizeButton({ size, handleSizeSelection, outOfStock }) {

  const [selected, setSelected] = useState(false);

  function handleClick() {
      selected == true ? setSelected(false) : setSelected(true)
    
  }

    console.log(selected)
  //Checks database if inventory is 0, unselected or selected and renders accordingly
  if (outOfStock == true) {
    return (
      <button
        onClick={handleSizeSelection}
        className="border text-gray-300 line-through border-gray-300 rounded-full p-1 px-3
                             cursor-not-allowed "
      >
        {size}
      </button>
    );
  } else {
    if (selected == true) {
      return (
        <button
          onClick={handleClick}
          className="border border-emerald-500 bg-emerald-500 text-white  rounded-full p-1 px-3
    hover:border-emerald-500 h"
        >
          {size}
        </button>
      );
    }
    else {
    return (
      <button
        onClick={handleClick}
        className="border border-black rounded-full p-1 px-3
                            hover:border-emerald-500 hover:text-emerald-500"
      >
        {size}
      </button>
    )};
  }
}
