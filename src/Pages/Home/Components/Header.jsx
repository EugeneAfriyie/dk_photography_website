import React from 'react'
import { Link } from 'react-router-dom';
import { Menu, X, Camera, Info, Calendar, Camera as ShootIcon, Edit, Download, Image as PhotoIcon, Package } from 'lucide-react';
import { AnimatePresence,motion } from 'framer-motion';




const Header = ({mobileMenuOpen,setMobileMenuOpen}) => {
  return (
   
        <>
             <header className="shadow-2xl shadow-gray-600  fixed top-5 left-1/2 transform -translate-x-1/2 w-full sm:w-[70%] z-500 bg-black/70 backdrop-blur-md rounded-full">
               <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
       
               <div className="flex items-center gap-2">
                  <div className="w-10 h-10 overflow-hidden flex items-center justify-center">
                 <img src="/src/assets/LOGO/lo1.PNG" className=" object-cover object- w-full h-full" alt="LOGO" />
                 {/* <img src="/src/assets/LOGO21.PNG" className='lg:hidden  object-cover object- w-full h-full' alt="" /> */}
               </div>
               <p className='text-[.6rem] lg:flex md:hidden font-semibold flex flex-col hover:text-amber-400 transition-colors duration-300'>
                   <span>DKSHOTIT STUDIO &</span>
                   <span>PHOTOGRAPHY</span>
                 </p>
       
               </div>
       
       
                 <ul className="hidden md:flex gap-6 text-sm">
                   <li>
                     <Link to="/" className="hover:text-amber-400 transition-colors duration-300">Home</Link>
                   </li>
                   <li>
                     <Link to="/about" className="hover:text-amber-400 transition-colors duration-300">About</Link>
                   </li>
                   <li>
                     <Link to="/gallery" className="hover:text-amber-400 transition-colors duration-300">Gallery</Link>
                   </li>
                   <li>
                     <Link to="/services" className="hover:text-amber-400 transition-colors duration-300">Services</Link>
                   </li>
                   <li>
                     <Link to="/contact" className="hover:text-amber-400 transition-colors duration-300">Contact</Link>
                   </li>
                 </ul>
       
                 <div className="hidden md:block">
                   <Link to="/contact">
                     <button className="bg-amber-500 px-4 py-1 rounded text-sm hover:bg-amber-600 transition-colors duration-300">
                       Book Now
                     </button>
                   </Link>
                 </div>
       
                 <div className="md:hidden">

                   <button
                     onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                     aria-label="Toggle mobile menu"
                   >
                     {mobileMenuOpen ? (
                       <X className="w-8 h-8 p-1 rounded-md bg-amber-500" />
                     ) : (
                       <Menu className="w-8 h-8 p-1  rounded-md bg-amber-500" />
                     )}
                   </button>
                 </div>
               </nav>
       
             </header>
               <AnimatePresence>
                 {mobileMenuOpen && (
                   <motion.div
                     initial={{ x: '100%' }}
                     animate={{ x: 0 }}
                     exit={{ x: '100%' }}
                     transition={{ duration: 0.3, ease: 'easeInOut' }}
                     className="md:hidden fixed top-0  right-0 bottom- h-auto w-3/4 bg-black border-l border-gray-800 z-5000 backdrop-blur-md p-4"
                   >
                      <div className="md:hidden flex justify-between mb-2">
                        
               <div className="flex items-center gap-2">
                  <div className="w-10 h-10 overflow-hidden flex items-center justify-center">
                 <img src="/src/assets/lo1.PNG" className=" object-cover object- w-full h-full" alt="LOGO" />
                 {/* <img src="/src/assets/LOGO21.PNG" className='lg:hidden  object-cover object- w-full h-full' alt="" /> */}
               </div>
               <p className='text-[.6rem] lg:flex md:hidden font-semibold flex flex-col hover:text-amber-400 transition-colors duration-300'>
                   <span>DKSHOTIT STUDIO &</span>
                   <span>PHOTOGRAPHY</span>
                 </p>
       
               </div>
                   <button
                     onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                     aria-label="Toggle mobile menu"
                   >
                     {mobileMenuOpen ? (
                       <X className="w-8 h-8 p-1 rounded-md bg-amber-500" />
                     ) : (
                       <Menu className="w-8 h-8 p-1  rounded-md bg-amber-500" />
                     )}
                   </button>
                 </div>
                    
                    

<ul className="w-full flex flex-col items-cente gap-6 py-1 text-base bg-black shadow-md ">
  <li className="group flex items-center gap-2 p-2 rounded hover:border hover:border-amber-700 transition-all duration-300">
    <svg
      className="w-5 h-5 text-white group-hover:text-amber-400 transition-colors duration-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
    <Link
      to="/"
      onClick={() => setMobileMenuOpen(false)}
      className="text-white hover:text-amber-400 transition-colors duration-300"
    >
      Home
    </Link>
  </li>
  <li className="group flex items-center gap-2 p-2 rounded  hover:border hover:border-amber-700  transition-all duration-300">
    <svg
      className="w-5 h-5 text-white group-hover:text-amber-400 transition-colors duration-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
    <Link
      to="/about"
      onClick={() => setMobileMenuOpen(false)}
      className="text-white hover:text-amber-400 transition-colors duration-300"
    >
      About
    </Link>
  </li>
  <li className="group flex items-center gap-2 p-2 rounded hover:border hover:border-amber-700  transition-all duration-300">
    <svg
      className="w-5 h-5 text-white group-hover:text-amber-400 transition-colors duration-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
    <Link
      to="/gallery"
      onClick={() => setMobileMenuOpen(false)}
      className="text-white hover:text-amber-400 transition-colors duration-300"
    >
      Gallery
    </Link>
  </li>
  <li className="group flex items-center gap-2 p-2 rounded hover:border hover:border-amber-700  transition-all duration-300">
    <svg
      className="w-5 h-5 text-white group-hover:text-amber-400 transition-colors duration-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
    <Link
      to="/services"
      onClick={() => setMobileMenuOpen(false)}
      className="text-white hover:text-amber-400 transition-colors duration-300"
    >
      Services
    </Link>
  </li>
  <li className="group flex items-center gap-2 p-2 rounded hover:border hover:border-amber-700  transition-all duration-300">
    <svg
      className="w-5 h-5 text-white group-hover:text-amber-400 transition-colors duration-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
    <Link
      to="/contact"
      onClick={() => setMobileMenuOpen(false)}
      className="text-white hover:text-amber-400 transition-colors duration-300"
    >
      Contact
    </Link>
  </li>
</ul>
  <li className="w-full group flex items-center gap-2 p-2 rounded hover:border hover:border-amber-700  transition-all duration-300">

      <button className="font-semibold w-full bg-amber-500 px-6 py-2 rounded text-sm hover:bg-amber-600 transition-colors duration-300">
    <Link className='flex justify-center gap' to="/contact" onClick={() => setMobileMenuOpen(false)}>
       <span>
            <svg
      className="w-5 h-5 text-white group-hover:text-amber-400 transition-colors duration-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 7V3m8 4v3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0
0 0 0 2
0 v12 a2 2
0 0 2"/>
</svg>
       </span>
       
        Book Now
    </Link>
      </button>
  </li>


                   </motion.div>
                 )}
               </AnimatePresence></>
  )
}

export default Header