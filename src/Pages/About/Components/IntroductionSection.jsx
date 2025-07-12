// src/components/IntroductionSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const IntroductionSection = () => {
  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5, type: 'spring', stiffness: 90 }}
      viewport={{ once: true }}
    >
      <div className="max-w-[80%] mx-auto">
        {/* Image at the Top */}
        <motion.div
          className="w-full h-80 bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&h=400&fit=crop"
            alt="Mr. Adomako at Work"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Story Text */}
        <div className="p-4 md:p-6 lg:p-12 bg-gray-800 rounded-xl shadow-lg">
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-amber-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Our Story
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            The origins of Adomako Photography are deeply rooted in a childhood dream, sparked by the guiding hand of an inspiring mentor. Mr. Adomako, the founder and CEO, was captivated from his earliest years by his uncle, a skilled photographer whose lens transformed ordinary moments into timeless treasures. As a young boy, Adomako spent countless hours trailing his uncle during his free time, eagerly absorbing the art of the craft. Together, they ventured to weddings filled with joy, birthdays brimming with laughter, and quiet studio sessions where creativity flourished. This intimate apprenticeship ignited a lifelong passion for capturing the essence of life through photography, laying the foundation for what would become a remarkable journey.
          </motion.p>
          <motion.p
            className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
          >
            In 2000, Mr. Adomako took a pivotal step by enrolling at Sunyani Technical University to pursue a diploma in Business Management, blending his creative interests with a practical skill set. His university years were a crucible for his talents, where he seized every opportunity to refine his photography skills. From photographing vibrant graduations to immortalizing friends’ birthdays, SRC week celebrations, and a myriad of campus events, each gig was a stepping stone. After graduating in 2012 and completing his national service with dedication, he joined Ecobank’s Kumasi branch as an accountant. For two years, he immersed himself in the corporate world, but by 2014, a deeper calling emerged, leading him to make the courageous decision to leave. Thus, Adomako Photography was born—a testament to his unwavering commitment to preserving life’s precious memories and inspiring others through his art.
          </motion.p>
          <motion.p
            className="text-gray-400 text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
          >
            The early days were humble, marked by limited capital and boundless determination. With savings painstakingly accumulated, he invested in his first camera and essential photography equipment, tools that would become the heartbeat of his vision. Securing a modest space in Amakom, he established his initial studio, a small but vibrant hub where dreams began to take shape. Through dedication, hard work, and divine favor, Adomako Photography flourished beyond its modest beginnings. The small Amakom studio evolved into a modern, state-of-the-art facility, reflecting years of perseverance and innovation. Mr. Adomako’s vision expanded to include makeup services, recognizing the synergy between photography and beauty enhancement, and he introduced additional creative offerings. This growth, despite challenges like late nights editing and navigating financial constraints, strengthened his resolve. Today, Adomako Photography stands as a beacon of inspiration, preserving memories for clients across Kumasi and beyond while training aspiring photographers to carry the art forward.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default IntroductionSection;