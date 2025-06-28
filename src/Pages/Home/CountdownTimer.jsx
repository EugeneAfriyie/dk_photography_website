import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = ({ deadline }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

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

export default CountdownTimer;