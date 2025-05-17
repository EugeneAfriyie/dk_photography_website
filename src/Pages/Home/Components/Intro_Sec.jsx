import React from 'react'

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
                        
                        <motion.div
                          className="bg-gray-800 p-6 rounded-xl shadow-md w-full "
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex justify-center mb-4 h-40">
                            <img
                              src="/src/assets/Photo_Equiment/EQ_image-2.png"
                              alt="Photography Tools"
                              className="w-full h-full object-cover rounded-sm"
                            />
                          </div>
                          <h3 className="text-xl font-semibold mb-2 text-amber-300">Photography Tools</h3>
                          <p className="text-gray-400 mb-4">
                            Unlock next-gen equipment and editing software. Integrated with the latest technology to enhance your photo quality.
                          </p>
                          <Link to="/contact">
                            <button className="bg-purple-600 px-6 py-2 rounded hover:bg-purple-700 transition-colors duration-300 text-sm">
                              Get Started Now
                            </button>
                          </Link>
                        </motion.div>
            
                        <motion.div
                          className="bg-gray-800 p-6 rounded-xl shadow-md w-full "
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex justify-center h-40 mb-4">
                            <img
                              src="/src/assets/Photo_Equiment/EQ_image_1.png"
                              className="w-full h-full object-cover rounded-sm"
                              alt="Custom Packages"
                            />
                          </div>
                          <h3 className="text-xl font-semibold mb-2 text-amber-300">Custom Packages</h3>
                          <p className="text-gray-400 mb-4">
                            Build your photography journey with a tailored plan. Test your vision and we’ll adjust based on your needs.
                          </p>
                          <Link to="/contact">
                            <button className="bg-purple-600 px-6 py-2 rounded hover:bg-purple-700 transition-colors duration-300 text-sm">
                              Get Started Now
                            </button>
                          </Link>
                        </motion.div>
    
                      </div>
                    </div>
                  </section>
  )
}

export default Intro_Sec