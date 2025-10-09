import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

// Placeholder hero image - replace with your brand image
const HERO_IMAGE = 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png';

const Onboarding = () => {
  const navigate = useNavigate();

  // Set flag in localStorage and redirect to homepage
  const handleGetStarted = () => {
    localStorage.setItem('hasSeenOnboarding', 'true');
    navigate('/');
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    initial: { scale: 1, opacity: 0.8 },
    animate: {
      scale: 1.05,
      opacity: 1,
      transition: { duration: 10, ease: 'linear', repeat: Infinity, repeatType: 'reverse' },
    },
    hover: { scale: 1.07, transition: { duration: 0.3 } },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, background: 'linear-gradient(to right, #f59e0b, #d97706)' },
    tap: { scale: 0.95 },
    pulse: { scale: [1, 1.02, 1], transition: { duration: 1.5, repeat: Infinity } },
  };

  // Split motto for letter-by-letter animation
  const motto = "Moments Captured, Memories Forever.".split('');

  return (
    <motion.section
      className="relative bg-gradient-to-b from-gray-900 to-black text-white min-h-screen flex items-center justify-center py-12 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Hero Image */}
        <motion.div
          className="relative w-full max-h-[70vh] overflow-hidden rounded-xl shadow-2xl shadow-amber-500/30 mb-10"
          variants={imageVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <img
            src={HERO_IMAGE}
            alt="DK Shot It - Timeless Memories"
            className="w-full h-auto max-h-[70vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-amber-900/20"></div>
        </motion.div>

        {/* Content */}
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-400 mb-4 tracking-tight">
            Welcome to DK Shot It
          </h1>
          <motion.p
            className="text-lg md:text-xl font-sans text-gray-200 max-w-2xl mx-auto mb-6"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {motto.map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.p>
          <p className="text-base font-sans text-gray-300 max-w-3xl mx-auto mb-8">
            Timeless photography and videography for life’s unforgettable moments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div variants={itemVariants}>
              <button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-lg font-sans font-medium text-lg transition-colors duration-300 shadow-md"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                animate="pulse"
              >
                Get Started
              </button>
            </motion.div>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div variants={itemVariants}>
                <Link
                  to="/contact"
                  className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-6 py-3 rounded-lg font-sans font-medium text-base transition-all duration-300"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Book Now
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  to="/gallery"
                  className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-6 py-3 rounded-lg font-sans font-medium text-base transition-all duration-300"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  View Portfolio
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Onboarding;