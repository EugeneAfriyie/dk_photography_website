import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../Home/Components/Header';
import Footer from '../../Components/Footer';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', attachment: null });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);
    if (formData.attachment) {
      formDataToSend.append('attachment', formData.attachment);
    }
    // Simulate form submission (replace with actual API call)
    console.log('Form submitted:', {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      attachment: formData.attachment ? formData.attachment.name : null
    });
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Reset after 3 seconds
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 overflow-hidden">
      <Header />

      <div className="max-w-7xl mx-auto">
        {/* Contact Banner */}
        <motion.section
          className="bg-gray-900 rounded-lg p-6 sm:p-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Get in Touch
            </motion.h1>
            <motion.p
              className="text-gray-400 text-base sm:text-lg md:text-xl mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We’d love to hear from you! Reach out for bookings or inquiries.
            </motion.p>
            <motion.img
              src="https://picsum.photos/800/400"
              alt="Contact Banner"
              className="w-full h-48 sm:h-64 object-cover rounded-md"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          className="bg-gray-800 p-6 sm:p-8 rounded-lg mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm sm:text-base font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:border-amber-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm sm:text-base font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:border-amber-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm sm:text-base font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:border-amber-500 h-32"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="attachment" className="block text-sm sm:text-base font-medium mb-2">Attachment (e.g., Photos)</label>
              <input
                type="file"
                id="attachment"
                name="attachment"
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:border-amber-500"
                accept="image/*,application/pdf"
              />
              {formData.attachment && <p className="text-gray-400 text-sm mt-1">Selected: {formData.attachment.name}</p>}
            </div>
            <motion.button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
            {isSubmitted && (
              <p className="text-green-400 text-center mt-4">Message sent successfully!</p>
            )}
          </form>
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
    </div>
  );
};

export default Contact;