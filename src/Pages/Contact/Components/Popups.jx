import React from 'react';
import { motion } from 'framer-motion';

const Popups = ({
  showPopup,
  handleClosePopup,
  isSubmitted,
  formData,
  showConfirm,
  handleCloseConfirm,
  handleConfirmSubmit,
  showTermsPopup,
  handleCloseTermsPopup,
  handleAcceptTerms,
  showNoteLimitAlert,
  handleCloseNoteLimitAlert,
}) => (
  <>
    {/* Success Popup */}
    {showPopup && (
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
          <button
            onClick={handleClosePopup}
            className="absolute top-2 right-2 text-gray-400 hover:text-white w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-amber-500 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
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
            transition={{ duration: 0.5 }}
          >
            Booking Confirmed Successfully!
          </motion.h3>
          <motion.p
            className="text-gray-300 text-sm sm:text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Thank you, {formData.name || 'valued client'}, for booking with DKSHOTIT Studio & Photography. We look forward to capturing your special moments. Check your email for confirmation details!
          </motion.p>
        </motion.div>
      </motion.div>
    )}

    {/* Confirmation Popup */}
    {showConfirm && (
      <motion.div
        className="fixed inset-0 bg-black/10 backdrop-blur-md flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg max-w-md sm:max-w-lg w-full text-center relative"
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={handleCloseConfirm}
            className="absolute top-2 right-2 text-gray-400 hover:text-white w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-amber-500 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <motion.h3
            className="text-xl sm:text-2xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Confirm Booking Details
          </motion.h3>
          <motion.div
            className="text-left text-gray-300 space-y-2 max-h-64 overflow-y-auto p-2 sm:p-4 scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p><strong>Name:</strong> {formData.name || 'Not provided'}</p>
            <p><strong>Email:</strong> {formData.email || 'Not provided'}</p>
            <p><strong>Phone:</strong> {formData.phone || 'Not provided'}</p>
            <p><strong>Notes:</strong> {formData.notes || 'None'}</p>
            <p><strong>Package:</strong> {selectedPackage.title} - {selectedPackage.price}</p>
          </motion.div>
          <motion.div
            className="mt-4 sm:mt-6 space-x-2 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              onClick={handleConfirmSubmit}
              className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 sm:px-6 sm:py-3 rounded-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Confirm
            </motion.button>
            <motion.button
              onClick={handleCloseConfirm}
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 sm:px-6 sm:py-3 rounded-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cancel
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    )}

    {/* Terms and Conditions Popup */}
    {showTermsPopup && (
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
          exit={{ scale: 0.8, y: 50}}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={handleCloseTermsPopup}
            className="absolute top-2 right-2 text-gray-400 hover:text-white w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-amber-500 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <motion.h3
            className="text-xl sm:text-2xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Terms and Conditions
          </motion.h3>
          <motion.div
            className="text-gray-300 text-sm sm:text-base max-h-64 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>Please review our terms: All bookings are subject to availability. A 50% deposit is required to secure your date. Cancellations within 7 days of the event incur a 25% fee. Full payment is due 48 hours before the event. We reserve the right to reschedule due to unforeseen circumstances.</p>
          </motion.div>
          <motion.div
            className="mt-6 space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              onClick={handleAcceptTerms}
              className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Accept
            </motion.button>
            <motion.button
              onClick={handleCloseTermsPopup}
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Decline
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    )}

    {/* Note Limit Alert */}
    {showNoteLimitAlert && (
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
          <button
            onClick={handleCloseNoteLimitAlert}
            className="absolute top-2 right-2 text-gray-400 hover:text-white w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-amber-500 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <svg
            className="w-12 h-12 text-yellow-400 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <motion.h3
            className="text-xl sm:text-2xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Note Limit Reached
          </motion.h3>
          <motion.p
            className="text-gray-300 text-sm sm:text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The maximum limit of 250 characters has been reached for the Notes field. Please shorten your text or remove some content.
          </motion.p>
        </motion.div>
      </motion.div>
    )}
  </>
);

export default Popups;