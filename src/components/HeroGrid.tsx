import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MousePointer2, X } from 'lucide-react';
import { ARTWORKS, Artwork } from '../data/artworks';

const HeroGrid = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  
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

  const menuItems = [
    { label: 'Galeria', href: '#galeria' },
    { label: 'Quem sou eu', href: '#quem-sou-eu' },
    { label: 'Contato', href: '#contato' },
  ];

  const getWhatsAppUrl = (title: string) => {
    const phone = "21993544921";
    const message = encodeURIComponent(`Olá! Vim pelo site e tenho interesse na obra ${title}.`);
    return `https://wa.me/${phone}?text=${message}`;
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Floating Profile Icon - Centralized and Enlarged */}
      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
        <div className="relative pointer-events-auto perspective-1000">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              rotateY: isFlipped ? 180 : 0
            }}
            transition={{ 
              duration: 0.8, 
              type: 'spring',
              damping: 20,
              stiffness: 100
            }}
            style={{ transformStyle: 'preserve-3d' }}
            className="w-48 h-48 md:w-72 md:h-72 cursor-pointer relative"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Front: Profile Image */}
            <div 
              className="absolute inset-0 rounded-full border-8 border-white shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden bg-white group"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <img 
                src="https://lh3.googleusercontent.com/d/1kDAXV0lH_ZHsUBsdQ91b5mCW86a84nxD" 
                alt="Poynter Profile" 
                className="w-full h-full object-cover transition-all duration-500 hover:grayscale"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Back: Menu */}
            <div 
              className="absolute inset-0 rounded-full border-8 border-white shadow-[0_0_50px_rgba(0,0,0,0.3)] bg-black flex flex-col items-center justify-center p-6"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <div className="space-y-4 text-center">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsFlipped(false);
                    }}
                    className="block text-white font-serif text-lg md:text-2xl hover:text-gray-400 transition-colors tracking-widest"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 h-screen w-full">
        {ARTWORKS.slice(0, 8).map((artwork, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative overflow-hidden group cursor-pointer"
            onClick={() => handleImageClick(artwork, index)}
          >
            <img
              src={artwork.src}
              alt={artwork.title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            
            {/* Reveal Content (Visible on hover OR if active on mobile) */}
            <div className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center bg-black/20 md:bg-transparent ${activeImage === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
              <span className="text-white font-serif italic text-lg md:text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-center px-4">
                {artwork.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArtwork(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full bg-white rounded-lg overflow-hidden flex flex-col md:flex-row shadow-2xl"
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
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <a 
                    href={getWhatsAppUrl(selectedArtwork.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors font-bold uppercase tracking-wider"
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
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors md:hidden"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroGrid;
