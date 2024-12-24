import React from 'react';
import { motion } from 'framer-motion';
import WaveDivider from './WaveDivider';

const FavoriteCategoryCard = ({ title, description, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="flex-1 p-4 sm:p-6 md:p-8 bg-white/50 rounded-2xl hover:bg-white/70 transition-all duration-300
               hover:shadow-lg group cursor-pointer min-w-[250px] sm:min-w-[280px] max-w-[400px] mx-auto"
  >
    {/* Icon Container */}
    <div className="w-16 h-16 mx-auto mb-6 text-[#2F4F4F] group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>

    <h3 className="text-2xl font-MongolianBaiti mb-4 text-[#2F4F4F] group-hover:text-[#1a2f2f]
                   transition-colors duration-300">
      {title}
    </h3>
    
    <p className="text-base text-[#2F4F4F]/80 leading-relaxed font-SpaceGrotesk">
      {description}
    </p>

    {/* Decorative line */}
    <div className="w-12 h-1 bg-[#2F4F4F]/20 mx-auto mt-6 group-hover:w-24 
                    transition-all duration-300"></div>
  </motion.div>
);

const categories = [
  {
    title: "Balance Body & Mind",
    description: "Experience deep relaxation and rejuvenation through our holistic approach to wellness and balance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    )
  },
  {
    title: "Therapeutic Healing",
    description: "Discover the healing power of touch with our therapeutic massage treatments designed for your needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    )
  },
  {
    title: "Stress Relief",
    description: "Let go of tension and stress with our specialized techniques for complete mental and physical relaxation.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    )
  }
];

const FavoriteCategorySection = () => {
  return (
    <div className="w-full bg-[#E5E6E2] py-12 sm:py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-MongolianBaiti text-[#2F4F4F] leading-tight">
            Choose your<br />Favorite Category
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category, index) => (
            <FavoriteCategoryCard
              key={index}
              index={index}
              {...category}
            />
          ))}
        </div>
      </div>
      <WaveDivider />
    </div>
  );
};

export default FavoriteCategorySection;