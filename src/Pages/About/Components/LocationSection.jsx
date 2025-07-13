import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LocationSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.section
      className="py-16 bg-gray-900 mt-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5, type: 'spring', stiffness: 90 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
          {/* Image (first on sm, right on md, left on lg) */}
          <motion.div
            className="md:order-2 lg:order-1 flex justify-center md:justify-end lg:justify-start"
            initial={{ rotate: -90, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img 
              src="https://picsum.photos/400/300" 
              alt="Studio Location" 
              className="w-full h-64 object-cover rounded-md shadow-md"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }}
            />
          </motion.div>
          {/* Text (second on sm, left on md, right on lg) */}
          <motion.div
            className="md:order-1 lg:order-2 text-gray-300 prose prose-base sm:prose-lg"
            initial={{ x: -100, scale: 0.9, opacity: 0 }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-300 mb-4">Our Location</h2>
            <div className="border-t-2 border-amber-300 w-20 sm:w-24 mx-auto mb-6"></div>
            <div>
              <div className="md:flex md:flex-col hidden">
                <p className="leading-relaxed text-justify first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-bold first-letter:text-amber-300 first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3 mb-4">
                  DKSHOTIT STUDIO & PHOTOGRAPHY is conveniently located in Amakom, Kumasi. Traveling from the Amakom traffic light to Kejetia, you’ll find us on the right side of the road. Heading back from Kejetia to the Amakom traffic light, we are on the left. Our studio is easily accessible and situated in a lively area.
                </p>
                <p className="leading-relaxed text-justify first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-bold first-letter:text-amber-300 first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3">
                  Look for us two buildings after the Bank of Africa or right next to the Menka Memorial Hotel on your left. Our studio is housed in a distinctive three-storey building, with the photography space located on the second floor, offering a welcoming and creative environment. <a href="https://maps.google.com/maps?q=Amakom,+Kumasi,+Ghana" target="_blank" rel="noopener noreferrer">
                  <button  className="bg-amber-500 px-2 py- rounded  hover:bg-amber-600 transition-colors duration-300 hover:underline cursor-pointer">View on Map</button>
                  </a>
                </p>
              </div>
              <div className="md:hidden">
                <p className="leading-relaxed text-justify first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-bold first-letter:text-amber-300 first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3 mb-4">
                  DKSHOTIT STUDIO & PHOTOGRAPHY is conveniently located in Amakom, Kumasi. Traveling from the Amakom traffic light to Kejetia, you’ll find us on the right side of the road. Heading back from Kejetia to the Amakom traffic light, we are on the left. Our studio is easily accessible and situated in a lively area.
                </p>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {isExpanded && (
                    <p className="leading-relaxed text-justify first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-bold first-letter:text-amber-300 first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3 mt-4">
                      Look for us two buildings after the Bank of Africa or right next to the Menka Memorial Hotel on your left. Our studio is housed in a distinctive three-storey building, with the photography space located on the second floor, offering a welcoming and creative environment. <a href="https://maps.google.com/maps?q=Amakom,+Kumasi,+Ghana" target="_blank" rel="noopener noreferrer">
                  <button  className="bg-amber-500 px-2 py- rounded  hover:bg-amber-600 transition-colors duration-300 hover:underline cursor-pointer">View on Map</button>
                  </a>
                    </p>
                  )}
                </motion.div>
              </div>
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
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default LocationSection;