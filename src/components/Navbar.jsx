import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { lghome } from "../assets";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
      if (window.innerWidth >= 1024) setIsOpen(false);
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
          <div className="flex items-center justify-between w-full mt-6">
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

            <div className="flex items-center space-x-10 mr-6">
              <span className="flex items-center text-gray-700">
                <MapPin className="h-5 w-5 mr-2" />
                Bandra (W)
              </span>
              <span className="flex items-center text-gray-700">
                <Clock className="h-5 w-5 mr-2" />
                All Days 10 - 22
              </span>
              <span className="flex items-center text-gray-700">
                <Phone className="h-5 w-5 mr-2" />
                +91 9981345670
              </span>
            </div>
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
    <nav className="relative bg-[#E5E6E2] font-nunito">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-700 hover:bg-[#D6BF90] hover:text-white transition-colors duration-200"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          <div className="flex items-center space-x-4">
            <a href="tel:+919981345670" className="flex items-center text-gray-700 hover:text-[#D6BF90]">
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 z-10">
          <img 
            className="w-16 h-16 rounded-full shadow-lg border-2 border-white"
            src={lghome}
            alt="Logo"
          />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg z-50"
          >
            <div className="p-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-3 px-4 text-gray-700 hover:bg-[#D6BF90] hover:text-white rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <div className="border-t border-gray-100 mt-4 pt-4 space-y-3">
                <div className="flex items-center text-gray-600 hover:text-[#D6BF90] transition-colors duration-200">
                  <MapPin className="h-5 w-5 mr-3" /> 
                  <span>Bandra (W)</span>
                </div>
                <div className="flex items-center text-gray-600 hover:text-[#D6BF90] transition-colors duration-200">
                  <Clock className="h-5 w-5 mr-3" /> 
                  <span>All Days 10 - 22</span>
                </div>
                <a
                  href="tel:+919981345670"
                  className="flex items-center justify-center bg-[#D6BF90] text-white py-3 rounded-md hover:bg-[#333333] transition-colors duration-200"
                >
                  <Phone className="h-5 w-5 mr-2" /> 
                  <span>+91 9981345670</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );

  return isDesktop ? <DesktopNav /> : <MobileNav />;
};

export default Navbar;
