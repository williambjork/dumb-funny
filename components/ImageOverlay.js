import Image from "next/image";
import React from "react";

export default function ImageOverlay({ src }) {
  return (
    
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image src={src} width={1000} height={1800} />
        <div></div>
      </div>
    
  );
}
