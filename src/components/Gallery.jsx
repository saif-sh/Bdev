import React, { useState, useEffect } from 'react';
import { Maximize2 } from 'lucide-react';
import { aromat, balinese, cleopatra, couplesm, herbp, spcl, swedish, thaid } from '../assets';

const Gallery = () => {
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
    // Configuration 1: Balanced Full Coverage Layout
    [
      { size: 'col-span-4 row-span-3', aspectRatio: 'aspect-[16/9]', prominence: 'primary' },
      { size: 'col-span-2 row-span-2', aspectRatio: 'aspect-square', prominence: 'secondary' },
      { size: 'col-span-2 row-span-1', aspectRatio: 'aspect-[2/1]', prominence: 'tertiary' },
      { size: 'col-span-1', aspectRatio: 'aspect-[4/3]', prominence: 'accent' },
      { size: 'col-span-1', aspectRatio: 'aspect-[3/4]', prominence: 'accent' }
    ],
  
    // Configuration 2: Dynamic Spatial Harmony
    [
      { size: 'col-span-3 row-span-3', aspectRatio: 'aspect-[4/3]', prominence: 'hero' },
      { size: 'col-span-1 row-span-2', aspectRatio: 'aspect-[3/7]', prominence: 'secondary' },
      { size: 'col-span-2 row-span-1', aspectRatio: 'aspect-video', prominence: 'tertiary' },
      { size: 'col-span-1 row-span-1', aspectRatio: 'aspect-square', prominence: 'accent' },
      { size: 'col-span-1', aspectRatio: 'aspect-[16/9]', prominence: 'accent' }
    ],
  
    // Configuration 3: Elegant Asymmetric Coverage
    [
      { size: 'col-span-4 row-span-2', aspectRatio: 'aspect-[2/1]', prominence: 'primary' },
      { size: 'col-span-1 row-span-2', aspectRatio: 'aspect-[3/4]', prominence: 'secondary' },
      { size: 'col-span-2 row-span-1', aspectRatio: 'aspect-video', prominence: 'tertiary' },
      { size: 'col-span-1', aspectRatio: 'aspect-square', prominence: 'accent' }
    ]
  ];

  const [currentImages, setCurrentImages] = useState([]);
  const [expandedImage, setExpandedImage] = useState(null);

  const selectBentoImages = () => {
    const shuffled = fullImageCollection.sort(() => 0.5 - Math.random()).slice(0, 5);
    const randomConfig = bentoConfigurations[Math.floor(Math.random() * bentoConfigurations.length)];

    return shuffled.map((image, index) => ({
      ...image,
      ...randomConfig[index % randomConfig.length]
    }));
  };

  useEffect(() => {
    const updateImages = () => {
      setCurrentImages(selectBentoImages());
    };

    updateImages();
    const intervalId = setInterval(updateImages, 20000);
    window.addEventListener('resize', updateImages);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', updateImages);
    };
  }, []);

  return (
    <div className="bg-transparent py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold font-MongolianBaiti text-white mb-12 text-center tracking-wider opacity-80">
          Sanctuary Moments
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {currentImages.map((image, index) => (
            <div 
              key={index} 
              className={`
                ${image.size} 
                ${image.aspectRatio}
                relative group overflow-hidden rounded-2xl 
                transition-all duration-300 
                hover:shadow-xl
                hover:scale-[1.02]
              `}
            >
              {image.textOverlay && (
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 text-white">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-light mb-2">{image.alt}</h3>
                    <p className="text-sm opacity-80">{image.mood} {image.category}</p>
                  </div>
                </div>
              )}

              <div className="absolute inset-0 z-10 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button 
                  onClick={() => setExpandedImage(image)}
                  className="bg-white/60 hover:bg-white/80 p-3 rounded-full mr-4 transition-all"
                >
                  <Maximize2 className="text-gray-700" size={20} />
                </button>
              </div>

              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>

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
    </div>
  );
};

export default Gallery;
