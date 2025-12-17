import React from 'react';
import { motion } from 'framer-motion';
import { ContentData } from '../types';
import { GraduationCap } from 'lucide-react';

interface EducationProps {
    content: ContentData['education'];
}

const Education: React.FC<EducationProps> = ({ content }) => {
    return (
        <section id="education" className="py-20 bg-[#0e0f1a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center justify-center md:justify-start">
                    <GraduationCap className="mr-3 text-pink-500 w-8 h-8" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
                        {content.title}
                    </span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
                    {content.items.map((edu, index) => {
                        // Bento Grid Logic: 
                        // Item 0 & 3 span 2 columns
                        // Item 1 & 2 span 1 column
                        const isWide = index === 0 || index === 3;

                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                key={index}
                                className={`
                                    relative overflow-hidden p-8 rounded-3xl glass-panel group transition-all duration-300 hover:scale-[1.02]
                                    ${isWide ? 'md:col-span-2' : 'md:col-span-1'}
                                `}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="px-3 py-1 text-xs font-semibold text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20">
                                                {edu.period}
                                            </span>
                                            <span className="text-gray-400 text-xs flex items-center">
                                                {edu.location}
                                            </span>
                                        </div>

                                        <h4 className="font-bold text-white text-xl md:text-2xl mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-blue-500 transition-all">
                                            {edu.degree}
                                        </h4>
                                        <p className="text-gray-400 font-medium">{edu.institution}</p>
                                    </div>

                                    <div className="mt-6 flex justify-end">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                            <GraduationCap className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Education;
