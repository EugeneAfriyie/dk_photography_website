import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { throttle } from 'lodash';
import { galleryImage } from '../Home/data';
import Header from '../Home/Components/Header';
import Footer from '../../Components/Footer';
import ExclusiveOffer from '../Home/Components/BookingPrompt';
import BookingPrompt from '../Home/Components/BookingPrompt';
import GridImage from './GridImage';
import BannerCarousel from './BannerCarousel';


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
  const [isExpanded, setIsExpanded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(40);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsExpanded(false);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    console.log('Closing lightbox');
    setSelectedAlbum(null);
    setCurrentMediaIndex(0);
    setDirection(0);
    setIsExpanded(false);
    document.body.style.overflow = 'auto';
  };

  // Navigate to previous/next media
  const navigateMedia = (direction) => {
    if (!selectedAlbum) return;
    const newIndex = (currentMediaIndex + direction + selectedAlbum.media.length) % selectedAlbum.media.length;
    console.log('Navigating media:', direction, 'New index:', newIndex);
    setCurrentMediaIndex(newIndex);
    setDirection(direction);
    setIsExpanded(false);
  };

  // Navigate to specific media item
  const goToMedia = (index) => {
    console.log('Going to media index:', index);
    setDirection(index > currentMediaIndex ? 1 : -1);
    setCurrentMediaIndex(index);
    setIsExpanded(false);
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
    setLoadedCount(40);
  };

  // Load more albums
  const loadMore = () => {
    console.log('Loading more albums');
    setIsLoading(true);
    setTimeout(() => {
      setLoadedCount((prev) => prev + 40);
      setIsLoading(false);
    }, 1000);
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

  // Handle "See More" / "See Less" for description on mobile
  const renderDescription = (description) => {
    const words = description.split(/\s+/);
    const fullText = (
      <>
        <a
          href="https://www.instagram.com/dkshotit_photography"
          className="text-amber-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit dkshotit_photography on Instagram"
        >
          dkshotit_photography
        </a>{' '}
        {description}
      </>
    );
    const collapsedText = words.length > 19 ? (
      <>
        <a
          href="https://www.instagram.com/dkshotit_photography"
          className="text-amber-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit dkshotit_photography on Instagram"
        >
          dkshotit_photography
        </a>{' '}
        {words.slice(0, 19).join(' ')}...
      </>
    ) : fullText;
    return (
      <div>
        <p className="text-gray-300 text-sm hidden custom:block">{fullText}</p>
        <AnimatePresence mode="wait">
          <motion.p
            key={isExpanded ? 'expanded' : 'collapsed'}
            className="text-gray-300 text-sm block custom:hidden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {words.length > 19 && !isExpanded ? collapsedText : fullText}
          </motion.p>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {words.length > 19 && (
            <motion.button
              key={isExpanded ? 'see-less' : 'see-more'}
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-4 py-2 rounded-lg text-sm mt-2 block custom:hidden"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-label={isExpanded ? 'See Less' : 'See More'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {isExpanded ? 'See Less' : 'See More'}
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    );
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
        <BannerCarousel />

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
            <>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 sm:gap-2">
                {filteredImages.slice(0, loadedCount).map((album, index) => (
                  <GridImage
                    key={`${album.title}-${index}`}
                    album={album}
                    index={index}
                    openLightbox={openLightbox}
                  />
                ))}
              </div>
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    className="flex justify-center items-center mt-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    <div className="flex gap-2">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-3 h-3 bg-amber-500 rounded-full"
                          animate={{
                            scale: [0.8, 1.2, 0.8],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: 'easeInOut',
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {loadedCount < filteredImages.length && !isLoading && (
                <motion.div
                  className="flex justify-center mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <motion.button
                    className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-lg text-sm"
                    onClick={loadMore}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Load more albums"
                  >
                    Load More
                  </motion.button>
                </motion.div>
              )}
              {loadedCount >= filteredImages.length && !isLoading && (
                <motion.div
                  className="flex justify-center mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <p className="text-gray-300 text-sm sm:text-base">
                    <span className="text-amber-500">No more</span> albums to load
                  </p>
                </motion.div>
              )}
            </>
          )}
        </section>

        {/* Instagram-style Lightbox Modal */}
        {selectedAlbum && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-500 p-4 sm:p-6 lg:h-screen lg:w-screen overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedAlbum.title} lightbox`}
          >
            <motion.div
              className="relative inline-flex md:w-[70%] flex flex-col custom:flex-row bg-black rounded-lg max-h-[100vh] sm:max-h-[95vh] m-auto lg:h-[95vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="w-full custom:w-[50%] flex flex-col items-center justify-start custom:justify-center swipe-container lg:h-full"
                onTouchStart={swipeHandlers.onTouchStart}
                onTouchMove={swipeHandlers.onTouchMove}
                onTouchEnd={swipeHandlers.onTouchEnd}
                tabIndex={0}
                aria-label="Swipe or use arrow keys to navigate media"
              >
                <div className="relative w-full h-[70vh] custom:h-full lg:h-full overflow-x-hidden border-amber-500 border">
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
                  {selectedAlbum.type === 'album' && selectedAlbum.media.length > 1 && (
                    <div className="absolute bottom-4 !left-1/2 !-translate-x-1/2 flex gap-2 justify-center bg-black/50 p-1 rounded z-10">
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
              <div className="w-full custom:w-[50%] p-4 sm:p-6 flex flex-col justify-between bg-black border border-amber-700 md:overflow-y-auto">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{selectedAlbum.title}</h3>
                    <p className="text-gray-400 text-sm">
                      Date: {selectedAlbum.media[currentMediaIndex].date || new Date().toLocaleDateString()}
                    </p>
                  </div>
                  {renderDescription(selectedAlbum.media[currentMediaIndex].description)}
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
              <button
                className="absolute top-2 right-2 bg-gray-800 hover:bg-amber-700 text-white p-2 rounded-full z-[60]"
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