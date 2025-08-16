import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { throttle } from 'lodash';
import { galleryImage } from '../Home/data';
import Header from '../Home/Components/Header';
import Footer from '../../Components/Footer';
import ExclusiveOffer from '../Home/Components/ExclusiveOffer';
import BookingPrompt from '../Home/Components/BookingPrompt';
import { FaImage, FaImages, FaVideo } from 'react-icons/fa';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

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

  // Open lightbox
  const openLightbox = (album, index) => {
    setSelectedAlbum(album);
    setCurrentMediaIndex(index);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedAlbum(null);
    setCurrentMediaIndex(0);
    document.body.style.overflow = 'auto';
  };

  // Navigate to previous/next media
  const navigateMedia = (direction) => {
    if (!selectedAlbum) return;
    const newIndex = (currentMediaIndex + direction + selectedAlbum.media.length) % selectedAlbum.media.length;
    setCurrentMediaIndex(newIndex);
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get icon based on albumType
  const getAlbumIcon = (albumType) => {
    switch (albumType) {
      case 'mixed':
        return <FaImages className="text-white w-5 h-5 z-40" />;
      case 'images':
        return <FaImage className="text-white w-5 h-5" />;
      case 'videos':
        return <FaVideo className="text-white w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen bg-black text-white py-10 sm:py-20 px-4 overflow-hidden ${selectedAlbum ? 'pause-animation' : ''}`}>
      <Header />
      <div className="max-w-7xl mx-auto">
        {/* Gallery Banner */}
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
            alt="Gallery banner showcasing photography"
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
                Our Gallery
              </motion.h1>
              <motion.p
                className="text-gray-200 text-base sm:text-lg md:text-xl drop-shadow-md"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                Explore our stunning photography and videography moments.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.section>

        <ExclusiveOffer />

        {/* Image Grid */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10">
            Photo & Video Gallery
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 sm:gap-2">
            {galleryImage.map((album, index) => (
              <motion.div
                key={`${album.title}-${index}`}
                className="relative aspect-square overflow-hidden cursor-pointer group"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => openLightbox(album, 0)}
                tabIndex={0}
                role="button"
                aria-label={`View ${album.title} ${album.type === 'album' ? 'album' : 'media'} in lightbox`}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(album, 0)}
              >
                <img
                  src={album.media[0].src}
                  alt={album.media[0].alt}
                  className="w-full h-full object-cover group-hover:brightness-75 transition-brightness duration-200"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {album.title} {album.type === 'album' ? `(${album.media.length})` : ''}
                  </span>
                </div>
                {album.type === 'album' && (
                  <div
                    className="absolute top-2 right-2 bg-black/60 p-1 rounded-full"
                    aria-label={`Album contains ${album.albumType} content`}
                  >
                    {getAlbumIcon(album.albumType)}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Instagram-style Lightbox Modal */}
        {selectedAlbum && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedAlbum.title} lightbox`}
          >
            <motion.div
              className="relative w-full max-w-4xl flex flex-col sm:flex-row bg-black rounded-lg overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Media Display */}
              <div className="w-full sm:w-2/3 h-[50vh] sm:h-[70vh] flex items-center justify-center">
                {selectedAlbum.media[currentMediaIndex].type === 'image' ? (
                  <img
                    src={selectedAlbum.media[currentMediaIndex].src}
                    alt={selectedAlbum.media[currentMediaIndex].alt}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <video
                    src={selectedAlbum.media[currentMediaIndex].src}
                    alt={selectedAlbum.media[currentMediaIndex].alt}
                    className="max-w-full max-h-full object-contain"
                    controls
                    autoPlay
                    loop
                    muted
                  />
                )}
              </div>
              {/* Caption and Controls */}
              <div className="w-full sm:w-1/3 p-4 sm:p-6 flex flex-col justify-between bg-black">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{selectedAlbum.title}</h3>
                  <p className="text-gray-300 text-sm">{selectedAlbum.media[currentMediaIndex].description}</p>
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href="/contact"
                    className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-4 py-2 rounded-lg text-sm"
                  >
                    Book Now
                  </a>
                </div>
              </div>
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                <svg
                  className="w-5 h-5"
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
              {/* Navigation Buttons (only for albums with multiple items) */}
              {selectedAlbum.media.length > 1 && (
                <>
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full"
                    onClick={() => navigateMedia(-1)}
                    aria-label="Previous media"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full"
                    onClick={() => navigateMedia(1)}
                    aria-label="Next media"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}
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

export default Gallery;