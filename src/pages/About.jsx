import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navdark, AbtHero, SpaBanner, Footer, OurMission, FloatingSocials, InstagramVisit } from '../components';

const About = () => {
  useEffect(() => {
    // Set page title with keywords and branding
    document.title = "About Bella Vida Family Spa | Luxury Wellness & Spa Services in [Location]";
    
    // Handle meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      "Experience luxury family wellness at Bella Vida Family Spa. Our premium spa services include family massages, couples treatments, and rejuvenating therapies. Discover serenity and relaxation in [Location]'s premier family spa destination."
    );

    // Add keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      'content',
      "family spa, luxury spa, wellness center, couples massage, spa treatments, family massage, spa services, relaxation therapy, Bella Vida Spa, [Location] spa, premium spa experience"
    );

    // Add Open Graph meta tags for better social sharing
    const metaTags = [
      { property: 'og:title', content: 'Bella Vida Family Spa | Luxury Wellness & Spa Services' },
      { property: 'og:description', content: 'Experience premium family spa services at Bella Vida. Luxury treatments, rejuvenating therapies, and peaceful relaxation for the whole family.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:site_name', content: 'Bella Vida Family Spa' },
      { property: 'og:locale', content: 'en_US' },
      // Add your actual image URL
      { property: 'og:image', content: 'https://bellavidaspa.com/images/spa-preview.jpg' }
    ];

    // Add Twitter Card meta tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Bella Vida Family Spa | Luxury Wellness & Spa Services' },
      { name: 'twitter:description', content: 'Experience premium family spa services at Bella Vida. Luxury treatments, rejuvenating therapies, and peaceful relaxation for the whole family.' },
      // Add your actual image URL
      { name: 'twitter:image', content: 'https://bellavidaspa.com/images/spa-preview.jpg' }
    ];

    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "DaySpa",
      "name": "Bella Vida Family Spa",
      "description": "Luxury family spa offering premium wellness and relaxation services.",
      "image": "https://bellavidaspa.com/images/spa-preview.jpg",
      // Add your actual address
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Your Street Address",
        "addressLocality": "Your City",
        "addressRegion": "Your State",
        "postalCode": "Your Zip",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "YOUR_LATITUDE",
        "longitude": "YOUR_LONGITUDE"
      },
      "url": window.location.origin,
      "telephone": "YOUR_PHONE_NUMBER",
      "priceRange": "$$",
      "openingHours": "Mo-Su 09:00-21:00"
    };

    // Apply Open Graph and Twitter tags
    [...metaTags, ...twitterTags].forEach(({ property, name, content }) => {
      let metaTag = document.querySelector(`meta[${property ? 'property' : 'name'}="${property || name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        if (property) metaTag.setAttribute('property', property);
        if (name) metaTag.setAttribute('name', name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    });

    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = window.location.href;

    // Add structured data script
    let structuredDataScript = document.querySelector('#structured-data');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.id = 'structured-data';
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

    // Cleanup function
    return () => {
      document.title = 'Bella Vida Family Spa';
      if (structuredDataScript) {
        structuredDataScript.remove();
      }
    };
  }, []);

  return (
    <div className="about-page bg-[#333333] min-h-screen">
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