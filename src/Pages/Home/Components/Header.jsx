import React from 'react'

const Header = () => {
  return (
   
             <header className="shadow-2xl shadow-gray-600  fixed top-5 left-1/2 transform -translate-x-1/2 w-full sm:w-[70%] z-500 bg-black/70 backdrop-blur-md rounded-full">
               <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
       
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
       
               <AnimatePresence>
                 {mobileMenuOpen && (
                   <motion.div
                     initial={{ x: '100%' }}
                     animate={{ x: 0 }}
                     exit={{ x: '100%' }}
                     transition={{ duration: 0.3, ease: 'easeInOut' }}
                     className="md:hidden fixed -top-5  right-0 h-full w-3/4 bg-black border-l border-gray-800 z-5000 backdrop-blur-md"
                   >
                     <ul className="flex flex-col items-center gap-6 py-16 text-base bg-black shadow-md ">
                       <li>
                         <Link to="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 transition-colors duration-300">Home</Link>
                       </li>
                       <li>
                         <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 transition-colors duration-300">About</Link>
                       </li>
                       <li>
                         <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 transition-colors duration-300">Gallery</Link>
                       </li>
                       <li>
                         <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 transition-colors duration-300">Services</Link>
                       </li>
                       <li>
                         <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 transition-colors duration-300">Contact</Link>
                       </li>
                       <li>
                         <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                           <button className="bg-amber-500 px-6 py-2 rounded text-sm hover:bg-amber-600 transition-colors duration-300">
                             Book Now
                           </button>
                         </Link>
                       </li>
                     </ul>
                   </motion.div>
                 )}
               </AnimatePresence>
             </header>
  )
}

export default Header