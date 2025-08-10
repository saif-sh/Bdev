import React, { useState } from "react";

const Massagelist = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Mock images for demonstration
  const cleopatra = "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=600&fit=crop";
  const splbv = "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=600&fit=crop";

  const massages = [
    {
      id: 1,
      title: "Cleopatra Treatment",
      subtitle: "Ancient Egyptian Rejuvenation",
      description: "Experience the ancient Egyptian technique of dissolving tension and stress while rejuvenating your skin. This soothing treatment combines a soft massage with a scrub and milk cream to nourish and hydrate.",
      image: cleopatra,
      duration: "90 min",
      benefits: ["Stress Relief", "Skin Rejuvenation", "Natural Glow"]
    },
    {
      id: 2,
      title: "Bella Vida Signature",
      subtitle: "Exclusive Wellness Experience",
      description: "Indulge in a luxurious massage designed to enhance your inner well-being and elevate your natural glow. This exclusive treatment rejuvenates both body and mind, leaving you with a radiant appearance.",
      image: splbv,
      duration: "120 min",
      benefits: ["Inner Well-being", "Body & Mind Rejuvenation", "Radiant Appearance"]
    }
  ];

  const handleBooking = (massageTitle) => {
    const phoneNumber = "+919820551300";
    const message = `Hello, I would like to book the ${massageTitle}. Please let me know availability and pricing.`;
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919820551300', '_self');
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#CED2C4] via-[#D4D8CC] to-[#C8CCC0] relative overflow-hidden">
      
      {/* Abstract Floating Elements - Responsive */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-4 md:left-10 w-24 h-24 md:w-40 md:h-40 rounded-full bg-white/30 blur-xl"></div>
        <div className="absolute top-40 md:top-60 right-4 md:right-20 w-20 h-20 md:w-32 md:h-32 rounded-full bg-white/25 blur-lg"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 md:w-24 md:h-24 rounded-full bg-white/20 blur-md"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 md:w-36 md:h-36 rounded-full bg-white/35 blur-xl"></div>
        <div className="absolute top-1/3 left-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/15 blur-lg"></div>
      </div>
      
      {/* Minimalist Header - Responsive */}
      <div className="pt-12 md:pt-20 pb-8 md:pb-16 text-center px-4">
        <div className="w-12 md:w-16 h-px bg-gray-400 mx-auto mb-6 md:mb-8"></div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic text-gray-700 mb-4 tracking-wide px-2">
          Signature Treatments
        </h1>
        <p className="text-gray-600 text-base md:text-lg font-light italic tracking-wide px-4 max-w-2xl mx-auto">
          Discover our exclusive collection of luxury wellness experiences
        </p>
        <div className="w-12 md:w-16 h-px bg-gray-400 mx-auto mt-6 md:mt-8"></div>
      </div>

      {/* Treatment Cards - Mobile Responsive with Alternating Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {massages.map((massage, index) => (
          <div
            key={massage.id}
            className={`mb-16 md:mb-24 lg:mb-32 last:mb-12 md:last:mb-20 ${
              // Desktop alternating alignment
              index % 2 === 0 
                ? 'lg:ml-0 lg:mr-16 xl:mr-32' 
                : 'lg:ml-16 xl:ml-32 lg:mr-0'
            }`}
            onMouseEnter={() => setHoveredCard(massage.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`group transition-all duration-700 ${hoveredCard === massage.id ? 'lg:scale-102' : ''}`}>
              
              {/* Card Container */}
              <div className="bg-white/40 backdrop-blur-md rounded-2xl md:rounded-3xl border border-white/30 transition-all duration-500 hover:bg-white/50 hover:border-white/40 shadow-xl hover:shadow-2xl">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                  // Desktop layout alternation
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  
                  {/* Image Section */}
                  <div className={`relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden ${
                    // Mobile: always rounded top, Desktop: alternating rounded sides
                    index % 2 === 1 
                      ? 'rounded-t-2xl md:rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl lg:order-2' 
                      : 'rounded-t-2xl md:rounded-t-3xl lg:rounded-t-none lg:rounded-r-3xl'
                  }`}>
                    <img
                      src={massage.image}
                      alt={massage.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                    
                    {/* Duration Badge - Responsive */}
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8">
                      <div className="px-4 py-2 md:px-6 md:py-3 bg-white/90 backdrop-blur-sm text-gray-700 text-xs md:text-sm font-light tracking-widest rounded-full">
                        {massage.duration}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col justify-center ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}>
                    
                    {/* Title - Responsive */}
                    <div className="mb-6 md:mb-8 lg:mb-10">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-gray-800 mb-2 md:mb-4 tracking-wide leading-tight">
                        {massage.title}
                      </h2>
                      <p className="text-gray-500 text-sm sm:text-base md:text-lg font-light italic tracking-wide">
                        {massage.subtitle}
                      </p>
                    </div>
                    
                    {/* Description - Responsive */}
                    <p className="text-gray-600 leading-relaxed mb-8 md:mb-10 lg:mb-12 font-light text-sm sm:text-base tracking-wide">
                      {massage.description}
                    </p>

                    {/* Benefits - Responsive */}
                    <div className="mb-8 md:mb-10 lg:mb-12">
                      <div className="space-y-2 md:space-y-3">
                        {massage.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-gray-600 font-light">
                            <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full mr-4 md:mr-6 flex-shrink-0"></div>
                            <span className="tracking-wide text-xs sm:text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons - Responsive */}
                    <div className="space-y-3 md:space-y-4">
                      <button 
                        onClick={() => handleBooking(massage.title)}
                        className="w-full group relative px-6 md:px-8 py-4 md:py-5 bg-gray-600 text-white font-light tracking-widest text-xs sm:text-sm transition-all duration-300 hover:bg-gray-500 rounded-full touch-manipulation"
                      >
                        <span className="relative z-10">BOOK APPOINTMENT</span>
                      </button>
                      
                      <button 
                        onClick={handleCall}
                        className="w-full px-6 md:px-8 py-4 md:py-5 border border-gray-300 text-gray-600 font-light tracking-widest text-xs sm:text-sm transition-all duration-300 hover:border-gray-400 hover:bg-white/70 rounded-full touch-manipulation"
                      >
                        CALL NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Minimalist Footer CTA - Responsive */}
      <div className="text-center py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-xl mx-auto">
          <div className="w-16 md:w-24 h-px bg-gray-400 mx-auto mb-6 md:mb-8"></div>
          <h3 className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-4 md:mb-6 tracking-wide">
            Begin Your Journey
          </h3>
          <p className="text-gray-600 mb-6 md:mb-8 font-light italic tracking-wide text-sm md:text-base">
            Personalized consultations available
          </p>
          <button 
            onClick={() => handleBooking("a consultation")}
            className="px-8 md:px-12 py-3 md:py-4 bg-gray-600 text-white font-light tracking-widest text-xs md:text-sm hover:bg-gray-500 transition-colors duration-300 rounded-full touch-manipulation"
          >
            SCHEDULE CONSULTATION
          </button>
          <div className="w-16 md:w-24 h-px bg-gray-400 mx-auto mt-6 md:mt-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Massagelist;