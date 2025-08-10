import React, { useState, useEffect, useCallback } from 'react';
import { Maximize2, X } from 'lucide-react';
import { aromat, balinese, cleopatra, couplesm, herbp, spcl, swedish, thaid } from '../assets';

const Gallery = ({  }) => {
  const fullImageCollection = [
    { 
      src: cleopatra, 
      alt: 'Tranquil Treatment Room', 
      category: 'interior',
      mood: 'serene',
      tags: ['treatment', 'calm']
    },
    { 
      src: spcl, 
      alt: 'Zen Relaxation Lounge', 
      category: 'wellness',
      mood: 'peaceful',
      tags: ['lounge', 'relaxation']
    },
    { 
      src: swedish, 
      alt: 'Massage Sanctuary', 
      category: 'therapy',
      mood: 'healing',
      tags: ['massage', 'healing']
    },
    { 
      src: balinese, 
      alt: 'Aromatherapy Corner', 
      category: 'wellness',
      mood: 'refreshing',
      tags: ['aromatherapy', 'sensory']
    },
    { 
      src: herbp, 
      alt: 'Wellness Courtyard', 
      category: 'exterior',
      mood: 'natural',
      tags: ['outdoor', 'garden']
    },
    { 
      src: couplesm, 
      alt: 'Meditation Space', 
      category: 'interior',
      mood: 'mindful',
      tags: ['meditation', 'peaceful']
    },
    { 
      src: thaid, 
      alt: 'Herbal Steam Room', 
      category: 'therapy',
      mood: 'cleansing',
      tags: ['steam', 'detox']
    },
    { 
      src: aromat, 
      alt: 'Hydration Lounge', 
      category: 'wellness',
      mood: 'rejuvenating',
      tags: ['hydration', 'refresh']
    }
  ];

  const bentoConfigurations = [
    // Configuration 1: Full Coverage Hero Layout
    {
      desktop: [
        { gridArea: '1 / 1 / 3 / 3', height: '320px' }, // Large hero
        { gridArea: '1 / 3 / 2 / 5', height: '154px' }, // Wide top right
        { gridArea: '2 / 3 / 3 / 4', height: '154px' }, // Square middle right
        { gridArea: '2 / 4 / 3 / 5', height: '154px' }, // Square bottom right
        { gridArea: '3 / 1 / 4 / 3', height: '154px' }, // Wide bottom left
        { gridArea: '3 / 3 / 4 / 5', height: '154px' }  // Wide bottom right
      ],
      mobile: [
        { gridArea: '1 / 1 / 3 / 3', height: '280px' }, // Large hero
        { gridArea: '3 / 1 / 4 / 2', height: '140px' }, // Square left
        { gridArea: '3 / 2 / 4 / 3', height: '140px' }, // Square right
        { gridArea: '4 / 1 / 5 / 3', height: '120px' }, // Wide bottom
        { gridArea: '5 / 1 / 6 / 2', height: '140px' }, // Square left
        { gridArea: '5 / 2 / 6 / 3', height: '140px' }  // Square right
      ]
    },
    
    // Configuration 2: Asymmetric Full Grid
    {
      desktop: [
        { gridArea: '1 / 1 / 2 / 3', height: '154px' }, // Wide top left
        { gridArea: '1 / 3 / 2 / 5', height: '154px' }, // Wide top right
        { gridArea: '2 / 1 / 4 / 2', height: '320px' }, // Tall left
        { gridArea: '2 / 2 / 3 / 4', height: '154px' }, // Wide middle
        { gridArea: '3 / 2 / 4 / 3', height: '154px' }, // Square bottom middle
        { gridArea: '2 / 4 / 4 / 5', height: '320px' }  // Tall right
      ],
      mobile: [
        { gridArea: '1 / 1 / 2 / 3', height: '120px' }, // Wide top
        { gridArea: '2 / 1 / 4 / 2', height: '280px' }, // Tall left
        { gridArea: '2 / 2 / 3 / 3', height: '140px' }, // Square top right
        { gridArea: '3 / 2 / 4 / 3', height: '140px' }, // Square middle right
        { gridArea: '4 / 1 / 5 / 3', height: '120px' }, // Wide bottom
        { gridArea: '5 / 1 / 6 / 3', height: '120px' }  // Wide bottom 2
      ]
    },

    // Configuration 3: Mosaic Complete Grid
    {
      desktop: [
        { gridArea: '1 / 1 / 3 / 2', height: '320px' }, // Tall left
        { gridArea: '1 / 2 / 2 / 4', height: '154px' }, // Wide top center
        { gridArea: '1 / 4 / 3 / 5', height: '320px' }, // Tall right
        { gridArea: '2 / 2 / 3 / 3', height: '154px' }, // Square bottom center left
        { gridArea: '2 / 3 / 3 / 4', height: '154px' }, // Square bottom center right
        { gridArea: '3 / 1 / 4 / 5', height: '154px' }  // Wide bottom full
      ],
      mobile: [
        { gridArea: '1 / 1 / 3 / 2', height: '280px' }, // Tall left
        { gridArea: '1 / 2 / 2 / 3', height: '140px' }, // Square top right
        { gridArea: '2 / 2 / 3 / 3', height: '140px' }, // Square middle right
        { gridArea: '3 / 1 / 4 / 3', height: '120px' }, // Wide center
        { gridArea: '4 / 1 / 5 / 2', height: '140px' }, // Square bottom left
        { gridArea: '4 / 2 / 5 / 3', height: '140px' }  // Square bottom right
      ]
    },

    // Configuration 4: Balanced Grid Layout
    {
      desktop: [
        { gridArea: '1 / 1 / 2 / 3', height: '154px' }, // Wide top left
        { gridArea: '1 / 3 / 3 / 4', height: '320px' }, // Tall center
        { gridArea: '1 / 4 / 2 / 5', height: '154px' }, // Square top right
        { gridArea: '2 / 1 / 3 / 2', height: '154px' }, // Square middle left
        { gridArea: '2 / 2 / 3 / 3', height: '154px' }, // Square middle center
        { gridArea: '2 / 4 / 3 / 5', height: '154px' }  // Square middle right
      ],
      mobile: [
        { gridArea: '1 / 1 / 2 / 3', height: '120px' }, // Wide top
        { gridArea: '2 / 1 / 4 / 2', height: '280px' }, // Tall left
        { gridArea: '2 / 2 / 3 / 3', height: '140px' }, // Square top right
        { gridArea: '3 / 2 / 4 / 3', height: '140px' }, // Square bottom right
        { gridArea: '4 / 1 / 5 / 3', height: '120px' }, // Wide bottom
        { gridArea: '5 / 1 / 6 / 3', height: '120px' }  // Wide bottom full
      ]
    }
  ];

  const [currentLayout, setCurrentLayout] = useState([]);
  const [expandedImage, setExpandedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Optimized shuffle function
  const shuffleArray = useCallback((array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  // Generate new layout
  const generateLayout = useCallback(() => {
    setIsLoading(true);
    
    const shuffledImages = shuffleArray(fullImageCollection);
    const randomConfig = bentoConfigurations[Math.floor(Math.random() * bentoConfigurations.length)];
    const layout = isMobile ? randomConfig.mobile : randomConfig.desktop;
    
    const newLayout = shuffledImages.slice(0, layout.length).map((image, index) => ({
      ...image,
      ...layout[index],
      id: `${Date.now()}-${index}`
    }));
    
    setCurrentLayout(newLayout);
    
    // Simulate loading delay for smooth transition
    setTimeout(() => setIsLoading(false), 300);
  }, [shuffleArray, isMobile]);

  // Handle resize
  const handleResize = useCallback(() => {
    const mobile = window.innerWidth < 768;
    if (mobile !== isMobile) {
      setIsMobile(mobile);
    }
  }, [isMobile]);

  // Effects
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    generateLayout();
  }, [generateLayout]);

  useEffect(() => {
    const interval = setInterval(generateLayout, 15000);
    return () => clearInterval(interval);
  }, [generateLayout]);

  // Close modal on escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setExpandedImage(null);
    };
    
    if (expandedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }
  }, [expandedImage]);

  return (
    <div className="bg-transparent py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-semibold font-MongolianBaiti text-white mb-12 text-center tracking-wider opacity-80">
          Sanctuary Moments
        </h2>

        {/* Gallery Grid */}
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 bg-slate-800/50 backdrop-blur-sm z-10 flex items-center justify-center rounded-2xl">
              <div className="flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-white rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          )}
          
          <div 
            className={`
              grid gap-4 transition-opacity duration-300
              ${isMobile 
                ? 'grid-cols-2 auto-rows-min' 
                : 'grid-cols-4 auto-rows-min'
              }
              ${isLoading ? 'opacity-50' : 'opacity-100'}
            `}
            style={{
              gridTemplateRows: isMobile ? 'repeat(6, minmax(120px, auto))' : 'repeat(3, minmax(154px, auto))'
            }}
          >
            {currentLayout.map((image, index) => (
              <div
                key={image.id}
                className="
                  relative group overflow-hidden rounded-2xl
                  transition-all duration-300 ease-out
                  hover:scale-[1.02] hover:shadow-xl
                  cursor-pointer
                "
                style={{ 
                  gridArea: image.gridArea,
                  height: image.height
                }}
                onClick={() => setExpandedImage(image)}
              >
                {/* Image */}
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-2xl"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                  <button 
                    className="bg-white/60 hover:bg-white/80 p-3 rounded-full transition-all"
                  >
                    <Maximize2 className="text-gray-700" size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Manual Refresh Button */}
        <div className="text-center mt-12">
          <button
            onClick={generateLayout}
            disabled={isLoading}
            className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-300 disabled:opacity-50"
          >
            {isLoading ? 'Refreshing...' : 'Refresh Layout'}
          </button>
        </div>
      </div>

      {/* Expanded Image Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-8"
          onClick={() => setExpandedImage(null)}
        >
          <div className="max-w-6xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl relative">
            <img 
              src={expandedImage.src} 
              alt={expandedImage.alt}
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
              <h3 className="text-2xl font-light">{expandedImage.alt}</h3>
              <p className="text-sm opacity-80">
                {expandedImage.mood} {expandedImage.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;