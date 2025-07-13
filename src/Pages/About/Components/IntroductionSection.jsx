import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const IntroductionSection = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const modalRef = useRef(null);
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(false);

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsOverlayOpen(false);
    }
  };

  // Summary for the main section
  const summary = `
    <p class="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
      DKSHOTIT STUDIO & PHOTOGRAPHY began with Emmanuel Adomako’s childhood inspiration from his uncle, a skilled photographer whose lens transformed ordinary moments into timeless treasures.
    </p>
    <p class="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
      In 2000, Emmanuel enrolled at Sunyani Technical University to pursue a diploma in Business Management, refining his photography skills through university events like graduations and campus programs. After graduating in 2012 and working as an accountant at Ecobank’s Kumasi branch for two years, he founded DKSHOTIT STUDIO & PHOTOGRAPHY in 2014, leaving corporate life to follow his true passion.
    </p>
    <p class="text-gray-400 text-sm md:text-base leading-relaxed">
      Starting with a small studio in Amakom and limited capital, he invested in his first camera and equipment. Through hard work and dedication, the studio grew into a modern facility with makeup services, now serving as a creative hub across Kumasi and beyond.
    </p>
  `;

  // Full story for the overlay
  const fullStory = `
    <h3 class="text-2xl sm:text-3xl font-serif font-bold text-amber-300 mb-4 sm:mb-6 text-center tracking-tight">
      Our Story
    </h3>
    <div class="border-t-2 border-amber-300 w-20 sm:w-24 mx-auto mb-6 sm:mb-8"></div>
    <div class="prose prose-base sm:prose-lg text-gray-300">
      <div class="mb-4 sm:mb-6">
        <div class="float-left w-[60%] sm:w-1/3 mr-3 sm:mr-4 mt-1 clear-both">
          <img 
            src="https://picsum.photos/200/128" 
            alt="Childhood Inspiration" 
            class="w-full h-32 object-cover rounded-md shadow-md"
          />
          <p class="text-center text-[.5rem] text-amber-200 mt-2">Young Emmanuel with his uncle.</p>
        </div>
        <p class="leading-relaxed text-justify first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-bold first-letter:text-amber-300 first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3">
          The origins of DKSHOTIT STUDIO & PHOTOGRAPHY are deeply rooted in the childhood dreams of its founder and lead photographer, Emmanuel Adomako. His journey began with a deep admiration for his uncle—a gifted photographer whose lens transformed ordinary moments into lasting memories.
          As a young boy, Emmanuel would often trail behind his uncle, observing him during weddings, birthdays, and studio sessions. These experiences weren’t just inspiring; they were formative, igniting a passion for photography that never faded.
        </p>
        <div class="clear-both sm:clear-none"></div>
      </div>
      <div class="mb-4 sm:mb-6">
        <div class="float-left w-[60%] sm:w-1/3 mr-3 sm:mr-4 mt-1 clear-both">
          <img 
            src="https://picsum.photos/200/128" 
            alt="University Photography" 
            class="w-full h-32 object-cover rounded-md shadow-md"
          />
          <p class="text-center text-[.5rem] text-amber-200 mt-2">Emmanuel at a university event.</p>
        </div>
        <p class="leading-relaxed text-justify first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-bold first-letter:text-amber-300 first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3">
          In 2000, Emmanuel enrolled at Sunyani Technical University to pursue a diploma in Business Management. Alongside his studies, he refined his craft through campus events, graduations, and birthdays. After graduating in 2012 and completing national service, he worked as an accountant at Ecobank’s Kumasi branch. But in 2014, he made the bold decision to leave corporate life and pursue his passion full-time.
          <strong class="font-semibold text-amber-100">DKSHOTIT STUDIO & PHOTOGRAPHY was born.</strong>
        </p>
        <div class="clear-both sm:clear-none"></div>
      </div>
      <div class="my-4 sm:my-6">
        <div class="w-full">
          <img 
            src="https://picsum.photos/300/200" 
            alt="Milestone Moment" 
            class="w-full h-40 object-cover rounded-md shadow-md"
          />
          <p class="text-center text-[.5rem] text-amber-200 mt-2">A milestone in the DKSHOTIT journey.</p>
        </div>
      </div>
      <div class="mb-4 sm:mb-6">
        <div class="float-left w-[60%] sm:w-1/3 mr-3 sm:mr-4 mt-1 clear-both">
          <img 
            src="https://picsum.photos/200/128" 
            alt="First Studio" 
            class="w-full h-32 object-cover rounded-md shadow-md"
          />
          <p class="text-center text-[.5rem] text-amber-200 mt-2">The first Amakom studio.</p>
        </div>
        <p class="leading-relaxed text-justify first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-bold first-letter:text-amber-300 first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3">
          With limited capital but great determination, Emmanuel saved up to buy his first camera and gear. He established his first studio in Amakom—a modest space where vision met reality.
          Through hard work, sleepless editing nights, and faith, DKSHOTIT evolved. The once-small studio grew into a modern photography space with professional makeup services. It now stands as one of Kumasi’s most respected photography brands.
          <em class="italic text-amber-200">“Challenges only fueled my resolve,”</em> says Emmanuel.
          The name "DK" was creatively derived from his surname, Adomako, and has since become his personal brand and artistic signature.
        </p>
        <div class="clear-both sm:clear-none"></div>
      </div>
      <div class="mt-8">
        <h4 class="text-xl sm:text-2xl font-serif font-bold text-amber-300 mb-4">Our Mission & Vision</h4>
        <div class="border-t-2 border-amber-300 w-20 sm:w-24 mx-auto mb-6"></div>
        <p class="leading-relaxed text-justify first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-bold first-letter:text-amber-300 first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3">
          Our mission is to capture life’s most meaningful moments with creativity, excellence, and soul. Our vision is to inspire future generations of photographers and preserve cultural memories through timeless, high-quality visual storytelling.
        </p>
      </div>
    </div>
  `;

  return (
    <motion.section
      className="mb-16 mt-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5, type: 'spring', stiffness: 90 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Image Container */}
        <motion.div
          className="h-80 sm:h-full bg-gray-800 rounded-xl shadow-md"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop"
            alt="Mr. Adomako at Work"
            className="w-full h-full object-cover object-top"
            onError={(e) => (e.target.src = 'https://via.placeholder.com/600x400')}
          />
        </motion.div>

        {/* Story Container with Summary and Button */}
        <motion.div
          className="p-6 bg-gray-800 rounded-xl shadow-md flex flex-col justify-between h-full"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-xl md:text-4xl font-bold text-amber-300 mb-4">Our Story</h2>
            <div className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-semibold">
              <div dangerouslySetInnerHTML={{ __html: summary }} className="md:block hidden" />
              <div className="md:hidden">
                <p className="mb-4" dangerouslySetInnerHTML={{ __html: `
                  <p class="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                    DKSHOTIT STUDIO & PHOTOGRAPHY began with Emmanuel Adomako’s childhood inspiration from his uncle, a skilled photographer whose lens transformed ordinary moments into timeless treasures.
                  </p>
                ` }} />
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: isSummaryExpanded ? 'auto' : 0, opacity: isSummaryExpanded ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {isSummaryExpanded && (
                    <div dangerouslySetInnerHTML={{ __html: `
                      <p class="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                        In 2000, Emmanuel enrolled at Sunyani Technical University to pursue a diploma in Business Management, refining his photography skills through university events like graduations and campus programs. After graduating in 2012 and working as an accountant at Ecobank’s Kumasi branch for two years, he founded DKSHOTIT STUDIO & PHOTOGRAPHY in 2014, leaving corporate life to follow his true passion.
                      </p>
                      <p class="text-gray-400 text-sm md:text-base leading-relaxed">
                        Starting with a small studio in Amakom and limited capital, he invested in his first camera and equipment. Through hard work and dedication, the studio grew into a modern facility with makeup services, now serving as a creative hub across Kumasi and beyond.
                      </p>
                    ` }} />
                  )}
                </motion.div>
              </div>
              <div className="mt-4">
                <motion.button
                  className="text-amber-300 hover:text-amber-100 transition duration-300 md:hidden"
                  onClick={() => setIsSummaryExpanded(!isSummaryExpanded)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSummaryExpanded ? 'See Less' : 'See More'}
                </motion.button>
              </div>
            </div>
          </div>
          <motion.button
            className="mt-6 px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition duration-300 md:self-start w-full md:w-auto"
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
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" onClick={handleOverlayClick}>
          <div ref={modalRef} className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-[90vw] sm:max-w-3xl mx-4 p-6 sm:p-8 md:p-10 relative max-h-[90vh] sm:max-h-[85vh] overflow-y-auto">
            <div className="flex justify-end cursor-pointer mb-3">
              <button
                onClick={() => setIsOverlayOpen(false)}
                className="text-white bg-red-500 hover:bg-red-700 hover:scale-110 transition duration-300"
              >
                <svg
                  className="w-6 sm:w-8 h-6 sm:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="prose prose-base sm:prose-lg text-gray-300" dangerouslySetInnerHTML={{ __html: fullStory }} />
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default IntroductionSection;