import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { lghome ,BVgl} from "../assets";
import MobileNavigation from './MobileNavigation';

const Navdark = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "TREATMENTS", href: "/treatments" },
    { name: "CONTACT US", href: "/contacts" },
  ];

  const DesktopNav = () => (
    <nav className="relative bg-[#333333] font-nunito font-semibold text-gray-800 text-[16px]">
      <div className="mx-2 px-4 sm:px-6 lg:px-20 ">
        <div className="flex items-center   justify-between h-24">
          {/* Flex container for navigation links and contact info */}
          <div className="flex items-center justify-between w-full mt-6">
            {/* Navigation Items */}
            <div className="flex items-start space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className=" hover:underline hover:decoration-2 text-[#D6BF90] px-6 py-3 rounded-md font-semibold"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Location and Contact Info */}
            <div className="flex items-center space-x-10 mr-6">
              <span className="flex items-center text-[#D6BF90]">
                <MapPin className="h-5 w-5 mr-2" />
                Bandra (W)
              </span>
              <span className="flex items-center text-[#D6BF90]">
                <Clock className="h-5 w-5 mr-2" />
                All Days 10 - 22
              </span>
              <span className="flex items-center text-[#D6BF90]">
                <Phone className="h-5 w-5 mr-2" />
                +91 9981345670
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-[4rem] z-10">
        <img
          className="w-[5rem] h-[5rem] xs:w-[6rem] xs:h-[6rem] sm:w-[7rem] sm:h-[7rem] md:w-[8rem] md:h-[8rem] rounded-full shadow-lg transition-all duration-300"
          src={lghome}
          alt="Bella Vida"
        />
      </div>
    </nav>
  );

  return isDesktop ? (
    <DesktopNav />
  ) : (
    <MobileNavigation 
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      navItems={navItems}
      logoSrc={lghome}
      bgColor="bg-[#343434]"
      textColor="text-[#D6BF90]"
    />
  );
};

export default Navdark;
