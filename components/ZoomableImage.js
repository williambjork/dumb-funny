import React, { useState } from 'react'
import Image from "next/image"

function ZoomableImage({ src, width, height }) {
    const [zoom, setZoom] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
  
    const handleMouseMove = (event) => {
      if (isHovering) {
        const imageRect = event.target.getBoundingClientRect();
        const x = (event.clientX - imageRect.left - imageRect.width / 2) / imageRect.width;
        const y = (event.clientY - imageRect.top - imageRect.height / 2) / imageRect.height;
        setPosition({ x, y });
      }
    };
  
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
                                    setIsHovering(false);
                                    setPosition({x: 0, y: 0})
                                    }
  
    const transform = `translate(${position.x * 50}%, ${position.y * 50}%) scale(${isHovering ? 2 : 1})`;
  
    return (
        <div className='overflow-hidden'>
      <img
        
        src={src}
        width={width}
        height={height}
        style={{ transform }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      </div>
    );
  }

export default ZoomableImage