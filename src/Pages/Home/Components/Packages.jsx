
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
const packages = [
  {
    title: 'Wedding Bliss Package',
    price: '$2,500',
    coverageHours: '8 Hours',
    photographers: '2 Photographers',
    editedPhotos: '300 Photos',
    deliveryTime: '4 Weeks',
    extras: 'Custom Album',
    sessionLocation: 'Outdoor or Venue',
    description: 'Capture your special day with our Wedding Photography and Event Coverage. Includes 8 hours of coverage, two photographers, and a custom album.',
    servicesIncluded: ['Photography'],
    isPopular: false,
    icon: 'https://images.unsplash.com/photo-1519741497674-4113f6d8b600?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
  },
  {
    title: 'Premium Wedding Experience',
    price: '$4,000',
    coverageHours: '12 Hours',
    photographers: '2 Photographers',
    editedPhotos: '500 Photos',
    deliveryTime: '5 Weeks',
    extras: 'Premium Album, Drone Footage',
    sessionLocation: 'Outdoor or Venue',
    description: 'Luxury Wedding Photography and Event Coverage with 12 hours, two photographers, a premium album, and drone footage.',
    servicesIncluded: ['Photography', 'Videography'],
    isPopular: false,
    icon: 'https://images.unsplash.com/photo-1511285560929-80b456fef5cb?auto=format&fit=crop&w=800&h=400&q=80',
  },
  {
    title: 'Premium Family Legacy',
    price: '$2,500',
    coverageHours: '6 Hours',
    photographers: '2 Photographers',
    editedPhotos: '200 Photos',
    deliveryTime: '4 Weeks',
    extras: 'Hardcover Book, Video Highlights',
    sessionLocation: 'Studio or Outdoor',
    description: 'Elite Children Photography and Family Photography with 6 hours, studio access, a hardcover book, and video highlights.',
    servicesIncluded: ['Photography', 'Videography'],
    isPopular: false,
    icon: 'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
  },
  {
    title: 'Family Memories Package',
    price: '$1,200',
    coverageHours: '3 Hours',
    photographers: '1 Photographer',
    editedPhotos: '100 Photos',
    deliveryTime: '3 Weeks',
    extras: 'Digital Gallery',
    sessionLocation: 'Outdoor or Indoor',
    description: 'Cherish your family bond with Children Photography and Family Photography. Includes 3 hours of outdoor or indoor sessions and a digital gallery.',
    servicesIncluded: ['Photography'],
    isPopular: false,
    icon: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
  },
  {
    title: 'Wedding & Portrait Combo',
    price: '$2,000',
    coverageHours: '6 Hours',
    photographers: '1 Photographer',
    editedPhotos: '200 Photos',
    deliveryTime: '4 Weeks',
    extras: 'Digital Album',
    sessionLocation: 'Client’s Choice',
    description: 'Combine Wedding Photography and Portrait Sessions for a special rate. Includes 6 hours of coverage, one photographer, and a digital album.',
    servicesIncluded: ['Photography'],
    isPopular: false,
    icon: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=800&h=400&q=80',
  },
  {
    title: 'Graduation Celebration Package',
    price: '$600',
    coverageHours: '1.5 Hours',
    photographers: '1 Photographer',
    editedPhotos: '30 Photos',
    deliveryTime: '2 Weeks',
    extras: 'Digital Frame',
    sessionLocation: 'Campus or Outdoor',
    description: 'Capture your graduation day with professional photos featuring caps, gowns, and milestone moments.',
    servicesIncluded: ['Photography'],
    isPopular: false,
    icon: 'https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
  },
  {
    title: 'Premium Graduation Package',
    price: '$1,000',
    coverageHours: '3 Hours',
    photographers: '1 Photographer',
    editedPhotos: '75 Photos',
    deliveryTime: '3 Weeks',
    extras: 'Custom Photo Book, Group Shots',
    sessionLocation: 'Campus or Venue',
    description: 'A comprehensive graduation package with extended coverage, a custom photo book, and group shots.',
    servicesIncluded: ['Photography'],
    isPopular: true,
    icon: 'https://images.pexels.com/photos/2909067/pexels-photo-2909067.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
  },
  {
    title: 'Birthday Celebration Package',
    price: '$900',
    coverageHours: '3 Hours',
    photographers: '1 Photographer',
    editedPhotos: '80 Photos',
    deliveryTime: '3 Weeks',
    extras: 'Digital Gallery, Party Highlights',
    sessionLocation: 'Venue or Outdoor',
    description: 'Celebrate your special day with vibrant birthday photography, capturing every joyful moment.',
    servicesIncluded: ['Photography'],
    isPopular: false,
    icon: 'https://images.pexels.com/photos/1543766/pexels-photo-1543766.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
  },
];

const PackagesSection = () => {
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
              className="bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col min-h-full"
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
                className="absolute bottom-2 right-2 w-5 h-5 text-gray-400 cursor-pointer hover:text-amber-400 transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPackage(packageItem);
                }}
                ariaLabel={`More information about ${packageItem.title}`}
              />
              <motion.div className="w-full h-40 bg-gray-700 overflow-hidden aspect-[4/2] mb-4">
                <motion.img
                  src={packageItem.icon}
                  alt={`${packageItem.title} package`}
                  className="w-full h-full object-cover mx-auto"
                  loading="lazy"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
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
