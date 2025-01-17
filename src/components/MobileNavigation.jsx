import React from "react";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { lghome } from "../assets";

const MobileNavigation = ({ 
  isOpen, 
  setIsOpen, 
  navItems, 
  logoSrc = lghome,
  bgColor = "bg-white",
  textColor = "text-gray-700" 
}) => {
  return (
    <nav className={`relative ${bgColor} font-nunito font-medium ${textColor} text-[16px] shadow-sm`}>
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo with link to home */}
          <a href="/" aria-label="Home">
            <img className="h-12 w-12 rounded-full" src={logoSrc} alt="Logo" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-md ${textColor} hover:bg-opacity-10 hover:bg-gray-700 focus:outline-none`}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={`absolute top-full left-0 w-full ${bgColor} shadow-lg z-50`}>
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-4 py-2 ${textColor} hover:bg-opacity-10 hover:bg-gray-700 rounded-md`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="border-t border-gray-100 border-opacity-20 px-4 py-4 space-y-3">
            <div className={`flex items-center ${textColor}`}>
              <MapPin className="h-5 w-5 mr-3" />
              <span>Bandra (W)</span>
            </div>
            <a 
              href="tel:+919981345670" 
              className={`flex items-center ${textColor} hover:bg-opacity-10 hover:bg-gray-700`}
            >
              <Phone className="h-5 w-5 mr-3" />
              <span>+91 98205 51300</span>
            </a>
            <div className={`flex items-center ${textColor}`}>
              <Clock className="h-5 w-5 mr-3" />
              <span>11 AM - 10 PM</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MobileNavigation;
