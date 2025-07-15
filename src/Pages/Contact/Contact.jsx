import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../Home/Components/Header';
import Footer from '../../Components/Footer';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formMode, setFormMode] = useState('inquiry'); // 'inquiry' or 'booking'
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', attachment: null, phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formMode === 'inquiry') {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('phone', formData.phone);
      if (formData.attachment) {
        formDataToSend.append('attachment', formData.attachment);
      }
      // Simulate form submission (replace with actual API call)
      console.log('Inquiry submitted:', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        phone: formData.phone,
        attachment: formData.attachment ? formData.attachment.name : null
      });
    } else {
      // Simulate booking submission with selected package
      console.log('Booking submitted:', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        package: selectedPackage
      });
    }
    setIsSubmitted(true);
    setShowPopup(true);
    setFormData({ name: '', email: '', subject: '', message: '', attachment: null, phone: '' });
    setTimeout(() => {
      setShowPopup(false);
      setIsSubmitted(false);
    }, 3000);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setIsSubmitted(false);
  };

  // Sample packages for booking
  const packages = [
    { id: 1, name: 'Basic Photo Session', price: 50 },
    { id: 2, name: 'Standard Photo Session', price: 100 },
    { id: 3, name: 'Premium Photo Session', price: 200 }
  ];
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 overflow-hidden">
      <Header />

      <div className="max-w-7xl mx-auto">
        {/* Contact Banner */}
        <motion.section
          className="relative rounded-lg mb-12 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ height: '400px', minHeight: '250px', position: 'relative' }}
        >
          <motion.img
            src="https://picsum.photos/800/400"
            alt="Contact Banner"
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
          <div className="relative z-10 h-full flex items-center justify-center text-center px-4 py-8">
            <motion.div
              className="max-w-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Get in Touch
              </motion.h1>
              <motion.p
                className="text-gray-200 text-lg sm:text-xl md:text-2xl drop-shadow-md"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                We’d love to hear from you! Reach out for bookings or inquiries.
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Form Mode Toggle */}
        <div className="mb-8 text-center">
          <button
            onClick={() => setFormMode('inquiry')}
            className={`px-4 py-2 rounded-l-lg ${formMode === 'inquiry' ? 'bg-amber-500' : 'bg-gray-700'} text-white hover:bg-amber-600 transition duration-300`}
          >
            Inquiry
          </button>
          <button
            onClick={() => setFormMode('booking')}
            className={`px-4 py-2 rounded-r-lg ${formMode === 'booking' ? 'bg-amber-500' : 'bg-gray-700'} text-white hover:bg-amber-600 transition duration-300`}
          >
            Booking
          </button>
        </div>

        {/* Contact Form or Booking Checkout */}
        <motion.section
          className="bg-gray-800 p-6 sm:p-8 rounded-lg mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {formMode === 'inquiry' ? (
            <>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                    Your full name
                  </label>
                  <div className="flex items-center bg-[#111] text-white rounded-xl px-4 py-3">
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
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                    Email address
                  </label>
                  <div className="flex items-center bg-[#111] text-white rounded-xl px-4 py-3">
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
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white">
                    Phone number
                  </label>
                  <div className="flex items-center bg-[#111] text-white rounded-xl px-4 py-3">
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
                      placeholder="Enter your phone number"
                      className="bg-transparent flex-1 outline-none text-white placeholder-gray-500"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">
                    Subject
                  </label>
                  <div className="flex items-center bg-[#111] text-white rounded-xl px-4 py-3">
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
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                    Message
                  </label>
                  <div className="flex items-start bg-[#111] text-white rounded-xl px-4 py-3">
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
                      className="bg-transparent flex-1 outline-none text-white placeholder-gray-500 h-24 resize-none"
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Attachment */}
                <div>
                  <label htmlFor="attachment" className="block text-sm font-medium mb-2 text-white">
                    Attachment (e.g., Photos)
                  </label>
                  <div className="flex items-center bg-[#111] text-white rounded-xl px-4 py-3">
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
                      className="bg-transparent flex-1 outline-none text-white placeholder-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-700 file:text-white hover:file:bg-gray-600"
                      accept="image/*,application/pdf"
                    />
                  </div>
                  {formData.attachment && <p className="text-gray-400 text-sm mt-1">Selected: {formData.attachment.name}</p>}
                </div>

                {/* Submit */}
                <div className="text-center">
                  <motion.button
                    type="submit"
                    className="bg-[#7c3aed] hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-xl transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Book a Package</h2>
              <div className="max-w-2xl mx-auto space-y-6">
                {/* Package Selection */}
                <div>
                  <label htmlFor="package" className="block text-sm font-medium mb-2 text-white">
                    Select a Package
                  </label>
                  <select
                    name="package"
                    id="package"
                    value={selectedPackage.id}
                    onChange={(e) => setSelectedPackage(packages.find(p => p.id === parseInt(e.target.value)))}
                    className="w-full bg-[#111] text-white rounded-xl px-4 py-3 outline-none"
                  >
                    {packages.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>{pkg.name} - ${pkg.price}</option>
                    ))}
                  </select>
                </div>

                {/* Contact Info for Booking */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                    Your full name
                  </label>
                  <div className="flex items-center bg-[#111] text-white rounded-xl px-4 py-3">
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
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                    Email address
                  </label>
                  <div className="flex items-center bg-[#111] text-white rounded-xl px-4 py-3">
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
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white">
                    Phone number
                  </label>
                  <div className="flex items-center bg-[#111] text-white rounded-xl px-4 py-3">
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
                      placeholder="Enter your phone number"
                      className="bg-transparent flex-1 outline-none text-white placeholder-gray-500"
                      required
                    />
                  </div>
                </div>

                {/* Amount Due */}
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <h3 className="text-lg font-bold text-white mb-2">Amount Due</h3>
                  <p className="text-amber-300 text-xl">${selectedPackage.price}</p>
                </div>

                {/* Submit */}
                <div className="text-center">
                  <motion.button
                    type="submit"
                    className="bg-[#7c3aed] hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-xl transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Proceed to Checkout
                  </motion.button>
                </div>
              </div>
            </>
          )}
        </motion.section>

        {/* Contact Info */}
        <motion.section
          className="bg-gray-900 p-6 sm:p-8 rounded-lg mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Contact Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center sm:text-left">
            <div>
              <p className="text-gray-400 mb-2">Address:</p>
              <p>DKSHOTIT Studio, Amakom, Kumasi, Ghana</p>
              <a
                href="https://maps.google.com/maps?q=Amakom,+Kumasi,+Ghana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 hover:underline mt-2 inline-block"
              >
                View on Map
              </a>
            </div>
            <div>
              <p className="text-gray-400 mb-2">Phone:</p>
              <p>+233 123 456 789</p>
              <p className="text-gray-400 mb-2 mt-4">Email:</p>
              <p>info@dkshotit.com</p>
            </div>
          </div>
        </motion.section>

        {/* Social Media */}
        <motion.section
          className="bg-gray-800 p-6 sm:p-8 rounded-lg mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Connect With Us</h2>
          <div className="flex justify-center gap-6">
            {['facebook', 'instagram', 'twitter'].map((social, index) => (
              <motion.a
                key={social}
                href={`https://${social}.com/dkshotitstudio`} // Replace with actual URLs
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-3xl text-gray-400 hover:text-amber-300 transition duration-300"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {social === 'facebook' ? '🇫' : social === 'instagram' ? '📸' : '🐦'}
              </motion.a>
            ))}
          </div>
        </motion.section>

        <Footer />
      </div>

      {isVisible && (
        <motion.button
          className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 bg-amber-500 hover:bg-amber-600 text-white p-2 sm:p-3 rounded-full shadow-lg transition duration-300"
          onClick={scrollToTop}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-5 sm:w-6 h-5 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}

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
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Thank you, {formData.name || 'valued client'}, for reaching out to DKSHOTIT Studio & Photography. We appreciate your interest and will get back to you shortly. Have a wonderful day!
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Contact;