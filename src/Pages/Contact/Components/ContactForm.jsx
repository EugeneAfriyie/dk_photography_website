import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = ({ formData, handleChange, handleSubmit, validationErrors, errorMessage }) => (
  <>
    <motion.h2
      className="text-2xl sm:text-3xl font-bold mb-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
    >
      Send Us a Message
    </motion.h2>
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Your full name <span className="text-red-500">*</span>
        </label>
        <motion.div
          className={`flex items-center bg-[#111] rounded-xl px-4 py-3 ${validationErrors.name ? 'border-2 border-red-500' : ''}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
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
          transition={{ duration: 0.6, delay: 0.4 }}
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
          transition={{ duration: 0.6, delay: 0.5 }}
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

      {/* Subject */}
      <div className="space-y-2">
        <label htmlFor="subject" className="block text-sm font-medium text-white">
          Subject <span className="text-red-500">*</span>
        </label>
        <motion.div
          className={`flex items-center bg-[#111] rounded-xl px-4 py-3 ${validationErrors.subject ? 'border-2 border-red-500' : ''}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="mr-3 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </span>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter your subject"
            className="bg-transparent flex-1 outline-none text-white placeholder-gray-500"
            required
          />
        </motion.div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-white">
          Message <span className="text-red-500">*</span>
        </label>
        <motion.div
          className={`flex items-start bg-[#111] rounded-xl px-4 py-3 ${validationErrors.message ? 'border-2 border-red-500' : ''}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="mr-3 text-gray-400 pt-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <textarea
            name="message"
            id="message"
            placeholder="Describe your message"
            value={formData.message}
            onChange={handleChange}
            className="bg-transparent flex-1 outline-none text-white placeholder-gray-500 h-24 resize-none w-full"
            required
          ></textarea>
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
          transition={{ duration: 0.6, delay: 0.8 }}
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

      {/* Attachment */}
      <div className="space-y-2">
        <label htmlFor="attachment" className="block text-sm font-medium text-white">
          Attachment (e.g., Photos)
        </label>
        <motion.div
          className="flex items-center bg-[#111] rounded-xl px-4 py-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <span className="mr-3 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </span>
          <input
            type="file"
            name="attachment"
            id="attachment"
            onChange={handleChange}
            className="bg-transparent flex-1 outline-none text-white placeholder-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-700 file:text-white hover:file:bg-gray-600 w-full"
            accept="image/*,application/pdf"
          />
        </motion.div>
        {formData.attachment && <p className="text-gray-500 text-sm mt-1">Selected: {formData.attachment.name}</p>}
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
          type="submit"
          className="bg-[#7c3aed] hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-xl transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
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
    </form>
  </>
);

export default ContactForm;