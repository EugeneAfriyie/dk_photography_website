
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CountdownTimer = ({ deadline }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const end = new Date(deadline).getTime();
      const distance = end - now;

      if (distance <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
        expired: false,
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <motion.div
      className="grid grid-cols-4 gap-2 sm:gap-4 text-center mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {timeLeft.expired ? (
        <p className="col-span-4 text-2xl sm:text-3xl text-red-400 font-bold">Offer Expired!</p>
      ) : (
        <>
          {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
            <motion.div
              key={unit}
              className="flex flex-col"
              animate={{ scale: timeLeft[unit] !== timeLeft[unit] ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-2xl sm:text-3xl font-bold text-amber-300">
                {timeLeft[unit].toString().padStart(2, '0')}
              </span>
              <span className="text-sm sm:text-base text-white capitalize">{unit}</span>
            </motion.div>
          ))}
        </>
      )}
    </motion.div>
  );
};

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length, isPaused]);

  const goToSlide = (index) => setCurrentIndex(index);
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % items.length);

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
    <div
      className="relative w-full h-[60vh] sm:h-[80vh] overflow-hidden sm:mt-0"
      role="region"
      aria-label="Photography carousel"
      tabIndex={0}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') goToPrev();
        if (e.key === 'ArrowRight') goToNext();
      }}
    >
      {items.map((slide, index) => (
        <Link to={'/booking'}>
        <motion.div
          key={index}
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-center ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          role="group"
          aria-current={index === currentIndex ? 'true' : 'false'}
          aria-hidden={index !== currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: index === currentIndex ? 1 : 0, x: index === currentIndex ? 0 : 100 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {slide.type === 'image' && (
            <img
              src={slide.image}
              srcSet={`${slide.image}&w=100&q=10 100w, ${slide.image} 1920w`}
              sizes="(max-width: 640px) 100vw, 1920px"
              alt={slide.alt || 'Carousel slide'}
              className="w-full h-full object-cover"
              loading="lazy"
              style={{
                transform: index === currentIndex ? 'translateY(0)' : 'translateY(20px)',
                transition: 'transform 0.5s ease-out',
              }}
              onError={(e) => (e.target.src = 'https://placehold.co/1920x1080?text=Fallback+Image')}
            />
          )}
          {slide.type === 'imageWithText' && (
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                srcSet={`${slide.image}&w=100&q=10 100w, ${slide.image} 1920w`}
                sizes="(max-width: 640px) 100vw, 1920px"
                alt={slide.alt || 'Carousel slide'}
                className="w-full h-full object-cover"
                loading="lazy"
                style={{
                  transform: index === currentIndex ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'transform 0.5s ease-out',
                }}
                onError={(e) => (e.target.src = 'https://placehold.co/1920x1080?text=Fallback+Image')}
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
                {slide.countdown && <CountdownTimer deadline={slide.countdown.deadline} />}
                {slide.cta && (
                  <Link to={slide.cta.link}>
                    <motion.button
                      className="mt-4 bg-amber-500 px-6 py-3 rounded-lg text-lg font-semibold text-white hover:bg-amber-600"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {slide.cta.text}
                    </motion.button>
                  </Link>
                )}
              </div>
            </div>
          )}
          {slide.type === 'text' && (
            <div
              className="w-full h-full flex flex-col items-center justify-center text-center"
              style={{
                background:
                  slide.background ||
                  'linear-gradient(to bottom, rgba(255,255,255,0), rgba(107,114,128,0.2))',
              }}
            >
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">{slide.text}</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-md">{slide.subText}</p>
              {slide.cta && (
                <Link to={slide.cta.link}>
                  <motion.button
                    className="mt-4 bg-amber-500 px-6 py-3 rounded-lg text-lg font-semibold text-white hover:bg-amber-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {slide.cta.text}
                  </motion.button>
                </Link>
              )}
            </div>
          )}
        </motion.div>
        </Link>
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
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-gray-800/50 rounded-full p-2 hover:bg-gray-800/70"
        onClick={goToPrev}
        aria-label="Previous slide"
      >
        ❮
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-gray-800/50 rounded-full p-2 hover:bg-gray-800/70"
        onClick={goToNext}
        aria-label="Next slide"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;

