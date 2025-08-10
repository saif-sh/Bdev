import React, { useState, useEffect } from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import { lghome } from "../assets";
import MobileNavigation from './MobileNavigation';

const Navdark = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "TREATMENTS", href: "/treatments" },
    { name: "CONTACT US", href: "/contacts" },
  ];

  const DesktopNav = () => (
    <nav className="relative bg-[#333333] font-nunito font-semibold text-[#D6BF90]">
      <div className="mx-2 px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center justify-between w-full mt-6">
            {/* Navigation Links - Left */}
            <div className="flex items-start space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#D6BF90] hover:underline hover:decoration-2 
                           px-6 py-3 rounded-md font-semibold text-[16px]
                           transition-all duration-300 ease-in-out"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Logo Spacer */}
            <div className="size-[8rem] invisible shrink-0" />

            {/* Contact Information - Right */}
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
                <a href="tel:+919981345670" className="hover:underline transition-colors duration-200">
                  +91 9981345670
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Centered Logo */}
      <div className="absolute left-1/2 sm:left-[780px] md:left-[51%] transform -translate-x-1/2 -bottom-[4.5rem] z-10">
        <img
          className="size-[8rem] rounded-full shadow-lg transition-all duration-300 hover:scale-105"
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