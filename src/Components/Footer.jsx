import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";



const Footer = ({isFocused,setIsFocused}) => {
  return (
       <footer className="bg-black text-white py-10 px-6 md:px-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Socials */}
          <div>
          
            <div className="flex items-center gap-2">
               <div className="w-10 h-10 overflow-hidden flex items-center justify-center">
              <img src="https://res.cloudinary.com/djeorsh5d/image/upload/v1751247104/lo1_qbfpfj.png" className=" object-cover object- w-full h-full" alt="logo" />
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
  )
}

export default Footer