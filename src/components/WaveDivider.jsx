import React from 'react';

const WaveDivider = () => {
  return (
    <div className="absolute left-0 right-0 -bottom-24 h-32 overflow-hidden z-10">
      <svg 
        viewBox="0 0 1200 80" 
        preserveAspectRatio="none" 
        className="absolute w-full h-full rotate-180"
      >
        <path 
          d="M0,30 
             C150,45 350,15 600,30 
             C850,45 1050,15 1200,30 
             L1200,80 L0,80 Z" 
          className="fill-[#E5E6E2]"
          style={{ opacity: 1}}
        />
      </svg>
    </div>
  );
};

export default WaveDivider; 