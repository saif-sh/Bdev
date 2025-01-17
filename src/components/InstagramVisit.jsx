import { motion } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { incard } from "../assets";
import { style } from "framer-motion/client";

const InstagramVisit = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollTextVariants = {
    animate1: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 35,
          ease: "linear",
        },
      },
    },
    animate2: {
      x: [-1000, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative h-[400px] bg-[#3a4443] overflow-hidden border-b-2 border-white/20">
      {/* Background text animations */}
      <div className="absolute inset-0 flex flex-col justify-between py-6 overflow-hidden">
        <motion.div
          variants={scrollTextVariants}
          animate="animate1"
          className="whitespace-nowrap opacity-90"
        >
          <span className="text-[9rem] font-serif text-white/20 tracking-[0.2em] font-thin mix-blend-soft-light">
            BELLA VIDA FAMILY SPA• BELLA VIDA FAMILY SPA• BELLA VIDA FAMILY SPA
          </span>
        </motion.div>

        <motion.div
          variants={scrollTextVariants}
          animate="animate2"
          className="whitespace-nowrap opacity-90 -mt-20"
        >
          <span className="text-[6rem] font-serif text-white/20 tracking-[0.3em] font-thin mix-blend-soft-light">
          LUXURY • WELLNESS • SERENITY • LUXURY • WELLNESS • SERENITY
          </span>
        </motion.div>
      </div>

      {/* Cards Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative w-[300px] h-[300px] cursor-pointer flex items-center justify-center"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Left Card (Image) */}
          <motion.div
            className="absolute w-[200px] h-[280px] rounded-[20px] overflow-hidden shadow-2xl border-2 border-white/30"
            initial={{ rotate: -15, x: -20 }}
            animate={{
              rotate: isHovered ? -35 : -15,
              x: isHovered ? -80 : -20,
              y: isHovered ? -10 : 0,
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{
              duration: 0.5,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            <img
              src={incard}
              alt="Instagram Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>

          {/* Right Card (Dark with Instagram) */}
          {/* Right Card (Dark Minimalist with Visible Background Design) */}
          <motion.div
            className="absolute w-[200px] h-[280px] bg-[#1e1e1e] rounded-[20px] shadow-lg border border-[#444]/50 overflow-hidden"
            initial={{ rotate: 15, x: 20 }}
            animate={{
              rotate: isHovered ? 35 : 15,
              x: isHovered ? 80 : 20,
              y: isHovered ? -10 : 0,
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{
              duration: 0.5,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            <div className="relative h-full flex flex-col items-center justify-center p-6 bg-gradient-to-t from-[#1a1a1a] to-[#2b2b2b]">
              {/* Visible Background Design */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>

              {/* Content */}
              <h2 className="text-white text-2xl font-serif font-medium mb-2">
                Discover More
              </h2>
              <h3 className="text-gray-400 text-lg font-serif mb-6">
                On Instagram
              </h3>
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-[#e1306c] text-4xl drop-shadow-[0_0_15px_rgba(225,48,108,0.6)]"
              />
            </div>
          </motion.div>


          {/* Click Handler */}
          <motion.div
            className="absolute inset-0 z-40"
            onClick={() => window.open('https://instagram.com/bellavidafamilyspa', '_blank')}
            whileHover={{ cursor: 'pointer' }}
            whileTap={{ scale: 0.98 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default InstagramVisit; 