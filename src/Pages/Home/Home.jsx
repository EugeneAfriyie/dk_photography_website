import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Menu, X, Camera, Info, Calendar, Camera as ShootIcon, Edit, Download, Image as PhotoIcon, Package } from 'lucide-react';
import { Instagram, PhoneCall, Music } from 'lucide-react';
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { AnimatePresence } from 'framer-motion';
import Carousel from './Components/Carousel';
import { faqs, heroData, packages, processSteps, testimonials } from './data';
import BookingPrompt from './Components/BookingPrompt';
import { Component } from 'react';
import Testmonial from './Components/Testmonial';
import Intro_Sec from './Components/Intro_Sec';
import 'leaflet/dist/leaflet.css'; // Required for react-leafletz
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import PackagesSection from './Components/Packages';
import GalleryPreview from './Components/PageGallery';
import Header from './Components/Header';



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
  const locations = [
    {
      name: 'DKSHOTIT Studio',
      coordinates: [6.690112573887113, -1.6095430126993149],
      description: 'Our main studio in the heart of Kumasi.',
      bookingLink: 'https://www.google.com/maps/place/DKSHOTIT+PHOTOGRAPHY/@6.6930715,-1.6127072,869m/data=!3m1!1e3!4m6!3m5!1s0xfdb9769e64f2581:0xde3a7ffbbc47cef4!8m2!3d6.6897681!4d-1.6094694!16s%2Fg%2F11q_0kj18k?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D',
    },

  ];

  
    const toggleFaq = (index) => {
      setOpenFaqIndex(openFaqIndex === index ? null : index);
    };
  

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
            <section className="bg-black text-white py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                  <motion.h2
                    className="text-4xl font-bold mb-10 text-amber-400"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Our Services
                  </motion.h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      {
                        title: 'Photography',
                        description: [
                          'Wedding photography with candid and posed shots',
                          'Portrait sessions for individuals and families',
                          'Event photography for corporate and personal occasions',
                          'Commercial photography for brands and products',
                        ],
                        icon: 'https://images.unsplash.com/photo-1519741497674-4113f6d8b600?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
                        bookingLink: '/booking?service=photography',
                      },
                      {
                        title: 'Videography',
                        description: [
                          'Cinematic wedding films capturing every moment',
                          'Event videography for conferences and celebrations',
                          'Promotional videos for businesses and campaigns',
                          'Drone footage for stunning aerial perspectives',
                        ],
                        icon: 'https://images.pexels.com/photos/3372826/pexels-photo-3372826.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
                        bookingLink: '/booking?service=videography',
                      },
                      {
                        title: 'Make Up and Hair Styling',
                        description: [
                          'Bridal makeup and hair for a flawless wedding day',
                          'Photoshoot styling for portraits and fashion',
                          'Special occasion looks for events and parties',
                          'Professional consultations for personalized styles',
                        ],
                        icon: 'https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
                        bookingLink: '/booking?service=make-up-and-hair-styling',
                      },
                    ].map((service, i) => (
                      <motion.div
                        key={service.title}
                        className="bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col min-h-full"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.1, ease: 'easeInOut', type: 'spring' }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.div className="w-full h-40 bg-gray-700 overflow-hidden aspect-[4/2]">
                          <motion.img
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            src={service.icon}
                            alt={`${service.title} service`}
                            className="w-full h-full object-cover mx-auto"
                            loading="lazy"
                          />
                        </motion.div>
                        <div className="flex flex-col h-full">
                          <h3 className="text-2xl font-semibold mt-4 mb-3 text-amber-300 font-serif">{service.title}</h3>
                          <ul className="text-gray-300 space-y-2 flex-grow">
                            {service.description.map((item, index) => (
                              <li key={index} className="flex items-start">
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
                                <span className="text-[.9rem]">{item}</span>
                              </li>
                            ))}
                          </ul>
                          <Link to={service.bookingLink}>
                            <motion.button
                              className="w-full mt-4 bg-amber-300 text-gray-900 font-semibold py-2 rounded-lg hover:bg-amber-400 transition-colors duration-300"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                              aria-label={`Book ${service.title} service`}
                            >
                              Book Now
                            </motion.button>
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                </section>

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
    <PackagesSection />
  </ErrorBoundary>

      {/* Our Process Section */}
      <section className="bg-gray-600/30 text-white py-20 px-4 mb-20">
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
              //  const Icon = step.icon;
              <motion.div
                key={step.title}
                className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full md:w-1/5"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">{ <step.icon className="w-10 h-10 text-amber-400" />}</div>
                <h3 className="text-lg font-semibold mb-2 text-amber-300">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Process Section 2*/}

      <section className="w-full">
        <div className="bg-gradient-to-b from-white0 to-gray-500/20 h-full py-10 relative pl-4">
        
      <div className="grid lg:grid-cols-[30%_40%_30%] gap-10 sm:p-4 sm:justify-center w-full sm:w-[50%] lg:w-[85%] m-auto  ">

         <div id='center-circle' className="flex items-center justify-center order-1 lg:order-2 relative">
        <div 
          className="font-semibold text-white rounded-full w-[300px] h-[300px] xl:w-[460px] xl:h-[460px] flex items-center justify-center flex-col bg-cover bg-center relative overflow-hidden"
       style={{
          backgroundImage: `url('https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1920&blur=50')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(17,24,39,0.8)' // gray-900/80
        }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
          <p className='relative text-lg w-[60%] mb-4 text-white text-center'>Ready to capture your moments?</p>
          <motion.button
            animate={{ 
              scale: [1, 1.1, 1], 
              opacity: [1, 0.9, 1],
              rotate: [-2, 2, -2],
            }}
            whileHover={{ scale: 1.15, transition: { duration: 0.3 } }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.8, 
              ease: 'easeInOut',
            }}
            className="relative bg-amber-500 px-4 py-1 rounded text-lg hover:bg-amber-600 transition-colors duration-300"
          >
            Book Now
          </motion.button>
        </div>
      </div>



        
        <div id='no1' className="xs:hidden flex items-start justify-center flex-col text-white relative lg:p-8 order-2 lg:order-1 w-[300px] sm-size ">
            <div className=" flex items-center justify-center gap-2 ">
                <p className=' p-0.5 px-2 text-[.6rem] lg:text-sm text-gray-300/70 rounded-xl bg-gray-500/20'>01</p>
                <h3 className='font-bold text-[1.3rem] lg:text-4xl'>Book Your Session</h3>
            </div>
         
            <p className=' text-[1.2rem] lg:text-[1.2rem] font-semibold mt-4 lg:mt-20'>Start Your Journey</p>

             
            <p className='lg:text-[.9rem] text-[.8rem] text-gray-400 lg:mt-2 mt-1'>Choose your package and reach out via our contact page to secure your booking with ease.</p>

               <div className="xl:top-10 lg:top-0 left-20 absolute hidden lg:block bg-ambr-50/10 w-72 h-40 ">
               <img src="/src/assets/Process_bg/bg-high-1.png" className=' w-full h-full ' alt="" />
            </div>
        </div>

    

        <div id='no2' className="flex items-start justify-center flex-col text-white relative lg:p-8 order-3 lg:order-3 w-[300px] bg-ambr-50/10 sm-size mt-5">
            <div className=" flex items-center justify-center gap-2 ">
                <p className=' p-0.5 px-2 text-[.6rem] lg:text-sm text-gray-300/70 rounded-xl bg-gray-500/20'>02</p>
                <h3 className='font-bold text-[1.3rem] lg:text-4xl'>Schedule the Shoot</h3>
            </div>
            <p className=' text-[1.2rem] lg:text-[1.2rem] font-semibold mt-4 lg:mt-20'>Plan Your Moment</p>
            <p className='lg:text-[.9rem] text-[.8rem] text-gray-400 lg:mt-2 mt-1'>We’ll coordinate with you to set a date, time, and location that perfectly suits your needs.</p>

            <div className="xl:top-10 lg:top-0 -left-20 absolute hidden lg:block bg-ambr-50/10 w-72 h-40 ">
               <img src="/src/assets/Process_bg/bg-2.png" className=' w-full h-full ' alt="" />
            </div>
        </div>

      </div>


      <div className=" flex flex-col mt-10 sm:justify-center sm:items-center  lg:w-[80%] m-auto relative ">

        <img src="/src/assets/Process_bg/final.png" className='hidden lg:block' alt="" />

         <div className="flex lg:items-center  justify-center flex-col text-white lg:text-center lg:w-[30rem] sm:m-auto w-[300px] sm-size ">
            <div className=" flex items-center justify-cente gap-2 ">
                <p className=' p-0.5 px-2 text-[.6rem] lg:text-sm text-gray-300/70 rounded-xl bg-gray-500/20'>03</p>
                <h3 className='font-bold text-[1.3rem] lg:text-4xl'>Photo Shoot Day</h3>
            </div>
            <p className='text-[1.2rem] lg:text-[1.2rem] font-semibold mt-4 lg:mt-20'>Capture the Magic</p>
            <p className='lg:text-[.9rem] text-[.8rem] text-gray-400 lg:mt-2 mt-1'>Our professional photographers will capture your moments with care and creativity.</p>
        </div>
      </div>

      <img src="/src/assets/Process_bg/small-screen-ng.png" className='absolute top-64 right-10 sm:right-40 lg:hidden sm-pos' alt="" />
        </div>
       
      </section>

        {/* Booking Prompt */}
        <ErrorBoundary>
          <BookingPrompt />
        </ErrorBoundary>

         {/* </motion.section> Locations Section  */}


         <ErrorBoundary>
          <GalleryPreview />
         </ErrorBoundary>

        <motion.section
          id="locations"
          className="w-full py-16 px-4 sm:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Our Photography Locations</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-12">
              Choose from our stunning locations for your next photography session.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Interactive Map */}
              <div className="h-[400px] rounded-lg overflow-hidden">
                <MapContainer
                  center={[6.690112573887113, -1.6095430126993149]} 
                  zoom={10}
                  style={{ height: '100%', width: '100%' }}
                  aria-label="Map of photography locations"
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  {locations.map((location, index) => (
                    <Marker key={index} position={location.coordinates}>
                      <Popup>
                        <div>
                          <h3 className="font-semibold">{location.name}</h3>
                          <p>{location.description}</p>
                          <Link
                            to={location.bookingLink}
                            className="text-amber-500 hover:text-amber-400"
                          >
                            Book Here
                          </Link>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>

              {/* Location List */}
              <div className="space-y-6">
                {locations.map((location, index) => (
                
                  <div key={index} className="">
                    <div key={index} className="bg-gray-800 p-2 px-4 rounded-lg text-left flex items-center justify-between">
                      <div className="">
                        <h3 className="text-xl font-semibold text-amber-500 mb-2">{location.name}</h3>
                        <p className="text-gray-300 mb-4">{location.description}</p>
                      </div>
                    <Link
                      to={location.bookingLink}
                      className="inline-bloc bg-amber-500 px-4 py-2 rounded-lg text-white hover:bg-amber-600"
                    >
                      Book Here
                    </Link>
                    </div>
                    <section style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!4v1747669154143!6m8!1m7!1sW8JoXGPtiA8cbKLhJmvUag!2m2!1d6.689628583394144!2d-1.609494544395536!3f343.76786277358013!4f-5.211760663626208!5f1.0026514696513045"
                        width="600"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />

                    </section>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
       
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
      <section className="bg-gray-600/20 text-white py-10 sm:py-20 px-4 relative overflow-hidden xl:w-[90%] m-auto mt-40">
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
            className="text-4xl sm:text-6xl font-bold mb-6 text-amber-400 sm:w-[70%] w-full m-auto"
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

          <div className=" sm:p-8  shadow-md w-full  mx-auto rounded-lg ">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 mt-2 first:mt-0 p-4 w-[100%]   rounded-2xl "
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between gap-2 sm:gap-0 items-center py-4 text-left sm:text-lg font-semibold text-amber-300 hover:text-amber-400 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span className="sm:text-2xl text-amber-400">
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
