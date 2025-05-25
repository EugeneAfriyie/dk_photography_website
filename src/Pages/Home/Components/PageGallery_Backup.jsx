
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
              className="relative overflow-hidden rounded-lg border border-gray-700 hover:border-amber-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeInOut', type: 'spring' }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Link to="/gallery" aria-label={`View ${image.category} photo in gallery`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover rounded-lg"
                  loading="lazy"
                  onError={(e) => (e.target.src = 'https://placehold.co/800x600?text=Fallback+Image')}
                />
              </Link>
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
    </section>
  );
};

export default GalleryPreview;