import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaHeart, FaComment } from 'react-icons/fa';

const SocialFeed = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data with more realistic Instagram content
  const mockPosts = [
    {
      id: 1,
      image: "https://source.unsplash.com/random/800x800/?luxury-spa&1",
      likes: 324,
      comments: 18,
      caption: "Experience pure bliss with our signature massage treatment ✨ #luxuryspa #wellness",
    },
    {
      id: 2,
      image: "https://source.unsplash.com/random/800x800/?massage-spa&2",
      likes: 256,
      comments: 24,
      caption: "Tranquility awaits in our premium therapy rooms 🌿 #spatreatment #relaxation",
    },
    {
      id: 3,
      image: "https://source.unsplash.com/random/800x800/?spa-treatment&3",
      likes: 412,
      comments: 32,
      caption: "Indulge in our aromatherapy massage experience 🌺 #wellness #luxurytreatment",
    }
  ];

  useEffect(() => {
    // For actual Instagram integration:
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${process.env.REACT_APP_INSTAGRAM_TOKEN}`
        );
        const data = await response.json();
        setPosts(data.data);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
        setPosts(mockPosts); // Fallback to mock data
      } finally {
        setIsLoading(false);
      }
    };

    // Comment out mockData and use this for real Instagram integration
    // fetchInstagramPosts();

    // Using mock data for now
    setTimeout(() => {
      setPosts(mockPosts);
      setIsLoading(false);
    }, 1000);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#DADBD5]/70 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#DADBD5]/70 to-transparent"></div>
      <div className="absolute -left-32 top-1/2 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl"></div>
      <div className="absolute -right-32 top-1/3 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"></div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Follow Our Journey
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-pink-600 to-purple-600 rounded-full"></div>
          </motion.div>
          
          <motion.p
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Stay connected with us on Instagram for exclusive offers, behind-the-scenes moments, and wellness inspiration.
          </motion.p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="relative w-20 h-20">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-pink-200 rounded-full animate-ping"></div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-pink-600 rounded-full animate-spin"></div>
            </div>
          </div>
        ) : (
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                whileHover="hover"
                className="group relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-2xl"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src={post.image} 
                    alt={post.caption}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-end"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1 text-white">
                      <FaHeart className="text-pink-500" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white">
                      <FaComment className="text-pink-500" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <p className="text-white text-sm line-clamp-2">{post.caption}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.a
          href="https://instagram.com/youraccount"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 mx-auto block w-fit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            <FaInstagram className="text-xl" />
            <span className="font-semibold">View More on Instagram</span>
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default SocialFeed; 