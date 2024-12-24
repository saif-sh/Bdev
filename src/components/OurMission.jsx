import React from "react";
import { backdropimage, pinkleaf, greenleaf } from "../assets";

const OurMission = () => {
  return (
    <div className="relative w-full bg-[#333333] py-16 md:py-24">
      {/* Backdrop Image with Fade Effect */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] h-[800px] top-1/2 -translate-y-1/2">
        <div className="relative w-full h-full">
          <img
            src={backdropimage}
            alt="Bella Vida Spa Interior"
            className="w-full h-full object-cover opacity-30 rounded-[40px]"
          />
          {/* Fade Overlays */}
          <div className="absolute inset-y-0 left-0 w-[100px] bg-gradient-to-r from-[#333333] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-[100px] bg-gradient-to-l from-[#333333] to-transparent" />
          <div className="absolute inset-x-0 top-0 h-[60px] bg-gradient-to-b from-[#333333] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[60px] bg-gradient-to-t from-[#333333] to-transparent" />
        </div>
      </div>

      {/* Mission Content Container */}
      <div className="relative flex items-center justify-center">
        <div className="relative bg-[#DADBD5]/80 backdrop-blur-sm 
                      rounded-t-[40px] xs:rounded-t-[50px] sm:rounded-t-[80px] 
                      rounded-b-[60px] xs:rounded-b-[70px] sm:rounded-b-[100px] 
                      w-[95%] sm:w-[90%] md:w-[85%] max-w-[1200px] 
                      p-6 sm:p-10 md:p-16 lg:p-20 
                      mx-auto overflow-hidden">
          {/* Decorative Leaves */}
          <img
            src={pinkleaf}
            alt=""
            role="presentation"
            className="absolute w-[50px] xs:w-[70px] sm:w-[120px] md:w-[180px] 
                     h-[60px] xs:h-[80px] sm:h-[130px] md:h-[190px] 
                     top-[15px] xs:top-[20px] sm:top-[30px] 
                     left-[-5px] xs:left-[-10px] sm:left-[10px] 
                     z-0 opacity-40 sm:opacity-50 mix-blend-multiply"
          />
          <img
            src={greenleaf}
            alt=""
            role="presentation"
            className="absolute opacity-30 sm:opacity-40 mix-blend-multiply
                     w-[100px] xs:w-[130px] sm:w-[250px] md:w-[400px] 
                     h-[200px] xs:h-[260px] sm:h-[500px] md:h-[800px] 
                     top-[-60px] xs:top-[-80px] sm:top-[-150px] 
                     right-[-15px] xs:right-[-20px] sm:right-[-30px] z-0"
          />

          {/* Content */}
          <div className="relative z-10 text-center mx-auto">
            <span className="text-[11px] xs:text-[12px] sm:text-[14px] md:text-[16px] 
                          font-SpaceGrotesk uppercase tracking-[0.15em] xs:tracking-[0.2em] 
                          sm:tracking-[0.25em] text-[#4a4a4a]/90 
                          mb-2 xs:mb-3 sm:mb-4 block">
              Discover Our Purpose
            </span>
            <h2 className="text-[26px] xs:text-[30px] sm:text-[40px] md:text-[56px] 
                         font-MongolianBaiti text-[#2a2a2a] 
                         mb-3 xs:mb-4 sm:mb-6 
                         leading-[1.1] tracking-wide">
              OUR MISSION
            </h2>
            <div className="flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 
                         mb-4 xs:mb-5 sm:mb-8">
              <div className="w-6 xs:w-8 sm:w-12 md:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#dfc9a9]" />
              <div className="w-1 xs:w-1.5 sm:w-2 h-1 xs:h-1.5 sm:h-2 rounded-full bg-[#dfc9a9]" />
              <div className="w-6 xs:w-8 sm:w-12 md:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#dfc9a9]" />
            </div>
            
            <div className="space-y-4 xs:space-y-5 sm:space-y-6">
              <p className="text-[13px] xs:text-[14px] sm:text-[16px] md:text-[18px] 
                         px-2 sm:px-6 md:px-10 
                         font-MongolianBaiti text-[#2a2a2a] 
                         leading-[1.6] xs:leading-[1.7] sm:leading-[1.8] 
                         tracking-wide max-w-4xl mx-auto">
                At Bella Vida Family Spa, we cultivate an extraordinary sanctuary of tranquility 
                and luxury. Our mission is to create transformative experiences that nurture the 
                body, uplift the spirit, and strengthen family bonds through the art of wellness.
              </p>
              
              <p className="text-[13px] xs:text-[14px] sm:text-[16px] md:text-[18px] 
                         px-2 sm:px-6 md:px-10 
                         font-MongolianBaiti text-[#2a2a2a] 
                         leading-[1.6] xs:leading-[1.7] sm:leading-[1.8] 
                         tracking-wide max-w-4xl mx-auto">
                In our serene haven, every detail is thoughtfully curated to foster moments of 
                connection and rejuvenation. From our expert therapists to our premium amenities, 
                we maintain an unwavering commitment to excellence in every aspect of your experience.
              </p>
              
              <p className="text-[13px] xs:text-[14px] sm:text-[16px] md:text-[18px] 
                         px-2 sm:px-6 md:px-10 
                         font-MongolianBaiti text-[#2a2a2a]/90 
                         leading-[1.6] xs:leading-[1.7] sm:leading-[1.8] 
                         tracking-wide max-w-4xl mx-auto italic">
                Embark on a journey where timeless healing traditions blend seamlessly with modern 
                luxury, creating an oasis of peace and restoration for your entire family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
