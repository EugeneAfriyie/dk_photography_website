import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Header from '../Home/Components/Header';
import Footer from '../../Components/Footer';
import ExclusiveOffer from '../Home/Components/ExclusiveOffer';
import BookingPrompt from '../Home/Components/BookingPrompt';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { packages } from '../Home/data';

// Packages array
// export const package = [
//   {
//     title: 'Wedding Bliss Package',
//     price: '$2,500',
//     coverageHours: '8 Hours',
//     photographers: '2 Photographers',
//     editedPhotos: '300 Photos',
//     deliveryTime: '4 Weeks',
//     extras: 'Custom Album',
//     sessionLocation: 'Outdoor or Venue',
//     description: 'Capture your special day with our Wedding Photography and Event Coverage. Includes 8 hours of coverage, two photographers, and a custom album.',
//     servicesIncluded: ['Photography'],
//     isPopular: false,
//     icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247125/BRIDE1_kjfo1p.jpg',
//   },
//   Add more packages as needed
// ];

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formMode, setFormMode] = useState('inquiry');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', attachment: null, phone: '', notes: '', whatsapp: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showTermsPopup, setShowTermsPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showNoteLimitAlert, setShowNoteLimitAlert] = useState(false);
  const [validationErrors, setValidationErrors] = useState({ name: false, email: false, phone: false, subject: false, message: false, package: false, whatsapp: false });
  const [submittedData, setSubmittedData] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState({ title: 'Select a Package', price: '' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const initializeEmailJS = () => {
      if (formMode === 'inquiry') {
        emailjs.init('KhmeYLlM1LVFQI84Y'); // Public Key for Account 1 (inquiry)
      } else {
        emailjs.init('9s9u_x9PGUDBxOt7_'); // Public Key for Account 2 (booking)
      }
    };
    initializeEmailJS();

    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        setShowPopup(false);
        setShowConfirm(false);
        setShowTermsPopup(false);
        setShowNoteLimitAlert(false);
        setIsSubmitted(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [formMode]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    return phoneRegex.test(phone);
  };

  const validateWhatsApp = (whatsapp) => {
    const whatsappRegex = /^\+?[\d\s-]{10,}$/;
    return !whatsapp || whatsappRegex.test(whatsapp);
  };

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    if (name === 'notes' && value.length >= 250) {
      setShowNoteLimitAlert(true);
      return;
    }
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : files ? files[0] : value
    }));
    if (type === 'checkbox') {
      setAcceptedTerms(checked);
    }
    setValidationErrors(prev => ({ ...prev, [name]: false }));
    setErrorMessage('');
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (formMode === 'inquiry') {
    const errors = {
      name: !formData.name.trim(),
      email: !formData.email || !validateEmail(formData.email),
      phone: !formData.phone || !validatePhone(formData.phone),
      subject: !formData.subject,
      message: !formData.message
    };
    setValidationErrors(errors);
    if (Object.values(errors).some(error => error)) {
      setErrorMessage('Please fill in all required fields with valid information.');
      return;
    }

   

    const current_date = new Date().toLocaleString('en-US', { timeZone: 'GMT' });
    const whatsapp_link = validateWhatsApp(formData.whatsapp) && formData.whatsapp !== 'Not provided' && formData.whatsapp
      ? formData.whatsapp
      : validatePhone(formData.phone) ? formData.phone : '+233243839922'; // Fallback

    const customerTemplateParams = {
      to_name: formData.name,
      to_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      notes: formData.notes || 'None',
      attachment_url: attachmentUrl,
      current_date,
    };

    const adminTemplateParams = {
      to_name: 'Admin',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      notes: formData.notes || 'None',
      attachment_url: attachmentUrl,
      current_date,
      whatsapp_link,
    };

    try {
      await emailjs.send('dk_mail', 'template_customer_inquiry', customerTemplateParams);
      await emailjs.send('dk_mail', 'template_admin_inquiry', adminTemplateParams, {
        'content-type': 'text/html'
      });
      setSubmittedData({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        notes: formData.notes || 'None',
        attachment_url: attachmentUrl || null,
      });
      setIsSubmitted(true);
      setShowPopup(true);
      setFormData({ name: '', email: '', subject: '', message: '', attachment: null, phone: '', notes: '', whatsapp: '' });
    } catch (error) {
      console.error('Inquiry Error:', error);
      setErrorMessage('Failed to submit inquiry. Please try again. Error: ' + error.message);
    }
  } else {
    // Booking logic remains unchanged
    const errors = {
      name: !formData.name.trim(),
      email: !formData.email || !validateEmail(formData.email),
      phone: !formData.phone || !validatePhone(formData.phone),
      package: !selectedPackage || selectedPackage.title === 'Select a Package',
      whatsapp: formData.whatsapp && !validateWhatsApp(formData.whatsapp)
    };
    setValidationErrors(errors);
    if (Object.values(errors).some(error => error)) {
      setErrorMessage('Please fill in all required fields with valid information.');
      return;
    }
    if (!acceptedTerms) {
      setShowTermsPopup(true);
      return;
    }
    setShowConfirm(true);
  }
};
const handleConfirmSubmit = async () => {
  const deposit_amount = '$' + Math.round(parseFloat(selectedPackage.price.replace('$', '').replace(',', '')) * 0.5);
  const full_amount = '$' + parseFloat(selectedPackage.price.replace('$', '').replace(',', ''));
  const current_date = new Date().toLocaleString('en-US', { timeZone: 'GMT' });
  // Generate booking_id with phone number and timestamp
  const phoneForId = formData.phone ? formData.phone.replace(/[^0-9]/g, '') : '0000000000'; // Remove non-numeric chars, fallback to 0000000000
  const booking_id = `BK${phoneForId}_${Date.now()}`; // e.g., BK233123456789_1634567890123
  const momo_number = '+233243829922'; // Your MoMo merchant number (replace with yours)
  const whatsapp = formData.whatsapp || 'Not provided';
  const whatsapp_link = validateWhatsApp(formData.whatsapp) && formData.whatsapp !== 'Not provided' && formData.whatsapp
    ? formData.whatsapp
    : validatePhone(formData.phone) ? formData.phone : '+233243839922'; // Fallback to provided number

  const customerTemplateParams = {
    to_name: formData.name,
    to_email: formData.email,
    phone: formData.phone,
    notes: formData.notes || 'None',
    package_title: selectedPackage.title,
    package_price: selectedPackage.price,
    deposit_amount,
    full_amount,
    booking_id,
    momo_number,
    current_date,
  };

  const adminTemplateParams = {
    to_name: 'Admin',
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    whatsapp: whatsapp,
    whatsapp_link: whatsapp_link,
    notes: formData.notes || 'None',
    package_title: selectedPackage.title,
    package_price: selectedPackage.price,
    deposit_amount,
    full_amount,
    booking_id,
    momo_number,
    current_date,
  };

  try {
    await emailjs.send('dkbook_mail', 'template_k751psa', customerTemplateParams);
    await emailjs.send('dkbook_mail', 'template_3idvwbm', adminTemplateParams, {
      'content-type': 'text/html'
    });
    setSubmittedData({ ...formData, package: selectedPackage });
    setShowConfirm(false);
    setIsSubmitted(true);
    setShowPopup(true);
    setFormData({ name: '', email: '', subject: '', message: '', attachment: null, phone: '', notes: '', whatsapp: '' });
    setSelectedPackage({ title: 'Select a Package', price: '' });
    setAcceptedTerms(false);
  } catch (error) {
    console.error('Booking Error:', error);
    setErrorMessage('Failed to confirm booking. Please try again. Error: ' + error.message);
  }
};
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  const handleCloseConfirm = () => {
    setShowConfirm(false);
  };

  const handleCloseTermsPopup = () => {
    setShowTermsPopup(false);
  };

  const handleAcceptTerms = () => {
    setAcceptedTerms(true);
    setShowTermsPopup(false);
  };

  const handleCloseNoteLimitAlert = () => {
    setShowNoteLimitAlert(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (showConfirm) {
        handleConfirmSubmit();
      } else if (showTermsPopup) {
        handleAcceptTerms();
      } else {
        handleSubmit(e);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20 overflow-hidden" onKeyPress={handleKeyPress}>
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <div className="max-w-7xl mx-auto">
        {/* Contact Banner */}
        <motion.section
          className="relative rounded-lg mb-12 overflow-hidden"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          style={{ height: '400px', minHeight: '250px', position: 'relative' }}
        >
          <motion.img
            src="https://picsum.photos/800/400"
            alt="Contact Banner"
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
          <motion.div
            className="relative z-10 h-full flex items-center justify-center text-center px-4 py-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="max-w-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Get in Touch
              </motion.h1>
              <motion.p
                className="text-gray-200 text-lg sm:text-xl md:text-2xl drop-shadow-md"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                We’d love to hear from you! Reach out for bookings or inquiries.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Form Mode Toggle */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.button
            onClick={() => setFormMode('inquiry')}
            className={`px-4 py-2 rounded-l-lg ${formMode === 'inquiry' ? 'bg-amber-500 text-white' : 'bg-gray-700 text-gray-300'} hover:bg-amber-600 transition duration-300`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Inquiry
          </motion.button>
          <motion.button
            onClick={() => setFormMode('booking')}
            className={`px-4 py-2 rounded-r-lg ${formMode === 'booking' ? 'bg-emerald-500 text-white' : 'bg-gray-700 text-gray-300'} hover:bg-emerald-600 transition duration-300`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Booking
          </motion.button>
        </motion.div>

        {/* Contact Form or Booking Checkout */}
        <motion.section
          className={`bg-gray-800 p-6 sm:p-8 rounded-lg mb-12 ${formMode === 'inquiry' ? 'bg-gradient-to-br from-gray-800 via-amber-900/20 to-gray-800' : 'bg-gradient-to-br from-gray-800 via-emerald-900/20 to-gray-800'}`}
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {formMode === 'inquiry' ? (
            <>
              <motion.h2
                className="text-2xl sm:text-3xl font-bold mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Send Us a Message
              </motion.h2>
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                    Your full name
                  </label>
                  <div className={`flex items-center bg-[#111] text-white rounded-xl px-4 py-3 ${validationErrors.name ? 'border-2 border-red-500' : ''}`}>
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
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                    Email address
                  </label>
                  <div className={`flex items-center bg-[#111] text-white rounded-xl px-4 py-3 ${validationErrors.email ? 'border-2 border-red-500' : ''}`}>
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
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white">
                    Phone number
                  </label>
                  <div className={`flex items-center bg-[#111] text-white rounded-xl px-4 py-3 ${validationErrors.phone ? 'border-2 border-red-500' : ''}`}>
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
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">
                    Subject
                  </label>
                  <div className={`flex items-center bg-[#111] text-white rounded-xl px-4 py-3 ${validationErrors.subject ? 'border-2 border-red-500' : ''}`}>
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
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                    Message
                  </label>
                  <div className={`flex items-start bg-[#111] text-white rounded-xl px-4 py-3 ${validationErrors.message ? 'border-2 border-red-500' : ''}`}>
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
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="notes" className="block text-sm font-medium mb-2 text-white">
                    Notes
                  </label>
                  <div className="flex items-start bg-[#111] text-white rounded-xl px-4 py-3">
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
                      className="bg-transparent flex-1 outline-none text-white placeholder-gray-500 h-20 resize-y overflow-y-auto max-h-40 scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-gray-900"
                      maxLength={250}
                    ></textarea>
                  </div>
                </motion.div>



                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <motion.button
                      type="submit"
                      className="bg-[#7c3aed] hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-xl transition duration-300"
                      whileHover={{ scale: 1.05, backgroundColor: '#6b21a8' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Message
                    </motion.button>
                  </div>
                </motion.div>
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
          ) : (
            <>
              <motion.h2
                className="text-2xl sm:text-3xl font-bold mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Book a Package
              </motion.h2>
              <div className="max-w-2xl mx-auto space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="package" className="block text-sm font-medium mb-2 text-white">
                    Select a Package
                  </label>
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
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                    Your full name
                  </label>
                  <div className={`flex items-center bg-[#111] text-white rounded-xl px-4 py-3 ${validationErrors.name ? 'border-2 border-red-500' : ''}`}>
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
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                    Email address
                  </label>
                  <div className={`flex items-center bg-[#111] text-white rounded-xl px-4 py-3 ${validationErrors.email ? 'border-2 border-red-500' : ''}`}>
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
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white">
                    Phone number
                  </label>
                  <div className={`flex items-center bg-[#111] text-white rounded-xl px-4 py-3 ${validationErrors.phone ? 'border-2 border-red-500' : ''}`}>
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
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="whatsapp" className="block text-sm font-medium mb-2 text-white">
                    WhatsApp Number (Optional)
                  </label>
                  <div className={`flex items-center bg-[#111] text-white rounded-xl px-4 py-3 ${validationErrors.whatsapp ? 'border-2 border-red-500' : ''}`}>
                    <span className="mr-3 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <input
                      type="tel"
                      name="whatsapp"
                      id="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="Enter your WhatsApp number (e.g., +1234567890)"
                      className="bg-transparent flex-1 outline-none text-white placeholder-gray-500"
                    />
                  </div>
                  {validationErrors.whatsapp && <p className="text-red-500 text-sm mt-1">Please enter a valid WhatsApp number (e.g., +1234567890).</p>}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="notes" className="block text-sm font-medium mb-2 text-white">
                    Notes
                  </label>
                  <div className="flex items-start bg-[#111] text-white rounded-xl px-4 py-3">
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
                      className="bg-transparent flex-1 outline-none text-white placeholder-gray-500 h-20 resize-y overflow-y-auto max-h-40 scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-gray-900"
                      maxLength={250}
                    ></textarea>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gray-700 p-4 rounded-lg text-center">
                    <h3 className="text-lg font-bold text-white mb-2">Amount Due</h3>
                    <p className="text-amber-300 text-xl">{selectedPackage.price || 'N/A'}</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true }}
                >
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
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <motion.button
                      type="button"
                      onClick={handleSubmit}
                      className="bg-[#7c3aed] hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-xl transition duration-300"
                      whileHover={{ scale: 1.05, backgroundColor: '#6b21a8' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Request Booking
                    </motion.button>
                    <p className="text-gray-400 text-sm mt-2">
                      Check the <a href="/services" className="text-amber-300 hover:underline">service page</a> for package details or{' '}
                      <a href="tel:+23343839922" target='_blank' className="text-amber-300 hover:underline">call</a>{' '}
                      /{' '}
                      <a href="https://wa.me/23343839922" target='_blank' className="text-amber-300 hover:underline">WhatsApp</a> your photographer for more details.
                    </p>
                  </div>
                </motion.div>
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
          )}
        </motion.section>

        {/* Contact Info */}
        <motion.section
          className="bg-gray-900 p-6 sm:p-8 rounded-lg mb-12"
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Contact Information
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center sm:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 mb-2">Phone:</p>
              <a href="tel:+23343839922">+233 243 829 922</a>
              <p className="text-gray-400 mb-2 mt-4">Email:</p>
              <a href="mailto:info@dkshotit.com">info@dkshotit.com</a>
            </motion.div>
          </motion.div>
        </motion.section>

        <BookingPrompt />

        {/* Social Media */}
        <motion.section
          className="bg-gray-800 p-6 sm:p-8 rounded-lg mb-12 text-center"
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Connect With Us
          </motion.h2>
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://www.instagram.com/dkshotit_photography/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-3xl text-gray-400 hover:text-amber-300 transition duration-300"
              initial={{ y: 20, opacity: 0, color: '#D1D5DB' }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ scale: 1.2, color: '#E4405F' }}
              viewport={{ once: true }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://wa.me/233243839922?text=Hello,%20I%20want%20to%20enroll%20in%20the%20training%20program!"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-3xl text-gray-400 hover:text-amber-300 transition duration-300"
              initial={{ y: 20, opacity: 0, color: '#D1D5DB' }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ scale: 1.2, color: '#25D366' }}
              viewport={{ once: true }}
            >
              <FaWhatsapp />
            </motion.a>
            <motion.a
              href="#"
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-3xl text-gray-400 hover:text-amber-300 transition duration-300"
              initial={{ y: 20, opacity: 0, color: '#D1D5DB' }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ scale: 1.2, color: '#25F4EE' }}
              viewport={{ once: true }}
            >
              <FaTiktok />
            </motion.a>
          </motion.div>
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
              transition={{ duration: 0.4 }}
            >
              {formMode === 'inquiry' ? 'Inquiry Submitted Successfully!' : `Booking for ${submittedData?.package?.title} Confirmed!`}
            </motion.h3>
            <motion.p
              className="text-gray-300 text-sm sm:text-base"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {`Thank you, ${submittedData?.name.trim() || 'valued customer'}, for ${formMode === 'inquiry' ? `submitting your inquiry about "${submittedData?.subject || 'your request'}"` : `booking the ${submittedData?.package?.title}`} with DKSHOTIT Studio. A confirmation email has been sent to ${submittedData?.email}.`}
            </motion.p>
            {submittedData?.attachment_url && formMode === 'inquiry' && (
              <motion.p
                className="text-gray-300 text-sm mt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                Attachment: <a href={submittedData.attachment_url} target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">View File</a>
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      )}

      {showConfirm && (
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
              onClick={handleCloseConfirm}
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
              transition={{ duration: 0.4 }}
            >
              Confirm Booking
            </motion.h3>
            <motion.p
              className="text-gray-300 text-sm sm:text-base"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Are you sure you want to confirm your booking for <strong>{selectedPackage.title}</strong> at <strong>{selectedPackage.price}</strong>? A 50% deposit is required within 48 hours.
            </motion.p>
            <motion.div
              className="mt-6 space-x-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <motion.button
                onClick={handleConfirmSubmit}
                className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-lg transition duration-300"
                whileHover={{ scale: 1.05, backgroundColor: '#16a34a' }}
                whileTap={{ scale: 0.95 }}
              >
                Confirm
              </motion.button>
              <motion.button
                onClick={handleCloseConfirm}
                className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg transition duration-300"
                whileHover={{ scale: 1.05, backgroundColor: '#dc2626' }}
                whileTap={{ scale: 0.95 }}
              >
                Cancel
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      
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
            exit={{ scale: 0.8, y: 50 }}
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
              transition={{ duration: 0.4 }}
            >
              Terms and Conditions
            </motion.h3>
            <motion.div
              className="text-gray-300 text-sm sm:text-base max-h-64 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-gray-900"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <p>Please review our terms: All bookings are subject to availability. A 50% deposit is required to secure your date. Cancellations within 7 days of the event incur a 25% fee. Full payment is due 48 hours before the event. We reserve the right to reschedule due to unforeseen circumstances.</p>
            </motion.div>
            <motion.div
              className="mt-6 space-x-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
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
              transition={{ duration: 0.4 }}
            >
              Note Limit Reached
            </motion.h3>
            <motion.p
              className="text-gray-300 text-sm sm:text-base"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              The maximum limit of 250 characters has been reached for the Notes field. Please shorten your text or remove some content.
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Contact;