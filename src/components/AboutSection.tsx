import React from 'react';
import { motion } from 'motion/react';
const AboutSection = () => {
  return (
    <section id="quem-sou-eu" className="pt-8 md:pt-12 pb-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 aspect-square overflow-hidden rounded-2xl shadow-2xl"
        >
          <img
            src="https://lh3.googleusercontent.com/d/1sXFzFrRkUG_OvSCJXIS9AtP9zInSFbxD"
            alt="Poynter"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h2 className="text-4xl font-serif font-bold text-gray-900 uppercase">Quem sou eu</h2>
          <div className="w-20 h-1 bg-black"></div>
          <p className="text-lg text-gray-600 leading-relaxed uppercase">
            MINHA JORNADA NO UNIVERSO DAS ARTES INICIOU-SE EM 2017, COM TÍMIDAS EXPLORAÇÕES E
            EXPERIMENTAÇÕES. NO ENTANTO, FOI EM AGOSTO DE 2023 QUE MERGULHEI DE CORPO E ALMA NAS
            PINTURAS QUE HOJE DEFINEM MEU TRABALHO.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed uppercase">
            AO LONGO DOS MESES SEGUINTES, DESENVOLVI UMA IDENTIDADE ARTÍSTICA ÚNICA.
            NESTE BREVE, MAS INTENSO PERÍODO DE DOIS ANOS, CONSTRUÍ UM ACERVO DE MAIS DE 200 OBRAS.
            O RECONHECIMENTO NÃO TARDOU: DIVERSAS OBRAS JÁ ENCONTRARAM SEU LUGAR NAS COLEÇÕES
            DE APRECIADORES E CLIENTES ESPALHADOS POR VÁRIAS REGIÕES DO BRASIL.
          </p>
          <a 
            href="https://drive.google.com/file/d/19vE3CherlKkpBlIEK3d_rQlh4uK-hEFM/view" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium uppercase"
          >
            Saiba Mais
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
