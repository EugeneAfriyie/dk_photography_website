import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LocationSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.section
      className="py-16 bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5, type: 'spring', stiffness: 90 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
          {/* Image (first on sm, right on md, left on lg) */}
          <div className="md:order-2 lg:order-1 flex justify-center md:justify-end lg:justify-start">
            <img 
              src="https://picsum.photos/400/300" 
              alt="Studio Location" 
              className="w-full h-64 object-cover rounded-md shadow-md"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }}
            />
          </div>
          {/* Text (second on sm, left on md, right on lg) */}
          <div className="md:order-1 lg:order-2 text-gray-300 prose prose-base sm:prose-lg">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-300 mb-4">Our Location</h2>
            <div className="border-t-2 border-amber-300 w-20 sm:w-24 mx-auto mb-6"></div>
            <div>
              <p className="leading-relaxed text-justify first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-bold first-letter:text-amber-300 first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3 mb-4">
                DKSHOTIT STUDIO & PHOTOGRAPHY is proudly located in the heart of Amakom, Kumasi, offering a vibrant and accessible space for all your photography needs. Our studio is nestled in a bustling community, making it easy to visit for photoshoots and consultations.
              </p>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isExpanded && (
                  <p className="leading-relaxed text-justify first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-bold first-letter:text-amber-300 first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3 mt-4">
                    Conveniently situated near major landmarks, our location at [specific address, e.g., 12 Amakom Road] provides ample parking and is just a short drive from central Kumasi. We invite you to experience our welcoming environment, designed to inspire creativity and comfort for every client.
                  </p>
                )}
              </motion.div>
              <div className="mt-4">
                <motion.button
                  className="text-amber-300 hover:text-amber-100 transition duration-300 md:hidden"
                  onClick={() => setIsExpanded(!isExpanded)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isExpanded ? 'See Less' : 'See More'}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default LocationSection;