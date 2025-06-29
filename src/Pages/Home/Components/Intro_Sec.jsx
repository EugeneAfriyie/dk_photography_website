import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { introData } from '../data';


const Intro_Sec = () => {
  

  return (
    <section className="bg-black text-white py-20 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                      <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-4"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        viewport={{ once: true }}
                      >
                       Become a Timeless Memory Keeper
                      </motion.h2>
                      <motion.p
                        className="text-gray-400 mb-12 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        Your number 1 for capturing life’s moments.
                      </motion.p>
                      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                        
                    {
                        introData.map((i,index) =>(
                            <motion.div
                          key={index}
                          className="bg-gray-800 p-6 rounded-xl shadow-md w-full "
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                        <div className="flex justify-center h40 mb-4 aspect-[4/2]">
                          <img
                            src={i.imgUrl}
                            className="w-full h-full object-cover rounded-sm"
                            alt="Custom Packages"
                          />
                        </div>

                          <h3 className="text-xl font-semibold mb-2 text-amber-300">{i.heading}</h3>
                          <p className="text-gray-400 mb-4 sm:text-[1rem] text-sm">
                            {i.introText}
                          </p>
                          <Link to="/contact">
                            <button className="bg-purple-600 px-6 py-2 rounded hover:bg-purple-700 transition-colors duration-300 text-sm">
                              Get Started Now
                            </button>
                          </Link>
                        </motion.div>
                        ))
                    }
            
                        
    
                      </div>
                    </div>

                    {}
                  </section>
  )
}

export default Intro_Sec