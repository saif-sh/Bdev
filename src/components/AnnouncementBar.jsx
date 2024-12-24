import React from 'react';
import { motion } from 'framer-motion';

const AnnouncementText = () => {
  return (
    <span className="border-b border-white">
      WELCOME TO A WORLD OF LUXURIOUS WELLNESS AT BELLA VIDA
      <span className="px-4">•</span>
      INDULGE IN REJUVENATING FAMILY SPA EXPERIENCES
      <span className="px-4">•</span>
      WHERE LUXURY MEETS TRANQUILITY
      <span className="px-4">•</span>
      DISCOVER SERENITY FOR THE WHOLE FAMILY
      <span className="px-4">•</span>
    </span>
  );
};

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-[#333333] py-2 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full"
      >
        <div className="flex">
          <motion.div
            animate={{
              x: [0, -2000]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear"
              }
            }}
            className="flex whitespace-nowrap"
          >
            {[1, 2, 3, 4, 5].map((_, index) => (
              <span
                key={index}
                className="inline-block text-[13px] font-medium tracking-[0.25em] text-white px-4"
              >
                <AnnouncementText />
              </span>
            ))}
          </motion.div>
        </div>

        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#333333] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#333333] to-transparent z-10" />
      </motion.div>
    </div>
  );
}