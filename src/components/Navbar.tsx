import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Galeria', href: '#galeria' },
    { name: 'Quem sou eu', href: '#quem-sou-eu' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <div className="max-w-[100vw] px-8 h-24 flex items-center justify-between pointer-events-auto">
        <motion.a 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          href="/" 
          className="text-3xl font-serif font-bold tracking-[0.2em] text-white drop-shadow-md"
        >
          POYNTER
        </motion.a>

        {/* Floating Menu Button */}
        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all active:scale-95 shadow-lg"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </motion.button>
      </div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-40 flex items-center justify-center pointer-events-auto"
          >
            <div className="flex flex-col items-center space-y-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl md:text-6xl font-serif font-bold text-white hover:text-gray-400 transition-colors tracking-widest"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
