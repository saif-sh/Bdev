import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gallery, Navdark, AbtHero, SpaBanner, Footer, OurMission, FloatingSocials, InstagramVisit } from '../components';

const About = () => {
  useEffect(() => {
    // Set page title
    document.title = "About Us | Bella Vida Family Spa";
    
    // Handle meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      "Learn about our company's mission, values, and the team behind our success. Discover how we're making a difference in the industry."
    );

    // Cleanup function
    return () => {
      document.title = 'Bella Vida Family Spa'; // Updated company name in cleanup
    };
  }, []);

  return (
    <div className="about-page bg-[#333333] min-h-screen">
      <Navdark />
      <AbtHero />
      <SpaBanner />
      <OurMission />
      <Gallery />
      <InstagramVisit />
      <Footer />
      <FloatingSocials />
    </div>
  );
};

export default About;