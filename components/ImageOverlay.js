import Image from "next/image";
import React from "react";
import { GrFormClose } from "react-icons/gr"

export default function ImageOverlay({ src }) {
  return (
    <div
      className="absolute inset-0 flex justify-center items-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
    >
      <div className="relative">
        <Image src={src} width={800} height={1000} objectFit="contain" />

        <GrFormClose className="absolute top-4 right-4 cursor-pointer" size={25} />
      </div>
    </div>
  );
}
