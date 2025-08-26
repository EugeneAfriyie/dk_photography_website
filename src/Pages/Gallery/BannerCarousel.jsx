import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BannerCarousel = () => {
  const bannerImages = [
    {
      src: '/cloudinary/djeorsh5d/image/upload/w_800,h_400,c_fill/v1751247136/EQ_image-2_ttqpf8.png',
      srcSet: '/cloudinary/djeorsh5d/image/upload/w_400,h_200,c_fill/v1751247136/EQ_image-2_ttqpf8.png 400w, /cloudinary/djeorsh5d/image/upload/w_800,h_400,c_fill/v1751247136/EQ_image-2_ttqpf8.png 800w, /cloudinary/djeorsh5d/image/upload/w_1200,h_600,c_fill/v1751247136/EQ_image-2_ttqpf8.png 1200w',
      sizes: '(max-width: 640px) 400px, (max-width: 1280px) 800px, 1200px',
      alt: 'Gallery banner showcasing photography',
      title: 'Our Gallery',
      description: 'Explore our stunning photography and videography moments.',
    },
    {
      src: '/cloudinary/djeorsh5d/image/upload/w_800,h_400,c_fill/v1751247136/EQ_image-3_ttqpf8.png',
      srcSet: '/cloudinary/djeorsh5d/image/upload/w_400,h_200,c_fill/v1751247136/EQ_image-3_ttqpf8.png 400w, /cloudinary/djeorsh5d/image/upload/w_800,h_400,c_fill/v1751247136/EQ_image-3_ttqpf8.png 800w, /cloudinary/djeorsh5d/image/upload/w_1200,h_600,c_fill/v1751247136/EQ_image-3_ttqpf8.png 1200w',
      sizes: '(max-width: 640px) 400px, (max-width: 1280px) 800px, 1200px',
      alt: 'Special booking offer banner',
      title: 'Special Booking Offer',
      description: 'Book now! Special offer ends soon!',
    },
    {
      src: '/cloudinary/djeorsh5d/image/upload/w_800,h_400,c_fill/v1751247136/EQ_image-4_ttqpf8.png',
      srcSet: '/cloudinary/djeorsh5d/image/upload/w_400,h_200,c_fill/v1751247136/EQ_image-4_ttqpf8.png 400w, /cloudinary/djeorsh5d/image/upload/w_800,h_400,c_fill/v1751247136/EQ_image-4_ttqpf8.png 800w, /cloudinary/djeorsh5d/image/upload/w_1200,h_600,c_fill/v1751247136/EQ_image-4_ttqpf8.png 1200w',
      sizes: '(max-width: 640px) 400px, (max-width: 1280px) 800px, 1200px',
      alt: 'Appreciation banner for capturing memories',
      title: 'Unforgettable Moments',
      description: 'Capture life’s unforgettable moments with us.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState({});
  const [isPaused, setIsPaused] = useState(false);
  const [countdown, setCountdown] = useState('');

  // Countdown timer for Slide 2
  useEffect(() => {
    if (currentIndex !== 1) return;

    const endDate = new Date('2025-09-02T06:05:00Z').getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance <= 0) {
        setCountdown('Offer ended!');
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Auto-cycle
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, bannerImages.length]);

  // Navigate to specific index
  const goToIndex = (index) => {
    console.log('Navigating to banner index:', index);
    setCurrentIndex(index);
  };

  // Navigate previous/next
  const navigate = (direction) => {
    setCurrentIndex((prev) => (prev + direction + bannerImages.length) % bannerImages.length);
  };

  return (
    <motion.section
      className="relative rounded-lg mb-8 sm:mb-12 overflow-hidden h-64 sm:h-96 group"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`banner-${currentIndex}`}
          className="relative w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence>
            {!isLoaded[currentIndex] && (
              <motion.div
                className="absolute inset-0 bg-gray-700"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
          <motion.img
            src={bannerImages[currentIndex].src}
            srcSet={bannerImages[currentIndex].srcSet}
            sizes={bannerImages[currentIndex].sizes}
            alt={bannerImages[currentIndex].alt}
            className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 z-0"
            onLoad={() => {
              console.log(`Banner image loaded: ${bannerImages[currentIndex].src}`);
              setIsLoaded((prev) => ({ ...prev, [currentIndex]: true }));
            }}
            onError={() => {
              console.error(`Failed to load banner image: ${bannerImages[currentIndex].src}`);
              setIsLoaded((prev) => ({ ...prev, [currentIndex]: true }));
            }}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent z-10"></div>
      <AnimatePresence mode="wait">
        <motion.div
          key={`text-${currentIndex}`}
          className="absolute inset-0 z-20 flex items-center justify-center text-center px-4 py-6 sm:py-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          onAnimationStart={() => console.log(`Rendering text for slide ${currentIndex}: ${bannerImages[currentIndex].title}`)}
          onAnimationComplete={() => console.log(`Text animation completed for slide ${currentIndex}`)}
        >
          <div className="max-w-2xl">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg"
              style={{ color: 'white', position: 'relative' }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {bannerImages[currentIndex].title}
            </motion.h1>
            <motion.p
              className="text-gray-200 text-base sm:text-lg md:text-xl drop-shadow-md"
              style={{ color: '#E5E7EB', position: 'relative' }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {bannerImages[currentIndex].description}
              {currentIndex === 1 && countdown && (
                <motion.span
                  className="block text-amber-400 font-semibold mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {countdown}
                </motion.span>
              )}
              {currentIndex === 1 && countdown !== 'Offer ended!' && (
                <motion.a
                  href="/contact"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium px-4 py-2 rounded-lg text-sm mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Book now for special offer"
                >
                  Book Now
                </motion.a>
              )}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
      {bannerImages.length > 1 && (
        <>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            onClick={() => navigate(-1)}
            aria-label="Previous banner image"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate(-1)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            onClick={() => navigate(1)}
            aria-label="Next banner image"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate(1)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <div className="absolute bottom-4 !left-1/2 !-translate-x-1/2 flex gap-2 justify-center bg-black/50 p-1 rounded z-30">
            {bannerImages.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-gray-500'
                }`}
                onClick={() => goToIndex(index)}
                aria-label={`View banner image ${index + 1}`}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && goToIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </motion.section>
  );
};

export default BannerCarousel;