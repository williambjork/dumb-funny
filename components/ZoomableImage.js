import React, { Suspense, useState } from "react";
import Image from "next/image";
import Loader from "./Loader";

function ZoomableImage({ src, width, height }) {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const handleMouseMove = (event) => {
    if (isHovering) {
      const imageRect = event.target.getBoundingClientRect();
      const x =
        (event.clientX - imageRect.left - imageRect.width / 2) /
        imageRect.width;
      const y =
        (event.clientY - imageRect.top - imageRect.height / 2) /
        imageRect.height;
      setPosition({ x, y });
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (intervalId) clearInterval(intervalId);
    const newIntervalId = setInterval(() => {
      setZoom((prevZoom) => prevZoom + 0.05);
    }, 16);
    setIntervalId(newIntervalId);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (intervalId) clearInterval(intervalId);
    setZoom(1);
    setIntervalId(null);
    setPosition({ x: 0, y: 0 });
  };

  const transform = `translate(${position.x * -85}%, ${
    position.y * -85
  }%) scale(${isHovering ? 2 : 1})`;

  return (
    <>
      <div className="overflow-hidden p-12 cursor-crosshair">
        <Suspense fallback={<Loader/>}>
        <Image
          alt="Main image"
          src={src}
          width={width}
          height={height}
          style={{ transform }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        </Suspense>
      </div>
    </>
  );
}

export default ZoomableImage;
