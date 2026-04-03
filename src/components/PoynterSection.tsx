import React from 'react';
import { motion } from 'motion/react';

const MagicCubeFace = ({ color, rotate, translateZ }: { color: 'black' | 'white', rotate: string, translateZ: number }) => {
  const grid = Array(9).fill(0);
  const stickerColor = color === 'black' ? 'bg-black' : 'bg-white';
  const gapColor = color === 'black' ? 'bg-white' : 'bg-black';

  return (
    <div 
      className={`absolute inset-0 grid grid-cols-3 grid-rows-3 gap-[1px] p-[1px] ${gapColor}`}
      style={{ transform: `${rotate} translateZ(${translateZ}px)`, backfaceVisibility: 'hidden' }}
    >
      {grid.map((_, i) => (
        <div key={i} className={`${stickerColor}`} />
      ))}
    </div>
  );
};

const PoynterSection = () => {
  // We'll use a simple approach: check window width for the translateZ value
  // Or better, just use a fixed value that looks okay on both or use a CSS variable
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const tz = isMobile ? 24 : 32;

  return (
    <section className="pt-16 md:pt-24 pb-8 md:pb-12 bg-gray-50 flex flex-col items-center justify-center overflow-hidden px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center gap-6 md:gap-12"
      >
        <h2 className="text-5xl sm:text-6xl md:text-8xl font-serif tracking-[0.15em] md:tracking-[0.2em] text-black text-center">
          POYNTER
        </h2>
        
        {/* Black and White Magic Cube */}
        <div className="relative w-12 h-12 md:w-16 md:h-16 perspective-1000">
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
            <MagicCubeFace color="black" rotate="" translateZ={tz} />
            {/* Back */}
            <MagicCubeFace color="white" rotate="rotateY(180deg)" translateZ={tz} />
            {/* Right */}
            <MagicCubeFace color="black" rotate="rotateY(90deg)" translateZ={tz} />
            {/* Left */}
            <MagicCubeFace color="white" rotate="rotateY(-90deg)" translateZ={tz} />
            {/* Top */}
            <MagicCubeFace color="black" rotate="rotateX(90deg)" translateZ={tz} />
            {/* Bottom */}
            <MagicCubeFace color="white" rotate="rotateX(-90deg)" translateZ={tz} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PoynterSection;
