import React from 'react';
import { motion } from 'framer-motion';
import { ContentData } from '../types';
import { User, Sparkles } from 'lucide-react';

interface AboutProps {
  content: ContentData['about'];
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className="py-20 bg-[#0e0f1a] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
        >
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {content.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <div className="glass-panel p-8 md:p-10 rounded-2xl border border-white/5 relative shadow-xl backdrop-blur-xl">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                     <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-[1px] rounded-full">
                        <div className="bg-[#0e0f1a] p-3 rounded-full">
                            <User className="w-6 h-6 text-white" />
                        </div>
                     </div>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed text-center mt-4">
                    {content.text}
                </p>
                
                <div className="absolute -bottom-4 -right-4 text-blue-500/20 rotate-12">
                    <Sparkles size={48} />
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;