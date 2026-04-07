import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';
import { ARTWORKS, Artwork } from '../data/artworks';

const GalleryPreview = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const handleImageClick = (artwork: Artwork, index: number) => {
    if (window.innerWidth < 768) {
      if (activeImage === index) {
        setSelectedArtwork(artwork);
      } else {
        setActiveImage(index);
      }
    } else {
      setSelectedArtwork(artwork);
    }
  };

  const getWhatsAppUrl = (title: string) => {
    const phone = "5521993704675";
    const message = encodeURIComponent(`Olá! Vim pelo site e tenho interesse na obra ${title}.`);
    return `https://wa.me/${phone}?text=${message}`;
  };

  const displayedArtworks = showAll ? ARTWORKS : ARTWORKS.slice(0, 6);

  return (
    <section id="galeria" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif font-bold text-gray-900">Galeria</h2>
            <p className="text-gray-500 mt-2">Uma seleção dos meus trabalhos recentes</p>
          </div>
          {showAll ? (
            <button 
              onClick={() => setShowAll(false)}
              className="flex items-center space-x-2 text-black font-semibold hover:-translate-x-2 transition-transform"
            >
              <X className="w-5 h-5" />
              <span>Ver Menos</span>
            </button>
          ) : (
            <button 
              onClick={() => setShowAll(true)}
              className="flex items-center space-x-2 text-black font-semibold hover:translate-x-2 transition-transform"
            >
              <span>Galeria Completa</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {displayedArtworks.map((artwork, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => handleImageClick(artwork, index)}
            >
              {/* Frame Structure */}
              <div className="bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={artwork.src}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Inner Shadow for Depth */}
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none"></div>
                </div>
                
                {/* Frame Label / Caption */}
                <div className="mt-4 text-center">
                  <p className="text-gray-900 font-serif font-bold text-sm uppercase truncate">{artwork.title}</p>
                  <p className="text-gray-400 font-serif italic text-xs mt-1">{artwork.year}</p>
                </div>
              </div>

              {/* Hover Overlay (Minimalist) - Visible on hover OR if active on mobile */}
              <div className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center pointer-events-none ${activeImage === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                <div className="bg-black/5 backdrop-blur-[2px] w-full h-full"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {showAll && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => {
                setShowAll(false);
                document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center space-x-2 px-8 py-4 border-2 border-black text-black font-bold rounded-full hover:bg-black hover:text-white transition-all uppercase tracking-widest"
            >
              <X className="w-5 h-5" />
              <span>Ver Menos</span>
            </button>
          </div>
        )}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArtwork(null)}
            className="fixed inset-0 z-50 flex justify-center items-start md:items-center bg-black/95 p-4 md:p-10 overflow-y-auto cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Container */}
              <div className="w-full md:w-2/3 bg-gray-100 flex items-center justify-center p-4">
                <img
                  src={selectedArtwork.src}
                  alt={selectedArtwork.title}
                  className="max-w-full max-h-[50vh] md:max-h-[80vh] object-contain"
                />
              </div>

              {/* Info Container */}
              <div className="w-full md:w-1/3 p-6 md:p-10 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-2 uppercase">
                    {selectedArtwork.title}
                  </h3>
                  <p className="text-sm font-bold text-green-600 mb-6 tracking-widest">
                    Status: {selectedArtwork.status}
                  </p>
                  
                  <div className="space-y-4 text-gray-600">
                    <p className="text-sm md:text-base leading-relaxed">
                      {selectedArtwork.materials}
                    </p>
                    <p className="text-sm md:text-base">
                      {selectedArtwork.size}
                    </p>
                    <p className="text-sm md:text-base">
                      Ano: {selectedArtwork.year}
                    </p>
                    <p className="text-2xl font-serif font-bold text-black mt-6">
                      {selectedArtwork.price}
                    </p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                      Impressão em fine art com certificado de autenticidade
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <a 
                    href={getWhatsAppUrl(selectedArtwork.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors font-bold uppercase tracking-[0.2em] text-xs whitespace-nowrap"
                  >
                    TENHO INTERESSE
                  </a>
                  <button
                    onClick={() => setSelectedArtwork(null)}
                    className="w-full py-4 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-50 transition-colors font-bold uppercase tracking-wider"
                  >
                    Fechar
                  </button>
                </div>
              </div>

              <button
                onClick={() => setSelectedArtwork(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-900 shadow-lg md:hidden"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryPreview;
