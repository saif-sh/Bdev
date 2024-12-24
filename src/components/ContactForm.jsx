import React from "react";
import { motion } from "framer-motion";
import { greenleaf1, pinkleaf1 } from "../assets";

const ContactForm = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen text-white mt-20 md:mt-40 pb-20">
      {/* Main Rounded Container */}
      <motion.div
        className="relative bg-[#E8E8E8] text-black w-[95%] rounded-t-[300px] md:rounded-t-[600px] rounded-b-[50px] shadow-xl p-4 md:p-10 pb-28 overflow-hidden z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Background Leaves */}
        <img
          src={greenleaf1}
          alt="Green Leaf"
          className="absolute top-20 left-[-8rem] w-[20rem] md:w-[40rem] opacity-60 z-[-1]"
        />
        <img
          src={pinkleaf1}
          alt="Pink Leaf"
          className="absolute top-[-12rem] right-[-10rem] w-[30rem] md:w-[52rem] opacity-60 z-[-1]"
        />

        {/* Title */}
        <motion.h1
          className="text-2xl md:text-[4.5rem] font-serif text-center mt-8 md:mt-12 mb-8 md:mb-12 tracking-widest leading-tight md:leading-[4rem] z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          WE WOULD <br /> LOVE TO <br /> HEAR FROM <br /> YOU
        </motion.h1>

        {/* Form */}
        <form className="relative z-10 flex flex-col gap-3 mx-4 md:mx-[248px]">
          <motion.input
            type="text"
            placeholder="NAME"
            className="w-full h-14 md:h-20 px-4 md:px-6 py-2 md:py-3 border-2 border-black bg-transparent text-black placeholder-gray-700 text-base md:text-lg rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.div className="flex flex-col md:flex-row gap-2">
            <motion.input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="w-full h-14 md:h-20 px-4 md:px-6 py-2 md:py-3 border-2 border-black bg-transparent text-black placeholder-gray-700 text-base md:text-lg rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="tel"
              placeholder="PHONE NUMBER"
              className="w-full h-14 md:h-20 px-4 md:px-6 py-2 md:py-3 border-2 border-black bg-transparent text-black placeholder-gray-700 text-base md:text-lg rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
              whileFocus={{ scale: 1.02 }}
            />
          </motion.div>
          <motion.textarea
            placeholder="MESSAGE"
            rows="6"
            className="w-full h-32 md:h-40 px-4 md:px-6 py-2 md:py-3 border-2 border-black bg-transparent text-black placeholder-gray-700 text-base md:text-lg rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
            whileFocus={{ scale: 1.02 }}
          />

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full h-14 md:h-20 py-2 md:py-4 bg-black text-white rounded-full flex items-center justify-center gap-2 text-2xl md:text-4xl font-regular font-serif hover:bg-gray-800 tracking-widest"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SUBMIT <span>&rarr;</span>
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
