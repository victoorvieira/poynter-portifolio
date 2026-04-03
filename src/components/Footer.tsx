import React from 'react';
import { Instagram, Youtube, Mail, Music2 } from 'lucide-react';

const Footer = () => {
  const socials = [
    { name: 'Instagram', icon: <Instagram className="w-6 h-6" />, href: 'https://www.instagram.com/poynterdude/' },
    { name: 'TikTok', icon: <Music2 className="w-6 h-6" />, href: 'https://www.tiktok.com/@poynterdude' },
    { name: 'YouTube', icon: <Youtube className="w-6 h-6" />, href: 'https://youtube.com/@poynterdude' },
  ];

  return (
    <footer id="contato" className="bg-white border-t border-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl font-serif font-bold mb-8 tracking-widest">POYNTER</h2>
        
        <div className="flex space-x-8 mb-12">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-50 rounded-full hover:bg-black hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="space-y-4">
          <p className="text-gray-500 font-medium">Interessado em uma colaboração ou compra?</p>
          <a
            href="mailto:contato@poynter.art"
            className="flex items-center space-x-2 text-xl font-semibold hover:text-gray-600 transition-colors"
          >
            <Mail className="w-6 h-6" />
            <span>contato@poynter.art</span>
          </a>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-50 w-full text-gray-400 text-sm flex flex-col items-center gap-2">
          <p>&copy; {new Date().getFullYear()} POYNTER. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Construído por <span className="font-bold text-black tracking-tighter">minimumlabs</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
