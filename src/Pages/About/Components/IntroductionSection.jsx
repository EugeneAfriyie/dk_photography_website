import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const IntroductionSection = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  // Summary for the main section (2-3 paragraphs)
  const summary = `
    <p class="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
      The journey of Adomako Photography began with Mr. Adomako’s childhood inspiration from his uncle, a skilled photographer whose lens transformed ordinary moments into timeless treasures. As a young boy, Adomako spent countless hours trailing his uncle, absorbing the art of the craft during weddings, birthdays, and studio sessions, igniting a lifelong passion for photography.
    </p>
    <p class="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
      In 2000, Mr. Adomako enrolled at Sunyani Technical University to pursue a diploma in Business Management, refining his skills through university gigs like graduations and campus events. After graduating in 2012 and working as an accountant at Ecobank’s Kumasi branch for two years, he founded Adomako Photography in 2014, leaving corporate life to pursue his true calling.
    </p>
    <p class="text-gray-400 text-sm md:text-base leading-relaxed">
      Starting with a small studio in Amakom and limited capital, he invested in his first camera and equipment. Through hard work and dedication, the studio evolved into a modern facility with makeup services, standing today as a beacon of inspiration across Kumasi and beyond.
    </p>
  `;

  // Full story for the overlay (magazine-style with text wrapping around image)
  const fullStory = `
    <h2 class="text-3xl font-bold text-amber-300 mb-6 text-center">Our Story</h2>
    <div class="text-[.6rem] text-gray-300 leading-relaxed space-y-6">
      <p class="text-justify">
        The origins of Adomako Photography are deeply rooted in a childhood dream, sparked by the guiding hand of an inspiring mentor. <em class="italic text-amber-200">"Every click was a lesson in capturing life’s essence,"</em> Mr. Adomako recalls of his uncle, a skilled photographer whose lens transformed ordinary moments into timeless treasures. As a young boy, Adomako spent countless hours trailing his uncle during his free time, eagerly absorbing the art of the craft. Together, they ventured to weddings filled with joy, birthdays brimming with laughter, and quiet studio sessions where creativity flourished. This intimate apprenticeship ignited a lifelong passion for capturing the essence of life through photography.
      </p>
      <p class="text-justify">
        In 2000, Mr. Adomako took a pivotal step by enrolling at Sunyani Technical University to pursue a diploma in Business Management, blending his creative interests with a practical skill set. His university years were a crucible for his talents, where he seized every opportunity to refine his photography skills. From photographing vibrant graduations to immortalizing friends’ birthdays, SRC week celebrations, and a myriad of campus events, each gig was a stepping stone. After graduating in 2012 and completing his national service with dedication, he joined Ecobank’s Kumasi branch as an accountant. For two years, he immersed himself in the corporate world, but by 2014, a deeper calling emerged, leading him to make the courageous decision to leave. <strong class="font-semibold text-amber-100">Thus, Adomako Photography was born</strong>—a testament to his unwavering commitment to preserving life’s precious memories.
      </p>
      <div class="float-left w-1/3 mr-4 mb-4 clear-both">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop" alt="Mr. Adomako at Work" class="w-full h-48 object-cover rounded-lg shadow-md" />
        <p class="text-center text-[.5rem] text-amber-200 mt-2">Mr. Adomako capturing a moment in his early studio.</p>
      </div>
      <p class="text-justify">
        The early days were humble, marked by limited capital and boundless determination. With savings painstakingly accumulated, he invested in his first camera and essential photography equipment, tools that would become the heartbeat of his vision. Securing a modest space in Amakom, he established his initial studio, a small but vibrant hub where dreams began to take shape. Through dedication, hard work, and divine favor, Adomako Photography flourished beyond its modest beginnings. The small Amakom studio evolved into a modern, state-of-the-art facility, reflecting years of perseverance and innovation. <em class="italic text-amber-200">"Challenges only fueled my resolve,"</em> Mr. Adomako reflects on the late nights editing and financial constraints.
      </p>
      <p class="text-justify">
        Mr. Adomako’s vision expanded to include makeup services, recognizing the synergy between photography and beauty enhancement, and he introduced additional creative offerings. This growth strengthened his resolve. Today, Adomako Photography stands as a beacon of inspiration, preserving memories for clients across Kumasi and beyond while training aspiring photographers to carry the art forward. <strong class="font-semibold text-amber-100 text-right">A legacy in every frame.</strong>
      </p>
    </div>
  `;

  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5, type: 'spring', stiffness: 90 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Image Container */}
        <motion.div
          className="h-full bg-gray-800 rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop"
            alt="Mr. Adomako at Work"
            className="w-full h-full object-cover"
            onError={(e) => (e.target.src = '/fallback-image.jpg')}
          />
        </motion.div>

        {/* Story Container with Summary and Button */}
        <motion.div
          className="p-6 bg-gray-800 rounded-xl shadow-lg flex flex-col justify-between h-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-amber-300 mb-4">Our Story</h2>
            <div className="text-gray-400 text-sm md:text-base leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: summary }} />
          </div>
          <motion.button
            className="mt-6 px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition duration-300 self-end"
            onClick={() => setIsOverlayOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Full Story
          </motion.button>
        </motion.div>
      </div>

      {/* Overlay for Full Story */}
      {isOverlayOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-gray-900 p-6 md:p-8 lg:p-12 rounded-xl shadow-2xl max-w-3xl w-full mx-4 overflow-y-auto max-h-[90vh]"
            initial={{ y: 50, scale: 0.9 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 50, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex justify-end mb-4">
              <button
                className="text-gray-400 hover:text-white transition duration-300"
                onClick={() => setIsOverlayOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="border-t-4 border-amber-400 mb-6"></div>
            <h2 className="text-3xl font-bold text-amber-300 mb-6">Our Story</h2>
            <article
              className="text-gray-300 text-[.6rem] leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: fullStory }}
            />
            <motion.button
              className="mt-6 px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition duration-300"
              onClick={() => setIsOverlayOpen(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default IntroductionSection;