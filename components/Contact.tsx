import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ContentData } from '../types';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface ContactProps {
  content: ContentData['contact'];
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate network request
    setTimeout(() => {
      setFormState('success');
      console.log('Form submitted successfully');
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-[#0e0f1a]">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text & Info */}
            <div>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                >
                    {content.title} <span className="text-pink-500">.</span>
                </motion.h2>
                <p className="text-xl text-gray-400 mb-10">
                    {content.subtitle}
                </p>

                <div className="space-y-6">
                    <div className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors">
                        <div className="p-3 bg-white/5 rounded-full text-blue-400">
                            <Mail size={20} />
                        </div>
                        <span>{CONTACT_INFO.email}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors">
                        <div className="p-3 bg-white/5 rounded-full text-blue-400">
                            <Phone size={20} />
                        </div>
                        <span>{CONTACT_INFO.phone}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors">
                        <div className="p-3 bg-white/5 rounded-full text-blue-400">
                            <MapPin size={20} />
                        </div>
                        <span>{CONTACT_INFO.location}</span>
                    </div>
                </div>

                <div className="mt-12 flex space-x-4">
                     <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-blue-600/20 hover:text-blue-500 transition-all">
                        <Linkedin size={24} />
                     </a>
                     <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-gray-600/50 hover:text-white transition-all">
                        <Github size={24} />
                     </a>
                </div>
            </div>

            {/* Form */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-8 rounded-2xl"
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">{content.namePlaceholder}</label>
                        <input 
                            type="text" 
                            required
                            className="w-full bg-[#0b0c15] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                            placeholder={content.namePlaceholder}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">{content.emailPlaceholder}</label>
                        <input 
                            type="email" 
                            required
                            className="w-full bg-[#0b0c15] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                            placeholder={content.emailPlaceholder}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">{content.messagePlaceholder}</label>
                        <textarea 
                            rows={4}
                            required
                            className="w-full bg-[#0b0c15] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                            placeholder={content.messagePlaceholder}
                        />
                    </div>
                    <button 
                        type="submit" 
                        disabled={formState !== 'idle'}
                        className={`w-full flex items-center justify-center px-8 py-3 rounded-lg font-bold text-white transition-all transform hover:scale-[1.02] active:scale-[0.98] ${
                            formState === 'success' 
                            ? 'bg-green-500' 
                            : 'bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600'
                        }`}
                    >
                        {formState === 'idle' && (
                            <>
                                {content.submit}
                                <Send className="ml-2 w-4 h-4" />
                            </>
                        )}
                        {formState === 'sending' && content.sending}
                        {formState === 'success' && content.success}
                    </button>
                </form>
            </motion.div>

        </div>

        <div className="mt-24 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Martín Matías. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;