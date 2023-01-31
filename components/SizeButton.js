import React, { useState } from "react";

export default function SizeButton({ size, index, outOfStock, isSelected, handleIndex }) {
  //Checks database if inventory is 0, unselected or selected and renders accordingly
  if (outOfStock == true) {
    return (
      <button
        className="border text-gray-300 line-through border-gray-300 rounded-full p-1 px-3
                             cursor-not-allowed ">
        {size}
      </button>
    );

  } else {
    if (isSelected == true) {
      return (
        <button
          className="border border-emerald-500 bg-emerald-500 text-white  rounded-full p-1 px-3
                     hover:border-emerald-500 h"
          onClick={() => handleIndex(index)}>
          {size}
        </button>
      );
1
    } else {
      return (
        <button
          className="border border-black rounded-full p-1 px-3
                     hover:border-emerald-500 hover:text-emerald-500"
                     onClick={() => handleIndex(index)}>
          {size}
        </button>
      );
    }
  }
}
