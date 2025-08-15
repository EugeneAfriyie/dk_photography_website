import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { throttle } from 'lodash';
import Header from '../Home/Components/Header';
import Footer from '../../Components/Footer';
import ExclusiveOffer from '../Home/Components/ExclusiveOffer';
import BookingPrompt from '../Home/Components/BookingPrompt';
import { packages } from '../Home/data';

const Services = () => {
// State and refs
const [isVisible, setIsVisible] = useState(false);
const [selectedPackage, setSelectedPackage] = useState(null);
// Eugene Afriyie UEB3502023
const containerRef = useRef(null);
const trackRef = useRef(null);
const resumeTimerRef = useRef(null);

useEffect(() => {
  if (trackRef.current) {
    trackRef.current.style.animationPlayState = 'running';
  }
}, []);

// Scroll-to-top button visibility
useEffect(() => {
  const handleScroll = throttle(() => {
    setIsVisible(window.scrollY > 300);
  }, 100);

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
    handleScroll.cancel();
  };
}, []);

// Handle info icon click for modal
const handleInfoClick = (pkg) => {
  setSelectedPackage(pkg);
};

// Close modal
const closeModal = () => {
  setSelectedPackage(null);
};

// Scroll to top
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
const scrollByCard = (direction) => {
  const container = containerRef.current;
  const track = trackRef.current;
  if (!container || !track) return;

  const firstCard = track.firstElementChild;
  if (!firstCard) return;

  const gap = parseFloat(getComputedStyle(track).gap) || (window.innerWidth >= 640 ? 24 : 16);
  const cardWidth = firstCard.getBoundingClientRect().width + gap;
  const halfTrackWidth = track.scrollWidth / 2;

  // Pause animation
  track.style.animationPlayState = 'paused';
  clearTimeout(resumeTimerRef.current);

  let newScrollLeft = container.scrollLeft + direction * cardWidth;

  // Handle wrap-around
  if (newScrollLeft >= halfTrackWidth) {
    container.scrollLeft = newScrollLeft - halfTrackWidth;
  } else if (newScrollLeft < 0) {
    container.scrollLeft = halfTrackWidth + newScrollLeft;
  } else {
    container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
  }

  // Resume animation smoothly after 3s delay
  resumeTimerRef.current = setTimeout(() => {
    track.style.animationPlayState = 'running';
  }, 3000);
};

useEffect(() => {
  const track = trackRef.current;
  if (!track) return;

  // Pause animation on hover over any card
  const handleMouseEnter = () => {
    track.style.animationPlayState = 'paused';
    clearTimeout(resumeTimerRef.current); // cancel any pending resume
  };

  // Resume animation when mouse leaves the track
  const handleMouseLeave = () => {
    track.style.animationPlayState = 'running';
  };

  track.addEventListener('mouseenter', handleMouseEnter);
  track.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    track.removeEventListener('mouseenter', handleMouseEnter);
    track.removeEventListener('mouseleave', handleMouseLeave);
  };
}, []);



