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
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center md:justify-start">
                    <GraduationCap className="mr-3 text-blue-500" />
                    {content.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {content.items.map((edu, index) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            key={index}
                            className="bg-[#1a1b26] p-6 rounded-xl border-l-4 border-blue-500 hover:bg-[#1f202e] transition-colors"
                        >
                            <h4 className="font-bold text-white text-lg mb-1">{edu.degree}</h4>
                            <p className="text-blue-400 text-sm mb-2">{edu.institution}</p>
                            <p className="text-gray-500 text-xs">{edu.period} • {edu.location}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
