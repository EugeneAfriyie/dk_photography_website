import React from 'react';
import { motion } from 'framer-motion';

const FormModeToggle = ({ formMode, setFormMode }) => (
  <motion.div
    className="mb-8 text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <motion.button
      onClick={() => setFormMode('inquiry')}
      className={`px-6 py-3 rounded-l-lg ${formMode === 'inquiry' ? 'bg-amber-500' : 'bg-gray-700'} text-white font-semibold hover:bg-amber-600 transition-colors duration-300`}
      whileHover={{ scale: 1.1, backgroundColor: formMode === 'inquiry' ? '#f59e0b' : '#4b5563' }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      Inquiry
    </motion.button>
    <motion.button
      onClick={() => setFormMode('booking')}
      className={`px-6 py-3 rounded-r-lg ${formMode === 'booking' ? 'bg-amber-500' : 'bg-gray-700'} text-white font-semibold hover:bg-amber-600 transition-colors duration-300`}
      whileHover={{ scale: 1.1, backgroundColor: formMode === 'booking' ? '#f59e0b' : '#4b5563' }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      Booking
    </motion.button>
  </motion.div>
);

export default FormModeToggle;