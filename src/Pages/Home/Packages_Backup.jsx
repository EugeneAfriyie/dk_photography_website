    <section className="bg-black text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-10 text-amber-400"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Photography Packages
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((packageItem, i) => (
              <motion.div
                key={packageItem.title}
                className="relative bg-gradient-to-br from-blue-500/20 to-gray-500/20 p-6 rounded-xl shadow-md group transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: .5, ease: 'easeInOut',type: '' }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {packageItem.isPopular && (
                  <span className="absolute top-2 right-12 bg-amber-500 text-white text-xs px-2 py-1 rounded-full shadow-lg shadow-amber-500/50">
                    POPULAR
                  </span>
                )}
                <Info
                  className="absolute bottom-2 right-2 w-5 h-5 text-gray-400 cursor-pointer hover:text-amber-400 transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPackage(packageItem);
                  }}
                  aria-label={`More information about ${packageItem.title}`}
                />
                {/* <Camera className="w-8 h-8 mx-auto mb-2 text-gray-300 group-hover:text-amber-400 transition-colors duration-300" /> */}

                <motion.div className=' w-full h40 bg-red-800 overflow-hidden mb-4 aspect-[4/2]'
                   
                >
                  <motion.img
                  src='/src/assets/Services_img/img-1.jpg'
                  alt=''
                  className="w-full  object-cover mx-auto mb-4"
                  loading="lazy"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                 
                />
              </motion.div>

                <p className="text-3xl font-bold text-white mb-2">{packageItem.price}</p>
                <p className="text-gray-300 text-sm mb-4">{packageItem.title}</p>
                <button className="w-full bg-black text-white py-2 rounded mb-2 hover:bg-gray-800 transition-colors duration-300">
                  Book Now
                </button>
                <div className="text-xs text-gray-400 mt-4 space-y-1">
                  <p>Coverage: {packageItem.coverageHours}</p>
                  <p>Photographers: {packageItem.photographers}</p>
                  <p>Edited Photos: {packageItem.editedPhotos}</p>
                  <p>Delivery Time: {packageItem.deliveryTime}</p>
                  <p>Extras: {packageItem.extras}</p>
                  <p>Location: {packageItem.sessionLocation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedPackage && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPackage(null)}
            >
              <motion.div
                className="bg-gray-800 p-6 rounded-xl max-w-md w-full mx-4 text-white relative"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={() => setSelectedPackage(null)}
                >
                  ✕
                </button>
                <h3 className="text-2xl font-bold mb-4 text-amber-400">{selectedPackage.title}</h3>
                <p className="text-gray-300 mb-4">{selectedPackage.description}</p>
                <div className="text-sm text-gray-400 mb-4">
                  Includes:{' '}
                  {selectedPackage.servicesIncluded.map((service, index) => (
                    <span key={service.title}>
                      {service.title}
                      {index < selectedPackage.servicesIncluded.length - 1 && ', '}
                    </span>
                  ))}
                </div>
                <Link to="/contact">
                  <button className="bg-amber-500 px-6 py-2 rounded hover:bg-amber-600 transition-colors duration-300 text-sm">
                    Book Now
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>