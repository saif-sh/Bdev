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
    <nav className="relative font-nunito font-semibold text-black text-[16px]">
      <div className="mx-2 mt-0 px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-24">
          {/* Navigation Items */}
          <div className="flex items-start space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-gray-500 px-6 py-3 rounded-md"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Location and Contact Info */}
          <div className="flex items-center space-x-10">
            <span className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" /> Bandra (W)
            </span>
            <span className="flex items-center">
              <Clock className="h-5 w-5 mr-2" /> All Days 10 - 22
            </span>
            <span className="flex items-center">
              <Phone className="h-5 w-5 mr-2" /> +91 9981345670
            </span>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-[4.5rem] z-10">
        <img
          className="size-[8rem] rounded-full shadow-lg"
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
      bgColor="bg-[#DADBD5]"
      textColor="text-gray-800"
    />
  );
};

export default Navbl;