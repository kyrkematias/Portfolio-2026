import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { ContentData, Language } from '../types';

interface HeroProps {
  content: ContentData['hero'];
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ content, lang }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left z-10"
        >
          <h2 className="text-pink-500 font-semibold tracking-wide uppercase mb-4">
            {content.greeting}
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            <span className="block">Frontend</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
              Developer
            </span>
            <span className="text-3xl md:text-5xl text-gray-400 mt-2 block">
              & SEO Specialist
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
            {content.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-pink-500 rounded-full shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-pink-500 group-hover:translate-x-0 ease">
                <ArrowRight className="w-5 h-5" />
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-pink-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                {content.ctaPrimary}
              </span>
              <span className="relative invisible">{content.ctaPrimary}</span>
            </a>

            <a
              href={lang === 'en' ? "/resume.pdf" : "/cv.pdf"}
              download
              className="inline-flex items-center justify-center px-8 py-3 font-medium text-gray-300 transition duration-300 ease-out border border-gray-700 rounded-full hover:bg-white/5 hover:text-white"
            >
              <Download className="w-5 h-5 mr-2" />
              {content.ctaSecondary}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 mt-12 md:mt-0 relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-blue-500 rounded-full opacity-20 animate-spin-slow" style={{ animationDuration: '10s' }}></div>
            <div className="absolute inset-4 bg-[#0e0f1a] rounded-full z-10 flex items-center justify-center border border-white/10 overflow-hidden">
              <img
                src="img/Avatar.jpg"
                alt="Martín Matías"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-500"
              />
            </div>

            {/* Floating tech badges */}
            <div className="absolute top-0 right-0 p-3 bg-[#1a1b26] rounded-xl border border-blue-500/30 shadow-lg shadow-blue-500/20 transform translate-x-4 -translate-y-4 z-20">
              <span className="text-blue-400 font-bold">React</span>
            </div>
            <div className="absolute bottom-10 left-0 p-3 bg-[#1a1b26] rounded-xl border border-pink-500/30 shadow-lg shadow-pink-500/20 transform -translate-x-4 z-20">
              <span className="text-pink-400 font-bold">SEO/SEM</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;