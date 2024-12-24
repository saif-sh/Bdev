import React from "react";

const Massagelist = () => {
  const massages = [
    {
      id: 1,
      title: "Massage 1",
      description: "Lorem ipsum dolor sit amet consectetur. Vestibulum sapien lacus mattis vitae. Faucibus leo vestibulum leo vel interdum. Cursus arcu ac praesent amet urna eget quis. Ac massa velit commodo nibh leo congue quisque ultrices.",
      image: "/path-to-your-massage-1-image.jpg"
    },
    {
      id: 2,
      title: "Massage 2",
      description: "Lorem ipsum dolor sit amet consectetur. Vestibulum sapien lacus mattis vitae. Faucibus leo vestibulum leo vel interdum. Cursus arcu ac praesent amet urna eget quis. Ac massa velit commodo nibh leo congue quisque ultrices.",
      image: "/path-to-your-massage-2-image.jpg"
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#CED2C4]">
      {/* Curved background - top */}
      <div className="absolute top-0 left-0 right-0 h-32">
        <svg className="w-full h-full" viewBox="0 0 1440 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,128 L1440,128 L1440,0 C1440,0 1320,64 720,64 C120,64 0,0 0,0 L0,128 Z" fill="#CED2C4"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-6xl">
        {massages.map((massage, index) => (
          <div 
            key={massage.id}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
              items-center mb-16 sm:mb-24 md:mb-32 gap-8`}
          >
            {/* Text Content */}
            <div className={`flex-1 text-center md:text-left ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
              <h2 className="text-3xl sm:text-4xl font-playfair mb-4 sm:mb-6 text-gray-800 italic">
                {massage.title}
              </h2>
              <p className="text-gray-600 leading-relaxed italic">
                {massage.description}
              </p>
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-center mt-8 md:mt-0">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden 
                border-4 border-white shadow-xl">
                <img
                  src={massage.image}
                  alt={massage.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Curved background - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <svg className="w-full h-full" viewBox="0 0 1440 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L1440,0 L1440,128 C1440,128 1320,64 720,64 C120,64 0,128 0,128 L0,0 Z" fill="#CED2C4"/>
        </svg>
      </div>
    </div>
  );
};

export default Massagelist;
