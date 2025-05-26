import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Menu, X, Camera, Info, Calendar, Camera as ShootIcon, Edit, Download, Image as PhotoIcon, Package } from 'lucide-react';
import { Instagram, PhoneCall, Music } from 'lucide-react';
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { AnimatePresence } from 'framer-motion';
import Carousel from './Components/Carousel';
import { faqsData, heroData, packages, processStepsData, testimonials,servicesData,locationsData } from './data';
import BookingPrompt from './Components/BookingPrompt';
import { Component } from 'react';
import Testmonial from './Components/Testmonial';
import Intro_Sec from './Components/Intro_Sec';
import 'leaflet/dist/leaflet.css'; // Required for react-leafletz
import PackagesSection from './Components/Packages';
import GalleryPreview from './Components/PageGallery';
import Header from './Components/Header';
import Services from './Components/Services';
import Studio_Location from './Studio_Location';
import Faq from './Faq';
import { Progress } from './Progress';




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
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    const [isFocused, setIsFocused] = useState(false);
  
    // Updated services array with Graduation Photography
    const services = [
      {
        title: 'Wedding Photography',
        description: 'Elegant and emotional captures of your big day. Every vow, every smile, preserved forever.',
        // icon: 'https://img.icons8.com/ios/100/ffd700/wedding-dress.png',
        icon: '/src/assets/Services_img/img-1.jpg',
  
      },
      {
        title: 'Portrait Sessions',
        description: 'Professional headshots or creative portraits—tailored to highlight your best self.',
        // icon: 'https://img.icons8.com/ios-filled/100/ffd700/portrait.png',
        icon: '/src/assets/Services_img/img-1.jpg',
      },
      {
        title: 'Event Coverage',
        description: 'From corporate galas to birthday parties, we capture your event’s best angles and candid energy.',
        // icon: 'https://img.icons8.com/ios-filled/100/ffd700/event-accepted.png',
        icon: '/src/assets/Services_img/img-1.jpg',
  
      },
      {
        title: 'Children Photography',
        description: 'Capture the wonder and joy of childhood with our fun and creative photography sessions.',
        // icon: 'https://img.icons8.com/ios-filled/100/ffd700/children.png',
        icon: '/src/assets/Services_img/img-1.jpg',
  
      },
      {
        title: 'Family Photography',
        description: 'Celebrate your family\'s unique bond with our warm and heartfelt photography sessions.',
        // icon: 'https://img.icons8.com/ios-filled/100/ffd700/family--v1.png',
        icon: '/src/assets/Services_img/img-1.jpg',
  
      },
      {
        title: 'Graduation Photography',
        description: 'Commemorate your academic milestone with professional graduation photos, capturing caps, gowns, and proud moments.',
        // icon: 'https://img.icons8.com/ios-filled/100/ffd700/graduation-cap.png',
        icon: '/src/assets/Services_img/img-1.jpg',
  
      },
    ];
  
    // Updated packages array with Graduation Photography packages
  


    // Sample locations for the map


  
 

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

    <div className="text-white bg-black m-auto w-full sm:pt-0 pt-20">
      {/* Navbar */}


          <ErrorBoundary>
            <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
          </ErrorBoundary>

        {/* Carousel */}
        <ErrorBoundary>
          <Carousel items={heroData}  />
        </ErrorBoundary>



          {/* Introductory Section */}
            
                <ErrorBoundary>
                  <Intro_Sec />
                </ErrorBoundary>
                {/* {console.log(<Intro_Sec />)} */}
             

                  {/* Services Section */}
                    <ErrorBoundary>
                      <Services servicesData={servicesData} />
                    </ErrorBoundary>

            {/* Our Vision Section */}
                <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4 bg-black relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1516035069371-29a1b244cc49?w=500&auto=format&fit=crop&q=60')`,
                      filter: 'blur(5px)',
                    }}
                    onError={(e) => (e.target.style.backgroundImage = "url('/fallback-lens.jpg')")}
                  ></div>
          
                  <motion.div
                    className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/30 to-amber-700/30 blur-2xl"></div>
                    <div className="relative w-full h-full rounded-full bg-black/80 border-4 border-amber-500 flex items-center justify-center">
                      <div className="absolute w-3/4 h-3/4 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <div className="w-1/2 h-1/2 rounded-full bg-amber-500/20"></div>
                      </div>
                    </div>
                  </motion.div>
          
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
                      <button className="bg-amber-500 px-6 py-2 rounded hover:bg-amber-600 transition-colors duration-300 text-sm md:text-base">
                        Learn More
                      </button>
                    </Link>
                  </motion.div>
                </section>


      {/* Packages Section */}
        <ErrorBoundary>
          <PackagesSection packages={packages}/>
        </ErrorBoundary>

      {/* Our Process Section */}
            <ErrorBoundary>
              <Progress processStepsData={processStepsData} />
            </ErrorBoundary>

        {/* Booking Prompt */}
        <ErrorBoundary>
          <BookingPrompt />
        </ErrorBoundary>

         {/* </motion.section> Locations Section  */}


         <ErrorBoundary>
          <GalleryPreview />
         </ErrorBoundary>

        <ErrorBoundary>
          <Studio_Location locations={locationsData} />
        </ErrorBoundary>
       
      {/* Testimonials Section */}
      <section className="bg-gray-600/20 text-white py-20 px-4 text-center xl:w-[90%] m-auto">
        <h2 className="text-4xl font-bold mb-6 text-amber-400">
          What Our Clients Say
        </h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          We take pride in capturing the moments that matter most. But don't just
          take our word for it — hear from our happy clients!
        </p>
        <div className="relative max-w-3xl mx-auto">
          <Testmonial
            items={testimonials}
            interval={7000}
            autoPlay={true}
            renderItem={({ quote, author, image, rating }, index) => (
              <div className="bg-gray-800/50 p-8 rounded-xl shadow-md flex flex-col items-center">
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
                      className={`text-xl ${i < rating ? 'text-amber-400' : 'text-gray-600'}`}
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
            <ErrorBoundary>
              <Faq faqsData={faqsData} openFaqIndex={openFaqIndex} setOpenFaqIndex={setOpenFaqIndex}/>
            </ErrorBoundary>





      {/* Footer */}
      <footer className="bg-black text-white py-10 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Socials */}
          <div>
          
            <div className="flex items-center gap-2">
               <div className="w-10 h-10 overflow-hidden flex items-center justify-center">
              <img src="/src/assets/lo1.PNG" className=" object-cover object- w-full h-full" alt="logo" />
              {/* <img src="/src/assets/LOGO21.PNG" className='lg:hidden  object-cover object- w-full h-full' alt="" /> */}
            </div>
            <p className='text-[.6rem] lg:flex md:hidden font-semibold flex flex-col hover:text-amber-400 transition-colors duration-300'>
                <span>DKSHOTIT STUDIO &</span>
                <span>PHOTOGRAPHY</span>
              </p>
    
            </div>

            <div className="flex flex-col gap-1 mt-2">
                <h4 className='text-white sm:text-2xl'>Socials</h4>

                  <div className="flex space-x-6 text-xl bg-black p-2 rounded-lg ">
                    
                    {/* Instagram */}
                    <motion.a
                      href="#"
                      aria-label="Instagram"
                      initial={{ color: '#D1D5DB' }} // gray-300
                      whileHover={{ color: '#E4405F' }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaInstagram />
                    </motion.a>

                    {/* WhatsApp */}
                    <motion.a
                      href="#"
                      aria-label="WhatsApp"
                      initial={{ color: '#D1D5DB' }}
                      whileHover={{ color: '#25D366' }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaWhatsapp />
                    </motion.a>

                    {/* TikTok */}
                    <motion.a
                      href="#"
                      aria-label="TikTok"
                      initial={{ color: '#D1D5DB' }}
                      whileHover={{ color: '#25F4EE' }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaTiktok />
                    </motion.a>

                  </div>
            </div>


          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:underline hover:text-amber-400 transition-colors duration-300">Services</Link></li>
              <li><Link to="/gallery" className="hover:underline hover:text-amber-400 transition-colors duration-300">Gallery</Link></li>
              <li><Link to="/testimonials" className="hover:underline hover:text-amber-400 transition-colors duration-300">Testimonials</Link></li>
              <li><Link to="/faqs" className="hover:underline hover:text-amber-400 transition-colors duration-300">FAQs</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="hover:underline hover:text-amber-400 transition-colors duration-300">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:underline hover:text-amber-400 transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link to="/disclosure" className="hover:underline hover:text-amber-400 transition-colors duration-300">Legal Disclosure</Link></li>
              <li><Link to="/faqs" className="hover:underline hover:text-amber-400 transition-colors duration-300">FAQs</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="mb-4 text-sm">Subscribe to our newsletter and get updates on new packages and offers!</p>
            <div className="flex">
              <input
                type="email"
                placeholder={isFocused ? "" : 'Enter your email'}
                onClick={() => setIsFocused(true)}
                onBlur={(e) => {
                  if (!e.target.value) setIsFocused(false);
                }}
                className={`w-full p-2 bg-gray-700/30 text-white rounded-l-md outline-none placeholder-white transition-opacity duration-300 ${
                  isFocused ? "placeholder-opacity-0" : "placeholder-opacity-100"
                }`}
              />
              <button className="bg-white text-black px-4 rounded-r-md hover:bg-gray-200 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-xs text-gray-400 mt-10 max-w-7xl mx-auto">
          <p className="mb-4">
            <strong>Disclaimer:</strong> DKSHOTIT Studio provides professional photography services for personal and event use. All bookings are subject to availability and our Terms & Conditions. Packages and pricing may vary based on location and specific requirements. For more details, please contact us directly.
          </p>
          <p className="text-center mt-4">© 2025 DKSHOTIT  STUDIO AND PHOTOGRAPHY, All Rights Reserved.</p>
        </div>
      </footer>
      </div>
    </>
  );
};

export default Home;
