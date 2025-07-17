import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const Studio_Location = ({locations}) => {
  return (
    <div><motion.section
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
                         <a
                              href={location.bookingLink}
                              className="text-amber-500 hover:text-amber-400"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Direction Here
                          </a>

                       

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
                    <a
                      href={location.bookingLink}
                      target="_blank"
                              rel="noopener noreferrer"
                      className="inline-bloc bg-amber-500 px-4 py-2 rounded-lg text-white hover:bg-amber-600"
                    >
                      Direction Here
                    </a>

               
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
        </motion.section></div>
  )
}

export default Studio_Location