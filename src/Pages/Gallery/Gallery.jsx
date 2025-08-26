import React, { useState, useEffect, useRef, useCallback } from 'react';
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

// BannerCarousel component
const BannerCarousel = ({ bannerImages }) => {
  const defaultBannerImages = [
    {
      src: '/cloudinary/djeorsh5d/image/upload/w_800,h_400,c_fill/v1751247136/EQ_image-2_ttqpf8.png',
      srcSet: '/cloudinary/djeorsh5d/image/upload/w_400,h_200,c_fill/v1751247136/EQ_image-2_ttqpf8.png 400w, /cloudinary/djeorsh5d/image/upload/w_800,h_400,c_fill/v1751247136/EQ_image-2_ttqpf8.png 800w, /cloudinary/djeorsh5d/image/upload/w_1200,h_600,c_fill/v1751247136/EQ_image-2_ttqpf8.png 1200w',
      sizes: '(max-width: 640px) 400px, (max-width: 1280px) 800px, 1200px',
      alt: 'Gallery banner showcasing photography',
      title: 'Our Gallery',
      description: 'Explore our stunning photography and videography moments.',
    },
    {
      src: '/cloudinary/djeorsh5d/image/upload/w_800,h_400,c_fill/v1751247136/EQ_image-3_ttqpf8.png',
      srcSet: '/cloudinary/djeorsh5d/image/upload/w_400,h_200,c_fill/v1751247136/EQ_image-3_ttqpf8.png 400w, /cloudinary/djeorsh5d/image/upload/w_800,h_400,c_fill/v1751247136/EQ_image-3_ttqpf8.png 800w, /cloudinary/djeorsh5d/image/upload/w_1200,h_600,c_fill/v1751247136/EQ_image-3_ttqpf8.png 1200w',
      sizes: '(max-width: 640px) 400px, (max-width: 1280px) 800px, 1200px',
      alt: 'Special booking offer banner',
      title: 'Special Booking Offer',
      description: 'Book now! Special offer ends soon!',
    },
    {
      src: '/cloudinary/djeorsh5d/image/upload/w_800,h_400,c_fill/v1751247136/EQ_image-4_ttqpf8.png',
      srcSet: '/cloudinary/djeorsh5d/image/upload/w_400,h_200,c_fill/v1751247136/EQ_image-4_ttqpf8.png 400w, /cloudinary/djeorsh5d/image/upload/w_800,h_400,c_fill/v1751247136/EQ_image-4_ttqpf8.png 800w, /cloudinary/djeorsh5d/image/upload/w_1200,h_600,c_fill/v1751247136/EQ_image-4_ttqpf8.png 1200w',
      sizes: '(max-width: 640px) 400px, (max-width: 1280px) 800px, 1200px',
      alt: 'Appreciation banner for capturing memories',
      title: 'Unforgettable Moments',
      description: 'Capture life’s unforgettable moments with us.',
    },
  ];

  const slides = bannerImages || defaultBannerImages;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState({});
  const [isPaused, setIsPaused] = useState(false);
  const [countdown, setCountdown] = useState('');

  // Countdown timer for Slide 2
  useEffect(() => {
    if (currentIndex !== 1) return;

    const endDate = new Date('2025-09-02T06:05:00Z').getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance <= 0) {
        setCountdown('Offer ended!');
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Auto-cycle
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  // Navigate to specific index
  const goToIndex = (index) => {
    console.log('Navigating to banner index:', index);
    setCurrentIndex(index);
  };

  // Navigate previous/next
  const navigate = (direction) => {
    setCurrentIndex((prev) => (prev + direction + slides.length) % slides.length);
  };

  return (
    <motion.section
      className="relative rounded-lg mb-8 sm:mb-12 overflow-hidden h-64 sm:h-96 group"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`banner-${currentIndex}`}
          className="relative w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence>
            {!isLoaded[currentIndex] && (
              <motion.div
                className="absolute inset-0 bg-gray-700"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
          <motion.img
            src={slides[currentIndex].src}
            srcSet={slides[currentIndex].srcSet}
            sizes={slides[currentIndex].sizes}
            alt={slides[currentIndex].alt}
            className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 z-0"
            onLoad={() => {
              console.log(`Banner image loaded: ${slides[currentIndex].src}`);
              setIsLoaded((prev) => ({ ...prev, [currentIndex]: true }));
            }}
            onError={() => {
              console.error(`Failed to load banner image: ${slides[currentIndex].src}`);
              setIsLoaded((prev) => ({ ...prev, [currentIndex]: true }));
            }}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent z-10"></div>
      <AnimatePresence mode="wait">
        <motion.div
          key={`text-${currentIndex}`}
          className="absolute inset-0 z-20 flex items-center justify-center text-center px-4 py-6 sm:py-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          onAnimationStart={() => console.log(`Rendering text for slide ${currentIndex}: ${slides[currentIndex].title}`)}
          onAnimationComplete={() => console.log(`Text animation completed for slide ${currentIndex}`)}
        >
          <div className="max-w-2xl">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg"
              style={{ color: 'white', position: 'relative' }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {slides[currentIndex].title}
            </motion.h1>
            <motion.p
              className="text-gray-200 text-base sm:text-lg md:text-xl drop-shadow-md"
              style={{ color: '#E5E7EB', position: 'relative' }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {slides[currentIndex].description}
              {currentIndex === 1 && countdown && (
                <motion.span
                  className="block text-amber-400 font-semibold mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {countdown}
                </motion.span>
              )}
              {currentIndex === 1 && countdown !== 'Offer ended!' && (
                <motion.a
                  href="/contact"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium px-4 py-2 rounded-lg text-sm mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Book now for special offer"
                >
                  Book Now
                </motion.a>
              )}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
      {slides.length > 1 && (
        <>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            onClick={() => navigate(-1)}
            aria-label="Previous banner image"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate(-1)}
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
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            onClick={() => navigate(1)}
            aria-label="Next banner image"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate(1)}
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
          <div className="absolute bottom-4 !left-1/2 !-translate-x-1/2 flex gap-2 justify-center bg-black/50 p-1 rounded z-30">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-gray-500'
                }`}
                onClick={() => goToIndex(index)}
                aria-label={`View banner image ${index + 1}`}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && goToIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </motion.section>
  );
};

// GridImage component
const GridImage = ({ album, index, openLightbox }) => {
  const imageKey = `${album.title}-${index}`;
  const imageRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    console.log(`Image loaded: ${imageKey}`);
    setIsLoaded(true);
  }, [imageKey]);

  const handleError = useCallback(() => {
    console.error(`Failed to load grid image: ${album.media[0].src}`);
    setIsLoaded(true);
  }, [imageKey, album.media[0].src]);

  useEffect(() => {
    const img = imageRef.current;
    let observer;

    if (img) {
      console.log(`Setting up IntersectionObserver for ${imageKey}`);
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && img.complete) {
            console.log(`Image cached: ${imageKey}, isLoaded: ${isLoaded}`);
            setIsLoaded(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(img);
    }

    const timeout = setTimeout(() => {
      if (!isLoaded) {
        console.log(`Timeout triggered for ${imageKey}`);
        setIsLoaded(true);
      }
    }, 3000);

    return () => {
      if (observer && img) {
        console.log(`Cleaning up IntersectionObserver for ${imageKey}`);
        observer.disconnect();
      }
      clearTimeout(timeout);
    };
  }, [imageKey, isLoaded]);

  return (
    <motion.div
      key={imageKey}
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
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key={`placeholder-${imageKey}`}
            className="absolute inset-0 bg-gray-700"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
      <img
        key={`image-${imageKey}`}
        ref={imageRef}
        src={album.media[0].src}
        alt={album.media[0].alt}
        className={`w-full h-full object-cover group-hover:brightness-75 transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
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
          {(() => {
            switch (album.albumType) {
              case 'mixed':
                return <FaImages className="text-white w-5 h-5" />;
              case 'images':
                return <FaImage className="text-white w-5 h-5" />;
              case 'videos':
                return <FaVideo className="text-white w-5 h-5" />;
              default:
                return null;
            }
          })()}
        </div>
      )}
    </motion.div>
  );
};

// Gallery component
const Gallery = ({
  images = galleryImage,
  filters = ['all', 'wedding', 'children', 'couple', 'birthday', 'graduation'],
  initialCount = 40,
  bannerImages,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isExpanded, setIsExpanded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(initialCount);
  const [isLoading, setIsLoading] = useState(false);

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
    setLoadedCount(initialCount);
  };

  // Load more albums
  const loadMore = () => {
    console.log('Loading more albums');
    setIsLoading(true);
    setTimeout(() => {
      setLoadedCount((prev) => prev + initialCount);
      setIsLoading(false);
    }, 1000);
  };

  // Filtered images
  const filteredImages = activeFilter === 'all'
    ? images
    : images.filter((album) => album.category === activeFilter);

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
        <BannerCarousel bannerImages={bannerImages} />

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