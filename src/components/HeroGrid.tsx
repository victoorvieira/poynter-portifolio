import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MousePointer2, X } from 'lucide-react';

// Import images from src/img
import img1 from '../img/art1.png';
import img2 from '../img/art2.png';
import img3 from '../img/art3.png';
import img4 from '../img/art4.png';
import img5 from '../img/art5.png';
import img6 from '../img/art6.png';
import img7 from '../img/art7.png';
import img8 from '../img/art8.png';

const HeroGrid = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Floating Profile Icon - Centralized and Enlarged */}
      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
        <div className="relative pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, type: 'spring' }}
            className="w-48 h-48 md:w-72 md:h-72 rounded-full border-8 border-white shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden bg-white"
          >
            <img 
              src="https://lh3.googleusercontent.com/d/1kDAXV0lH_ZHsUBsdQ91b5mCW86a84nxD" 
              alt="Poynter Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          {/* Exponent 3 - Removed as it is now part of the image */}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 h-screen w-full">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative overflow-hidden group cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Art ${index + 1}`}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            
            {/* Reveal Content (Visible on hover) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-white font-serif italic text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                Ver Obra
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Selected Artwork"
                className="max-w-full max-h-full object-contain shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-[-40px] right-0 text-white hover:text-gray-300 transition-colors"
                aria-label="Close modal"
              >
                <X size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroGrid;
