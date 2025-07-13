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
      ease: "easeOut", // ✅ This works across all environments
    },
  },
};



const Ads = () => {
  return (
    <motion.section
      className="bg-black text-white py-24 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-4xl mx-auto px-4"
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
          src="https://res.cloudinary.com/djeorsh5d/image/upload/v1751247104/lo1_qbfpfj.png" // 🔁 Replace with your actual logo path
          alt="DKSHOTIT Logo"
          className="mx-auto mb-8 w-20 sm:w-28"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
        //   transition={{ duration: 1.4, ease: [0.6, 0.05, -0.01, 0.9] }}
        // transition={{ duration: 1.4, ease: [0.6, 0.05, -0.01, 0.9] }} 
transition={{ duration: 1.4, ease: [0.6, 0.05, 0.01, 0.9] }} 

          viewport={{ once: true }}
        />

        <motion.h1
          className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight"
          variants={fadeUp}
        >
          CAPTURE YOUR MOMENTS WITH STYLE & SOUL
        </motion.h1>

        <motion.p
          className="text-gray-400 text-base sm:text-lg mb-10"
          variants={fadeUp}
        >
          Welcome to DKSHOTIT STUDIO & PHOTOGRAPHY — Where every shot tells your story.
        </motion.p>

        <motion.div
          className="flex justify-center gap-4 flex-wrap"
          variants={fadeUp}
        >
          <Link
            to="/contact"
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full transition duration-300"
          >
            Book a Session
          </Link>
          <Link
            to="/Gallery"
            className="border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-full transition duration-300"
          >
            View Portfolio
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Ads;
