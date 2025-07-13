import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const Ads = () => {
  return (
    <motion.section
      className="bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24 text-center bg-gradient-to-b from-black to-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto  sm:px-6 md:px-8"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {/* Animated Logo */}
        <motion.img
          src="https://res.cloudinary.com/djeorsh5d/image/upload/v1751247104/lo1_qbfpfj.png"
          alt="DKSHOTIT Logo"
          className="mx-auto mb-4 sm:mb-6 md:mb-8 w-16 sm:w-20 md:w-24 lg:w-28"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15, duration: 1.4, ease: [0.6, 0.05, 0.01, 0.9] } }}
          viewport={{ once: true }}
        />

        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 tracking-tight"
          variants={fadeUp}
        >
          CAPTURE YOUR MOMENTS WITH STYLE & SOUL
        </motion.h1>

        <motion.p
          className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10"
          variants={fadeUp}
          custom={0.2} // Slight delay for subheading
        >
          Welcome to DKSHOTIT STUDIO & PHOTOGRAPHY — Where every shot tells your story.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-6 md:gap-10 flex-wrap"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div variants={{
            hidden: { x: -50, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
          }}>
            <Link
              to="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base md:text-lg transition duration-300 w-full sm:w-auto"
            >
              Book a Session
            </Link>
          </motion.div>

          <motion.div variants={{
            hidden: { x: 50, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
          }}>
            <Link
              to="/Gallery"
              className="border border-white hover:bg-white hover:text-black text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base md:text-lg transition duration-300 w-full sm:w-auto"
            >
              View Portfolio
            </Link>
          </motion.div>

        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Ads;