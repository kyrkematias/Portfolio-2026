import React from 'react';
import { motion } from 'framer-motion';
import { ContentData } from '../types';
import { Layout, ArrowUpRight, Code2 } from 'lucide-react';

interface ProjectsProps {
    content: ContentData['projects'];
}

const Projects: React.FC<ProjectsProps> = ({ content }) => {
    return (
        <section id="projects" className="py-20 bg-[#0b0c15]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {content.title}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {content.items.map((project, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={index}
                            className="group relative glass-panel rounded-2xl overflow-hidden hover:border-pink-500/30 transition-all duration-300"
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-blue-500/20 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                        <Layout className="w-6 h-6 text-white" />
                                    </div>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-blue-500 transition-all">
                                    {project.title}
                                </h3>
                                <p className="text-blue-400 text-sm font-medium mb-4">{project.role}</p>

                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-full border border-white/5">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
