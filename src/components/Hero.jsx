import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { heroimg } from '../assets';

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isTextLocked, setIsTextLocked] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const touchStartRef = useRef(null);

  // Enhanced mobile detection with viewport tracking
  const isMobile = useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  }, []);

  const isSmallMobile = useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 480;
    }
    return false;
  }, []);

// Mobile-optimized transform calculations with adjusted positioning
const transforms = useMemo(() => {
  if (isSmallMobile) {
    return {
      title: `translate(-50%, ${Math.max(-200, 680 - scrollPosition * 1.25)}%)`, // Higher final position
      subtitle: `translate(-50%, ${Math.max(-20, 360 - scrollPosition * 0.95)}%)`, 
      cta: `translate(-50%, ${Math.max(180, 1220 - scrollPosition * 0.99)}%)` 
    };
  } else if (isMobile) {
    return {
      title: `translate(-50%, ${Math.max(-200, 90 - scrollPosition * 0.3)}%)`, 
      subtitle: `translate(-50%, ${Math.max(70, 180 - scrollPosition * 0.3)}%)`, 
      cta: `translate(-50%, ${Math.max(300, 480 - scrollPosition * 0.12)}%)`
    };
  } else {
    // Desktop unchanged but slightly higher
    return {
      title: `translate(-50%, ${Math.max(-150, 50 - scrollPosition * 0.35)}%)`,
      subtitle: `translate(-50%, ${Math.max(-10, 200 - scrollPosition * 0.65)}%)`,
      cta: `translate(-50%, ${Math.max(260, 450 - scrollPosition * 0.35)}%)`
    };
  }
}, [scrollPosition, isMobile, isSmallMobile]);


  const overlayOpacity = useMemo(() => 0.5 + (scrollPosition / 800) * 0.3, [scrollPosition]);

  // Mouse tracking for desktop only
  const handleMouseMove = useCallback((e) => {
    if (!isMobile) {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 2
        });
      }
    }
  }, [isMobile]);

  const updateScroll = useCallback((delta) => {
    setScrollPosition((prev) => {
      const newPosition = Math.max(0, Math.min(800, prev + delta));
      if (newPosition >= 800) setIsTextLocked(false);
      return newPosition;
    });
  }, []);

  const handleWhatsAppClick = useCallback((e) => {
    e.preventDefault();
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        event_category: 'engagement',
        event_label: 'whatsapp_booking',
        value: 1
      });
    }

    const phoneNumber = '919820551300';
    const message = encodeURIComponent(
      `Hello Bella Vida Spa, I would like to book a luxury massage session.\n\n` +
      `Please help me schedule an appointment for wellness therapy.`
    );
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      if (isTextLocked) {
        e.preventDefault();
        requestAnimationFrame(() => updateScroll(e.deltaY * 0.8));
      }
    };

    const handleTouchStart = (e) => {
      touchStartRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!touchStartRef.current || !isTextLocked) return;
      e.preventDefault();
      const deltaY = touchStartRef.current - e.touches[0].clientY;
      requestAnimationFrame(() => updateScroll(deltaY * (isMobile ? 2.0 : 2.5)));
      touchStartRef.current = e.touches[0].clientY;
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    if (!isMobile) {
      container.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isTextLocked, updateScroll, handleMouseMove, isMobile]);

  return (
    <>
      {/* Structured Data for SEO */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Bella Vida Family Spa",
            "image": heroimg,
            "description": "Luxury wellness and massage spa offering premium treatments with organic products. Expert therapists provide personalized wellness experiences in a serene environment.",
            "@id": "https://bellavida.com",
            "url": "https://bellavida.com",
            "telephone": "+919820551300",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", 
                "Friday", "Saturday", "Sunday"
              ],
              "opens": "09:00",
              "closes": "21:00"
            },
            "servedCuisine": [],
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "150"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Spa Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Luxury Massage Therapy",
                    "description": "Premium massage treatments for relaxation and wellness"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Wellness Treatments",
                    "description": "Comprehensive wellness and therapeutic treatments"
                  }
                }
              ]
            }
          })
        }}
      />

      <header
        ref={containerRef}
        className={`relative mx-1 sm:mx-4 md:mx-6 lg:mx-16 my-1 sm:my-4 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer ${
          isSmallMobile ? 'h-[70vh]' : isMobile ? 'h-[75vh]' : 'h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]'
        }`}
        role="banner"
        aria-label="Bella Vida Family Spa - Luxury wellness and massage services"
        style={{
          boxShadow: isMobile ? 
            '0 20px 40px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)' :
            '0 32px 64px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Refined luxury border - desktop only */}
        {!isMobile && (
          <div 
            className="absolute -inset-0.5 rounded-3xl opacity-60 blur-sm"
            style={{
              background: `linear-gradient(45deg, 
                rgba(255, 255, 255, 0.2) 0%, 
                rgba(255, 215, 0, 0.15) 25%, 
                rgba(255, 255, 255, 0.2) 50%, 
                rgba(255, 215, 0, 0.15) 75%, 
                rgba(255, 255, 255, 0.2) 100%
              )`,
              backgroundSize: '300% 300%',
              animation: 'luxury-glow 8s ease-in-out infinite'
            }}
          />
        )}

        {/* Optimized image container */}
        <div className={`absolute inset-0 w-full h-full ${isMobile ? 'rounded-xl sm:rounded-2xl' : 'rounded-3xl'} overflow-hidden`}>
          <img
            src={heroimg}
            alt="Bella Vida Luxury Spa interior with massage tables, ambient lighting, and organic wellness products - Professional massage and wellness treatments in Mumbai"
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
            style={{ 
              objectPosition: isMobile ? 'center 75%' : 'center 65%',
              filter: 'brightness(0.85) contrast(1.1) saturate(1.08)'
            }}
            loading="eager"
            fetchPriority="high"
            width="1920"
            height="1080"
            itemProp="image"
          />
          
          {/* Mobile-optimized vignette */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: isMobile ? 
                'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.5) 100%)' :
                'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.3) 100%)'
            }}
          />
        </div>

        {/* Clean, sophisticated overlays */}
        <div
          className={`absolute inset-0 ${isMobile ? 'rounded-xl sm:rounded-2xl' : 'rounded-3xl'} transition-opacity duration-500`}
          style={{ 
            opacity: overlayOpacity,
            background: `
              linear-gradient(135deg, 
                rgba(0, 0, 0, 0.8) 0%,
                rgba(0, 0, 0, 0.55) 30%,
                rgba(0, 0, 0, 0.35) 50%,
                rgba(0, 0, 0, 0.65) 80%,
                rgba(0, 0, 0, 0.8) 100%
              )
            `
          }}
          aria-hidden="true"
        />

        {/* Subtle premium glass layer */}
        <div
          className={`absolute inset-0 ${isMobile ? 'rounded-xl sm:rounded-2xl' : 'rounded-3xl'} pointer-events-none`}
          style={{
            background: `
              linear-gradient(180deg,
                rgba(255, 255, 255, 0.08) 0%,
                transparent 25%,
                transparent 75%,
                rgba(255, 255, 255, 0.04) 100%
              )
            `,
            backdropFilter: isMobile ? 'blur(0.2px)' : 'blur(0.5px)'
          }}
          aria-hidden="true"
        />

        {/* Elegant floating elements - desktop only */}
        {!isMobile && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full opacity-25"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.8), rgba(255,215,0,0.3))',
                  left: `${30 + i * 20}%`,
                  top: `${25 + (i % 2) * 35}%`,
                  transform: `translateY(${Math.sin(Date.now() * 0.001 + i) * 6}px)`,
                  transition: 'transform 3s ease-in-out',
                  boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)'
                }}
              />
            ))}
          </div>
        )}

        {/* Main content with mobile optimization */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Mobile-optimized title */}
          <div 
            className="absolute left-1/2 w-full text-center z-20 px-2 sm:px-4" 
            style={{ 
              transform: transforms.title, 
              top: '50%',
              ...((!isMobile) && {
                transform: `${transforms.title.replace('translate(-50%', `translate(${-50 + mousePosition.x * 0.8}%`)}`,
              })
            }}
          >
            <h1 
              className={`font-MongolianBaiti text-[#F2D9B6] tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] relative leading-none ${
                isSmallMobile ? 'text-5xl' : isMobile ? 'text-4xl' : 'text-5xl sm:text-6xl md:text-7xl lg:text-[100px]'
              }`}
              itemProp="name"
              style={{
                textShadow: isMobile ?
                  '0 0 25px rgba(242, 217, 182, 0.5), 0 4px 12px rgba(0, 0, 0, 0.9)' :
                  '0 0 30px rgba(242, 217, 182, 0.5), 0 0 50px rgba(242, 217, 182, 0.2), 0 8px 20px rgba(0, 0, 0, 0.8)',
                filter: 'brightness(1.15)'
              }}
            >
              BELLA VIDA
              
              {/* Subtle shimmer effect - desktop only */}
              {!isMobile && (
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                  style={{
                    animation: 'shimmer 5s ease-in-out infinite',
                    animationDelay: '2s'
                  }}
                />
              )}
            </h1>
          </div>

          {/* Mobile-optimized subtitle */}
          <div 
            className="absolute left-1/2 text-center w-full z-20 px-3 sm:px-4" 
            style={{ 
              transform: transforms.subtitle, 
              top: '50%',
              ...((!isMobile) && {
                transform: `${transforms.subtitle.replace('translate(-50%', `translate(${-50 + mousePosition.x * 0.3}%`)}`,
              })
            }}
          >
            <h2 
              className={`font-MonotypeCorsiva text-[#F2D9B6] tracking-wide leading-tight relative ${
                isSmallMobile ? 'text-lg mt-3' : isMobile ? 'text-xl mt-4' : 'text-2xl mt-6 sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed'
              }`}
              itemProp="slogan"
              style={{
                textShadow: isMobile ?
                  '0 2px 8px rgba(0, 0, 0, 0.9), 0 0 12px rgba(242, 217, 182, 0.2)' :
                  '0 4px 15px rgba(0, 0, 0, 0.8), 0 0 25px rgba(242, 217, 182, 0.2)'
              }}
            >
              Indulge in Luxury, Wellness, and Serenity
            </h2>
            
            <div className={`relative ${isSmallMobile ? 'mt-2' : isMobile ? 'mt-3' : 'mt-4 sm:mt-6'}`}>
              <div 
                className={`absolute inset-0 bg-black/20 ${isMobile ? 'rounded-lg' : 'rounded-2xl'} blur-sm scale-105 opacity-60`}
                style={{ backdropFilter: 'blur(12px)' }}
              />
              <p 
                className={` text-[#F2D9B6] text-opacity-95 font-SpaceGrotesk mx-auto leading-snug relative z-10 ${
                  isSmallMobile ? 'text-xs max-w-72 px-3 py-2' : 
                  isMobile ? 'text-sm max-w-80 px-4 py-2.5' : 
                  'text-sm sm:text-xl max-w-96 sm:max-w-4xl px-6 py-4 leading-relaxed'
                }`}
                itemProp="description"
                style={{
                  textShadow: '0 1px 6px rgba(0, 0, 0, 0.8)'
                }}
              >
                {isMobile ? 
                  'Experience luxury and tranquility at Bella Vida Family Spa. Premium wellness treatments for ultimate relaxation.' :
                  'Experience luxury and tranquility at Bella Vida Family Spa in Mumbai. Our expert therapists provide premium wellness treatments using organic products for ultimate relaxation.'
                }
              </p>
            </div>
            
            <div 
              className={`font-SpaceGrotesk uppercase text-[#F2D9B6]/95 tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] relative ${
                isSmallMobile ? 'text-xs mt-3' : isMobile ? 'text-xs mt-4' : 'text-sm sm:text-base mt-6 sm:mt-8'
              }`}
              itemProp="openingHours"
              content="Mo-Su 09:00-21:00"
            >
              <time 
                dateTime="Mo-Su 09:00-21:00"
                style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.8)' }}
              >
                OPEN DAILY FOR YOU
              </time>
              
              {/* Refined accent line */}
              <div className={`bg-gradient-to-r from-transparent via-[#F2D9B6]/70 to-transparent mx-auto mt-1.5 ${
                isSmallMobile ? 'w-16 h-px' : isMobile ? 'w-20 h-px' : 'w-24 h-px'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm opacity-50" />
              </div>
            </div>
          </div>

          {/* Mobile-optimized CTA button */}
          <div 
            className="absolute left-1/2 text-center w-full z-20 px-4" 
            style={{ transform: transforms.cta, top: '50%' }}
          >
            <button
              onClick={handleWhatsAppClick}
              className={`group relative inline-flex items-center md:mt-1 justify-center bg-gradient-to-r from-[#F2D9B6] to-[#E8C99B] text-black font-SpaceGrotesk tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] uppercase transition-all duration-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F2D9B6] focus:ring-opacity-50 active:scale-95 overflow-hidden ${
                isSmallMobile ? 'px-5 py-2 text-xs rounded-lg font-medium' : 
                isMobile ? 'px-6 py-2.5 text-xs rounded-lg font-bold' : 
                'px-8 py-3 sm:px-14 sm:py-5 text-xs sm:text-sm rounded-xl font-semibold'
              }`}
              aria-label="Book your luxury spa session via WhatsApp - Contact Bella Vida Spa"
              type="button"
              itemProp="potentialAction"
              itemScope
              itemType="https://schema.org/ReserveAction" 
              style={{
                boxShadow: isMobile ?
                  '0 12px 25px rgba(0, 0, 0, 0.35), 0 0 15px rgba(242, 217, 182, 0.25)' :
                  '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(242, 217, 182, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
            >
              {/* Button glow effect - desktop only */}
              {!isMobile && (
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-white/15 via-white/30 to-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ 
                    animation: 'button-glow 4s ease-in-out infinite',
                    animationDelay: '2s'
                  }}
                />
              )}
              
              <span className="relative flex items-center z-10" style={{ gap: isSmallMobile ? '4px' : isMobile ? '6px' : '8px' }}>
                <span itemProp="name">Book Your Session</span>
                <svg 
                  className={`transition-all duration-500 group-hover:translate-x-1 ${
                    isSmallMobile ? 'w-3 h-3' : isMobile ? 'w-3.5 h-3.5' : 'w-4 h-4 sm:w-6 sm:h-6 group-hover:scale-110'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C-.057 5.38 5.377 0 12 0c3.186.002 6.258 1.243 8.514 3.486 2.254 2.244 3.498 5.313 3.486 8.486-.002 6.624-5.38 12.057-12 12.057-1.98 0-3.928-.461-5.695-1.339L.057 24z" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Mobile-optimized bottom accent */}
        <div 
          className={`absolute left-1/2 transform -translate-x-1/2 rounded-full opacity-60 ${
            isMobile ? 'bottom-4 w-16 h-0.5' : 'bottom-6 w-20 h-1'
          }`}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), rgba(242,217,182,0.4), rgba(255,255,255,0.6), transparent)',
            boxShadow: isMobile ? '0 0 10px rgba(255, 255, 255, 0.3)' : '0 0 15px rgba(255, 255, 255, 0.4)'
          }}
          aria-hidden="true"
        />
      </header>

      <style jsx>{`
        @keyframes luxury-glow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%) skewX(-12deg); opacity: 0; }
        }
        
        @keyframes button-glow {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.2; }
        }
      `}</style>
    </>
  );
};

export default Hero;