<div className="scroll-container overflow-x-auto whitespace-nowrap flex hide-scrollbar scroll-smooth">
     <div className="auto-scroll flex gap-6 px-4">
              {[...packages, ...packages].map((pkg, index) => (
                <div
                  key={`${pkg.title}-${index}`}
                  className={`min-w-[300px] sm:w-[350px] flex-shrink-0 group flex flex-col justify-between bg-gray-800 p-6 rounded-lg shadow-lg mx-4 ${
                    pkg.isPopular ? 'border-2 border-amber-500' : ''
                  } hover:border-amber-300 transition duration-300`}
                >
                  {pkg.isPopular && (
                    <span className="inline-block bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded-full mb-4">
                      Popular
                    </span>
                  )}
                  <img
                    src={pkg.icon}
                    alt={`${pkg.title} Icon`}
                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-amber-300 text-lg mb-2">{pkg.price}</p>
                  <ul className="text-gray-300 text-sm space-y-2 mb-4">
                    <li><strong>Coverage:</strong> {pkg.coverageHours}</li>
                    <li><strong>Photographers:</strong> {pkg.photographers}</li>
                    <li><strong>Edited Photos:</strong> {pkg.editedPhotos}</li>
                    <li><strong>Delivery:</strong> {pkg.deliveryTime}</li>
                    <li><strong>Extras:</strong> {pkg.extras}</li>
                    <li><strong>Location:</strong> {pkg.sessionLocation}</li>
                  </ul>
                  <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
                  <a
                    href="/contact"
                    className="bg-amber-500 text-white font-medium px-4 py-2 rounded-xl mt-auto text-center"
                    onMouseEnter={scrollToTop}
                  >
                    Book Now
                  </a>
                </div>
              ))}
            </div
</div>>