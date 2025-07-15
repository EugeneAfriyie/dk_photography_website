import React from 'react';
import { motion } from 'framer-motion';

const ContactInfo = () => (
  <motion.section
    className="bg-gray-900 p-6 sm:p-8 rounded-lg mb-12"
    initial={{ opacity: 0, y: 50, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <motion.h2
      className="text-2xl sm:text-3xl font-bold mb-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
    >
      Contact Information
    </motion.h2>
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center sm:text-left"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-400 mb-2">Address:</p>
        <p>DKSHOTIT Studio, Amakom, Kumasi, Ghana</p>
        <motion.a
          href="https://maps.google.com/maps?q=Amakom,+Kumasi,+Ghana"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-300 hover:underline mt-2 inline-block"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          View on Map
        </motion.a>
      </motion.div>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-400 mb-2">Phone:</p>
        <p>+233 123 456 789</p>
        <p className="text-gray-400 mb-2 mt-4">Email:</p>
        <p>info@dkshotit.com</p>
      </motion.div>
    </motion.div>
  </motion.section>
);

export default ContactInfo;