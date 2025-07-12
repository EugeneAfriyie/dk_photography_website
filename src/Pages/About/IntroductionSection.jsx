// src/components/IntroductionSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const IntroductionSection = () => {
  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5, type: 'spring', stiffness: 90 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Image Container */}
        <motion.div
          className="h-64 bg-gray-800 rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop"
            alt="Eugene Afriyie at Work"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Story Container */}
        <motion.div
          className="p-6 bg-gray-800 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-amber-300 mb-4">Our Story</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Eugene Afriyie Photography began in 2017 in Kumasi, Ghana, with a single camera and a dream to capture life’s beauty. From humble beginnings photographing local sunsets, I’ve grown to document weddings, portraits, and events across the globe. My journey is fueled by a passion for storytelling through the lens, and I’m proud to train the next generation of photographers.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default IntroductionSection;