// Duplicate packages for infinite scroll effect
const duplicatedPackages = [...packages, ...packages];




  return (
    <div className={`min-h-screen bg-black text-white py-10 sm:py-20 px-4 overflow-hidden ${selectedPackage ? 'pause-animation' : ''}`}>
      <Header />
      <div className="max-w-7xl mx-auto">
        {/* Services Banner */}
        <motion.section
          className="relative rounded-lg mb-8 sm:mb-12 overflow-hidden"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="https://picsum.photos/800/400"
            srcSet="https://picsum.photos/400/200 400w, https://picsum.photos/800/400 800w, https://picsum.photos/1200/600 1200w"
            sizes="(max-width: 640px) 400px, (max-width: 1280px) 800px, 1200px"
            alt="Services banner showcasing photography"
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
          <motion.div
            className="relative z-10 h-full flex items-center justify-center text-center px-4 py-6 sm:py-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="max-w-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Our Services
              </motion.h1>
              <motion.p
                className="text-gray-200 text-base sm:text-lg md:text-xl drop-shadow-md"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                Explore our premium photography and videography packages tailored to your special moments.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.section>

        <ExclusiveOffer />

        {/* Packages Grid */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10">
            Photography Packages
          </h2>

          <div className="relative group carousel-wrapper">
            {/* Scroll Buttons */}
            <button
              onClick={() => scrollByCard(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-r z-20 sm:hidden group-hover:block cursor-pointer"
              aria-label="Scroll to previous package"
            >
              ←
            </button>
            <button
              onClick={() => scrollByCard(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-l z-20 sm:hidden group-hover:block cursor-pointer"
              aria-label="Scroll to next package"
            >
              →
            </button>

            {/* Scrollable Container */}
            <div className="scroll-container overflow-x-auto whiespae-nowrap flex hide-scrollbar scroll-smooth snap-x snap-mandatory" ref={containerRef}>
              <div className="flex gap-4 sm:gap-6 px-2 sm:px-4 carousel-track" ref={trackRef}>
                {duplicatedPackages.map((pkg, index) => (
                  <div
                    key={`${pkg.title}-${index}`}
                    id={`card-${index}`}
                    className={`relative max-w-[250px] sm:min-w-[300px] md:w-[350px] flex-shrink-0 snap-start group flex flex-col justify-between bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg ${
                      pkg.isPopular ? 'border-2 border-amber-500' : ''
                    } hover:border-amber-300 transition duration-300`}
                    tabIndex={0}
                  >
                    {pkg.isPopular && (
                      <span className="inline-block bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded-full mb-3 sm:mb-4">
                        Popular
                      </span>
                    )}
                    <img
                      src={pkg.icon}
                      alt={`Preview of ${pkg.title}`}
                      className="w-full h-36 sm:h-48 object-cover rounded-t-lg mb-3 sm:mb-4"
                      loading="lazy"
                    />
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{pkg.title}</h3>
                    <p className="text-amber-300 text-base sm:text-lg mb-2">{pkg.price}</p>
                    <ul className="text-gray-300 text-xs sm:text-sm space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                      <li><strong>Coverage:</strong> {pkg.coverageHours}</li>
                      <li><strong>Photographers:</strong> {pkg.photographers}</li>
                      <li><strong>Edited Photos:</strong> {pkg.editedPhotos}</li>
                      <li><strong>Delivery:</strong> {pkg.deliveryTime}</li>
                      <li><strong>Extras:</strong> {pkg.extras}</li>
                      <li><strong>Location:</strong> {pkg.sessionLocation}</li>
                    </ul>
                    <div className="relative">
                      <a
                        href="/contact"
                        className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl w-full text-center block text-sm sm:text-base"
                      >
                        Book Now
                      </a>
                      <button
                        className="absolute bottom-0 right-0 bg-gray-600 hover:bg-gray-500 text-white p-1.5 sm:p-2 rounded-full info-icon"
                        onClick={() => handleInfoClick(pkg)}
                        aria-label={`View details for ${pkg.title}`}
                      >
                        <svg
                          className="w-4 sm:w-5 h-4 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {selectedPackage && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label="Package details modal"
          >
            <motion.div
              className="bg-gray-800 p-4 sm:p-6 rounded-lg max-w-[90vw] sm:max-w-md w-full modal-content"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{selectedPackage.title}</h3>
              <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6">{selectedPackage.description}</p>
              <button
                className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl w-full text-sm sm:text-base"
                onClick={closeModal}
                aria-label="Close package details"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}

        <motion.section
          className="bg-gray-900 p-4 sm:p-6 md:p-8 rounded-lg mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Have Questions?</h2>
          <p className="text-gray-300 text-sm sm:text-lg mb-4 sm:mb-6">
            If you have any questions or need assistance, feel free to reach out to us!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <motion.a
              href="tel:+233123456789"
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Us: +233 123 456 789
            </motion.a>
            <motion.a
              href="https://wa.me/233123456789"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              WhatsApp Us
            </motion.a>
          </div>
        </motion.section>
      </div>

      <BookingPrompt />
      <Footer />

      {isVisible && (
        <motion.button
          className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 bg-amber-500 hover:bg-amber-600 text-white p-2 sm:p-3 rounded-full shadow-lg transition duration-300"
          onClick={scrollToTop}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <svg
            className="w-5 sm:w-6 h-5 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </div>
  );
};

export default Services;