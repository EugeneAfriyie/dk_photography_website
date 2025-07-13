import React from 'react';
import { motion } from 'framer-motion';

const TestimonialSection = () => {
  const testimonials = [
    { quote: 'Amazing work! Captured our wedding perfectly.', author: 'Ama Boateng' },
    { quote: 'The makeup and photos were stunning.', author: 'Kwame Mensah' },
  ];

  return (
    <motion.section
      className="py-16 bg-gray-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-md"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 italic mb-4">&quot;{testimonial.quote}&quot;</p>
              <p className="font-semibold">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialSection;