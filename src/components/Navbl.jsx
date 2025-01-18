import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { lghome } from "../assets";
import MobileNavigation from './MobileNavigation';

const Navbl = () => {
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
    <nav className="relative font-nunito font-semibold text-black text-[14px] sm:text-[15px] md:text-[16px] mb-2">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-3 items-center h-24">
          {/* All Navigation Links on Left */}
          <div className="flex justify-start items-center gap-2 xs:gap-3 sm:gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-gray-500 px-2 xs:px-3 sm:px-4 py-2 rounded-md transition-colors duration-200 whitespace-nowrap z-20"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex justify-center items-center">
            <div className="relative -mb-16 z-10">
              <img
                className="w-[5rem] h-[5rem] xs:w-[6rem] xs:h-[6rem] sm:w-[7rem] sm:h-[7rem] md:w-[8rem] md:h-[8rem] rounded-full shadow-lg transition-all duration-300"
                src={lghome}
                alt="Bella Vida"
              />
            </div>
          </div>

          {/* Contact Info on Right */}
          <div className="flex justify-end items-center gap-3 xs:gap-4 sm:gap-6">
            <span className="flex items-center whitespace-nowrap cursor-pointer z-20">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" /> 
              <span className="hidden xs:inline">Bandra (W)</span>
              <span className="xs:hidden">Bandra</span>
            </span>
            <span className="hidden sm:flex items-center whitespace-nowrap z-20">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" /> 
              <span>11 AM - 10 PM</span>
            </span>
            <span className="flex items-center whitespace-nowrap z-20">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" /> 
              <a href="tel:+919820551300" className="hover:underline transition-colors duration-200">
                +91 98205 51300
              </a>
            </span>
          </div>
        </div>
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
      bgColor="bg-[#DADBD5]"
      textColor="text-gray-800"
    />
  );
};

export default Navbl;