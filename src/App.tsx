import React from 'react';
import Navbar from './components/Navbar';
import HeroGrid from './components/HeroGrid';
import PoynterSection from './components/PoynterSection';
import AboutSection from './components/AboutSection';
import GalleryPreview from './components/GalleryPreview';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroGrid />
        <PoynterSection />
        <AboutSection />
        <GalleryPreview />
      </main>
      <Footer />
    </div>
  );
}
