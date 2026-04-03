import React from 'react';
import { motion } from 'motion/react';
const AboutSection = () => {
  return (
    <section id="quem-sou-eu" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 aspect-square overflow-hidden rounded-2xl shadow-2xl"
        >
          <img
            src="https://lh3.googleusercontent.com/d/1UHylfLeKunimJ_JfOF9piGIomw3q2OzQ"
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
          <h2 className="text-4xl font-serif font-bold text-gray-900">Quem sou eu</h2>
          <div className="w-20 h-1 bg-black"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Olá, eu sou o Poynter. Minha arte é uma celebração da cor, da natureza e da vida. 
            Inspirado pelas formas orgânicas e pela vibrante paleta do mundo ao meu redor, 
            busco criar peças que não apenas decoram espaços, mas contam histórias e evocam emoções.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Cada traço é uma jornada, e cada cor é uma escolha deliberada para trazer alegria e 
            reflexão. Explore minha galeria e conheça um pouco mais do meu universo visual.
          </p>
          <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium">
            Saiba Mais
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
