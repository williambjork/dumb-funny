import React from 'react'
import ImageOverlay from './ImageOverlay';

const BlurScreen = ({src}) => {
    return (
      <div className='blur-screen'>
     
         <ImageOverlay src={src} />
         
      </div>
    );
  };

export default BlurScreen