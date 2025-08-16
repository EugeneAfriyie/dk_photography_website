import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const Services = ({servicesData}) => {
  return (
    <div> <section className="bg-black text-white py-20 px-4">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
                    {servicesData.map((service, i) => (
                      <motion.div
                        key={service.title}
                        className="bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col min-h-full"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.1, ease: 'easeInOut', type: 'spring' }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.div className="w-full h-40 bg-gray-700 overflow-hidden ">
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
                </section></div>
  )
}

export default Services