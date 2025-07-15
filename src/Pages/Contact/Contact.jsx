import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../Home/Components/Header';
import Footer from '../../Components/Footer';

// Export packages (to be used elsewhere if needed)
export const packages = [
  {
    title: 'Wedding Bliss Package',
    price: '$2,500',
    coverageHours: '8 Hours',
    photographers: '2 Photographers',
    editedPhotos: '300 Photos',
    deliveryTime: '4 Weeks',
    extras: 'Custom Album',
    sessionLocation: 'Outdoor or Venue',
    description: 'Capture your special day with our Wedding Photography and Event Coverage. Includes 8 hours of coverage, two photographers, and a custom album.',
    servicesIncluded: ['Photography'],
    isPopular: false,
    icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247125/BRIDE1_kjfo1p.jpg',
  },
  {
    title: 'Premium Wedding Experience',
    price: '$4,800',
    coverageHours: '12 Hours',
    photographers: '2 Photographers',
    editedPhotos: '550 Photos',
    deliveryTime: '5 Weeks',
    extras: 'Premium Album, Drone Footage, Dedicated Videographer, Bridal Makeup and Hair, Pre-Wedding Photo Session',
    sessionLocation: 'Outdoor or Venue',
    description: 'Luxury Wedding Photography with a pre-wedding photo session, a dedicated videographer for cinematic videography including drone footage, and professional bridal makeup and hairstyling. Features 12 hours of coverage, two photographers, and a premium album.',
    servicesIncluded: ['Photography', 'Videography', 'Make Up and Hair Styling'],
    isPopular: false,
    icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247127/WED1_c0gp9p.jpg',
  },
  {
    title: 'Premium Family Legacy',
    price: '$2,500',
    coverageHours: '6 Hours',
    photographers: '2 Photographers',
    editedPhotos: '200 Photos',
    deliveryTime: '4 Weeks',
    extras: 'Hardcover Book, Video Highlights',
    sessionLocation: 'Studio or Outdoor',
    description: 'Elite Children Photography and Family Photography with 6 hours, studio access, a hardcover book, and video highlights.',
    servicesIncluded: ['Photography', 'Videography'],
    isPopular: false,
    icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247111/FAM1_wdqml7.jpg',
  },
  {
    title: 'Family Memories Package',
    price: '$1,200',
    coverageHours: '3 Hours',
    photographers: '1 Photographer',
    editedPhotos: '100 Photos',
    deliveryTime: '3 Weeks',
    extras: 'Digital Gallery',
    sessionLocation: 'Outdoor or Indoor',
    description: 'Cherish your family bond with Children Photography and Family Photography. Includes 3 hours of outdoor or indoor sessions and a digital gallery.',
    servicesIncluded: ['Photography'],
    isPopular: false,
    icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247111/FAM2_kaaw51.jpg',
  },
  {
    title: 'Graduation Celebration Package',
    price: '$600',
    coverageHours: '1.5 Hours',
    photographers: '1 Photographer',
    editedPhotos: '30 Photos',
    deliveryTime: '2 Weeks',
    extras: 'Digital Frame',
    sessionLocation: 'Campus or Outdoor',
    description: 'Capture your graduation day with professional photos featuring caps, gowns, and milestone moments.',
    servicesIncluded: ['Photography'],
    isPopular: false,
    icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247111/GRAWM2_flta1z.jpg',
  },
  {
    title: 'Premium Graduation Package',
    price: '$1,000',
    coverageHours: '3 Hours',
    photographers: '1 Photographer',
    editedPhotos: '75 Photos',
    deliveryTime: '3 Weeks',
    extras: 'Custom Photo Book, Group Shots',
    sessionLocation: 'Campus or Venue',
    description: 'A comprehensive graduation package with extended coverage, a custom photo book, and group shots.',
    servicesIncluded: ['Photography'],
    isPopular: true,
    icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247111/GRAWM1_azekpo.jpg',
  },
  {
    title: 'Birthday Celebration Package',
    price: '$1,300',
    coverageHours: '3 Hours',
    photographers: '1 Photographer',
    editedPhotos: '80 Photos',
    deliveryTime: '3 Weeks',
    extras: 'Digital Gallery, Party Highlights, Dedicated Videographer, Special Occasion Makeup and Hair',
    sessionLocation: 'Venue or Outdoor',
    description: 'Celebrate your special day with vibrant birthday photography, a dedicated videographer for cinematic videography, and professional makeup and hairstyling. Includes 3 hours of coverage and a digital gallery.',
    servicesIncluded: ['Photography', 'Videography', 'Make Up and Hair Styling'],
    isPopular: false,
    icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247104/BIRTH3_po4i3v.jpg',
  },
  {
    title: 'Couple Shots Package',
    price: '$800',
    coverageHours: '2 Hours',
    photographers: '1 Photographer',
    editedPhotos: '50 Photos',
    deliveryTime: '2 Weeks',
    extras: 'Digital Gallery, Romantic Photo Book',
    sessionLocation: 'Studio or Outdoor',
    description: 'Capture your love story with a romantic couple photography session, perfect for engagements, anniversaries, or special moments.',
    servicesIncluded: ['Photography'],
    isPopular: false,
    icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247107/COP1_gfdb3c.jpg',
  },
  {
    title: 'Children Shot Package',
    price: '$700',
    coverageHours: '2 Hours',
    photographers: '1 Photographer',
    editedPhotos: '50 Photos',
    deliveryTime: '2 Weeks',
    extras: 'Digital Gallery, Children’s Photo Book',
    sessionLocation: 'Studio or Outdoor',
    description: 'Capture your child’s milestones with a fun and vibrant photography session, perfect for birthdays, first steps, or special moments.',
    servicesIncluded: ['Photography'],
    isPopular: false,
    icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247106/SKYLA_d81pvt.jpg',
  },
];

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formMode, setFormMode] = useState('inquiry'); // 'inquiry' or 'booking'
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', attachment: null, phone: '', notes: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showTermsPopup, setShowTermsPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showNoteLimitAlert, setShowNoteLimitAlert] = useState(false);
  const [validationErrors, setValidationErrors] = useState({ name: false, email: false, phone: false, subject: false, message: false, package: false });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
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
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    return phoneRegex.test(phone);
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
    setValidationErrors(prev => ({ ...prev, [name]: false })); // Clear error on change
    setErrorMessage(''); // Clear error message on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formMode === 'inquiry') {
      const errors = {
        name: !formData.name,
        email: !formData.email || !validateEmail(formData.email),
        phone: !formData.phone || !validatePhone(formData.phone),
        subject: !formData.subject,
        message: !formData.message
      };
      setValidationErrors(errors);
      if (Object.values(errors).some(error => error)) {
        setErrorMessage('Please fill in all required fields with valid information (Name, Email, Phone, Subject, Message).');
        return;
      }
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('notes', formData.notes);
      if (formData.attachment) {
        formDataToSend.append('attachment', formData.attachment);
      }
      console.log('Inquiry submitted:', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        phone: formData.phone,
        notes: formData.notes,
        attachment: formData.attachment ? formData.attachment.name : null
      });
      setIsSubmitted(true);
      setShowPopup(true);
      setFormData({ name: '', email: '', subject: '', message: '', attachment: null, phone: '', notes: '' });
    } else {
      const errors = {
        name: !formData.name,
        email: !formData.email || !validateEmail(formData.email),
        phone: !formData.phone || !validatePhone(formData.phone),
        package: !selectedPackage || selectedPackage.title === 'Select a Package'
      };
      setValidationErrors(errors);
      if (Object.values(errors).some(error => error)) {
        setErrorMessage('Please fill in all required fields with valid information (Name, Email, Phone, Package).');
        return;
      }
      if (!acceptedTerms) {
        setShowTermsPopup(true);
        return;
      }
      setShowConfirm(true);
    }
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

  const handleConfirmSubmit = () => {
    console.log('Booking confirmed:', {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      notes: formData.notes,
      package: selectedPackage
    });
    setShowConfirm(false);
    setIsSubmitted(true);
    setShowPopup(true);
    setFormData({ name: '', email: '', subject: '', message: '', attachment: null, phone: '', notes: '' });
    setAcceptedTerms(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setIsSubmitted(false);
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

  const [selectedPackage, setSelectedPackage] = useState({ title: 'Select a Package', price: '' });

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 overflow-hidden" onKeyPress={handleKeyPress}>
      <Header />

      <div className="max-w-7xl mx-auto">
        {/* Contact Banner */}
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

        {/* Form Mode Toggle with Animation */}
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

        {/* Contact Form or Booking Checkout */}
        <motion.section
          className="bg-gray-800 p-6 sm:p-8 rounded-lg mb-12"
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {formMode === 'inquiry' ? (
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
          ) : (
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
          )}
        </motion.section>

        {/* Contact Info */}
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

        {/* Social Media */}
        <motion.section
          className="bg-gray-800 p-6 sm:p-8 rounded-lg mb-12 text-center"
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Connect With Us
          </motion.h2>
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {['facebook', 'instagram', 'twitter'].map((social, index) => (
              <motion.a
                key={social}
                href={`https://${social}.com/dkshotitstudio`} // Replace with actual URLs
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-3xl text-gray-400 hover:text-amber-300 transition duration-300"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {social === 'facebook' ? '🇫' : social === 'instagram' ? '📸' : '🐦'}
              </motion.a>
            ))}
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
    </div>
  );
};

export default Contact;