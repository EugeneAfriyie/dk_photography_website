import React from 'react'

const Test = () => {
  return (
    <div>hj
        <section className="bg-black text-white py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                  <motion.h2
                    className="text-4xl font-bold mb-10 text-amber-400"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Our Photography Services
                  </motion.h2>
        
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                      <motion.div
                        key={service.title}
                        className="bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.2 }}
                        viewport={{ once: true }}
                      >
                      <div className=' w-full h-40 bg-red-800 overflow-hidden'>
                          <img
                          src={service.icon}
                          alt={service.title}
                          className="w-full  object-cover mx-auto mb-4"
                          loading="lazy"
                        />
                      </div>
                        <h3 className="text-xl font-semibold m-2 text-amber-300">{service.title}</h3>
                        <p className="text-gray-400">{service.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
            </section>
    </div>
  )
}

export default Test