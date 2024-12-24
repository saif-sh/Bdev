import { Navbar, Footer, FavoriteCategorySection, Massagelist, AnnouncementBar } from "./components";
import Hero from "./components/Hero";
import FloatingSocials from './components/FloatingSocials';
import SocialFeed from './components/SocialFeed';
import InstagramVisit from './components/InstagramVisit';
import { motion } from "framer-motion";

const App = () => (
  <div className="relative">
    <AnnouncementBar />
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#DADBD5]/70"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.6,
          ease: [0.6, -0.05, 0.01, 0.99]
        }}
      >
        <Navbar />
      </motion.div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2
        }}
      >
        <Hero />
      </motion.div>
      
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 1,
          type: "spring",
          bounce: 0.3
        }}
      >
        <FavoriteCategorySection />
      </motion.div>
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.8,
          type: "spring",
          bounce: 0.2
        }}
      >
        <Massagelist />
      </motion.div>
      
      <SocialFeed />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.8,
          type: "spring",
          bounce: 0.2
        }}
      >
        <InstagramVisit />
      </motion.div>
      
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.8,
          ease: "easeOut"
        }}
      >
        <Footer />
      </motion.div>
      
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ 
          delay: 1,
          duration: 0.8,
          type: "spring",
          bounce: 0.4
        }}
      >
        <FloatingSocials />
      </motion.div>
    </motion.div>
  </div>
);

export default App;
