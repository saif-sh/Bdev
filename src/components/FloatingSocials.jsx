import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const FloatingSocials = () => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-6 z-50">
      <a
        href="https://wa.me/919820551300"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp size={32} className="transform group-hover:rotate-12 transition-transform duration-300" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>
      <a
        href="https://www.instagram.com/bellavidafamilyspa/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white p-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <FaInstagram size={32} className="transform group-hover:rotate-12 transition-transform duration-300" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Follow on Instagram
        </span>
      </a>
    </div>
  );
};

export default FloatingSocials; 