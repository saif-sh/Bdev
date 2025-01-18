import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { lghome } from "../assets";
import MobileNavigation from './MobileNavigation';

const Navbar = () => {
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
    <nav className="relative bg-[#E5E6E2] font-nunito font-semibold text-gray-800 text-[16px]">
      <div className="mx-2 px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-24">
          {/* Flex container for navigation links and contact info */}
          <div className="flex items-center justify-between w-full mt-6">
            {/* Navigation Items */}
            <div className="flex items-start space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:bg-[#333333] hover:text-[#D6BF90] px-6 py-3 rounded-md font-semibold"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Invisible Center Div */}
            <div className="size-[8rem] invisible shrink-0" />

            {/* Location and Contact Info */}
            <div className="flex items-center space-x-10 mr-6">
              <span className="flex items-center text-gray-700">
                <MapPin className="h-5 w-5 mr-2" />
                Bandra (W)
              </span>
              <span className="flex items-center text-gray-700">
                <Clock className="h-5 w-5 mr-2" />
                11 AM - 10 PM
              </span>
              <span className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+919820551300" className="hover:underline">
                  +91 98205 51300
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 sm:left-[780px] md:left-[51%] transform -translate-x-1/2 -bottom-[4.5rem] z-10">
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
      bgColor="bg-[#E5E6E2]"
      textColor="text-gray-800"
    />
  );
};

export default Navbar;