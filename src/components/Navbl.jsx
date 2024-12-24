import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { lghome } from "../assets";

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

  const MobileNav = () => (
    <nav className="relative font-['Nunito'] font-light text-black text-[18px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="block h-8 w-8" aria-hidden="true" /> : <Menu className="block h-8 w-8" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-10 z-10">
        <img className="w-20 h-20 rounded-full border-4 border-white shadow-lg" src={lghome} alt="Logo" />
      </div>

      {isOpen && (
        <div className="flex flex-col space-y-1 items-center w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-gray-500 block px-3 py-2 rounded-md"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="pt-3 pb-3 border-t border-gray-200 w-full">
            <div className="flex justify-around w-full px-5">
              <span>
                <MapPin className="inline-block h-5 w-5 mr-2" /> Bandra (W)
              </span>
              <a href="tel:+9816115151065" className="hover:text-gray-500">
                <Phone className="inline-block h-5 w-5 mr-2" /> +9816115151065
              </a>
              <span>
                <Clock className="inline-block h-5 w-5 mr-2" /> All Days 10 - 22
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );

  return isDesktop ? <DesktopNav /> : <MobileNav />;
};

export default Navbl;