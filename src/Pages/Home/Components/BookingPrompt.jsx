import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const BookingPrompt = () => {
  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate time until Sunday at 11:59 PM
  useEffect(() => {
    const getTimeLeft = () => {
      const now = new Date();
      // Set deadline to Sunday at 11:59 PM
      const deadline = new Date();
      deadline.setDate(now.getDate() + (7 - now.getDay()));
      deadline.setHours(23, 59, 59, 999);

      const diff = deadline - now;
      if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      };
    };

    // Update timer every second
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="w-full py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="bg-gradient-to-b from-white/0 to-gray-500/20 py-12 px-4 sm:px-8 rounded-xl max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Don’t Miss Out! Book Your Session Now!
        </h2>
        <p className="text-gray-400 text-lg sm:text-xl mb-8">
          Limited slots available. Secure your spot before time runs out.
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 max-w-lg mx-auto">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center">
              <motion.span
                className="text-4xl sm:text-5xl font-semibold text-amber-500"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
              >
                {value.toString().padStart(2, '0')}
              </motion.span>
              <span className="text-gray-400 text-sm sm:text-base">{label}</span>
            </div>
          ))}
        </div>

        {/* Book Now Button */}
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
      </div>
    </motion.section>
  );
};

export default BookingPrompt;