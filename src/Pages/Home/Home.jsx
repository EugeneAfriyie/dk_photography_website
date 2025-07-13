import { useState, useEffect } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Menu, X, Camera, Info, Calendar, Camera as ShootIcon, Edit, Download, Image as PhotoIcon, Package } from 'lucide-react';
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import Carousel from './Components/Carousel';
import { faqsData, heroData, packages, processStepsData, testimonials,servicesData,locationsData, galleryImages } from './data';
import BookingPrompt from './Components/BookingPrompt';
import { Component } from 'react';
import Testmonial from './Components/Testmonial';
import Intro_Sec from './Components/Intro_Sec';
import 'leaflet/dist/leaflet.css'; 
import PackagesSection from './Components/Packages';
import GalleryPreview from './Components/PageGallery';
import Header from './Components/Header';
import Services from './Components/Services';
import Studio_Location from './Studio_Location';
import Faq from './Faq';
import  Progress from './Progress';
import Footer from '../../Components/Footer';
import ExclusiveOffer from './Components/ExclusiveOffer';
import ToTop from '../About/Components/ToTop';




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
        const [Show, setshow] = useState(5000);
    
  
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

        <ErrorBoundary>
          <ExclusiveOffer />
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
          <GalleryPreview galleryImages={galleryImages}/>
         </ErrorBoundary>

        <ErrorBoundary>
          <Studio_Location locations={locationsData} />
        </ErrorBoundary>
       
      {/* Testimonials Section */}
   
          <Testmonial
            items={testimonials}
            interval={7000}
            autoPlay={true}
    
          />
      

      {/* FAQ Section */}
            <ErrorBoundary>
              <Faq faqsData={faqsData} openFaqIndex={openFaqIndex} setOpenFaqIndex={setOpenFaqIndex}/>
            </ErrorBoundary>





      {/* Footer */}
              <ErrorBoundary>
                <Footer isFocused={isFocused} setIsFocused={setIsFocused} />
              </ErrorBoundary>
      </div>

      <ToTop Showtop={Show}/>
    </>
  );
};

export default Home;
