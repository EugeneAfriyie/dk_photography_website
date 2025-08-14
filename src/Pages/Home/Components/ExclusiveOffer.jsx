import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountdownTimer from '../CountdownTimer';
import { Phone, MessageCircle } from 'lucide-react';

const ExclusiveOffer = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-amber-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, scale: 1.05 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
        >
          Our Exclusive Offer
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Elevate your skills with our specialized training programs for photographers and makeup artists. Limited-time offer!
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, type: 'spring', stiffness: 80 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="https://res.cloudinary.com/djeorsh5d/image/upload/v1751247135/makeup_aqazg9.jpg"
              alt="Photography Training"
              className="aspect-[4/2] mx-auto mb-4 object-cover rounded-t-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            />
            <h3 className="text-xl font-semibold mb-2 text-amber-300">Photographer Training</h3>
            <div className="flex flex-col justify-between flex-grow">
              <p className="text-gray-400 mb-4">
                Master photography with training in wedding (candid and posed), portrait (individuals and families), event (corporate and personal), and commercial (brands and products) shoots. Includes 10 hands-on sessions with advanced techniques and equipment mastery.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
              
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, type: 'spring', stiffness: 80 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="https://res.cloudinary.com/djeorsh5d/image/upload/v1751247135/makeup_aqazg9.jpg"
              alt="Makeup Artist Training"
              className="aspect-[4/2] mx-auto mb-4 object-cover rounded-t-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            />
            <h3 className="text-xl font-semibold mb-2 text-amber-300">Makeup Artist Training</h3>
            <div className="flex flex-col justify-between flex-grow">
              <p className="text-gray-400 mb-4">
                Master professional makeup and hair styling techniques tailored for bridal looks, photoshoot portraits, fashion shoots, and special occasions. Learn lighting mastery, product application, and personalized styling through 8 hands-on sessions, including professional consultations to craft your unique style.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
          


          
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 p-6 rounded-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.9), rgba(17, 24, 39, 0.9))',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
          }}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, type: 'spring', stiffness: 90 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-4">Offer ends in:</p>
          <CountdownTimer deadline="2025-09-05T17:00:00Z" />
          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
            <motion.a
              href="tel:+12025550123"
              className="flex items-center justify-center bg-amber-500 px-6 py-2 rounded hover:bg-amber-600 text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call to Enroll
            </motion.a>
            <motion.a
              href="https://wa.me/12025550123?text=Hello,%20I%20want%20to%20enroll%20in%20the%20training%20program!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-amber-500 px-6 py-2 rounded hover:bg-amber-600 text-white"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp to Enroll
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExclusiveOffer;