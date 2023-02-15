import Image from "next/image";
import React from "react";
import { GrFormClose } from "react-icons/gr"

export default function ImageOverlay({ src }) {
  return (
    
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image src={src} width={1000} height={1800} />
        <GrFormClose className="absolute right-0 top-4 cursor-pointer" size={25} />
      </div>
    
  );
}
