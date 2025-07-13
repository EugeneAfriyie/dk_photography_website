import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MissionSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.section
      className="py-8 bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5, type: 'spring', stiffness: 90 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image (first on sm screens, right on md and up) */}
          <div className="md:order-2 flex justify-center md:justify-end">
            <img 
              src="https://picsum.photos/400/300" 
              alt="Mission Vision Imagery" 
              className="w-full h-64 object-cover rounded-md shadow-md"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }}
            />
          </div>
          {/* Text (second on sm screens, left on md and up) */}
          <div className="md:order-1 text-gray-300 prose prose-base sm:prose-lg">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-300 mb-4">Our Mission & Vision</h2>
            <div className="border-t-2 border-amber-300 w-20 sm:w-24 mx-auto mb-6"></div>
            <div>
              <p className="leading-relaxed text-justify first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-bold first-letter:text-amber-300 first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3 mb-4">
                We aim to capture life’s moments with skill and heart, dedicating ourselves to every frame. With each click, we strive to transform fleeting scenes into lasting memories, blending artistry with a deep commitment to our craft.
              </p>
              {isExpanded && (
                <p className="leading-relaxed text-justify first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-bold first-letter:text-amber-300 first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3 mt-4">
                  Our vision is to guide new photographers, nurturing their talents with mentorship and inspiration. Beyond that, we seek to protect cultural stories, preserving heritage through innovative techniques that honor the past while shaping the future.
                </p>
              )}
              <div className="mt-4">
                <button
                  className="text-amber-300 hover:text-amber-100 transition duration-300 md:hidden"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? 'See Less' : 'See More'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default MissionSection;