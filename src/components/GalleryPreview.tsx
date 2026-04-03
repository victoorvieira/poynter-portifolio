import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';

const GalleryPreview = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [
    "https://lh3.googleusercontent.com/d/1nlTUgx8cg8pIA-GffMSTnlNT1NwunPZT",
    "https://lh3.googleusercontent.com/d/1A9N_CUDj9wfLtVh84pk_nXb9uOouV9ds",
    "https://lh3.googleusercontent.com/d/1SDZxho_iB2FHZB24sxK7r_e3EI34wJNk",
    "https://lh3.googleusercontent.com/d/1TE2w6vjA6QXPbVhe1emTATs9PKc8nzst",
    "https://lh3.googleusercontent.com/d/1Y0N32FIzqyINZdkZTOYtNOaY63mG2ztz",
    "https://lh3.googleusercontent.com/d/1kqQ5A4vgZOgGPjPfHdC-STQ79yWO_VRK"
  ];

  return (
    <section id="galeria" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif font-bold text-gray-900">Galeria</h2>
            <p className="text-gray-500 mt-2">Uma seleção dos meus trabalhos recentes</p>
          </div>
          <a 
            href="#galeria-completa" 
            className="flex items-center space-x-2 text-black font-semibold hover:translate-x-2 transition-transform"
          >
            <span>Galeria Completa</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              {/* Frame Structure */}
              <div className="bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Inner Shadow for Depth */}
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none"></div>
                </div>
                
                {/* Frame Label / Caption */}
                <div className="mt-4 text-center">
                  <p className="text-gray-400 font-serif italic text-sm">Obra #{index + 1}</p>
                </div>
              </div>

              {/* Hover Overlay (Minimalist) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                <div className="bg-black/5 backdrop-blur-[2px] w-full h-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
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

export default GalleryPreview;
