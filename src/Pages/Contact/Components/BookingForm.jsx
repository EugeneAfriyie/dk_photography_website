import React from 'react';
import { motion } from 'framer-motion';

const BookingForm = ({ formData, handleChange, handleSubmit, validationErrors, errorMessage, selectedPackage, setSelectedPackage, acceptedTerms, packages }) => (
  <>
    <motion.h2
      className="text-2xl sm:text-3xl font-bold mb-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
    >
      Book a Package
    </motion.h2>
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Package Selection */}
      <div className="space-y-2">
        <label htmlFor="package" className="block text-sm font-medium text-white">
          Select a Package <span className="text-red-500">*</span>
        </label>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <select
            name="package"
            id="package"
            value={selectedPackage.title}
            onChange={(e) => setSelectedPackage(packages.find(p => p.title === e.target.value) || { title: 'Select a Package', price: '' })}
            className={`w-full bg-[#111] text-white rounded-xl px-4 py-3 outline-none ${validationErrors.package ? 'border-2 border-red-500' : ''}`}
            required
          >
            <option value="Select a Package" disabled>Select a Package</option>
            {packages.map((pkg) => (
              <option key={pkg.title} value={pkg.title}>
                {pkg.title} - {pkg.price}
              </option>
            ))}
          </select>
        </motion.div>
      </div>

      {/* Name */}
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Your full name <span className="text-red-500">*</span>
        </label>
        <motion.div
          className={`flex items-center bg-[#111] rounded-xl px-4 py-3 ${validationErrors.name ? 'border-2 border-red-500' : ''}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <span className="mr-3 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5.121 17.804A9 9 0 1118.88 6.196 9 9 0 015.12 17.804zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="bg-transparent flex-1 outline-none text-white placeholder-gray-500"
            required
          />
        </motion.div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email address <span className="text-red-500">*</span>
        </label>
        <motion.div
          className={`flex items-center bg-[#111] rounded-xl px-4 py-3 ${validationErrors.email ? 'border-2 border-red-500' : ''}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="mr-3 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M16 12H8m0 0l-4 4m4-4l-4-4m8 0h8v16H4V4h8z" />
            </svg>
          </span>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="bg-transparent flex-1 outline-none text-white placeholder-gray-500"
            required
          />
        </motion.div>
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium text-white">
          Phone number <span className="text-red-500">*</span>
        </label>
        <motion.div
          className={`flex items-center bg-[#111] rounded-xl px-4 py-3 ${validationErrors.phone ? 'border-2 border-red-500' : ''}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="mr-3 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </span>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number (e.g., +1234567890)"
            className="bg-transparent flex-1 outline-none text-white placeholder-gray-500"
            required
          />
        </motion.div>
      </div>

      {/* Notes */}
      <div className="space-y-2">
        <label htmlFor="notes" className="block text-sm font-medium text-white">
          Notes
        </label>
        <motion.div
          className="flex items-start bg-[#111] rounded-xl px-4 py-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="mr-3 text-gray-400 pt-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </span>
          <textarea
            name="notes"
            id="notes"
            placeholder="Add any additional notes or requests (max 250 characters)"
            value={formData.notes}
            onChange={handleChange}
            className="bg-transparent flex-1 outline-none text-white placeholder-gray-500 h-20 resize-y overflow-y-auto max-h-40 scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-gray-900 w-full"
            maxLength={250}
          ></textarea>
        </motion.div>
      </div>

      {/* Amount Due */}
      <motion.div
        className="bg-gray-700 p-4 rounded-lg text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg font-bold text-white mb-2">Amount Due</h3>
        <p className="text-amber-300 text-xl">{selectedPackage.price || 'N/A'}</p>
      </motion.div>

      {/* Terms and Conditions */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            checked={acceptedTerms}
            onChange={handleChange}
            className={`h-4 w-4 ${!acceptedTerms && validationErrors.name ? 'border-2 border-red-500' : 'text-amber-500 focus:ring-amber-500 border-gray-600'} rounded`}
            required
          />
          <label htmlFor="terms" className="text-sm text-gray-300">
            I accept the{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); setShowTermsPopup(true); }} className="text-amber-300 hover:underline">
              Terms and Conditions
            </a>
          </label>
        </div>
      </div>

      {/* Submit */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        viewport={{ once: true }}
      >
        <motion.button
          type="button"
          onClick={handleSubmit}
          className="bg-[#7c3aed] hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-xl transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Request Booking
        </motion.button>
        <p className="text-gray-400 text-sm mt-2">
          Check the <a href="/services" className="text-amber-300 hover:underline">service page</a> for package details or{' '}
          <a href="tel:+233123456789" className="text-amber-300 hover:underline">call</a>{' '}
          /{' '}
          <a href="https://wa.me/233123456789" className="text-amber-300 hover:underline">WhatsApp</a> your photographer for more details.
        </p>
      </motion.div>

      {/* Error Message */}
      {errorMessage && (
        <motion.div
          className="text-red-500 text-sm mt-4 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {errorMessage}
        </motion.div>
      )}
    </div>
  </>
);

export default BookingForm;