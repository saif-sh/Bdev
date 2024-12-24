import React from "react";
import { backdropimage, pinkleaf, greenleaf } from "../assets";

const OurMission = () => {
  return (
    <div className="relative flex items-center justify-center min-h-[500px] sm:h-auto md:h-[686px] my-20 sm:my-40 mb-40 sm:mb-80">
      {/* Backdrop Image */}
      <div className="absolute inset-0 flex justify-center px-2 sm:px-4 md:px-[35px]">
        <img
          src={backdropimage}
          alt="Backdrop"
          className="w-full object-cover max-w-[1369px]"
        />
      </div>

      {/* Mission Section */}
      <div
        className="relative bg-[#DADBD5] rounded-t-[100px] sm:rounded-t-full rounded-b-[200px] sm:rounded-b-[500px] w-[95%] sm:w-[90%] md:w-[85%] max-w-[1200px] h-auto p-4 sm:p-8 md:p-[80px] overflow-hidden mt-20 sm:mt-40"
      >
        {/* Pink Leaf SVG */}
        <img
          src={pinkleaf}
          alt="Pink Leaf"
          className="absolute w-[100px] h-[110px] sm:w-[150px] sm:h-[160px] md:w-[330px] md:h-[350px] top-[30px] sm:top-[50px] md:top-[150px] left-[20px] sm:left-[50px] md:left-[90px] z-0"
        />

        {/* Green Leaf SVG */}
        <img
          src={greenleaf}
          alt="Green Leaf"
          className="absolute opacity-70 w-[200px] h-[400px] sm:w-[300px] sm:h-[600px] md:w-[800px] md:h-[1600px] top-[-150px] sm:top-[-200px] md:top-[-480px] right-[10px] sm:right-[20px] md:right-[-50px] z-0"
        />

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1
            className="text-[32px] sm:text-[40px] md:text-[80px] font-[Mongolian Baiti] text-black"
          >
            OUR <br/> MISSION
          </h1>
          <p
            className="leading-relaxed text-[14px] sm:text-[16px] md:text-[30px] px-4 sm:px-20 py-10 sm:py-20 font-[Mongolian Baiti] font-[450] text-[#4a4a4a] mt-[10px] sm:mt-[20px] md:mt-[40px] md:leading-[180%] md:tracking-[5%]"
          >
            Lorem ipsum dolor sit amet consectetur. Fringilla gravida tempus donec
            neque gravida a iaculis sed. Magnis viverra magna ridiculus. Lorem
            ipsum dolor sit amet consectetur. Fringilla gravida tempus donec
            neque gravida a iaculis sed. Magnis viverra magna ridiculus. Lorem
            ipsum dolor sit amet consectetur.sit amet consectetursit amet consectetur
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
