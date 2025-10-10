
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Clutter images for slide 2 - replace with your brand images (1920x1080+)
const CLUTTER_IMAGES = [
  { src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593372/SnapInsta.to_542827907_18521856481055684_8426812885547460100_n_wbid5d.jpg', style: 'absolute top-0 left-2 w-1/7 sm:w-1/3 h-3/6 min-w-[100px] min-h-[100px] object-cover rounded-lg shadow-lg transform rotate-[-5deg] z-100 clutter-image' },
  { src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1759712515/SnapInsta.to_558976645_18526850191055684_8864724944103735477_n_y3cjrq.jpg', style: 'absolute top-0 left-3/8 w-1/3 h-2/4 min-w-[150px] min-h-[150px] object-cover rounded-lg shadow-lg transform rotate-[10deg] z-400 clutter-image' },


  { src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1759712506/SnapInsta.to_466039879_18464144392055684_7340120126445394992_n_ockrio.jpg', style: 'absolute top-0 right-0 w-2/6 h-3/6 min-w-[200px] min-h-[200px] object-cover rounded-lg shadow-lg transform rotate-[5deg] z-20 clutter-image' },

   { src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593385/SnapInsta.to_545190432_18521832250055684_193542375285742012_n_cdjjy3.jpg', style: 'absolute bottom-0 left-0 w-1/3 h-2/4 min-w-[150px] min-h-[150px] object-cover rounded-lg shadow-lg transform rotate-[3deg] z-400 clutter-image' },
   
   
   { src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1759712487/SnapInsta.to_559874069_18526734382055684_5386065605553386549_n_udw2wu.jpg', style: 'absolute top-35 right-1/8 w-2/ h-1/4 min-w-[150px] min-h-[150px] object-cover rounded-lg shadow-lg transform rotate-[3deg] z-500 clutter-image' },

   { src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593328/SnapInsta.to_504327947_18504909601055684_3578887262547455650_n_t79dli.jpg', style: 'absolute bottom-0 left-2/6 w-2/6 h-2/4 min-w-[150px] min-h-[150px] object-cover rounded-lg shadow-lg transform -rotate-[5deg] z-600 clutter-image' },

     { src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1759712502/SnapInsta.to_469106779_18468514393055684_8981492141983261214_n_mev2oz.jpg', style: 'absolute -bottom-10 right-0 w-1/4 h-2/4 min-w-[100px] min-h-[180px] object-cover rounded-lg shadow-lg transform rotate-[-3deg] z-700 clutter-image' },
];

// Video for slide 3 - replace with your brand video (MP4/WebM, 1920x1080+)
const VIDEO_URL = 'https://res.cloudinary.com/djeorsh5d/video/upload/v1759998859/FOREVER__LOVING_YOU_FEMI_Congrats_to_Joseph___and_Rosina____%EF%B8%8F_Joro22bride__mzz_rosy27groom__paaqwesiokyereMakeup__blushes__n__brushesHairstyli.mp4_2_nqrlcv.mp4';
const POSTER_URL = 'https://res.cloudinary.com/djeorsh5d/image/upload/v1759712515/SnapInsta.to_558976645_18526850191055684_8864724944103735477_n_y3cjrq.jpg';

// Fallback content for slide 1
const FALLBACK_IMAGE = 'https://res.cloudinary.com/djeorsh5d/image/upload/v1759712515/SnapInsta.to_558976645_18526850191055684_8864724944103735477_n_y3cjrq.jpg';

// Carousel content with updated descriptions
const CAROUSEL_CONTENT = [
  {
    title: 'Capture Your Love Story',
    description: 'At DK Shot It, we weave your romance into timeless photographs, preserving every heartfelt moment with elegance and artistry.'
  },
  {
    title: 'Cherish Every Milestone',
    description: 'From family gatherings to graduations, our curated photography immortalizes your celebrations with warmth and sophistication.'
  },
  {
    title: 'Craft Timeless Legacies',
    description: 'Our cinematic videography transforms your story into a breathtaking legacy, cherished by generations to come.'
  },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // Debug rendering
  useEffect(() => {
    console.log('Current slide:', currentSlide);
    console.log('Left container:', document.querySelector('.media-container') ? 'Found' : 'Not found');
    console.log('Left container width:', document.querySelector('.media-container')?.offsetWidth, 'px');
    console.log('Clutter container:', currentSlide === 1 ? (document.querySelector('.clutter-container') ? 'Found' : 'Not found') : 'Not on slide 2');
    console.log('Clutter images:', currentSlide === 1 ? Array.from(document.querySelectorAll('.clutter-image')).map(img => ({ src: img.src, width: img.offsetWidth, height: img.offsetHeight })) : 'Not on slide 2');
    console.log('Video container:', currentSlide === 2 ? (document.querySelector('.video-container') ? 'Found' : 'Not found') : 'Not on slide 3');
    console.log('Video element:', currentSlide === 2 ? (document.querySelector('video') ? 'Found' : 'Not found') : 'Not on slide 3');
    console.log('Video playing:', currentSlide === 2 ? (document.querySelector('video')?.paused ? 'No' : 'Yes') : 'Not on slide 3');
  }, [currentSlide]);

  // Video auto-play control
  useEffect(() => {
    if (currentSlide === 2 && videoRef.current) {
      console.log('Attempting to load and play video:', VIDEO_URL);
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            console.log('Video auto-playing successfully');
          })
          .catch((error) => {
            console.error('Video auto-play failed:', error.message);
            setIsPlaying(false);
          });
      }
    } else if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      console.log('Video paused (not on slide 3)');
    }
  }, [currentSlide]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        console.log('Video paused manually');
      } else {
        videoRef.current.play().catch((error) => console.error('Video play failed:', error.message));
        console.log('Video played manually');
      }
      setIsPlaying(!isPlaying);
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), 3000);
    }
  };

  // Auto-slide (desktop)
  useEffect(() => {
    if (window.innerWidth < 640 || isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === CAROUSEL_CONTENT.length - 1 ? 0 : prev + 1));
      console.log('Auto-slide to:', currentSlide + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, currentSlide]);

  // Handle dot navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsPaused(true);
    console.log('Navigated to slide:', index);
    setTimeout(() => setIsPaused(false), 300000);
  };

  // Handle Next/Get Started
  const handleNext = () => {
    if (currentSlide === CAROUSEL_CONTENT.length - 1) {
      localStorage.setItem('hasSeenOnboarding', 'true');
      navigate('/');
      console.log('Get Started clicked, hasSeenOnboarding set');
    } else {
      setCurrentSlide((prev) => prev + 1);
      setIsPaused(true);
      console.log('Next clicked, slide:', currentSlide + 1);
      setTimeout(() => setIsPaused(false), 300000);
    }
  };

  // Handle Previous
  const handlePrevious = () => {
    setCurrentSlide((prev) => prev - 1);
    setIsPaused(true);
    console.log('Previous clicked, slide:', currentSlide - 1);
    setTimeout(() => setIsPaused(false), 300000);
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-black text-white min-h-screen flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="media-container w-full lg:w-1/2 min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] max-h-[50vh] sm:max-h-[60vh] lg:max-h-[70vh] overflow-hidden rounded-2xl relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {currentSlide === 1 ? (
              <div className="clutter-container bg-gray-800 p-4 rounded-lg w-full h-full min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh]">
                {CLUTTER_IMAGES.map((img, index) => (
                  <img
                    key={index}
                    src={img.src}
                    alt={`Slide 2 image ${index + 1}`}
                    className={img.style}
                    onError={() => console.error('Clutter image failed to load:', img.src)}
                    onLoad={() => console.log('Clutter image loaded:', img.src)}
                  />
                ))}
              </div>
            ) : currentSlide === 2 ? (
              <div className="video-container w-full h-full min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh]">
                <video
                  ref={videoRef}
                  src={VIDEO_URL}
                  poster={POSTER_URL}
                  className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] lg:max-h-[70vh] object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onClick={togglePlay}
                  onError={() => console.error('Video failed to load:', VIDEO_URL)}
                  onLoadedData={() => console.log('Video data loaded:', VIDEO_URL)}
                />
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <button
                      className="bg-white/80 w-16 h-16 rounded-full flex items-center justify-center"
                      onClick={togglePlay}
                      aria-label="Play video"
                    >
                      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-amber-900/20"></div>
              </div>
            ) : (
              <div className="relative w-full h-full min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh]">
                <img
                  src={FALLBACK_IMAGE}
                  alt="Slide 1 placeholder"
                  className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] lg:max-h-[70vh] object-cover hero-image"
                  onError={() => console.error('Fallback image failed to load:', FALLBACK_IMAGE)}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-amber-900/20"></div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="w-full lg:w-1/2 bg-black/30 rounded-xl p-4 sm:p-6 lg:p-8 max-w-lg lg:max-w-xl z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-amber-400 mb-4">
            {CAROUSEL_CONTENT[currentSlide].title}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg font-sans text-gray-300 mb-6 sm:mb-8">
            {CAROUSEL_CONTENT[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <button
              className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-sans font-semibold text-sm sm:text-base"
              onClick={handleNext}
              data-testid={currentSlide === CAROUSEL_CONTENT.length - 1 ? 'get-started-nav-button' : 'next-button'}
            >
              {currentSlide === CAROUSEL_CONTENT.length - 1 ? 'Get Started' : 'Next'}
            </button>
            {currentSlide !== 0 && (
              <button
                className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-sans font-semibold text-sm sm:text-base"
                onClick={handlePrevious}
                data-testid="previous-button"
              >
                Previous
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="fixed bottom-2 sm:bottom-2 lg:bottom-2 left-1/2 -translate-x-1/2 flex justify-center items-center bg-black/90 px-6 py-3 rounded-3xl border border-amber-50 z-70">
        {CAROUSEL_CONTENT.map((_, index) => (
          <button
            key={index}
            className={`w-2 sm:w-3  h-2 sm:h-3  rounded-full ${currentSlide === index ? 'bg-amber-50' : 'border-2 border-amber-50'} mx-5 cursor-pointer outline-1 outline-red-500 outline ${currentSlide === index ? 'outline-none' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            data-testid={`carousel-dot-${index}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Onboarding;
