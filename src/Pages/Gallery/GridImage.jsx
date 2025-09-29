import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosPhotos } from 'react-icons/io';
import { GoVideo } from 'react-icons/go';

const GridImage = ({ album, index, openLightbox }) => {
  const imageKey = `${album.title}-${index}`;
  const mediaRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    // console.log(`Media loaded: ${imageKey}`);
    setIsLoaded(true);
  }, [imageKey]);

  const handleError = useCallback(() => {
    // console.error(`Failed to load grid media: ${album.media[0].src}`);
    setIsLoaded(true);
  }, [imageKey, album.media[0].src]);

  useEffect(() => {
    const media = mediaRef.current;
    let observer;

    if (media) {
      // console.log(`Setting up IntersectionObserver for ${imageKey}`);
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && media.complete) {
            // console.log(`Media cached: ${imageKey}, isLoaded: ${isLoaded}`);
            setIsLoaded(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(media);
    }

    const timeout = setTimeout(() => {
      if (!isLoaded) {
        // console.log(`Timeout triggered for ${imageKey}`);
        setIsLoaded(true);
      }
    }, 3000);

    return () => {
      if (observer && media) {
        // console.log(`Cleaning up IntersectionObserver for ${imageKey}`);
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
      {album.media[0].type === 'video' ? (
        <video
          key={`video-${imageKey}`}
          ref={mediaRef}
          src={album.media[0].src}
          poster={album.media[0].poster}
          muted
          className={`w-full h-full object-cover group-hover:brightness-75 transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadedData={handleLoad}
          onError={handleError}
        />
      ) : (
        <img
          key={`image-${imageKey}`}
          ref={mediaRef}
          src={album.media[0].src}
          alt={album.media[0].alt}
          className={`w-full h-full object-cover group-hover:brightness-75 transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
        <span className="text-white text-sm font-medium">
          {album.title} {album.type === 'album' ? `(${album.media.length})` : ''}
        </span>
      </div>
      {(album.type === 'album' || (album.type === 'video')) && (
        <div
          className="absolute top-2 right-2 bg-black/60 p-1 rounded-full album-icon"
          aria-label={album.type === 'video' ? 'Video content' : 'Album content'}
        >
          {album.type === 'video' ? (
            <GoVideo className="text-white w-5 h-5" />
          ) : (
            <IoIosPhotos className="text-white w-5 h-5" />
          )}
        </div>
      )}
    </motion.div>
  );
};

export default GridImage;