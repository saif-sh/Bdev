import React, { useState } from "react";
import { motion } from "framer-motion";
import { TreatmentCard, Navbl, Footer, FloatingSocials, InstagramVisit } from "../components";
import treatments from "../components/data.js";
import Modal from "../components/Modal";

const Treatments = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Define filter categories
  const filterCategories = [
    { id: "ALL", label: "All Treatments" },
    { id: "MASSAGE", label: "Massages" },
    { id: "COUPLES", label: "Couples" },
    { id: "SCRUB", label: "Scrub" },
    { id: "SPECIAL", label: "Specials" },
    { id: "OFFERS", label: "Offers" },
  ];

  // Filter treatments based on selected category
  const filteredTreatments = treatments.filter((treatment) => {
    if (activeFilter === "ALL") return true;
    return treatment.category === activeFilter;
  });

  const handleLearnMore = (treatment) => {
    setSelectedTreatment(treatment);
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="bg-[#DADBD5] text-gray-900 pt-3">
        <Navbl />
        <div className="max-w-7xl mx-auto mt-16 md:mt-24 px-4 md:px-0">
          {/* Header Section */}
          <motion.h1
            className="text-4xl md:text-6xl font-serif"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            TREATMENTS
          </motion.h1>

          {/* Subheader */}
          <motion.p
            className="text-base md:text-lg font-light mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            CHOOSE <br /> A CONVENIENT PROGRAM FOR YOU
          </motion.p>

          {/* Filter buttons */}
          <div className="mt-6 overflow-x-auto -mx-4 md:mx-0">
            <div className="flex space-x-3 md:space-x-6 px-4 md:px-0 min-w-max md:min-w-0">
              {filterCategories.map((category, index) => (
                <motion.button
                  key={category.id}
                  className={`flex-none md:flex-1 px-6 md:px-0 h-12 rounded-full flex items-center justify-center text-sm font-medium cursor-pointer transition-all duration-300 whitespace-nowrap
                    ${activeFilter === category.id 
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg" 
                      : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                    }`}
                  onClick={() => setActiveFilter(category.id)}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Treatment cards grid */}
        <motion.div 
          className="max-w-7xl mx-auto mt-9 pb-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center"
          layout
        >
          {filteredTreatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <TreatmentCard
                title={treatment.title}
                description={treatment.description}
                image={treatment.image}
                onLearnMore={() => handleLearnMore(treatment)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <InstagramVisit />
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        treatment={selectedTreatment}
      />
      <FloatingSocials />
    </div>
  );
};

export default Treatments;