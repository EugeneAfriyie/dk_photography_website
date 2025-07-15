import React from 'react';
import { motion } from 'framer-motion';

const ContactBanner = () => (
  <motion.section
    className="relative rounded-lg mb-12 overflow-hidden"
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    viewport={{ once: true }}
    style={{ height: '400px', minHeight: '250px', position: 'relative' }}
  >
    <motion.img
      src="https://picsum.photos/800/400"
      alt="Contact Banner"
      className="absolute top-0 left-0 w-full h-full object-cover"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
    <motion.div
      className="relative z-10 h-full flex items-center justify-center text-center px-4 py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          className="text-gray-200 text-lg sm:text-xl md:text-2xl drop-shadow-md"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          We’d love to hear from you! Reach out for bookings or inquiries.
        </motion.p>
      </motion.div>
    </motion.div>
  </motion.section>
);

export default ContactBanner;