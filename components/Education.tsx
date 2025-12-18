import React from 'react';
import { motion } from 'framer-motion';
import { ContentData } from '../types';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

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

                <div className="flex flex-col gap-4">
                    {content.items.map((edu, index) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                key={index}
                                className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-pink-500/30 transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10 flex flex-col md:flex-row items-center p-6 gap-6">
                                    {/* Institution Logo/Icon */}
                                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-pink-500/10 to-blue-500/10 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                        <Award className="w-8 h-8 text-pink-500" />
                                    </div>

                                    {/* Center Content */}
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                                            <h4 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
                                                {edu.degree}
                                            </h4>
                                            <span className="hidden md:inline text-gray-600">•</span>
                                            <span className="text-sm text-blue-400 font-medium bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 inline-block md:inline w-fit mx-auto md:mx-0">
                                                {edu.period}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 font-medium flex items-center justify-center md:justify-start gap-2">
                                            {edu.institution}
                                        </p>
                                    </div>

                                    {/* Skills Tags */}
                                    <div className="flex flex-wrap gap-2 justify-center md:justify-end max-w-full md:max-w-[40%]">
                                        {edu.skills?.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-full hover:bg-white/10 transition-colors cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
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
