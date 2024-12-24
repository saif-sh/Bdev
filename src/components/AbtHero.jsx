import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AbtHero = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const decorativeLineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const handleLearnMore = () => {
    const nextSection = document.getElementById('spa-banner');
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#333333]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Centered Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[40rem] h-[40rem] rounded-full bg-[#F2D9B6] opacity-[0.015] blur-[100px]" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 text-center p-8 md:p-16 w-full max-w-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span
          className="block text-[#F2D9B6] text-xl tracking-[0.5em] uppercase font-MonotypeCorsiva mb-6"
          variants={textVariants}
        >
          Welcome to
        </motion.span>

        <motion.h1
          className="text-6xl md:text-8xl font-MongolianBaiti font-bold mb-8 text-[#F2D9B6] tracking-tight leading-none"
          variants={textVariants}
        >
          About Us
        </motion.h1>

        <div className="flex items-center justify-center space-x-4 mb-8 overflow-hidden">
          <motion.div 
            className="h-[1px] w-20 bg-[#F2D9B6] opacity-50"
            variants={decorativeLineVariants}
          />
          <div className="w-2 h-2 rounded-full bg-[#F2D9B6]" />
          <motion.div 
            className="h-[1px] w-20 bg-[#F2D9B6] opacity-50"
            variants={decorativeLineVariants}
          />
        </div>

        <motion.p
          className="text-xl md:text-2xl text-[#F2D9B6] leading-relaxed font-SpaceGrotesk max-w-3xl mx-auto mb-12"
          variants={textVariants}
        >
          Discover the epitome of{" "}
          <span className="font-medium italic">luxury</span> and{" "}
          <span className="font-medium italic">tranquility</span>
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6"
          variants={textVariants}
        >
          <motion.button
            onClick={handleLearnMore}
            className="group px-8 py-4 bg-[#F2D9B6] text-[#333333] font-nunito font-medium rounded-full transition-all duration-500 text-lg tracking-wider uppercase hover:bg-opacity-90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
          <motion.button
            onClick={() => navigate('/treatments')}
            className="group px-8 py-4 border-2 border-[#F2D9B6] text-[#F2D9B6] font-nunito font-medium rounded-full transition-all duration-500 text-lg tracking-wider uppercase hover:bg-[#F2D9B6] hover:text-[#333333]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Experience
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AbtHero;
