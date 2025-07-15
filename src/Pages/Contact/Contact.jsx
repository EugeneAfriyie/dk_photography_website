import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../Home/Components/Header';
import Footer from '../../Components/Footer';
import BookingForm from './Components/BookingForm';
import ContactForm from './Components/ContactForm';
import ContactBanner from './Components/ContactBanner';
import ContactInfo from './Components/ContactInfo';
import SocialMedia from './Components/SocialMedia';
import Popups from './Components/Popups';
import FormModeToggle from './Components/FormModeToggle';
;

// Export packages (to be used elsewhere if needed)
export const packages = [
  // [Packages remain unchanged from the previous code]
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
  // [Other packages...]
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
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
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

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\+?[\d\s-]{10,}$/.test(phone);

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
    if (type === 'checkbox') setAcceptedTerms(checked);
    setValidationErrors(prev => ({ ...prev, [name]: false }));
    setErrorMessage('');
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
      if (formData.attachment) formDataToSend.append('attachment', formData.attachment);
      console.log('Inquiry submitted:', { name: formData.name, email: formData.email, subject: formData.subject, message: formData.message, phone: formData.phone, notes: formData.notes, attachment: formData.attachment ? formData.attachment.name : null });
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
      if (showConfirm) handleConfirmSubmit();
      else if (showTermsPopup) handleAcceptTerms();
      else handleSubmit(e);
    }
  };

  const handleConfirmSubmit = () => {
    console.log('Booking confirmed:', { name: formData.name, email: formData.email, phone: formData.phone, notes: formData.notes, package: selectedPackage });
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

  const handleCloseConfirm = () => setShowConfirm(false);
  const handleCloseTermsPopup = () => setShowTermsPopup(false);
  const handleAcceptTerms = () => {
    setAcceptedTerms(true);
    setShowTermsPopup(false);
  };
  const handleCloseNoteLimitAlert = () => setShowNoteLimitAlert(false);

  const [selectedPackage, setSelectedPackage] = useState({ title: 'Select a Package', price: '' });

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 overflow-hidden" onKeyPress={handleKeyPress}>
      <Header />
      <div className="max-w-7xl mx-auto">
        <ContactBanner />
        <FormModeToggle formMode={formMode} setFormMode={setFormMode} />
        <motion.section
          className="bg-gray-800 p-6 sm:p-8 rounded-lg mb-12"
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {formMode === 'inquiry' ? (
            <ContactForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              validationErrors={validationErrors}
              errorMessage={errorMessage}
            />
          ) : (
            <BookingForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              validationErrors={validationErrors}
              errorMessage={errorMessage}
              selectedPackage={selectedPackage}
              setSelectedPackage={setSelectedPackage}
              acceptedTerms={acceptedTerms}
              packages={packages}
            />
          )}
        </motion.section>
        <ContactInfo />
        <SocialMedia />
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
          <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
      <Popups
        showPopup={showPopup}
        handleClosePopup={handleClosePopup}
        isSubmitted={isSubmitted}
        formData={formData}
        showConfirm={showConfirm}
        handleCloseConfirm={handleCloseConfirm}
        handleConfirmSubmit={handleConfirmSubmit}
        showTermsPopup={showTermsPopup}
        handleCloseTermsPopup={handleCloseTermsPopup}
        handleAcceptTerms={handleAcceptTerms}
        showNoteLimitAlert={showNoteLimitAlert}
        handleCloseNoteLimitAlert={handleCloseNoteLimitAlert}
      />
    </div>
  );
};

export default Contact;