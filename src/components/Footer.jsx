import React from "react";
import { footerlogo } from "../assets";

const Footer = () => {
  const locationUrl = "https://www.google.com/maps/dir//Bella+Vida+Family+Spa..."; // URL shortened for brevity

  return (
    <footer className="bg-[#3A4443] text-white font-serif py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        {/* Mobile Logo - Only visible on mobile */}
        <div className="flex justify-center mb-8 sm:hidden">
          <img
            src={footerlogo}
            alt="BV Logo"
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          {/* Left Section */}
          <div className="flex flex-col w-full md:w-auto space-y-8 sm:space-y-6">
            {/* Navigation Links */}
            <div className="grid grid-cols-2 sm:flex sm:space-x-12 text-base">
              <div className="space-y-3">
                <h5 className="font-semibold text-lg mb-4">Navigation</h5>
                <ul className="space-y-2">
                  <li className="hover:underline cursor-pointer">Home</li>
                  <li className="hover:underline cursor-pointer">About</li>
                  <li className="hover:underline cursor-pointer">Services</li>
                  <li className="hover:underline cursor-pointer">Gallery</li>
                </ul>
              </div>
              
              {/* Address */}
              <div className="text-base">
                <h5 className="font-semibold text-lg mb-4">Location</h5>
                <address className="not-italic space-y-1">
                  <p>Bandra - w,</p>
                  <p>Carter road,</p>
                  <p>near Rizvi College</p>
                  <p>of Engineering</p>
                </address>
              </div>
            </div>

            {/* Social Links - Mobile */}
            <div className="sm:hidden">
              <h5 className="font-semibold text-lg mb-4">Follow Us</h5>
              <div className="flex flex-wrap gap-3">
                {['Instagram', 'Facebook', 'Twitter', 'Youtube'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 
                      transition-colors duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Center Section - Hidden on mobile */}
          <div className="hidden sm:flex flex-col items-center">
            <img
              src={footerlogo}
              alt="BV Logo"
              className="w-24 h-24 md:w-28 md:h-28 object-contain mb-4"
            />
            {/* Map Preview */}
            <div className="rounded-full overflow-hidden shadow-lg cursor-pointer w-28 h-28 mt-4
              hover:shadow-xl transition-shadow duration-300">
              <a href={locationUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={`https://maps.googleapis.com/maps/api/staticmap?center=Rizvi+College+of+Engineering,+Bandra+West,+Mumbai&zoom=15&size=150x150&maptype=roadmap&markers=color:red%7C19.0598,72.8294&key=YOUR_API_KEY`}
                  alt="Map Preview"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-auto space-y-4">
            <h4 className="font-bold text-xl">About Us</h4>
            <p className="text-green-400 leading-relaxed text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur.
              <br />
              Fringilla gravida tempus donec neque gravida.
              <br />
              A iaculis sed. Magnis viverra magna ridiculus.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="flex-1 sm:flex-none border border-white px-4 py-2 rounded-full 
                hover:bg-white hover:text-[#3A4443] transition-colors duration-300">
                Facebook
              </button>
              <button className="flex-1 sm:flex-none border border-white px-4 py-2 rounded-full 
                hover:bg-white hover:text-[#3A4443] transition-colors duration-300">
                LinkedIn
              </button>
            </div>
          </div>
        </div>

        {/* Middle Divider - Hidden on mobile */}
        <div className="relative mt-12 hidden sm:block">
          <div className="border-t-2 border-white/20" />
          <div className="flex justify-center sm:justify-around items-center text-sm sm:text-base 
            gap-4 sm:gap-0 py-4">
            {['Instagram', 'Facebook', 'Twitter', 'Youtube'].map((social) => (
              <a key={social} href="#" className="hover:text-green-400 transition-colors duration-300">
                {social}
              </a>
            ))}
          </div>
          <div className="border-t-2 border-white/20" />
        </div>

        {/* Bottom Section */}
        <div className="mt-8 space-y-6 sm:space-y-0 sm:grid sm:grid-cols-3 text-sm sm:text-base">
          {/* Copyright */}
          <div className="text-center sm:text-left text-white/80">
            &copy; Bella Vida 2022
            <br />
            All Rights Reserved.
          </div>

          {/* Tagline */}
          <div className="text-center font-bold text-lg sm:text-xl order-first sm:order-none">
            SURRENDER TO
            <br />
            ULTIMATE RELAXATION
          </div>

          {/* Quick Links - Hidden on mobile */}
          <div className="hidden sm:flex sm:justify-end">
            <div className="space-y-1">
              {['Home', 'About', 'Services', 'Gallery'].map((link) => (
                <a key={link} href="#" className="block hover:text-green-400 transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
