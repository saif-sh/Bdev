import React, { useEffect, useState, useRef } from 'react'
import { heroimg } from '../assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isTextLocked, setIsTextLocked] = useState(true)
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current

    const handleWheel = (e) => {
      if (isTextLocked) {
        e.preventDefault()
        
        setScrollPosition(prev => {
          const newPosition = Math.max(0, Math.min(800, prev + e.deltaY * 0.8))
          if (newPosition >= 800) {
            setIsTextLocked(false)
          }
          return newPosition
        })
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [isTextLocked])

  const titleTransform = `translate(-50%, ${Math.max(-100, 180 - scrollPosition * 0.4)}%)`
  const subtitleTransform = `translate(-50%, ${Math.max(-100, 270 - scrollPosition * 0.4)}%)`
  const ctaTransform = `translate(-50%, ${Math.max(-100, 300 - scrollPosition * 0.4)}%)`

  // Calculate overlay opacity based on scroll position
  const overlayOpacity = 0.4 + (scrollPosition / 800) * 0.4  // Will go from 0.4 to 0.8

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    // Phone number format: international code without '+' symbol
    const phoneNumber = '919820551300'; // Updated WhatsApp number
    
    // Create the message template
    const message = encodeURIComponent(
      `Hi, I would like to book a massage session.\n\n` +
      `Please help me schedule an appointment.`
    );

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      ref={containerRef}
      className="relative mx-2 sm:mx-4 md:mx-8 lg:mx-16 my-2 sm:my-4 rounded-2xl overflow-hidden h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]"
    >
      {/* Background Image Container */}
      <div className="w-full h-full rounded-2xl overflow-hidden">
        <img 
          src={heroimg} 
          alt="Relaxing spa atmosphere" 
          className="w-full h-full object-cover origin-center transform transition-all duration-300"
          style={{
            objectPosition: 'center 65%'
          }}
        />
      </div>
      
      {/* Dynamic overlay with gradient */}
      <div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-b from-black via-black/80 to-black/60
          transition-opacity duration-300"
        style={{
          opacity: overlayOpacity
        }}
      ></div>
      
      {/* Additional static gradient overlay for consistent look */}
      <div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-b from-black/30 via-transparent to-transparent
          pointer-events-none"
      ></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 lg:px-16">
        {/* Main Title */}
        <div 
          className="absolute left-1/2 w-full z-20 text-center"
          style={{ transform: titleTransform }}
        >
          <h1 
            className="font-MongolianBaiti text-4xl sm:text-5xl md:text-7xl lg:text-[120px] xl:text-[160px] 
              tracking-[0.15em] sm:tracking-[0.2em] leading-[0.9] text-[#F2D9B6] drop-shadow-2xl
              [text-shadow:_2px_2px_8px_rgba(0,0,0,0.3)]
              px-2 sm:px-4 md:px-8"
          >
            BELLA VIDA
          </h1>
        </div>
        
        {/* Subtitle Group */}
        <div 
          className="absolute left-1/2 text-center w-full mt-24 sm:mt-32 md:mt-40 lg:mt-48 px-4"
          style={{ transform: subtitleTransform }}
        >
          <h2 
            className="font-MonotypeCorsiva text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 sm:mb-4 
              text-[#F2D9B6] [text-shadow:_1px_1px_4px_rgba(0,0,0,0.2)]
              tracking-wide leading-relaxed"
          >
            Surrender To Ultimate Relaxation
          </h2>
          
          <h3 
            className="font-SpaceGrotesk text-xs sm:text-sm md:text-base 
              tracking-[0.4em] sm:tracking-[0.6em] uppercase text-[#F2D9B6] 
              font-light leading-loose
              [text-shadow:_1px_1px_2px_rgba(0,0,0,0.15)]"
          >
            All Days of the Week
          </h3>
        </div>
        
        {/* CTA Button */}
        <div 
          className="absolute left-1/2 text-center w-full mt-48 sm:mt-64 md:mt-72 lg:mt-80 px-4"
          style={{ transform: ctaTransform }}
        >
          <button
            onClick={handleWhatsAppClick}
            className="group relative inline-flex items-center justify-center
              mt-4 sm:mt-8 px-8 sm:px-12 py-3 sm:py-4 bg-[#F2D9B6]/90 text-black/80
              font-SpaceGrotesk text-xs sm:text-sm tracking-[0.2em] uppercase
              rounded-lg shadow-lg 
              overflow-hidden transition-all duration-500 ease-out
              hover:shadow-[0_5px_15px_rgba(242,217,182,0.35)]
              hover:bg-[#F2D9B6] hover:text-black
              before:absolute before:inset-0 
              before:border-2 before:border-[#F2D9B6]/40
              before:rounded-lg before:scale-105
              before:transition-transform before:duration-500
              hover:before:scale-100"
          >
            <span className="relative flex items-center gap-2">
              Book Your Session
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-500 group-hover:translate-x-1" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                {/* WhatsApp icon */}
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </span>
          </button>
        </div>
        
        {/* Scroll Indicator - only show on larger screens */}
        {isTextLocked && (
          <div 
            className="absolute top-24 right-4 sm:right-8 md:right-12 z-20 hidden md:flex flex-col items-center gap-2
              text-[#F2D9B6] transition-opacity duration-300 ease-out"
          >
            <p className="font-MonotypeCorsiva text-xl md:text-2xl rotate-90 mb-4
              tracking-wider [text-shadow:_1px_1px_2px_rgba(0,0,0,0.2)]">
              Scroll Up
            </p>
            <svg 
              className="w-6 h-6 rotate-[270deg] animate-bounce opacity-80" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </div>
        )}
      </div>
      
      {/* Decorative Wave */}
      <div className="absolute bottom-0 w-full z-30">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="#E5E6E2" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64V120H0Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Hero 