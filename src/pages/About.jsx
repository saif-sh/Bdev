import React from 'react';
import { motion } from 'framer-motion';
import { Navdark, AbtHero, SpaBanner, Footer, OurMission, FloatingSocials, InstagramVisit } from '../components';

const About = () => {
  return (
    <div className='bg-[#333333] min-h-screen'>
      <Navdark />
      <AbtHero />
      <SpaBanner />
      <OurMission />
      <InstagramVisit />
      <Footer />
      <FloatingSocials />
    </div>
  );
};

export default About;