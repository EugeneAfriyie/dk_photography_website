import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Menu, X, Camera, Info, Calendar, Camera as ShootIcon, Edit, Download, Image as PhotoIcon, Package } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import Carousel from './Components/Carousel';
import { heroData, testimonials } from './data';
import BookingPrompt from './Components/BookingPrompt';
import { Component } from 'react';

// Error Boundary Component
class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <div className="text-white text-center py-8">Something went wrong.</div>;
    }
    return this.props.children;
  }
}

const Home = () => {
  // State for mobile menu (assumed from typical setup)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* SEO Meta Tags and Structured Data */}
      <Helmet>
        <title>Professional Photography - Book Your Session Now</title>
        <meta
          name="description"
          content="Capture your moments with our expert photography services. Book now for exclusive offers!"
        />
        <meta
          name="keywords"
          content="photography, wedding photography, portrait session, event photography, book photographer"
        />
        <meta property="og:title" content="Professional Photography Services" />
        <meta property="og:description" content="Limited slots available! Book your photography session today." />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1519741497674-4113f6d8b600?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Photography",
            "provider": {
              "@type": "Organization",
              "name": "Your Photography Business",
              "url": "https://yourwebsite.com"
            },
            "description": "Professional photography for weddings, portraits, and events.",
            "offers": {
              "@type": "Offer",
              "url": "https://yourwebsite.com/booking",
              "availabilityEnds": "2025-05-18T23:59:59Z"
            }
          }
        `}</script>
      </Helmet>

      <div className="bg-gray-900 text-white">
        {/* Header/Nav (Placeholder) */}
        <header className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-sm z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-amber-500">Your Photography</h1>
            <div className="hidden sm:flex space-x-6">
              <Link to="/" className="hover:text-amber-500">Home</Link>
              <Link to="/services" className="hover:text-amber-500">Services</Link>
              <Link to="/portfolio" className="hover:text-amber-500">Portfolio</Link>
              <Link to="/booking" className="hover:text-amber-500">Book Now</Link>
            </div>
            <button
              className="sm:hidden text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              ☰
            </button>
          </nav>
          {mobileMenuOpen && (
            <div className="sm:hidden bg-gray-900 px-4 py-4 flex flex-col space-y-4">
              <Link to="/" className="hover:text-amber-500">Home</Link>
              <Link to="/services" className="hover:text-amber-500">Services</Link>
              <Link to="/portfolio" className="hover:text-amber-500">Portfolio</Link>
              <Link to="/booking" className="hover:text-amber-500">Book Now</Link>
            </div>
          )}
        </header>

        {/* Carousel */}
        <ErrorBoundary>
          <Carousel slides={heroData} />
        </ErrorBoundary>

        {/* Services Section (Placeholder) */}
        <motion.section
          className="w-full py-16 px-4 sm:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-500 mb-4">Wedding Photography</h3>
                <p className="text-gray-300">Capture your special day with timeless elegance.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-500 mb-4">Portrait Sessions</h3>
                <p className="text-gray-300">Professional portraits for individuals and families.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-500 mb-4">Event Photography</h3>
                <p className="text-gray-300">Document your events with vibrant, candid shots.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Process Section (Placeholder) */}
        <motion.section
          className="w-full py-16 px-4 sm:px-8 bg-gradient-to-b from-white/0 to-gray-500/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Our Process</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From consultation to final delivery, we ensure a seamless experience to capture your moments perfectly.
            </p>
            {/* Add your process steps here */}
          </div>
        </motion.section>

        {/* Booking Prompt */}
        <ErrorBoundary>
          <BookingPrompt />
        </ErrorBoundary>

        {/* Testimonials Section (Placeholder) */}
        <motion.section
          className="w-full py-16 px-4 sm:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">What Our Clients Say</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="text-gray-300 italic">"Amazing photos! Captured our wedding perfectly."</p>
                <p className="text-amber-500 mt-4 font-semibold">- Jane & John</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="text-gray-300 italic">"Professional and creative. Highly recommend!"</p>
                <p className="text-amber-500 mt-4 font-semibold">- Sarah</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQs Section (Placeholder) */}
        <motion.section
          className="w-full py-16 px-4 sm:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="text-left max-w-3xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-amber-500">How do I book a session?</h3>
                <p className="text-gray-300">Click "Book Now" and fill out our booking form.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-500">What is the turnaround time?</h3>
                <p className="text-gray-300">Photos are delivered within 2–4 weeks.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer (Placeholder) */}
        <footer className="w-full py-8 px-4 sm:px-8 bg-gray-800">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-300">© 2025 Your Photography Business. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="https://instagram.com" className="text-amber-500 hover:text-amber-400">Instagram</a>
              <a href="https://facebook.com" className="text-amber-500 hover:text-amber-400">Facebook</a>
              <a href="https://twitter.com" className="text-amber-500 hover:text-amber-400">Twitter</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
