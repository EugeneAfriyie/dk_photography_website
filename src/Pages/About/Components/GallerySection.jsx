import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const GallerySection = () => {
  return (
    <motion.section
      className="py-16 bg-gray-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['https://picsum.photos/400/300', 'https://picsum.photos/400/301', 'https://picsum.photos/400/302'].map((src, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-64 object-cover" />
            </motion.div>
          ))}
        </div>
        <motion.button
          className="mt-8 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/Gallery">View All</Link>
        </motion.button>
      </div>
    </motion.section>
  );
};

export default GallerySection;