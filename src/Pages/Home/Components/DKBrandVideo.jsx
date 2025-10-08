import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Placeholder video URL - replace with your actual DK brand video
const VIDEO_URL = 'https://res.cloudinary.com/djeorsh5d/video/upload/v1758593443/wedding_dance.mp4'; // Replace with your DK brand video URL
const POSTER_URL = 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png'; // Poster image

const DKBrandVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => setIsLoaded(true);
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleMouseEnter = () => setShowControls(true);
      const handleMouseLeave = () => setTimeout(() => setShowControls(false), 3000);

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('mouseenter', handleMouseEnter);
      video.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('mouseenter', handleMouseEnter);
        video.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const videoContainerVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const playButtonVariants = {
    initial: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut', delay: 0.5 },
    },
    hover: { scale: 1.1 },
  };

  const overlayVariants = {
    initial: { opacity: 1 },
    visible: { opacity: 0, transition: { duration: 0.6, delay: 0.8 } },
  };

  return (
    <motion.section
      className="relative bg-black text-white py-20 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 text-amber-400"
            variants={itemVariants}
          >
            DK Shot It
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Discover the art of timeless storytelling through our lens. DK Shot It captures the essence of your most cherished moments with unparalleled passion, precision, and creativity. From intimate weddings to grand celebrations, we transform fleeting instances into lasting memories that speak volumes.
          </motion.p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          className="relative mx-auto max-w-4xl rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/20"
          variants={videoContainerVariants}
          whileHover="hover"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <video
            ref={videoRef}
            src={VIDEO_URL}
            poster={POSTER_URL}
            className="w-full h-auto max-h-[70vh] object-cover"
            loop
            muted
            playsInline
            preload="metadata"
          />
          
          {/* Overlay with Play Button */}
          <AnimatePresence>
            {!isLoaded && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-black/80 to-amber-900/20 flex items-center justify-center z-10"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center">
                  <motion.div
                    className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  >
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.665z" />
                      </svg>
                    </div>
                  </motion.div>
                  <p className="text-white text-lg font-medium">Loading DK Brand Video...</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Play Button Overlay */}
          <AnimatePresence>
            {!isPlaying && isLoaded && (
              <motion.div
                className="absolute inset-0 bg-black/50 flex items-center justify-center z-10 cursor-pointer"
                variants={overlayVariants}
                initial="initial"
                animate="visible"
                onClick={togglePlay}
              >
                <motion.button
                  variants={playButtonVariants}
                  whileHover="hover"
                  className="w-20 h-20 bg-amber-500/90 rounded-full flex items-center justify-center shadow-2xl shadow-amber-500/50"
                  onClick={togglePlay}
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Controls Overlay */}
          <AnimatePresence>
            {showControls && isLoaded && (
              <motion.div
                className="absolute bottom-4 left-4 right-4 bg-black/70 rounded-lg p-4 flex justify-between items-center z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-4">
                  <button
                    onClick={togglePlay}
                    className="p-2 bg-amber-500 rounded-full hover:bg-amber-600 transition-colors"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      {isPlaying ? (
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                      ) : (
                        <path d="M8 5v14l11-7z"/>
                      )}
                    </svg>
                  </button>
                  <span className="text-white text-sm font-medium">DK Brand Video</span>
                </div>
                <div className="text-right">
                  <p className="text-amber-300 text-sm font-semibold">DK Shot It</p>
                  <p className="text-gray-400 text-xs">Capturing Moments That Matter</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Description Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-6 text-amber-400">Why Choose DK Shot It?</h3>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            At DK Shot It, we don't just take photos—we craft stories. Our team of passionate photographers and videographers brings your vision to life with creative lighting, dynamic angles, and heartfelt emotion. Whether it's your wedding day, family milestone, or corporate event, we deliver breathtaking visuals that you'll cherish forever. With years of experience and a commitment to excellence, we're your partner in preserving life's most beautiful moments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.button
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>
            <motion.button
              className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DKBrandVideo;