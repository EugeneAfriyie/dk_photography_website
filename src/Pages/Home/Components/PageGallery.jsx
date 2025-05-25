
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Gallery images data
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1519741497674-4113f6d8b600?auto=format&fit=crop&w=800&h=600&q=80',
    alt: 'Wedding ceremony',
    category: 'Wedding',
  },
  {
    src: 'https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    alt: 'Graduate in cap and gown',
    category: 'Graduation',
  },
  {
    src: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    alt: 'Family portrait',
    category: 'Family',
  },
  {
    src: 'https://images.unsplash.com/photo-1591382696684-38c427c7547a?auto=format&fit=crop&w=800&h=600&q=80',
    alt: 'Child playing',
    category: 'Children',
  },
  {
    src: 'https://images.unsplash.com/photo-1505840717430-88294338e639?auto=format&fit=crop&w=800&h=600&q=80',
    alt: 'Couple in love',
    category: 'Couple',
  },
  {
    src: 'https://images.pexels.com/photos/1543766/pexels-photo-1543766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    alt: 'Birthday celebration',
    category: 'Birthday',
  },
  {
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fef5cb?auto=format&fit=crop&w=800&h=600&q=80',
    alt: 'Bride and groom',
    category: 'Wedding',
  },
  {
    src: 'https://images.pexels.com/photos/2909067/pexels-photo-2909067.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    alt: 'Graduation group',
    category: 'Graduation',
  },
  {
    src: 'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    alt: 'Family outdoors',
    category: 'Family',
  },
  {
    src: 'https://images.pexels.com/photos/3603908/pexels-photo-3603908.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    alt: 'Child portrait',
    category: 'Children',
  },
  {
    src: 'https://images.unsplash.com/photo-1500259571355-332da5cb07f1?auto=format&fit=crop&w=800&h=600&q=80',
    alt: 'Couple engagement',
    category: 'Couple',
  },
  {
    src: 'https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    alt: 'Birthday party',
    category: 'Birthday',
  },
  {
    src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=800&h=600&q=80',
    alt: 'Wedding portrait',
    category: 'Wedding',
  },
  {
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&h=600&q=80',
    alt: 'Graduate with diploma',
    category: 'Graduation',
  },
  {
    src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&h=600&q=80',
    alt: 'Family event',
    category: 'Family',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=600&q=80',
    alt: 'Child smiling',
    category: 'Children',
  },
];

const GalleryPreview = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      } else if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev + 1) % galleryImages.length);
      } else if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  const handlePrev = () => {
    setSelectedImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-4 text-amber-400 font-['Playfair_Display']"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Explore Our Gallery
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Discover a collection of our finest moments captured through the lens.
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg border border-gray-700 hover:border-amber-400 transition-colors duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeInOut', type: 'spring' }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImageIndex(index)}
              role="button"
              tabIndex={0}
              aria-label={`View ${image.alt} in overlay`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedImageIndex(index);
                }
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover rounded-lg"
                loading="lazy"
                onError={(e) => (e.target.src = 'https://placehold.co/800x600?text=Fallback+Image')}
              />
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link to="/gallery">
            <motion.button
              className="bg-amber-500 px-6 py-3 rounded-lg text-lg font-semibold text-white hover:bg-amber-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View full gallery"
            >
              View Full Gallery
            </motion.button>
          </Link>
        </motion.div>
      </div>
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
            role="dialog"
            aria-label="Image overlay"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Escape') setSelectedImageIndex(null);
            }}
          >
            <motion.div
              className="relative bg-gray-800 p-4 rounded-lg max-w-[90vw] max-h-[90vh] flex flex-col items-center"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl"
                onClick={() => setSelectedImageIndex(null)}
                aria-label="Close image overlay"
              >
                ✕
              </button>
              <img
                src={galleryImages[selectedImageIndex].src}
                alt={galleryImages[selectedImageIndex].alt}
                className="max-w-full max-h-[70vh] object-contain rounded"
                loading="lazy"
                onError={(e) => (e.target.src = 'https://placehold.co/800x600?text=Fallback+Image')}
              />
              <p className="text-gray-300 text-sm mt-2 text-center">
                {galleryImages[selectedImageIndex].alt}
              </p>
              <div className="flex items-center justify-between w-full mt-4">
                <motion.button
                  className="bg-amber-500 text-white text-2xl px-4 py-2 rounded-full hover:bg-amber-600"
                  onClick={handlePrev}
                  aria-label="Previous image"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ❮
                </motion.button>
                <Link to="/gallery">
                  <motion.button
                    className="bg-amber-500 px-4 py-2 rounded-lg text-sm font-semibold text-white hover:bg-amber-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="View full gallery from overlay"
                  >
                    View Full Gallery
                  </motion.button>
                </Link>
                <motion.button
                  className="bg-amber-500 text-white text-2xl px-4 py-2 rounded-full hover:bg-amber-600"
                  onClick={handleNext}
                  aria-label="Next image"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ❯
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryPreview;