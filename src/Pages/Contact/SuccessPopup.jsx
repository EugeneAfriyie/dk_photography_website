// Eugene Afriyie UEB3502023
import React from 'react';
import { motion } from 'framer-motion';

const SuccessPopup = ({
  show,
  onClose,
  formMode,
  formData,
  selectedPackage,
}) => {
  if (!show) return null;

  const message =
    formMode === 'inquiry'
      ? `Inquiry Submitted Successfully!`
      : `Booking for ${selectedPackage.title} Confirmed!`;

  const description = `Thank you, ${
    formData.name?.trim() || 'valued customer'
  }, for ${
    formMode === 'inquiry'
      ? `submitting your inquiry about "${formData.subject || 'your request'}"`
      : `booking the ${selectedPackage.title}`
  } with DKSHOTIT Studio & Photography. We look forward to assisting you. Check your email for confirmation details!`;

  return (
    <motion.div
      className="fixed inset-0 bg-black/10 backdrop-blur-md flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg max-w-md w-full text-center relative"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-amber-500 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>

        <svg
          className="w-12 h-12 text-green-400 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>

        <motion.h3
          className="text-xl sm:text-2xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {message}
        </motion.h3>

        <motion.p
          className="text-gray-300 text-sm sm:text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default SuccessPopup;
