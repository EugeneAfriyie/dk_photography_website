import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { throttle } from 'lodash';
import { FaImages, FaImage, FaVideo } from 'react-icons/fa';
import dayjs from 'dayjs';
import { galleryImage } from '../Home/data';
import Header from '../Home/Components/Header';
import Footer from '../../Components/Footer';
import ExclusiveOffer from '../Home/Components/ExclusiveOffer';
import BookingPrompt from '../Home/Components/BookingPrompt';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Filter options
  const filters = ['all', 'wedding', 'children', 'couple', 'birthday', 'graduation'];

  // Carousel slides
  const carouselSlides = [
    {
      image: 'https://picsum.photos/800/400',
      srcSet: 'https://picsum.photos/400/200 400w, https://picsum.photos/800/400 800w, https://picsum.photos/1200/600 1200w',
      sizes: '(max-width: 640px) 400px, (max-width: 1280px) 800px, 1200px',
      alt: 'Gallery banner showcasing photography',
      title: 'Our Gallery',
      description: 'Explore our stunning photography and videography moments.',
      cta: null,
    },
    {
      image: 'https://picsum.photos/800/400?random=13',
      srcSet: 'https://picsum.photos/400/200?random=13 400w, https://picsum.photos/800/400?random=13 800w, https://picsum.photos/1200/600?random=13 1200w',
      sizes: '(max-width: 640px) 400px, (max-width: 1280px) 800px, 1200px',
      alt: 'Special booking offer banner',
      title: 'Limited Time Offer',
      description: 'Book by August 31, 2025, for 20% off your session!',
      cta: { text: 'Book Now', href: '/contact' },
    },
    {
      image: 'https://picsum.photos/800/400?random=14',
      srcSet: 'https://picsum.photos/400/200?random=14 400w, https://picsum.photos/800/400?random=14 800w, https://picsum.photos/1200/600?random=14 1200w',
      sizes: '(max-width: 640px) 400px, (max-width: 1280px) 800px, 1200px',
      alt: 'Featured romantic sunset portraits',
      title: 'Featured Shoot: Sunset Portraits',
      description: 'Capture your love story with our breathtaking sunset sessions.',
      cta: { text: 'Learn More', href: '/services' },
    },
  ];

  // Countdown timer
  useEffect(() => {
    const targetDate = dayjs('2025-08-31T23:59:59');
    const updateCountdown = () => {
      const now = dayjs();
      const duration = targetDate.diff(now);
      if (duration <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(duration / (1000 * 60 * 60 * 24));
      const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((duration % (1000 * 60)) / 1000);
      setCountdown({ days, hours, minutes, seconds });
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Carousel auto-rotation
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselSlides.length);
      setDirection(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

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
    setDirection(0);
    document.body.style.overflow = 'auto';
  };

  // Navigate to previous/next media
  const navigateMedia = (direction) => {
    if (!selectedAlbum) return;
    const newIndex = (currentMediaIndex + direction + selectedAlbum.media.length) % selectedAlbum.media.length;
    setCurrentMediaIndex(newIndex);
    setDirection(direction);
  };

  // Navigate to specific media item
  const goToMedia = (index) => {
    setDirection(index > currentMediaIndex ? 1 : -1);
    setCurrentMediaIndex(index);
  };

  // Navigate carousel
  const navigateCarousel = (direction) => {
    const newIndex = (carouselIndex + direction + carouselSlides.length) % carouselSlides.length;
    setCarouselIndex(newIndex);
    setDirection(direction);
  };

  // Go to specific carousel slide
  const goToCarouselSlide = (index) => {
    setDirection(index > carouselIndex ? 1 : -1);
    setCarouselIndex(index);
  };

  // Swipe handlers for carousel
  const carouselSwipeHandlers = useSwipeable({
    onSwipedLeft: () => navigateCarousel(1),
    onSwipedRight: () => navigateCarousel(-1),
    delta: 10,
    preventDefaultTouchmoveEvent: true,
    trackMouse: false,
  });

  // Swipe handlers for lightbox
  const lightboxSwipeHandlers = useSwipeable({
    onSwipedLeft: () => navigateMedia(1),
    onSwipedRight: () => navigateMedia(-1),
    delta: 10,
    preventDefaultTouchmoveEvent: true,
    trackMouse: false,
  });

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (selectedAlbum) {
      if (e.key === 'ArrowLeft') navigateMedia(-1);
      if (e.key === 'ArrowRight') navigateMedia(1);
    } else {
      if (e.key === 'ArrowLeft') navigateCarousel(-1);
      if (e.key === 'ArrowRight') navigateCarousel(1);
    }
  };

  // Filter handler
  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setSelectedAlbum(null);
  };

  // Filtered images
  const filteredImages = activeFilter === 'all'
    ? galleryImage
    : galleryImage.filter((album) => album.category === activeFilter);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get icon based on albumType
  const getAlbumIcon = (albumType) => {
    switch (albumType) {
      case 'mixed':
        return <FaImages className="text-white w-5 h-5 sm:w-6 sm:h-6" />;
      case 'images':
        return <FaImage className="text-white w-5 h-5 sm:w-6 sm:h-6" />;
      case 'videos':
        return <FaVideo className="text-white w-5 h-5 sm:w-6 sm:h-6" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`min-h-screen bg-black text-white py-10 sm:py-20 px-4 overflow-hidden ${selectedAlbum ? 'overflow-hidden' : ''}`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* <Header /> */}
      <div className="max-w-7xl mx-auto">
        {/* Carousel Banner */}
        <motion.section
          className="relative rounded-lg mb-8 sm:mb-12 overflow-hidden h-64 sm:h-96"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'ease-out' }}
          viewport={{ once: true }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative w-full h-full" {...carouselSwipeHandlers}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={carouselIndex}
                custom={direction}
                variants={{
                  enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'ease-out' }}
                className="absolute w-full h-full"
              >
                <img
                  src={carouselSlides[carouselIndex].image}
                  srcSet={carouselSlides[carouselIndex].srcSet}
                  sizes={carouselSlides[carouselIndex].sizes}
                  alt={carouselSlides[carouselIndex].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center px-4 py-6 sm:py-8">
                  <div className="max-w-2xl">
                    <motion.h1
                      className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {carouselSlides[carouselIndex].title}
                    </motion.h1>
                    <motion.p
                      className="text-gray-200 text-base sm:text-lg md:text-xl drop-shadow-md mb-4"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {carouselSlides[carouselIndex].title === 'Limited Time Offer' ? (
                        <>
                          {carouselSlides[carouselIndex].description}
                          <br />
                          <span className="text-amber-500 font-semibold">
                            {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
                          </span>
                        </>
                      ) : (
                        carouselSlides[carouselIndex].description
                      )}
                    </motion.p>
                    {carouselSlides[carouselIndex].cta && (
                      <motion.a
                        href={carouselSlides[carouselIndex].cta.href}
                        className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={carouselSlides[carouselIndex].cta.text}
                      >
                        {carouselSlides[carouselIndex].cta.text}
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            {/* Carousel Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselSlides.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                    index === carouselIndex ? 'bg-white' : 'bg-gray-500 hover:bg-gray-300'
                  } transition-colors duration-200`}
                  onClick={() => goToCarouselSlide(index)}
                  aria-label={`Go to carousel slide ${index + 1} of ${carouselSlides.length}`}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && goToCarouselSlide(index)}
                />
              ))}
            </div>
            {/* Carousel Navigation Buttons (Desktop) */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full hidden sm:block z-10"
              onClick={() => navigateCarousel(-1)}
              aria-label="Previous carousel slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full hidden sm:block z-10"
              onClick={() => navigateCarousel(1)}
              aria-label="Next carousel slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.section>

        {/* <ExclusiveOffer /> */}

        {/* Filter Bar */}
        <section className="mb-6 sm:mb-8">
          <div className="flex gap-2 sm:gap-4 overflow-x-auto sm:flex-wrap pb-2 sm:pb-0 scrollbar-hidden">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium capitalize whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-amber-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                } transition-colors duration-200`}
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
                console.log(album.title, album.type, album.albumType, album.category); // Debug log
                return (
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
                        className="absolute top-2 right-2 bg-black/60 p-1 rounded-full flex items-center justify-center"
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
            className="fixed inset-0 bg-black/90 flex items-start sm:items-center justify-center z-50 p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedAlbum.title} lightbox`}
          >
            <motion.div
              className="relative w-full max-w-4xl flex flex-col sm:flex-row bg-black rounded-lg max-h-[100vh] sm:max-h-[80vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Media Display with Swipe */}
              <div
                className="w-full sm:w-2/3 flex flex-col items-center justify-start sm:justify-center relative overflow-x-hidden"
                {...lightboxSwipeHandlers}
                tabIndex={0}
                aria-label="Swipe or use arrow keys to navigate media"
              >
                <div className="relative w-full h-[90vh] sm:h-[70vh]">
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                      key={currentMediaIndex}
                      custom={direction}
                      variants={{
                        enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
                        center: { x: 0, opacity: 1 },
                        exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: 'ease-out' }}
                      className="absolute w-full h-full"
                    >
                      {selectedAlbum.media[currentMediaIndex].type === 'image' ? (
                        <img
                          src={selectedAlbum.media[currentMediaIndex].src}
                          alt={selectedAlbum.media[currentMediaIndex].alt}
                          className="w-full h-full object-contain"
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
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
                {/* Dot Indicators for Albums */}
                {selectedAlbum.type === 'album' && selectedAlbum.media.length > 1 && (
                  <div className="flex gap-2 mt-4">
                    {selectedAlbum.media.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                          index === currentMediaIndex ? 'bg-white' : 'bg-gray-500 hover:bg-gray-300'
                        } transition-colors duration-200`}
                        onClick={() => goToMedia(index)}
                        aria-label={`View media item ${index + 1} of ${selectedAlbum.media.length}`}
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && goToMedia(index)}
                      />
                    ))}
                  </div>
                )}
              </div>
              {/* Caption and Controls */}
              <div className="w-full sm:w-1/3 p-4 sm:p-6 flex flex-col justify-between bg-black sm:mb-0 mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{selectedAlbum.title}</h3>
                  <p className="text-gray-300 text-sm">
                    {/* {selectedAlbum.media[currentMediaIndex].description} */}

                    Happy Birthday to Me!
Grateful for the journey, the lessons, the growth, and the joy that each year has brought. Today, I celebrate strength, resilience, and the incredible person I’ve become. Here’s to new adventures, deeper peace, and dreams that keep getting bigger. Cheers to this beautiful chapter ahead! 🥂✨🎉

Happy birthday to me @mrdk_real
                    </p>
                  {selectedAlbum.media[currentMediaIndex].tags?.length > 0 && (
                    <p className="text-gray-400 text-sm sm:text-base mt-2">
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
                    strokeWidth="2.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {/* Navigation Buttons */}
              {selectedAlbum.media.length > 1 && (
                <>
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full z-[60]"
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
                        strokeWidth="2.5"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full z-[60]"
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
                        strokeWidth="2.5"
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
          transition={{ duration: 1, ease: 'ease-out', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Have Questions?</h2>
          <p className="text-gray-300 text-sm sm:text-lg mb-4 sm:mb-6">
            If you have any questions or need assistance, feel free to reach out to us!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <motion.a
              href="tel:+233123456789"
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-colors duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Us: +233 123 456 789
            </motion.a>
            <motion.a
              href="https://wa.me/233123456789"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-colors duration-300 text-sm sm:text-base"
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
          className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 bg-amber-500 hover:bg-amber-600 text-white p-2 sm:p-3 rounded-full shadow-lg transition-colors duration-300"
          onClick={scrollToTop}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'ease-out' }}
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