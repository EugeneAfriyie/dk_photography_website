import React, { useState, useEffect } from 'react';
import HeroCarousel from './Components/HeroCarousel';
import IntroductionSection from './Components/IntroductionSection';
import MissionSection from './Components/MissionSection';
import Header from '../Home/Components/Header';
import LocationSection from './Components/LocationSection';
import Footer from '../../Components/Footer';
import Ads from './Components/Ads';
import { motion } from 'framer-motion';
import GallerySection from './Components/GallerySection';
import ServicesSection from './Components/ServicesSection';
import TestimonialSection from './Components/TestimonialSection';
import Testmonial from '../Home/Components/Testmonial';
import { testimonials } from '../Home/data';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 overflow-hidden">
      <Header />

      <div className="max-w-7xl mx-auto">
        <HeroCarousel />
        <IntroductionSection />
        <MissionSection />
        <LocationSection />
        <Ads />

        <GallerySection />
        <ServicesSection />
         <Testmonial
            items={testimonials}
            interval={7000}
            autoPlay={true}
    
          />
        <Footer />
      </div>

      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-8 bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-full shadow-lg transition duration-300"
          onClick={scrollToTop}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-6 h-6"
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

export default About;