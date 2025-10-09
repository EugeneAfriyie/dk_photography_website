import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Placeholder hero image - replace with your brand image
const HERO_IMAGE = 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png';

const Onboarding = () => {
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
    initial: { scale: 1 },
    animate: {
      scale: 1.05,
      transition: { duration: 10, ease: 'linear', repeat: Infinity, repeatType: 'reverse' },
    },
  };

  return (
    <motion.section
      className="relative bg-black text-white min-h-screen flex items-center justify-center py-16 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Hero Image */}
        <motion.div
          className="relative w-full max-h-[60vh] overflow-hidden rounded-xl shadow-xl shadow-amber-500/20 mb-12"
          variants={imageVariants}
          initial="initial"
          animate="animate"
        >
          <img
            src={HERO_IMAGE}
            alt="DK Shot It - Capturing Your Moments"
            className="w-full h-auto max-h-[60vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </motion.div>

        {/* Content */}
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4">
            Welcome to DK Shot It
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            Moments Captured, Memories Forever.
          </p>
          <p className="text-base text-gray-400 max-w-3xl mx-auto mb-8">
            We craft stunning photos and videos for your events with creativity and care.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div variants={itemVariants}>
              <Link
                to="/contact"
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium text-base transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                to="/gallery"
                className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-6 py-3 rounded-lg font-medium text-base transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Onboarding;