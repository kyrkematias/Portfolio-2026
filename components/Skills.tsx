import React from 'react';
import { motion } from 'framer-motion';
import { ContentData } from '../types';
import { Code, Layout, TrendingUp, Globe, Database, Cpu, Terminal, Figma } from 'lucide-react';

interface SkillsProps {
  content: ContentData['skills'];
}

const Skills: React.FC<SkillsProps> = ({ content }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 relative bg-[#0e0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Tech */}
            <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="glass-panel p-6 rounded-2xl hover:border-blue-500/30 transition-colors duration-300"
            >
                <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 mr-4">
                        <Code size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{content.categories.technical}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'TypeScript', 'Bootstrap', 'MySQL', 'Python'].map((skill) => (
                        <motion.span 
                            variants={item} 
                            key={skill} 
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.15)" }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-blue-400 hover:text-blue-400 cursor-default"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            {/* Design */}
            <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="glass-panel p-6 rounded-2xl hover:border-pink-500/30 transition-colors duration-300"
            >
                <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-pink-500/10 text-pink-400 mr-4">
                        <Layout size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{content.categories.design}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {['UX Design', 'UI Design', 'Figma', 'Responsive Design', 'Product Design'].map((skill) => (
                        <motion.span 
                            variants={item} 
                            key={skill} 
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(236, 72, 153, 0.15)" }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-pink-400 hover:text-pink-400 cursor-default"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            {/* Marketing & Tools */}
            <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="glass-panel p-6 rounded-2xl hover:border-purple-500/30 transition-colors duration-300"
            >
                <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 mr-4">
                        <TrendingUp size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{content.categories.marketing}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {['SEO Technical', 'SEM', 'Google Analytics 4', 'Search Console', 'Google Ads', 'Ahrefs', 'Screaming Frog', 'Prompt Engineering'].map((skill) => (
                        <motion.span 
                            variants={item} 
                            key={skill} 
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(168, 85, 247, 0.15)" }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-purple-400 hover:text-purple-400 cursor-default"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

             {/* Languages */}
             <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="glass-panel p-6 rounded-2xl md:col-span-2 lg:col-span-3 hover:border-green-500/30 transition-colors duration-300"
            >
                <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-green-500/10 text-green-400 mr-4">
                        <Globe size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{content.categories.languages}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                     <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-transparent hover:border-green-500/30 transition-all">
                        <span className="text-gray-300">Español</span>
                        <span className="text-xs font-bold px-2 py-1 bg-green-500/20 text-green-400 rounded">Native</span>
                     </motion.div>
                     <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-transparent hover:border-yellow-500/30 transition-all">
                        <span className="text-gray-300">English</span>
                        <span className="text-xs font-bold px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded">B1/C1</span>
                     </motion.div>
                     <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-transparent hover:border-blue-500/30 transition-all">
                        <span className="text-gray-300">Português</span>
                        <span className="text-xs font-bold px-2 py-1 bg-blue-500/20 text-blue-400 rounded">Intermediate</span>
                     </motion.div>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;