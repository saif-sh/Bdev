import React from "react";
import { motion } from "framer-motion";

const TreatmentCard = ({ title, description, image, onLearnMore }) => {
  return (
    <motion.div
      className="relative w-64 h-96 rounded-full overflow-hidden shadow-xl cursor-pointer"
      initial="rest"
      whileHover="hover"
      variants={{
        rest: { scale: 1 },
        hover: { scale: 1.05 }
      }}
      onClick={onLearnMore}
    >
      {/* Hover Image State */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 }
        }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 flex flex-col justify-center items-center text-white p-8">
          <motion.h2 
            className="text-3xl font-serif mb-4 text-center"
            variants={{
              rest: { opacity: 0, y: 20 },
              hover: { opacity: 1, y: 0 }
            }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-center text-white/90 text-sm mb-6"
            variants={{
              rest: { opacity: 0, y: 20 },
              hover: { opacity: 1, y: 0 }
            }}
          >
            {description}
          </motion.p>
          <motion.button
            className="px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full
              hover:bg-white/30 transition-colors duration-300"
            variants={{
              rest: { opacity: 0, y: 20 },
              hover: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              onLearnMore();
            }}
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/* Default State */}
      <motion.div
        className="absolute inset-0 bg-gray-100 flex flex-col justify-center items-center text-black rounded-full"
        variants={{
          rest: { opacity: 1 },
          hover: { opacity: 0 }
        }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-serif mb-4 text-center px-6">{title}</h2>
        <p className="text-center px-8">{description}</p>
      </motion.div>

      {/* Decorative Ring */}
      <div className="absolute inset-0 border border-gray-200 rounded-full" />
    </motion.div>
  );
};

export default TreatmentCard;
