import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroCarousel = () => {
  const slides = [
    {
      title: 'Welcome to Eugene Afriyie Photography',
      tagline: 'Immerse yourself in a journey of artistic vision, where every snapshot celebrates life’s beauty from Kumasi, Ghana, to global horizons since 2017.',
      bgImage: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&h=600&fit=crop',
    },
    {
      title: 'Timeless Weddings in Every Frame',
      tagline: 'Capture the magic of your special day with artistry that lasts forever, blending Kumasi’s rich culture with worldwide elegance since 2017.',
      bgImage: 'https://images.unsplash.com/photo-1513245543498-58e0beef8e0b?w=1200&h=600&fit=crop',
    },
    {
      title: 'Portraits That Speak Volumes',
      tagline: 'Unveil your soul through stunning portraits, crafted with passion and precision across continents from my Kumasi roots since 2017.',
      bgImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&h=600&fit=crop',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="relative bg-gray-900 rounded-xl overflow-hidden mb-16"
          style={{
            backgroundImage: `url(${slides[currentSlide].bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1.0, type: 'spring', stiffness: 100 }}
          onError={(e) => (e.target.style.backgroundImage = "url('/fallback-image.jpg')")}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative z-10">
            <div className="max-w-6xl mx-auto p-6 md:p-8 lg:p-12 bg-gradient-to-r from-amber-900/80 via-gray-900/80 to-black/80 rounded-xl shadow-2xl">
              <motion.h1
                className="text-4xl md:text-5xl font-extrabold text-amber-300 mb-4 tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-200 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {slides[currentSlide].tagline}
              </motion.p>
              <Link to="/services">
                <motion.button
                  className="mt-6 px-6 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View More
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-amber-400' : 'bg-gray-600'}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;