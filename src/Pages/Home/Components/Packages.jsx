
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// SVG Info icon
const InfoIcon = ({ className, onClick, ariaLabel }) => (
  <svg
    className={className}
    onClick={onClick}
    aria-label={ariaLabel}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

// Packages data


const PackagesSection = ({packages}) => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-10 text-amber-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Photography Packages
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((packageItem, i) => (
            <motion.div
              key={packageItem.title}
              className="bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col min-h-full relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5, ease: 'easeInOut', type: 'spring' }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {packageItem.isPopular && (
                <span className="absolute top-2 right-12 bg-amber-500 text-white text-xs px-2 py-1 rounded-full shadow-lg shadow-amber-500/50">
                  POPULAR
                </span>
              )}
              <InfoIcon
                className="absolute bottom-2 right-2 w-5 h-5 text-gray-400 cursor-pointer hover:text-amber-400 transition-colors duration-300 opacity-100"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPackage(packageItem);
                }}
                ariaLabel={`More information about ${packageItem.title}`}
              />
              <motion.div className="w-full  bg-gray-700 overflow-hidden aspect-[4/3] mb-4">
                <motion.img
                  src={packageItem.icon}
                  alt={`${packageItem.title} package`}
                  className={`w-full h-full object-cover mx-auto ${packageItem.title.includes('Graduation') ? 'object-top' : ''}`}
                  loading="lazy"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                />
              </motion.div>
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-semibold mt-4 mb-3 text-amber-300 font-serif">{packageItem.title}</h3>
                <p className="text-3xl font-bold text-white mb-4">{packageItem.price}</p>
                <ul className="text-gray-300 space-y-2 flex-grow text-[.9rem]">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-amber-300 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Coverage: {packageItem.coverageHours}</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-amber-300 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Photographers: {packageItem.photographers}</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-amber-300 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Edited Photos: {packageItem.editedPhotos}</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-amber-300 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Delivery Time: {packageItem.deliveryTime}</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-amber-300 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Extras: {packageItem.extras}</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-amber-300 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Location: {packageItem.sessionLocation}</span>
                  </li>
                </ul>
                <Link to={packageItem.bookingLink || `/booking?package=${packageItem.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <motion.button
                    className="w-full mt-4 bg-amber-300 text-gray-900 font-semibold py-2 rounded-lg hover:bg-amber-400 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    aria-label={`Book ${packageItem.title} package`}
                  >
                    Book Now
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedPackage && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPackage(null)}
            >
              <motion.div
                className="bg-gray-800 p-6 rounded-xl max-w-md w-full mx-4 text-white relative"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={() => setSelectedPackage(null)}
                  aria-label="Close package details"
                >
                  ✕
                </button>
                <h3 className="text-2xl font-bold mb-4 text-amber-400">{selectedPackage.title}</h3>
                <p className="text-gray-300 mb-4">{selectedPackage.description}</p>
                <div className="text-sm text-gray-400 mb-4">
                  Includes:{' '}
                  {selectedPackage.servicesIncluded.map((service, index) => (
                    <span key={service}>
                      {service}
                      {index < selectedPackage.servicesIncluded.length - 1 && ', '}
                    </span>
                  ))}
                </div>
                <Link to={`/booking?package=${selectedPackage.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <button className="bg-amber-500 px-6 py-2 rounded hover:bg-amber-600 transition-colors duration-300 text-sm">
                    Book Now
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PackagesSection;