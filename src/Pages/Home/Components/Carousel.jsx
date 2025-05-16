import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  const goToSlide = (index) => setCurrentIndex(index);
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % items.length);

  // Map textPosition to Tailwind classes
  const getTextPositionClasses = (position) => {
    switch (position) {
      case 'top-left':
        return 'justify-start items-start text-left p-6';
      case 'top-right':
        return 'justify-end items-start text-right p-6';
      case 'bottom-left':
        return 'justify-start items-end text-left p-6';
      case 'bottom-right':
        return 'justify-end items-end text-right p-6';
      case 'center':
      default:
        return 'justify-center items-center text-center';
    }
  };

  return (
    <div className="relative w-full h-[60vh] sm:h-[80vh] overflow-hidden">
      {items.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-center ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: index === currentIndex ? 1 : 0, x: index === currentIndex ? 0 : 100 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {slide.type === 'image' && (
            <img
              src={slide.image}
              alt={slide.alt || 'Carousel slide'}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          )}
          {slide.type === 'imageWithText' && (
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.alt || 'Carousel slide'}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className={`absolute inset-0 flex flex-col ${
                  getTextPositionClasses(slide.overlay?.textPosition || 'center')
                }`}
                style={{ background: slide.overlay?.background || 'rgba(0,0,0,0.5)' }}
              >
                <h2
                  className={`font-bold mb-4 ${slide.overlay?.textColor || 'text-white'} ${
                    slide.overlay?.fontSize || 'text-3xl sm:text-5xl'
                  }`}
                >
                  {slide.text}
                </h2>
                <p
                  className={`text-lg sm:text-xl max-w-md ${
                    slide.overlay?.textColor || 'text-gray-300'
                  }`}
                >
                  {slide.subText}
                </p>
              </div>
            </div>
          )}
          {slide.type === 'text' && (
            <div
              className="w-full h-full flex flex-col items-center justify-center text-center"
              style={{ background: slide.background || 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(107,114,128,0.2))' }}
            >
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">{slide.text}</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-md">{slide.subText}</p>
            </div>
          )}
        </motion.div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-amber-500' : 'bg-gray-400'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl"
        onClick={goToPrev}
        aria-label="Previous slide"
      >
        ❮
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl"
        onClick={goToNext}
        aria-label="Next slide"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;