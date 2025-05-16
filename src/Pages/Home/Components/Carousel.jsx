// Carousel.jsx
import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Carousel = ({ items, interval, renderItem, autoPlay = true }) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Auto-cycle slides
  useEffect(() => {
    if (!autoPlay || paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, paused, items, interval]);

  // Preload images
  useEffect(() => {
    items.forEach((item) => {
      if (item.image) {
        const img = new Image();
        img.src = item.image;
      }
    });
  }, [items]);

  // Navigation functions
  const next = () => setCurrent((prev) => (prev + 1) % items.length);
  const prev = () => setCurrent((prev - 1 + items.length) % items.length);

  // Touch gesture handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (distance > threshold) {
      window.navigator.vibrate?.(50);
      next();
    } else if (distance < -threshold) {
      window.navigator.vibrate?.(50);
      prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Announce slide changes to screen readers */}
      <div aria-live="polite" className="sr-only">
        Slide {current + 1} of {items.length}
      </div>

      {/* Render current slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {renderItem(items[current], current)}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div
        className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-3xl text-white"
        onClick={prev}
        role="button"
        tabIndex={0}
        aria-label="Previous slide"
        onKeyDown={(e) => e.key === 'Enter' && prev()}
      >
        ❮
      </div>
      <div
        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-3xl text-white"
        onClick={next}
        role="button"
        tabIndex={0}
        aria-label="Next slide"
        onKeyDown={(e) => e.key === 'Enter' && next()}
      >
        ❯
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === current ? 'bg-amber-500' : 'bg-gray-400'
            } cursor-pointer`}
            onClick={() => setCurrent(i)}
            role="button"
            tabIndex={0}
            aria-label={`Go to slide ${i + 1}`}
            onKeyDown={(e) => e.key === 'Enter' && setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;