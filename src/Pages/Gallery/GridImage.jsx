import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaImages, FaImage, FaVideo } from 'react-icons/fa';

const GridImage = ({ album, index, openLightbox }) => {
  const imageKey = `${album.title}-${index}`;
  const imageRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    console.log(`Image loaded: ${imageKey}`);
    setIsLoaded(true);
  }, [imageKey]);

  const handleError = useCallback(() => {
    console.error(`Failed to load grid image: ${album.media[0].src}`);
    setIsLoaded(true);
  }, [imageKey, album.media[0].src]);

  useEffect(() => {
    const img = imageRef.current;
    let observer;

    if (img) {
      console.log(`Setting up IntersectionObserver for ${imageKey}`);
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && img.complete) {
            console.log(`Image cached: ${imageKey}, isLoaded: ${isLoaded}`);
            setIsLoaded(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(img);
    }

    const timeout = setTimeout(() => {
      if (!isLoaded) {
        console.log(`Timeout triggered for ${imageKey}`);
        setIsLoaded(true);
      }
    }, 3000);

    return () => {
      if (observer && img) {
        console.log(`Cleaning up IntersectionObserver for ${imageKey}`);
        observer.disconnect();
      }
      clearTimeout(timeout);
    };
  }, [imageKey, isLoaded]);

  return (
    <motion.div
      key={imageKey}
      className="relative aspect-3/4 overflow-hidden cursor-pointer group border border-gray-700 hover:border-amber-400 transition-colors duration-300 rounded-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      onClick={() => openLightbox(album, 0)}
      tabIndex={0}
      role="button"
      aria-label={`View ${album.title} ${album.type === 'album' ? 'album' : 'media'} in lightbox`}
      onKeyDown={(e) => e.key === 'Enter' && openLightbox(album, 0)}
    >
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key={`placeholder-${imageKey}`}
            className="absolute inset-0 bg-gray-700"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
      <img
        key={`image-${imageKey}`}
        ref={imageRef}
        src={album.media[0].src}
        alt={album.media[0].alt}
        className={`w-full h-full object-cover group-hover:brightness-75 transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
        <span className="text-white text-sm font-medium">
          {album.title} {album.type === 'album' ? `(${album.media.length})` : ''}
        </span>
      </div>
      {album.type === 'album' && (
        <div
          className="absolute top-2 right-2 bg-black/60 p-1 rounded-full album-icon"
          aria-label={`Album contains ${album.albumType} content`}
        >
          {(() => {
            switch (album.albumType) {
              case 'mixed':
                return <FaImages className="text-white w-5 h-5" />;
              case 'images':
                return <FaImage className="text-white w-5 h-5" />;
              case 'videos':
                return <FaVideo className="text-white w-5 h-5" />;
              default:
                return null;
            }
          })()}
        </div>
      )}
    </motion.div>
  );
};

export default GridImage;