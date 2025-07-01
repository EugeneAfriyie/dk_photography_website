import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BookingPrompt = ({ deadlineDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const getTimeLeft = () => {
      const now = new Date();
      const deadline = deadlineDate
        ? new Date(deadlineDate)
        : new Date(now.getTime() + (7 - now.getDay()) * 24 * 60 * 60 * 1000);
      deadline.setHours(23, 59, 59, 999);

      const diff = deadline - now;
      if (diff <= 0) {
        deadline.setDate(deadline.getDate() + 7);
      }
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, [deadlineDate]);

  return (
    <motion.section
      id="booking-prompt"
      className="w-full py-16 px-4 sm:px-8 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div
        className="py-12 px-4 sm:px-8 rounded-xl max-w-5xl mx-auto text-center"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/djeorsh5d/image/upload/v1751332865/921bbdf3-0f69-466c-bd5d-c384bedef79f.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(17,24,39,0.8)' // gray-900/80
        }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Don’t Miss Out! Book Your Session Now!
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl mb-8">
          Limited slots available. Secure your spot before time runs out.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 max-w-lg mx-auto">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center"
              aria-label={`${value} ${label} remaining`}
            >
              <motion.span
                className="text-4xl sm:text-5xl font-semibold text-amber-500"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                aria-hidden="true"
              >
                {value.toString().padStart(2, '0')}
              </motion.span>
              <span className="text-gray-300 text-sm sm:text-base">{label}</span>
            </div>
          ))}
        </div>
        <Link to="/booking">
          <motion.button
            animate={{
              scale: [1, 1.1, 1],
              opacity: [1, 0.9, 1],
              rotate: [-2, 2, -2],
            }}
            whileHover={{ scale: 1.15, transition: { duration: 0.3 } }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="bg-amber-500 px-6 py-3 rounded-lg text-lg font-semibold text-white hover:bg-amber-600 transition-colors duration-300"
            aria-label="Book a photography session"
          >
            Book Now
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
};

export default BookingPrompt;