import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const UnderConstruction = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1600585154516-3ddefcb9a8e7?w=200&h=200&fit=crop"
          alt="Under Construction"
          className="w-40 h-40 mx-auto mb-6 object-cover rounded-full"
          initial={{ rotate: -10, y: 20 }}
          animate={{ rotate: 0, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <h1 className="text-4xl font-bold text-amber-400 mb-4">Under Construction</h1>
        <p className="text-gray-300 mb-6">
          This page is currently under development. We're working hard to bring you an amazing experience soon! Check back later or return to the homepage.
        </p>
        <Link to="/">
          <button className="bg-amber-500 px-6 py-2 rounded hover:bg-amber-600 text-white">
            Back to Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default UnderConstruction;