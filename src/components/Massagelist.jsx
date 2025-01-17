import React from "react";
import { cleopatra, splbv } from "../assets";

const Massagelist = () => {
  const massages = [
    {
      id: 1,
      title: "Cleopatra Treatment",
      description: "Experience the ancient Egyptian technique of dissolving tension and stress while rejuvenating your skin. This soothing treatment combines a soft massage with a scrub and milk cream to nourish and hydrate. It improves skin elasticity, leaving your skin silky smooth with a natural glow and enhanced radiance",
      image: cleopatra
    },
    {
      id: 2,
      title: "Bella Vida Signature Massage",
      description: "Indulge in a luxurious massage designed to enhance your inner well-being and elevate your natural glow. This exclusive treatment rejuvenates both body and mind, leaving you with a radiant appearance. A customized body scrub is included to complete the experience, leaving your skin smooth and luminousLorem ipsum dolor sit amet consectetur. Vestibulum sapien lacus mattis vitae. Faucibus leo vestibulum leo vel interdum. Cursus arcu ac praesent amet urna eget quis. Ac massa velit commodo nibh leo congue quisque ultrices.",
      image: splbv
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#CED2C4]">
      {/* Curved background - top */}
      <div className="absolute top-0 left-0 right-0 h-32">
        <svg className="w-full h-full" viewBox="0 0 1440 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,128 L1440,128 L1440,0 C1440,0 1320,64 720,64 C120,64 0,0 0,0 L0,128 Z" fill="#CED2C4" />
        </svg>
      </div>

      {/* Offset content below the SVG */}
      <div className="pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-6xl">
          {massages.map((massage, index) => (
            <div
              key={massage.id}
              className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} 
            mb-16 sm:mb-24 md:mb-32 gap-8 md:gap-16`}
            >
              {/* Text Content */}
              <div className={`flex-1 text-center md:text-left ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <h2 className="text-3xl sm:text-4xl font-playfair mb-4 sm:mb-6 text-gray-800 italic">
                  {massage.title}
                </h2>
                <p className="text-gray-600 leading-relaxed italic">
                  {massage.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1 flex justify-center">
                <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden 
              border-4 border-white shadow-xl flex items-center justify-center">
                  <img
                    src={massage.image}
                    alt={massage.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Curved background - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <svg className="w-full h-full" viewBox="0 0 1440 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L1440,0 L1440,128 C1440,128 1320,64 720,64 C120,64 0,128 0,128 L0,0 Z" fill="#CED2C4" />
        </svg>
      </div>
    </div>

  );
};

export default Massagelist;
