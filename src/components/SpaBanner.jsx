import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const SpaBanner = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: 100,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const authenticVariants = {
    hidden: { 
      opacity: 0,
      x: -100,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const bellaVariants = {
    hidden: { 
      opacity: 0,
      x: 100,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const titleWords = ["HEAVENLY", "SPA. LUXURY", "TREATMENTS", "FOR BODY &", "HEALTH"];

  return (
    <motion.div
      ref={ref}
      id="spa-banner"
      className="flex flex-col justify-between min-h-screen px-6 sm:px-12 lg:px-40 gap-0 overflow-y-visible"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        className="self-start text-white text-[2rem] sm:text-[3rem] font-serif tracking-widest mt-10 sm:mt-20 lg:mt-28"
        variants={authenticVariants}
      >
        <motion.span
          whileHover={{
            color: '#F2D9B6',
            scale: 1.05,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        >
          Authentic
        </motion.span>
      </motion.div>

      <div className="flex items-center justify-center flex-1">
        <motion.h1 
          className="text-[#F2D9B6] font-serif tracking-wide leading-tight text-center"
          variants={containerVariants}
        >
          {titleWords.map((word, index) => (
            <motion.div
              key={index}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl mt-2 overflow-hidden"
              variants={titleVariants}
            >
              <motion.span
                className="inline-block"
                whileHover={{
                  scale: 1.05,
                  color: '#fff',
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {word}
              </motion.span>
            </motion.div>
          ))}
        </motion.h1>
      </div>

      <motion.div
        className="self-end text-white text-[2rem] sm:text-[3rem] font-serif tracking-widest mb-10 sm:mb-20 lg:mb-28"
        variants={bellaVariants}
      >
        <motion.span
          whileHover={{
            color: '#F2D9B6',
            scale: 1.05,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        >
          Bella Vida Spa
        </motion.span>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div 
          className="absolute top-1/4 left-10 w-20 h-[1px] bg-[#F2D9B6] opacity-20"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.div 
          className="absolute bottom-1/4 right-10 w-20 h-[1px] bg-[#F2D9B6] opacity-20"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
      </motion.div>
    </motion.div>
  );
};

export default SpaBanner;
