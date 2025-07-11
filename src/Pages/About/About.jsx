import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../Home/Components/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">

      <Header />
      <div className="max-w-6xl mx-auto text-center">
        {/* Hero Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1506784926709-5a5a1d8b8c0d?w=800&h=400&fit=crop"
            alt="SnapShot Studio Team"
            className="w-full h-64 object-cover rounded-xl mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.h1
            className="text-4xl font-bold text-amber-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            About SnapShot Studio
          </motion.h1>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Welcome to SnapShot Studio, where creativity meets expertise. Founded in 2023, we are dedicated to empowering aspiring photographers and makeup artists with top-tier training programs. Our passion is to capture life's moments and enhance beauty through skill and innovation.
          </motion.p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, type: 'spring', stiffness: 80 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-amber-300 mb-6">Our Story</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Starting as a small team of passionate creatives, SnapShot Studio has grown into a leading training hub. With over a decade of industry experience, our founders envisioned a space where beginners and professionals alike could hone their craft. Today, we proudly serve hundreds of students worldwide.
          </p>
        </motion.div>

        {/* Mission & Values Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, type: 'spring', stiffness: 80 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-amber-300 mb-6">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-amber-300 mb-2">Excellence</h3>
              <p className="text-gray-400">Delivering top-quality training with cutting-edge techniques.</p>
            </motion.div>
            <motion.div
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-amber-300 mb-2">Innovation</h3>
              <p className="text-gray-400">Embracing new tools and trends to inspire creativity.</p>
            </motion.div>
            <motion.div
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <h3 className="text-amber-300 mb-2">Community</h3>
              <p className="text-gray-400">Building a supportive network of creatives worldwide.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <Link to="/training">
            <button className="bg-amber-500 px-6 py-2 rounded hover:bg-amber-600">
              Join Our Training
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;