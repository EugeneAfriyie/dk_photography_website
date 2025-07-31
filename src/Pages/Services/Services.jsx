import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Home/Components/Header';
import Footer from '../../Components/Footer';
import ExclusiveOffer from '../Home/Components/ExclusiveOffer';
import BookingPrompt from '../Home/Components/BookingPrompt';

// Export packages (same as in Contact.jsx for consistency)
export const packages = [
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
    icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247125/BRIDE1_kjfo1p.jpg',
  },
  {
    title: 'Premium Wedding Experience',
    price: '$4,800',
    coverageHours: '12 Hours',
    photographers: '2 Photographers',
    editedPhotos: '550 Photos',
    deliveryTime: '5 Weeks',
    extras: 'Premium Album, Drone Footage, Dedicated Videographer, Bridal Makeup and Hair, Pre-Wedding Photo Session',
    sessionLocation: 'Outdoor or Venue',
    description: 'Luxury Wedding Photography with a pre-wedding photo session, a dedicated videographer for cinematic videography including drone footage, and professional bridal makeup and hairstyling. Features 12 hours of coverage, two photographers, and a premium album.',
    servicesIncluded: ['Photography', 'Videography', 'Make Up and Hair Styling'],
    isPopular: false,
    icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247127/WED1_c0gp9p.jpg',
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
    icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247111/FAM1_wdqml7.jpg',
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
    icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247111/FAM2_kaaw51.jpg',
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
    icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247111/GRAWM2_flta1z.jpg',
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
    icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247111/GRAWM1_azekpo.jpg',
  },
  {
    title: 'Birthday Celebration Package',
    price: '$1,300',
    coverageHours: '3 Hours',
    photographers: '1 Photographer',
    editedPhotos: '80 Photos',
    deliveryTime: '3 Weeks',
    extras: 'Digital Gallery, Party Highlights, Dedicated Videographer, Special Occasion Makeup and Hair',
    sessionLocation: 'Venue or Outdoor',
    description: 'Celebrate your special day with vibrant birthday photography, a dedicated videographer for cinematic videography, and professional makeup and hairstyling. Includes 3 hours of coverage and a digital gallery.',
    servicesIncluded: ['Photography', 'Videography', 'Make Up and Hair Styling'],
    isPopular: false,
    icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247104/BIRTH3_po4i3v.jpg',
  },
  {
    title: 'Couple Shots Package',
    price: '$800',
    coverageHours: '2 Hours',
    photographers: '1 Photographer',
    editedPhotos: '50 Photos',
    deliveryTime: '2 Weeks',
    extras: 'Digital Gallery, Romantic Photo Book',
    sessionLocation: 'Studio or Outdoor',
    description: 'Capture your love story with a romantic couple photography session, perfect for engagements, anniversaries, or special moments.',
    servicesIncluded: ['Photography'],
    isPopular: false,
    icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247107/COP1_gfdb3c.jpg',
  },
  {
    title: 'Children Shot Package',
    price: '$700',
    coverageHours: '2 Hours',
    photographers: '1 Photographer',
    editedPhotos: '50 Photos',
    deliveryTime: '2 Weeks',
    extras: 'Digital Gallery, Children’s Photo Book',
    sessionLocation: 'Studio or Outdoor',
    description: 'Capture your child’s milestones with a fun and vibrant photography session, perfect for birthdays, first steps, or special moments.',
    servicesIncluded: ['Photography'],
    isPopular: false,
    icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247106/SKYLA_d81pvt.jpg',
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const scrollTrackRef = React.useRef(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseDown = (e) => {
    if (scrollTrackRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollTrackRef.current.offsetLeft);
      setScrollLeft(scrollTrackRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollTrackRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollTrackRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed with multiplier
    scrollTrackRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const scrollLeftClick = () => {
    if (scrollTrackRef.current) {
      scrollTrackRef.current.scrollBy({ left: -300, behavior: 'smooth' }); // Smooth scroll left by 300px
    }
  };

  const scrollRightClick = () => {
    if (scrollTrackRef.current) {
      scrollTrackRef.current.scrollBy({ left: 300, behavior: 'smooth' }); // Smooth scroll right by 300px
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 overflow-hidden">
      <Header />

      <div className="max-w-7xl mx-auto">
        {/* Services Banner */}
        <motion.section
          className="relative rounded-lg mb-12 overflow-hidden"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          style={{ height: '400px', minHeight: '250px', position: 'relative' }}
        >
          <motion.img
            src="https://picsum.photos/800/400"
            alt="Services Banner"
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
          <motion.div
            className="relative z-10 h-full flex items-center justify-center text-center px-4 py-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="max-w-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Our Services
              </motion.h1>
              <motion.p
                className="text-gray-200 text-lg sm:text-xl md:text-2xl drop-shadow-md"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                Explore our premium photography and videography packages tailored to your special moments.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.section>

        <ExclusiveOffer />

        {/* Packages Grid */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
            Photography Packages
          </h2>

          <div className="scroll-wrapper overflow-hidden relative">
            <style>
              {`
                @keyframes scroll-horizontal {
                  0% { transform: translateX(0%); }
                  100% { transform: translateX(-50%); }
                }
                .scroll-track {
                  display: flex;
                  width: max-content;
                  animation: scroll-horizontal 200s linear infinite;
                }
                .scroll-wrapper:hover .scroll-track {
                  animation-play-state: paused;
                }
                .scroll-button {
                  position: absolute;
                  top: 50%;
                  transform: translateY(-50%);
                  background-color: rgba(0, 0, 0, 0.5);
                  color: white;
                  border: none;
                  padding: 10px;
                  cursor: pointer;
                  font-size: 18px;
                  z-index: 10;
                }
                .scroll-button:hover {
                  background-color: rgba(0, 0, 0, 0.7);
                }
                .scroll-left {
                  left: 0;
                }
                .scroll-right {
                  right: 0;
                }
              `}
            </style>
            <button className="scroll-button scroll-left" onClick={scrollLeftClick}>
              &lt;
            </button>
            <div
              className="scroll-track"
              ref={scrollTrackRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {[...packages, ...packages].map((pkg, index) => (
                <div
                  key={`${pkg.title}-${index}`}
                  className={`w-[250px] sm:w-[350px] flex-shrink-0 group flex flex-col justify-between bg-gray-800 p-6 px-3 sm:p-6 rounded-lg shadow-lg mx-4 ${
                    pkg.isPopular ? 'border-2 border-amber-500' : ''
                  } hover:border-amber-300 transition duration-300`}
                >
                  {pkg.isPopular && (
                    <span className="inline-block bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded-full mb-4">
                      Popular
                    </span>
                  )}
                  <img
                    src={pkg.icon}
                    alt={`${pkg.title} Icon`}
                    className="w-full sm:h-48 h-36 object-cover rounded-t-lg mb-2 object-top"
                  />
                  <h3 className="text-xl font-bold mb-1">{pkg.title}</h3>
                  <p className="text-amber-300 text-lg mb-1">{pkg.price}</p>
                  <ul className="text-gray-300 text-[.76rem] space-y-1 mb-1">
                    <li><strong>Coverage:</strong> {pkg.coverageHours}</li>
                    <li><strong>Photographers:</strong> {pkg.photographers}</li>
                    <li><strong>Edited Photos:</strong> {pkg.editedPhotos}</li>
                    <li><strong>Delivery:</strong> {pkg.deliveryTime}</li>
                    <li><strong>Extras:</strong> {pkg.extras}</li>
                    <li><strong>Location:</strong> {pkg.sessionLocation}</li>
                  </ul>
                  <p className="text-gray-400 text-[.8rem] mb-4">{pkg.description}</p>
                  <a
                    href="/contact"
                    className="bg-amber-500 text-white font-medium px-4 py-2 rounded-xl mt-auto text-center"
                    onMouseEnter={scrollToTop}
                  >
                    Book Now
                  </a>
                </div>
              ))}
            </div>
            <button className="scroll-button scroll-right" onClick={scrollRightClick}>
              &gt;
            </button>
          </div>
        </section>

        {/* Contact CTA Component */}
        <motion.section
          className="bg-gray-900 p-6 sm:p-8 rounded-lg mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Have Questions?</h2>
          <p className="text-gray-300 text-lg mb-6">
            If you have any questions or need assistance, feel free to reach out to us!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="tel:+233123456789"
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Us: +233 123 456 789
            </motion.a>
            <motion.a
              href="https://wa.me/233123456789"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              WhatsApp Us
            </motion.a>
          </div>
        </motion.section>
      </div>

      <BookingPrompt />

      <Footer />

      {isVisible && (
        <motion.button
          className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 bg-amber-500 hover:bg-amber-600 text-white p-2 sm:p-3 rounded-full shadow-lg transition duration-300"
          onClick={scrollToTop}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-5 sm:w-6 h-5 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </div>
  );
};

export default Services;