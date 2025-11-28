import React from 'react';
import { motion } from 'framer-motion';
import { ContentData } from '../types';
import { Briefcase, Calendar, MapPin, GraduationCap } from 'lucide-react';

interface ExperienceProps {
  contentExp: ContentData['experience'];
  contentEdu: ContentData['education'];
}

const Experience: React.FC<ExperienceProps> = ({ contentExp, contentEdu }) => {
  return (
    <section id="experience" className="py-20 bg-[#0b0c15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Work Experience */}
        <div className="mb-20">
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {contentExp.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
            {contentExp.items.map((job, index) => (
                <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index} 
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                    {/* Icon */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-[#0e0f1a] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-pink-500 transition-colors">
                        <Briefcase className="w-5 h-5 text-gray-400 group-hover:text-pink-500" />
                    </div>
                    
                    {/* Card */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-xl border border-white/5 hover:border-pink-500/30 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                            <h3 className="font-bold text-xl text-white">{job.role}</h3>
                            <span className="text-xs font-semibold px-2 py-1 bg-pink-500/10 text-pink-400 rounded-md w-fit mt-1 sm:mt-0">
                                {job.period}
                            </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-400 mb-4 space-x-4">
                            <span className="font-semibold text-blue-400">{job.company}</span>
                            <div className="flex items-center">
                                <MapPin className="w-3 h-3 mr-1" />
                                {job.location}
                            </div>
                        </div>
                        <ul className="space-y-2">
                            {job.description.map((desc, i) => (
                                <li key={i} className="text-gray-300 text-sm flex items-start">
                                    <span className="mr-2 text-pink-500">•</span>
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
            </div>
        </div>

        {/* Education */}
        <div className="mt-20">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <GraduationCap className="mr-3 text-blue-500" />
                {contentEdu.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contentEdu.items.map((edu, index) => (
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

      </div>
    </section>
  );
};

export default Experience;