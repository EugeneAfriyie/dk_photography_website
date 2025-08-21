import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { throttle } from 'lodash';
import { FaImages, FaImage, FaVideo } from 'react-icons/fa';
import { galleryImage } from '../Home/data';
import Header from '../Home/Components/Header';
import Footer from '../../Components/Footer';
import ExclusiveOffer from '../Home/Components/ExclusiveOffer';
import BookingPrompt from '../Home/Components/BookingPrompt';

// Custom swipe handler
const useCustomSwipe = (onSwipedLeft, onSwipedRight) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const onTouchMove = (e) => {
    setTouchEnd({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distanceX = touchStart.x - touchEnd.x;
    const distanceY = Math.abs(touchStart.y - touchEnd.y);
    const isHorizontalSwipe = Math.abs(distanceX) > minSwipeDistance && distanceY < 50;

    if (isHorizontalSwipe) {
      if (distanceX > 0) {
        console.log('Custom swipe: left');
        onSwipedLeft();
      } else {
        console.log('Custom swipe: right');
        onSwipedRight();
      }
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter options
  const filters = ['all', 'wedding', 'children', 'couple', 'birthday', 'graduation'];

  // Scroll-to-top button visibility
  useEffect(() => {
    console.log('Setting up scroll-to-top handler');
    const handleScroll = throttle(() => {
      setIsVisible(window.scrollY > 300);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      console.log('Cleaning up scroll-to-top handler');
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, []);

  // Open lightbox
  const openLightbox = (album, index) => {
    console.log('Opening lightbox:', album.title, index);
    setSelectedAlbum(album);
    setCurrentMediaIndex(index);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    console.log('Closing lightbox');
    setSelectedAlbum(null);
    setCurrentMediaIndex(0);
    setDirection(0);
    document.body.style.overflow = 'auto';
  };

  // Navigate to previous/next media
  const navigateMedia = (direction) => {
    if (!selectedAlbum) return;
    const newIndex = (currentMediaIndex + direction + selectedAlbum.media.length) % selectedAlbum.media.length;
    console.log('Navigating media:', direction, 'New index:', newIndex);
    setCurrentMediaIndex(newIndex);
    setDirection(direction);
  };

  // Navigate to specific media item
  const goToMedia = (index) => {
    console.log('Going to media index:', index);
    setDirection(index > currentMediaIndex ? 1 : -1);
    setCurrentMediaIndex(index);
  };

  // Swipe handlers
  const swipeHandlers = useCustomSwipe(
    () => navigateMedia(1),
    () => navigateMedia(-1)
  );

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (!selectedAlbum) return;
    if (e.key === 'ArrowLeft') {
      console.log('Keydown: ArrowLeft (media)');
      navigateMedia(-1);
    }
    if (e.key === 'ArrowRight') {
      console.log('Keydown: ArrowRight (media)');
      navigateMedia(1);
    }
  };

  // Filter handler
  const handleFilter = (filter) => {
    console.log('Applying filter:', filter);
    setActiveFilter(filter);
    setSelectedAlbum(null);
  };

  // Filtered images
  const filteredImages = activeFilter === 'all'
    ? galleryImage
    : galleryImage.filter((album) => album.category === activeFilter);

  // Scroll to top
  const scrollToTop = () => {
    console.log('Scrolling to top');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get icon based on albumType
  const getAlbumIcon = (albumType) => {
    switch (albumType) {
      case 'mixed':
        return <FaImages className="text-white w-5 h-5" />;
      case 'images':
        return <FaImage className="text-white w-5 h-5" />;
      case 'videos':
        return <FaVideo className="text-white w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`min-h-screen bg-black text-white py-10 sm:py-20 px-4 overflow-hidden ${
        selectedAlbum ? 'pause-animation' : ''
      }`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <Header />
      <div className="max-w-7xl mx-auto">
        {/* Gallery Banner */}
        <motion.section
          className="relative rounded-lg mb-8 sm:mb-12 overflow-hidden h-64 sm:h-96"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/cloudinary/djeorsh5d/image/upload/w_800,h_400,c_fill/v1751247136/EQ_image-2_ttqpf8.png"
            srcSet="/cloudinary/djeorsh5d/image/upload/w_400,h_200,c_fill/v1751247136/EQ_image-2_ttqpf8.png 400w, /cloudinary/djeorsh5d/image/upload/w_800,h_400,c_fill/v1751247136/EQ_image-2_ttqpf8.png 800w, /cloudinary/djeorsh5d/image/upload/w_1200,h_600,c_fill/v1751247136/EQ_image-2_ttqpf8.png 1200w"
            sizes="(max-width: 640px) 400px, (max-width: 1280px) 800px, 1200px"
            alt="Gallery banner showcasing photography"
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
            onError={() => console.error('Failed to load banner image')}
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

        {/* Filter Bar */}
        <section className="mb-6 sm:mb-8">
          <div className="flex gap-2 sm:gap-4 overflow-x-auto sm:flex-wrap pb-2 sm:pb-0 filter-bar">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium capitalize whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-amber-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => handleFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                role="tab"
                aria-label={`Filter by ${filter} category`}
                aria-selected={activeFilter === filter}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleFilter(filter)}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </section>

        {/* Image Grid */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10">
            Photo & Video Gallery
          </h2>
          {filteredImages.length === 0 ? (
            <p className="text-center text-gray-300">No media available for this category.</p>
          ) : (
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 sm:gap-2">
              {filteredImages.map((album, index) => {
                console.log('Rendering album:', album.title, album.type, album.albumType, album.category);
                return (
                  <motion.div
                    key={`${album.title}-${index}`}
                    className="relative aspect-3/4 overflow-hidden cursor-pointer group border border-gray-700 hover:border-amber-400 transition-colors duration-300 rounded-lg"
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
                      onError={() => console.error('Failed to load grid image:', album.media[0].src)}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        {album.title} {album.type === 'album' ? `(${album.media.length})` : ''}
                      </span>
                    </div>
                    {album.type === 'album' && (
                      <div
                        className="absolute top-2 right-2 bg-black/60 p-1 rounded-full album-icon"
                        aria-label={`Album contains ${album.albumType} content`}
                      >
                        {getAlbumIcon(album.albumType)}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          )}
        </section>

        {/* Instagram-style Lightbox Modal */}
        {selectedAlbum && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-500 p-4 sm:p-6 lg:h-screen lg:w-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedAlbum.title} lightbox`}
          >
            <motion.div
              className="relative inline-flex w-[70%] fex flex-col sm:flex-row bg-black rounded-lg max-h-[100vh] sm:max-h-[95vh] m-auto lg:h-[95vh] overflow-aut"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Media Display with Swipe */}
              <div
                className="w-full sm:w-[50%] flex flex-col items-center justify-start sm:justify-center swipe-container lg:h-full"
                onTouchStart={swipeHandlers.onTouchStart}
                onTouchMove={swipeHandlers.onTouchMove}
                onTouchEnd={swipeHandlers.onTouchEnd}
                tabIndex={0}
                aria-label="Swipe or use arrow keys to navigate media"
              >
                <div className="relative w-full h-[70vh] sm:h-full lg:h-full overflow-x-hidden border-amber-500 border">
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                      key={currentMediaIndex}
                      custom={direction}
                      variants={{
                        enter: (dir) => ({
                          x: dir > 0 ? '100%' : '-100%',
                          opacity: 0,
                        }),
                        center: { x: 0, opacity: 1 },
                        exit: (dir) => ({
                          x: dir > 0 ? '-100%' : '100%',
                          opacity: 0,
                        }),
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="absolute w-full h-full flex items-center justify-center"
                    >
                      {selectedAlbum.media[currentMediaIndex].type === 'image' ? (
                        <img
                          src={selectedAlbum.media[currentMediaIndex].src}
                          alt={selectedAlbum.media[currentMediaIndex].alt}
                          className="w-full h-full object-contain"
                          onError={() => console.error('Failed to load lightbox image:', selectedAlbum.media[currentMediaIndex].src)}
                        />
                      ) : (
                        <video
                          src={selectedAlbum.media[currentMediaIndex].src}
                          alt={selectedAlbum.media[currentMediaIndex].alt}
                          className="w-full h-full object-contain"
                          controls
                          autoPlay
                          loop
                          muted
                          onError={() => console.error('Failed to load lightbox video:', selectedAlbum.media[currentMediaIndex].src)}
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>
                  {/* Navigation Buttons */}
                  {selectedAlbum.media.length > 1 && (
                    <>
                      <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full z-[60]"
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
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full z-[60]"
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
                  {/* Dot Indicators for Albums */}
                  {selectedAlbum.type === 'album' && selectedAlbum.media.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedAlbum.media.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full ${
                            index === currentMediaIndex ? 'bg-white' : 'bg-gray-500'
                          }`}
                          onClick={() => goToMedia(index)}
                          aria-label={`View media item ${index + 1} of ${selectedAlbum.media.length}`}
                          tabIndex={0}
                          onKeyDown={(e) => e.key === 'Enter' && goToMedia(index)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {/* Caption and Controls */}
              <div className="w-full sm:w-[40%] p-4 sm:p-6 flex flex-col justify-between bg-black">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{selectedAlbum.title}</h3>
                  <p className="text-gray-300 text-sm">{selectedAlbum.media[currentMediaIndex].description}</p>
                  {selectedAlbum.media[currentMediaIndex].tags?.length > 0 && (
                    <p className="text-gray-400 text-sm mt-2">
                      {selectedAlbum.media[currentMediaIndex].tags.map((tag, index) => (
                        <span key={index}>
                          {tag.label}: {tag.name}{' '}
                          <a
                            href={`https://www.instagram.com/${tag.handle.slice(1)}`}
                            className="text-amber-500 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${tag.handle} on Instagram`}
                          >
                            {tag.handle}
                          </a>
                          {index < selectedAlbum.media[currentMediaIndex].tags.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </p>
                  )}
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
                className="absolute top-2 right-2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full z-[60]"
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