import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

// Hero images - replace with your brand images (1920x1080+)
const HERO_IMAGES = [
  'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png', // Page 1: Wedding
  'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png', // Page 1: Wedding
  'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png', // Page 1: Wedding
// Page 3: Legacy
];

// Carousel content
const CAROUSEL_CONTENT = [
  {
    title: 'Capture Your Love Story',
    description: 'From engagements to weddings, we immortalize your most cherished moments with elegance and passion.',
  },
  {
    title: 'Preserve Life’s Milestones',
    description: 'Family gatherings, graduations, and celebrations—every moment deserves to be remembered forever.',
  },
  {
    title: 'Create Timeless Legacies',
    description: 'Your story, captured in stunning photography and videography, becomes a legacy for generations.',
  },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 5s, pause on hover/interaction
  useEffect(() => {
    if (window.innerWidth < 640 || isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === CAROUSEL_CONTENT.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Handle navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000); // Resume after 3s
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === CAROUSEL_CONTENT.length - 1 ? 0 : prev + 1));
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? CAROUSEL_CONTENT.length - 1 : prev - 1));
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  // Handle Get Started button
  const handleGetStarted = () => {
    localStorage.setItem('hasSeenOnboarding', 'true');
    navigate('/');
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const imageVariants = {
    initial: { scale: 1, opacity: 0.7, x: 0 },
    animate: {
      scale: 1.1,
      opacity: 1,
      transition: { duration: 12, ease: 'linear', repeat: Infinity, repeatType: 'reverse' },
    },
    exit: { opacity: 0, x: -100, transition: { duration: 0.4 } },
    hover: { scale: 1.12, transition: { duration: 0.4 } },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.02 } },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05, 
      background: 'linear-gradient(to right, #fbbf24, #f59e0b)',
      boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)',
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 },
    pulse: { 
      scale: [1, 1.02, 1], 
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
    },
  };

  return (
    <motion.section
      className="relative bg-gradient-to-b from-gray-900 to-black text-white min-h-screen flex items-center justify-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative max-w-4xl sm:max-w-5xl lg:max-w-7xl 2xl:max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
        {/* Left Arrow */}
        <button
          className="carousel-arrow absolute left-2 sm:left-4 lg:-left-12 hidden sm:flex"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="w-full lg:w-1/2 max-h-[50vh] sm:max-h-[60vh] lg:max-h-[70vh] 2xl:max-h-[80vh] overflow-hidden rounded-2xl shadow-2xl shadow-amber-500/40 relative"
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0, x: -100, transition: { duration: 0.4 } }}
            whileHover={{ scale: window.innerWidth >= 1024 ? 1.12 : 1, transition: { duration: 0.4 } }}
            drag={window.innerWidth < 1024 ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, info) => {
              if (info.offset.x < -100) nextSlide();
              if (info.offset.x > 100) prevSlide();
            }}
          >
            <img
              src={HERO_IMAGES[currentSlide]}
              alt={CAROUSEL_CONTENT[currentSlide].title}
              className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] lg:max-h-[70vh] 2xl:max-h-[80vh] object-cover hero-image"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-amber-900/20"></div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="w-full lg:w-1/2 bg-black/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 max-w-lg lg:max-w-xl relative z-10"
          variants={itemVariants}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, x: 100, transition: { duration: 0.4 } }}
            >
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-serif font-bold text-amber-400 mb-4 tracking-tight header-text"
                variants={textVariants}
              >
                {CAROUSEL_CONTENT[currentSlide].title.split('').map((char, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
              <p className="text-sm sm:text-base lg:text-lg font-sans text-gray-300 mb-6 sm:mb-8">
                {CAROUSEL_CONTENT[currentSlide].description}
              </p>
              {currentSlide === CAROUSEL_CONTENT.length - 1 && (
                <motion.div
                  className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8"
                  variants={itemVariants}
                >
                  <motion.div variants={itemVariants}>
                    <button
                      onClick={handleGetStarted}
                      className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white px-4 sm:px-6 lg:px-8 2xl:px-10 py-2 sm:py-3 lg:py-4 2xl:py-5 rounded-xl font-sans font-semibold text-sm sm:text-base lg:text-lg 2xl:text-xl transition-colors duration-300 shadow-md min-w-[120px]"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      animate={{ ...buttonVariants.pulse, scale: window.innerWidth < 640 ? 1 : [1, 1.02, 1] }}
                    >
                      Get Started
                    </button>
                  </motion.div>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6">
                    <motion.div variants={itemVariants}>
                      <Link
                        to="/contact"
                        className="border-2 border-amber-400 text-amber-400 hover:bg-gradient-to-r hover:from-amber-500/20 hover:to-amber-500/40 hover:text-white px-3 sm:px-4 lg:px-6 2xl:px-8 py-1.5 sm:py-2 lg:py-3 2xl:py-4 rounded-xl font-sans font-medium text-xs sm:text-sm lg:text-base 2xl:text-lg transition-all duration-300 min-w-[100px]"
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
                        className="border-2 border-amber-400 text-amber-400 hover:bg-gradient-to-r hover:from-amber-500/20 hover:to-amber-500/40 hover:text-white px-3 sm:px-4 lg:px-6 2xl:px-8 py-1.5 sm:py-2 lg:py-3 2xl:py-4 rounded-xl font-sans font-medium text-xs sm:text-sm lg:text-base 2xl:text-lg transition-all duration-300 min-w-[100px]"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        View Portfolio
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Right Arrow */}
        <button
          className="carousel-arrow absolute right-2 sm:right-4 lg:-right-12 hidden sm:flex"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-8 sm:bottom-10 lg:bottom-12 flex justify-center z-20">
        {CAROUSEL_CONTENT.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Onboarding;