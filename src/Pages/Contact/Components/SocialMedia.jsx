import React from 'react';
import { motion } from 'framer-motion';

const SocialMedia = () => (
  <motion.section
    className="bg-gray-800 p-6 sm:p-8 rounded-lg mb-12 text-center"
    initial={{ opacity: 0, y: 50, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <motion.h2
      className="text-2xl sm:text-3xl font-bold mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
    >
      Connect With Us
    </motion.h2>
    <motion.div
      className="flex justify-center gap-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    >
      {['facebook', 'instagram', 'twitter'].map((social, index) => (
        <motion.a
          key={social}
          href={`https://${social}.com/dkshotitstudio`} // Replace with actual URLs
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl sm:text-3xl text-gray-400 hover:text-amber-300 transition duration-300"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          {social === 'facebook' ? '🇫' : social === 'instagram' ? '📸' : '🐦'}
        </motion.a>
      ))}
    </motion.div>
  </motion.section>
);

export default SocialMedia;