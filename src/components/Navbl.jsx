import React, { useState, useEffect } from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import { lghome } from "../assets";
import MobileNavigation from './MobileNavigation';

const Navbl = () => {
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
    <nav className="relative bg-transparent font-nunito font-semibold text-black">
      <div className="mx-2 px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center justify-between w-full mt-6">
            {/* Navigation Links - Left */}
            <div className="flex items-start space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-gray-500 
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
              <span className="flex items-center text-black">
                <MapPin className="h-5 w-5 mr-2" />
                Bandra (W)
              </span>
              <span className="flex items-center text-black">
                <Clock className="h-5 w-5 mr-2" />
                11 AM - 10 PM
              </span>
              <span className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+919820551300" className="hover:underline transition-colors duration-200">
                  +91 98205 51300
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

  const MobileNav = () => (
    <div className="lg:hidden">
      <MobileNavigation
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navItems={navItems}
        bgColor="bg-[#DADBD5]"
        textColor="text-gray-800"
      />
    </div>
  );

  return isDesktop ? <DesktopNav /> : <MobileNav />;
};

export default Navbl;