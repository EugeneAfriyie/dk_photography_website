import React from 'react';
import { motion } from 'framer-motion';

const MissionSection = () => {
  return (
    <motion.section
      className="py-16 bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5, type: 'spring', stiffness: 90 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text on the Left */}
          <div className="text-gray-300 prose prose-base sm:prose-lg">
            <h2 class="text-2xl sm:text-3xl font-serif font-bold text-amber-300 mb-4">Our Mission & Vision</h2>
            <div class="border-t-2 border-amber-300 w-20 sm:w-24 mx-auto mb-6"></div>
            <p className="leading-relaxed text-justify first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-bold first-letter:text-amber-300 first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3">
              We aim to capture life’s moments with skill and heart, dedicating ourselves to every frame. Our vision is to guide new photographers and protect cultural stories through creative innovation.
            </p>
          </div>
          {/* Image on the Right */}
          <div className="flex justify-end">
            <img 
              src="https://picsum.photos/400/300" 
              alt="Mission Vision Imagery" 
              className="w-full h-64 object-cover rounded-md shadow-md"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default MissionSection;