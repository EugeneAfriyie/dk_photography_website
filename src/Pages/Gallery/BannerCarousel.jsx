import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BannerCarousel = () => {
  const bannerSlides = [
    {
      src: "https://res.cloudinary.com/djeorsh5d/image/upload/v1751247127/WED1_c0gp9p.jpg",
      alt: "Gallery banner showcasing photography",
      heading: "Our Gallery",
      description: "Explore our stunning photography and videography moments.",
    },
    {
      src: "https://res.cloudinary.com/djeorsh5d/image/upload/v1751247127/WED1_c0gp9p.jpg",
      alt: "Special booking offer banner",
      heading: "Exclusive Offer",
      description: "Book now for our special offer! Limited time only!",
      showTimer: true,
    },
    {
      src: "https://res.cloudinary.com/djeorsh5d/image/upload/v1751247127/WED1_c0gp9p.jpg",
      alt: "Timeless memories photography banner",
      heading: "Timeless Memories",
      description: "Relive your special moments with our expert photography.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState({});
  const [isPaused, setIsPaused] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown timer
  useEffect(() => {
    if (!bannerSlides[currentIndex].showTimer) return;
    const endDate = new Date("2025-09-30T23:59:59Z").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = endDate - now;
      if (distance <= 0) return;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Auto-slide
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Navigation
  const goToSlide = (index) => setCurrentIndex(index);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % bannerSlides.length);

  return (
    <motion.section
      className="relative rounded-lg mb-8 sm:mb-12 overflow-hidden h-64 sm:h-96 group"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={bannerSlides[currentIndex].src}
          alt={bannerSlides[currentIndex].alt}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded[currentIndex] ? "opacity-100" : "opacity-0"
          }`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          onLoad={() =>
            setIsLoaded((prev) => ({ ...prev, [currentIndex]: true }))
          }
          onError={() =>
            setIsLoaded((prev) => ({ ...prev, [currentIndex]: true }))
          }
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/30 to-transparent z-10"></div>

      {/* Text overlay */}
      <div className="absolute inset-0 z-30 flex items-center justify-center text-center px-4 py-6 sm:py-8">
        <div className="max-w-2xl bg-black/70 backdrop-blur-sm p-6 rounded-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
            {bannerSlides[currentIndex].heading}
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-200">
            {bannerSlides[currentIndex].description}
          </p>

          {bannerSlides[currentIndex].showTimer && (
            <p className="text-sm sm:text-base md:text-lg font-semibold text-amber-400 mt-4">
              Offer Ends: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
              {timeLeft.seconds}s
            </p>
          )}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-40 hover:bg-black transition opacity-0 group-hover:opacity-100"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-40 hover:bg-black transition opacity-0 group-hover:opacity-100"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-40">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default BannerCarousel;
