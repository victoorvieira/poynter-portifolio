import React from 'react';
import { motion } from 'motion/react';

const MagicCubeFace = ({ color, rotate }: { color: 'black' | 'white', rotate: string }) => {
  const grid = Array(9).fill(0);
  const stickerColor = color === 'black' ? 'bg-black' : 'bg-white';
  const gapColor = color === 'black' ? 'bg-white' : 'bg-black';

  return (
    <div 
      className={`absolute inset-0 grid grid-cols-3 grid-rows-3 gap-[1px] p-[1px] ${gapColor}`}
      style={{ transform: rotate, backfaceVisibility: 'hidden' }}
    >
      {grid.map((_, i) => (
        <div key={i} className={`${stickerColor}`} />
      ))}
    </div>
  );
};

const PoynterSection = () => {
  return (
    <section className="py-20 bg-white flex flex-col items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-8"
      >
        <h2 className="text-6xl md:text-8xl font-serif tracking-[0.2em] text-black">
          POYNTER
        </h2>
        
        {/* Black and White Magic Cube */}
        <div className="relative w-16 h-16 perspective-1000">
          <motion.div
            animate={{ 
              rotateX: [0, 90, 180, 270, 360],
              rotateY: [0, 90, 180, 270, 360] 
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="w-full h-full relative"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Front */}
            <MagicCubeFace color="black" rotate="translateZ(32px)" />
            {/* Back */}
            <MagicCubeFace color="white" rotate="rotateY(180deg) translateZ(32px)" />
            {/* Right */}
            <MagicCubeFace color="black" rotate="rotateY(90deg) translateZ(32px)" />
            {/* Left */}
            <MagicCubeFace color="white" rotate="rotateY(-90deg) translateZ(32px)" />
            {/* Top */}
            <MagicCubeFace color="black" rotate="rotateX(90deg) translateZ(32px)" />
            {/* Bottom */}
            <MagicCubeFace color="white" rotate="rotateX(-90deg) translateZ(32px)" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PoynterSection;
