// Home.jsx
import React, { useState } from 'react';
import { Menu, X, Camera, Info, Calendar, Camera as ShootIcon, Edit, Download, Image as PhotoIcon, Package } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Carousel from './Components/Carousel';
import { heroData, services, testimonials } from './data';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null); // State to track which FAQ is open
  const [isFocused, setIsFocused] = useState(false);

  // Define packages with added "sessionLocation" field
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
      servicesIncluded: [services[0], services[2]], // Wedding Photography, Event Coverage
      isPopular: false,
    },
    {
      title: 'Portrait Perfection Package',
      price: '$800',
      coverageHours: '2 Hours',
      photographers: '1 Photographer',
      editedPhotos: '50 Photos',
      deliveryTime: '2 Weeks',
      extras: 'Bonus Family Shoot',
      sessionLocation: 'Studio',
      description: 'Get stunning portraits with our Portrait Sessions and a bonus family shoot. Includes 2 hours of studio time and professional editing.',
      servicesIncluded: [services[1]], // Portrait Sessions
      isPopular: true,
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
      servicesIncluded: [services[3], services[4]], // Children Photography, Family Photography
      isPopular: false,
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
      servicesIncluded: [services[0], services[1]], // Wedding Photography, Portrait Sessions
      isPopular: false,
    },
    {
      title: 'Family & Event Combo',
      price: '$1,500',
      coverageHours: '5 Hours',
      photographers: '1 Photographer',
      editedPhotos: '150 Photos',
      deliveryTime: '3 Weeks',
      extras: 'Shared Online Gallery',
      sessionLocation: 'Outdoor or Venue',
      description: 'Bundle Family Photography and Event Coverage for a memorable package. Includes 5 hours of coverage and a shared online gallery.',
      servicesIncluded: [services[4], services[2]], // Family Photography, Event Coverage
      isPopular: false,
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
      servicesIncluded: [services[0], services[2]], // Wedding Photography, Event Coverage
      isPopular: false,
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
      servicesIncluded: [services[3], services[4]], // Children Photography, Family Photography
      isPopular: false,
    },
  ];

  // Define steps for the "Our Process" section
  const processSteps = [
    {
      title: 'Book Your Session',
      description: 'Choose your package and reach out to us via the contact page to secure your booking.',
      icon: <Calendar className="w-10 h-10 text-amber-400" />,
    },
    {
      title: 'Schedule the Shoot',
      description: 'We’ll coordinate with you to set a date, time, and location that works best for your session.',
      icon: <ShootIcon className="w-10 h-10 text-amber-400" />,
    },
    {
      title: 'Photo Shoot Day',
      description: 'Our professional photographers will capture your moments with care and creativity.',
      icon: <Camera className="w-10 h-10 text-amber-400" />,
    },
    {
      title: 'Editing & Review',
      description: 'We meticulously edit your photos to ensure they meet our high standards of quality.',
      icon: <Edit className="w-10 h-10 text-amber-400" />,
    },
    {
      title: 'Receive Your Photos',
      description: 'Get your edited photos delivered within the specified timeframe, ready to cherish forever.',
      icon: <Download className="w-10 h-10 text-amber-400" />,
    },
  ];

  // Define FAQs
  const faqs = [
    {
      question: 'What types of photography do you offer?',
      answer: 'We specialize in Wedding Photography, Portrait Sessions, Event Coverage, Children Photography, and Family Photography. Check out our Services section for more details.',
    },
    {
      question: 'How long does it take to receive my photos?',
      answer: 'Delivery times vary by package, ranging from 2 to 5 weeks. Each package lists its specific delivery time in the Packages section.',
    },
    {
      question: 'Can I customize my photography package?',
      answer: 'Yes! We offer custom packages tailored to your needs. Contact us to discuss your vision, and we’ll create a plan that suits you.',
    },
    {
      question: 'What is included in a typical session?',
      answer: 'A typical session includes professional photographers, a set number of edited photos, and extras like digital galleries or albums, depending on the package. See our Packages section for specifics.',
    },
    {
      question: 'How do I book a session?',
      answer: 'You can book a session by visiting our Contact page and filling out the form, or by clicking the "Book Now" button on any package.',
    },
  ];

  // Toggle FAQ accordion
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="text-white bg-black">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
        <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-amber-500">SnapShot Studio</div>

          {/* Desktop Menu with Links */}
          <ul className="hidden md:flex gap-6 text-sm">
            <li className="hover:text-amber-400 cursor-pointer">
              <Link to="/" className="hover:text-amber-400">Home</Link>
            </li>
            <li className="hover:text-amber-400 cursor-pointer">
              <Link to="/about" className="hover:text-amber-400">About</Link>
            </li>
            <li className="hover:text-amber-400 cursor-pointer">
              <Link to="/gallery" className="hover:text-amber-400">Gallery</Link>
            </li>
            <li className="hover:text-amber-400 cursor-pointer">
              <Link to="/services" className="hover:text-amber-400">Services</Link>
            </li>
            <li className="hover:text-amber-400 cursor-pointer">
              <Link to="/contact" className="hover:text-amber-400">Contact</Link>
            </li>
          </ul>

          {/* Book Now Button (Desktop) */}
          <div className="hidden md:block">
            <Link to="/contact">
              <button className="bg-amber-500 px-4 py-1 rounded text-sm hover:bg-amber-600">
                Book Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-8 h-8 text-amber-500" />
              ) : (
                <Menu className="w-8 h-8 text-amber-500" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden fixed top-0 right-0 h-full w-3/4 bg-black border-l border-gray-800 z-50"
            >
              <ul className="flex flex-col items-center gap-6 py-16 text-base">
                <li
                  className="hover:text-amber-400 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                </li>
                <li
                  className="hover:text-amber-400 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
                </li>
                <li
                  className="hover:text-amber-400 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to="/gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
                </li>
                <li
                  className="hover:text-amber-400 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                </li>
                <li
                  className="hover:text-amber-400 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    <button className="bg-amber-500 px-6 py-2 rounded text-sm hover:bg-amber-600">
                      Book Now
                    </button>
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section (Carousel) */}
      <Carousel
        items={heroData}
        interval={5000}
        autoPlay={true}
        renderItem={({ image, title, description }, index) => (
          <section
            className="h-screen flex flex-col justify-center items-center text-center px-4 pt-20 bg-cover bg-center transition-all duration-1000 ease-in-out relative"
            style={{ backgroundImage: `url(${image})` }}
          >
            <motion.h1
              key={`title-${index}`}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              {title}
            </motion.h1>
            <motion.p
              key={`desc-${index}`}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.5 }}
              className="text-lg text-gray-300 mb-6 max-w-md"
            >
              {description}
            </motion.p>
            <Link to="/gallery">
              <button className="bg-amber-500 px-6 py-2 rounded hover:bg-amber-600">
                View Gallery
              </button>
            </Link>
          </section>
        )}
      />

      {/* Introductory Section */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Become a Timeless Memory Keeper
          </motion.h2>
          <motion.p
            className="text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Your number 1 for capturing life’s moments.
          </motion.p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <motion.div
              className="bg-gray-800 p-6 rounded-xl shadow-md w-full md:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <PhotoIcon className="w-12 h-12 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-300">Photography Tools</h3>
              <p className="text-gray-400 mb-4">
                Unlock next-gen equipment and editing software. Integrated with the latest technology to enhance your photo quality.
              </p>
              <Link to="/contact">
                <button className="bg-purple-600 px-6 py-2 rounded hover:bg-purple-700 text-sm">
                  Get Started Now
                </button>
              </Link>
            </motion.div>
            <motion.div
              className="bg-gray-800 p-6 rounded-xl shadow-md w-full md:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <Package className="w-12 h-12 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-300">Custom Packages</h3>
              <p className="text-gray-400 mb-4">
                Build your photography journey with a tailored plan. Test your vision and we’ll adjust based on your needs.
              </p>
              <Link to="/contact">
                <button className="bg-purple-600 px-6 py-2 rounded hover:bg-purple-700 text-sm">
                  Get Started Now
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-10 text-amber-400"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Photography Services
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 mx-auto mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2 text-amber-300">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4 bg-black relative overflow-hidden">
        {/* Subtle Background Overlay (Photographic Theme) */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516035069371-29a1b244cc49?w=500&auto=format&fit=crop&q=60')`,
            filter: 'blur(5px)',
          }}
          onError={(e) => (e.target.style.backgroundImage = "url('/fallback-lens.jpg')")}
        ></div>

        {/* Circular Camera Lens with Glow and Hover Effect */}
        <motion.div
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Outer Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/30 to-amber-700/30 blur-2xl"></div>
          {/* Inner Circle (Lens) */}
          <div className="relative w-full h-full rounded-full bg-black/80 border-4 border-amber-500 flex items-center justify-center">
            {/* Aperture Blades Effect */}
            <div className="absolute w-3/4 h-3/4 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="w-1/2 h-1/2 rounded-full bg-amber-500/20"></div>
            </div>
          </div>
        </motion.div>

        {/* Centered Text with Link */}
        <motion.div
          className="relative z-10 mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400 tracking-wide">
            Our Vision
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-md mx-auto">
            Seeing the World Through a Photographer’s Eye
          </p>
          <Link to="/about" aria-label="Learn more about our vision">
            <button className="bg-amber-500 px-6 py-2 rounded hover:bg-amber-600 text-sm md:text-base">
              Learn More
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Packages Section */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
            {packages.map((packageItem, i) => (
              <motion.div
                key={packageItem.title}
                className="relative bg-gradient-to-br from-blue-500/20 to-gray-500/20 p-6 rounded-xl shadow-md group transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {packageItem.isPopular && (
                  <span className="absolute top-2 right-12 bg-amber-500 text-white text-xs px-2 py-1 rounded-full shadow-lg shadow-amber-500/50">
                    POPULAR
                  </span>
                )}
                <Info
                  className="absolute top-2 right-2 w-5 h-5 text-gray-400 cursor-pointer hover:text-amber-400 transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click from interfering
                    setSelectedPackage(packageItem);
                  }}
                  aria-label={`More information about ${packageItem.title}`}
                />
                <Camera className="w-8 h-8 mx-auto mb-2 text-gray-300 group-hover:text-amber-400 transition-colors duration-300" />
                <p className="text-3xl font-bold text-white mb-2">{packageItem.price}</p>
                <p className="text-gray-300 text-sm mb-4">{packageItem.title}</p>
                <button className="w-full bg-black text-white py-2 rounded mb-2 hover:bg-gray-800 transition">
                  Enroll Now
                </button>
                <div className="text-xs text-gray-400 mt-4 space-y-1">
                  <p>Coverage: {packageItem.coverageHours}</p>
                  <p>Photographers: {packageItem.photographers}</p>
                  <p>Edited Photos: {packageItem.editedPhotos}</p>
                  <p>Delivery Time: {packageItem.deliveryTime}</p>
                  <p>Extras: {packageItem.extras}</p>
                  <p>Location: {packageItem.sessionLocation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Popup for Package Details */}
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
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
              >
                <button
                  className="absolute top-2 right-2 text-gray-400 hover:text-white"
                  onClick={() => setSelectedPackage(null)}
                >
                  ✕
                </button>
                <h3 className="text-2xl font-bold mb-4 text-amber-400">{selectedPackage.title}</h3>
                <p className="text-gray-300 mb-4">{selectedPackage.description}</p>
                <div className="text-sm text-gray-400 mb-4">
                  Includes:{' '}
                  {selectedPackage.servicesIncluded.map((service, index) => (
                    <span key={service.title}>
                      {service.title}
                      {index < selectedPackage.servicesIncluded.length - 1 && ', '}
                    </span>
                  ))}
                </div>
                <Link to="/contact">
                  <button className="bg-amber-500 px-6 py-2 rounded hover:bg-amber-600 text-sm">
                    Book Now
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Our Process Section */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6 text-amber-400"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Process
          </motion.h2>
          <motion.p
            className="text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From booking to delivery, we ensure a seamless experience so you can focus on enjoying your moments.
          </motion.p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full md:w-1/5"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-amber-300">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative bg-bg-customDark  text-white py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-amber-400">
          What Our Clients Say
        </h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          We take pride in capturing the moments that matter most. But don't just
          take our word for it — hear from our happy clients!
        </p>
        <div className="relative max-w-3xl mx-auto">
          <Carousel
            items={testimonials}
            interval={7000}
            autoPlay={true}
            renderItem={({ quote, author, image, rating }, index) => (
              <div className="bg-gray-800 p-8 rounded-xl shadow-md flex flex-col items-center">
                <img
                  src={image}
                  alt={author}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-amber-400"
                  loading="lazy"
                />
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xl ${
                        i < rating ? 'text-amber-400' : 'text-gray-600'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-300 italic">{quote}</p>
                <div className="mt-4 font-semibold text-amber-300">
                  — {author}
                </div>
              </div>
            )}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-black text-white py-20 px-4 relative overflow-hidden">
        {/* Subtle Background Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516035069371-29a1b244cc49?w=500&auto=format&fit=crop&q=60')`,
            filter: 'blur(5px)',
          }}
          onError={(e) => (e.target.style.backgroundImage = "url('/fallback-lens.jpg')")}
        ></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-4xl font-bold mb-6 text-amber-400"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Find answers to common questions about our photography services.
          </motion.p>
          <div className="bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-lg mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                viewport={{ once: true }}
                className="border-b border-gray-700 last:border-b-0"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center py-4 text-left text-lg font-semibold text-amber-300 hover:text-amber-400 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span className="text-2xl text-amber-400">
                    {openFaqIndex === index ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 pb-4">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
            <footer class="bg-blac text-white py-10 px-6 md:px-20">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
    {/* <!-- Logo & Socials --> */}
    <div>
      <div class="flex items-center space-x-2 mb-4">
        <span class="text-2xl font-bold">↻</span>
        <span class="text-lg font-semibold">Alpha Trader Firm</span>
      </div>
      <div class="flex space-x-4 text-xl">
        <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="#" aria-label="Telegram"><i class="fab fa-telegram"></i></a>
        <a href="#" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>
      </div>
    </div>

    {/* <!-- Quick Links --> */}
    <div>
      <h3 class="font-semibold mb-4">Quick links</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:underline">Evaluation</a></li>
        <li><a href="#" class="hover:underline">Pricing</a></li>
        <li><a href="#" class="hover:underline">Testimonials</a></li>
        <li><a href="#" class="hover:underline">Rule/FAQs</a></li>
      </ul>
    </div>

    {/* <!-- Legal --> */}
    <div>
      <h3 class="font-semibold mb-4">Legal</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:underline">Terms & Conditions</a></li>
        <li><a href="#" class="hover:underline">Privacy Policy</a></li>
        <li><a href="#" class="hover:underline">Legal Disclosure</a></li>
        <li><a href="#" class="hover:underline">Rule/FAQs</a></li>
      </ul>
    </div>

    {/* <!-- Newsletter --> */}
    <div>
      <h3 class="font-semibold mb-4">Subscribe to our newsletter</h3>
      <p class="mb-4 text-sm">Subscribe to our newsletter and get 50% OFF on your first purchase!</p>
      <div class="flex">
<input
      type="email"
      placeholder="Enter your email"
      onClick={() => setIsFocused(true)}
      onBlur={(e) => {
        if (!e.target.value) setIsFocused(false);
      }}
      className={`w-full p-2 bg-[rgb(43_43_43_/_0.28)] text-white rounded-md outline-none 
        placeholder-white transition-opacity duration-300 
        ${isFocused ? "placeholder-opacity-0" : "placeholder-opacity-100"}`}
    />        <button class="bg-white text-black px-4 rounded-r-md">Subscribe</button>
      </div>
    </div>
  </div>

  {/* <!-- Disclaimer --> */}
  <div class="text-xs text-gray-400 mt-10 max-w-7xl mx-auto">
    <p class="mb-4">
      <strong>Disclaimer:</strong> Alpha Trader Firm LLC provides access to simulated trading environments strictly for educational and evaluative purposes. No live trading occurs, and no real funds are invested, traded, or managed. All activities are demo-based using virtual balances with no cash value. Participation in our challenges does not constitute a financial service or investment opportunity. We do not offer financial advice or facilitate real-market trading. Payments are for platform access only and are non-refundable. Use of our services is subject to our Terms & Conditions and Privacy Policy.
    </p>
    <p class="text-center mt-4">© 2025 DKSHOTIT STUDIO AND PHOTOGRAPHY, All Rights Reserved.</p>
  </div>
</footer>

    </div>
  );
};

export default Home;"{e"