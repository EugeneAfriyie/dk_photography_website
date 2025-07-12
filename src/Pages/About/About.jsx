import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          className="relative bg-gray-900 rounded-xl overflow-hidden mb-16"
          style={{
            backgroundImage: 'ur[](https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&h=600&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative z-10">
            <div className="max-w-[80%] mx-auto p-6 md:p-8 lg:p-12 bg-gradient-to-r from-amber-900/80 via-gray-900/80 to-black/80 rounded-xl shadow-2xl">
              <motion.h1
                className="text-4xl md:text-5xl font-extrabold text-amber-300 mb-4 tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Welcome to Eugene Afriyie Photography
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-200 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Immerse yourself in a journey of artistic vision, where every snapshot celebrates life’s beauty from Kumasi, Ghana, to global horizons since 2017.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;