import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, treatment }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleBookNow = () => {
    // Phone number format: international code without '+' symbol
    const phoneNumber = '919820551300'; // Updated WhatsApp number
    
    // Create the message template
    const message = encodeURIComponent(
      `Hi, I would like to book a session for ${treatment?.title}.\n\n` +
      `Treatment Details: ${treatment?.detailedDescription?.slice(0, 100)}...\n\n` +
      `Please help me schedule an appointment.`
    );

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      onClick={handleOverlayClick}
    >
      <motion.div
        className="relative w-full max-w-5xl bg-gradient-to-br from-white/95 to-white/90 backdrop-blur rounded-[3rem] shadow-2xl overflow-hidden"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ 
          duration: 0.5,
          type: "spring",
          bounce: 0.3
        }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

        <div className="grid grid-cols-2 gap-8 p-12 relative">
          {/* Left Content Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div>
              <motion.h2 
                className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {treatment?.title}
              </motion.h2>
              <div className="flex gap-3">
                <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-medium">
                  Luxury Treatment
                </span>
                <span className="px-4 py-1.5 bg-purple-50 text-purple-600 rounded-lg text-sm font-medium">
                  Premium Care
                </span>
              </div>
            </div>

            <motion.p 
              className="text-gray-600 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {treatment?.detailedDescription}
            </motion.p>

            <motion.div 
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button
                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.02] active:scale-[0.98] transition duration-300 flex items-center justify-center gap-2"
                onClick={handleBookNow}
              >
                <svg 
                  className="w-5 h-5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Book Now on WhatsApp
              </button>
              <button
                className="w-full px-8 py-4 bg-white/50 backdrop-blur border border-gray-200 text-gray-700 font-semibold rounded-2xl hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition duration-300"
                onClick={onClose}
              >
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="relative h-[600px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7 }}
              style={{
                backgroundImage: `url('${treatment?.image}')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4 text-white/90">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Premium Experience</div>
                    <div className="text-xs text-white/70">Rated 4.9/5 by our clients</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Close Button */}
        <motion.button
          className="absolute top-8 right-8 bg-white/90 backdrop-blur text-gray-700 rounded-full p-3 shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
          onClick={onClose}
          whileHover={{ rotate: 90 }}
          transition={{ duration: 0.2 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
