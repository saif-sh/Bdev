import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const ContactHero = () => {
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

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  const handleScroll = () => {
    const nextSection = document.getElementById('contact-form');
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.div
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center relative bg-[#DADBD5] px-6 sm:px-12 lg:px-40"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h1
        className="text-7xl md:text-9xl font-MongolianBaiti text-[#333333] mb-4"
        variants={titleVariants}
      >
        CONTACT US
      </motion.h1>

      <div className="flex flex-col items-center w-full">
        <motion.p
          className="text-sm md:text-base text-[#333333] tracking-[0.3em] uppercase mb-4 text-center"
          variants={titleVariants}
        >
          CONNECT WITH US TO BEGIN YOUR JOURNEY TO RELAXATION AND REJUVENATION.
        </motion.p>
        <motion.div
          className="w-full h-[1px] bg-[#333333] mb-16"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 w-full max-w-6xl mb-16">
        <motion.div
          className="text-center"
          variants={titleVariants}
        >
          <h2 className="text-sm text-[#333333] tracking-wider uppercase mb-4">ADDRESS:</h2>
          <p className="text-lg text-[#333333]">
            Opp Rizvi Law College,<br />
            Bandra West, Mumbai
          </p>
        </motion.div>

        <motion.div
          className="text-center"
          variants={titleVariants}
        >
          <h2 className="text-sm text-[#333333] tracking-wider uppercase mb-4">OPENING HOURS:</h2>
          <p className="text-lg text-[#333333]">
            Monday - Sunday 10AM - 10PM<br />
            Open All Days of the Week
          </p>
        </motion.div>

        <motion.div
          className="text-center"
          variants={titleVariants}
        >
          <h2 className="text-sm text-[#333333] tracking-wider uppercase mb-4">CONTACT US:</h2>
          <a href="tel:02045475467" className="text-lg text-[#333333] hover:text-[#555] block">
            +91 99813 45670
          </a>
          <a href="mailto:info@7skuspa.co.uk" className="text-lg text-[#333333] hover:text-[#555]">
            Bellavidafamilyspa@gmail.com
          </a>
        </motion.div>
      </div>

      <motion.button
        onClick={handleScroll}
        className="w-24 h-24 rounded-full border-2 border-[#333333] flex items-center justify-center cursor-pointer group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        variants={titleVariants}
      >
        <motion.span
          className="text-4xl transform rotate-90 text-[#333333] group-hover:scale-110 transition-transform"
          initial={{ x: -5 }}
          animate={{ x: 5 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1
          }}
        >
          →
        </motion.span>
      </motion.button>
    </motion.div>
  );
};

export default ContactHero; 