import React from 'react';
import { useLocation } from 'react-router-dom';
import HeroGrid from './components/HeroGrid';
import PoynterSection from './components/PoynterSection';
import AboutSection from './components/AboutSection';
import GalleryPreview from './components/GalleryPreview';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const location = useLocation();

  React.useEffect(() => {
    const pathname = location.pathname.replace(/\/+$/, '') || '/';
    const sectionByPath: Record<string, string> = {
      '/biografia': 'quem-sou-eu',
      '/galeria': 'galeria',
      '/contato': 'contato',
    };
    const targetId = sectionByPath[pathname] ?? location.hash.slice(1);
    const target = targetId ? document.getElementById(targetId) : null;

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash, location.pathname]);

  return (
    <div className="min-h-screen bg-black">
      <main>
        <HeroGrid />
        <PoynterSection />
        <AboutSection />
        <GalleryPreview />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
