import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountdownTimer from './CountdownTimer'; // Assuming CountdownTimer is in the same directory

const ExclusiveOffer = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-amber-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Exclusive Offer
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Elevate your skills with our specialized training programs for photographers and makeup artists. Limited-time offer!
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Camera className="w-12 h-12 mx-auto mb-4 text-amber-400" />
            <h3 className="text-xl font-semibold mb-2 text-amber-300">Photographer Training</h3>
            <p className="text-gray-400 mb-4">
              Master the art of photography with hands-on training, advanced techniques, and equipment mastery. Includes 10 sessions.
            </p>
            <Link to="/training/photographer">
              <button className="bg-amber-500 px-4 py-2 rounded hover:bg-amber-600">
                Learn More
              </button>
            </Link>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Palette className="w-12 h-12 mx-auto mb-4 text-amber-400" />
            <h3 className="text-xl font-semibold mb-2 text-amber-300">Makeup Artist Training</h3>
            <p className="text-gray-400 mb-4">
              Learn professional makeup techniques for photoshoots, including lighting and product application. Includes 8 sessions.
            </p>
            <Link to="/training/makeup">
              <button className="bg-amber-500 px-4 py-2 rounded hover:bg-amber-600">
                Learn More
              </button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-4">Offer ends in:</p>
          <CountdownTimer deadline="2025-07-05T17:00:00Z" />
          <Link to="/training">
            <button className="mt-4 bg-amber-500 px-6 py-2 rounded hover:bg-amber-600">
              Enroll Now
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ExclusiveOffer;