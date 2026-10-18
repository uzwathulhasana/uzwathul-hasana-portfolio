import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Code2, Terminal, Database, Cpu, Laptop, Layers, CheckCircle2 } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

const categoryIcons = {
  Frontend: Code2,
  Backend: Terminal,
  Database: Database,
  Programming: Cpu,
  Tools: Laptop,
  "Other Skills": Layers
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsCategories.map(group => group.category)];

  const filteredGroups = selectedCategory === 'All'
    ? skillsCategories
    : skillsCategories.filter(group => group.category === selectedCategory);

  // Flatten all skills for the interactive wall view
  const allSkillsList = Array.from(
    new Set(skillsCategories.flatMap(group => group.skills))
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <section id="skills" className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 relative bg-[#050505] text-white overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-8 left-6 text-[14vw] font-black text-[#FFF04A]/5 leading-none select-none pointer-events-none font-heading uppercase">
        STACK
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#FFF04A] text-[#050505] text-xs font-black uppercase tracking-widest mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>02 / TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#FFF04A] tracking-tight mb-3 sm:mb-4 uppercase font-heading">
            TECH STACK
          </h2>
          <p className="text-gray-300 text-sm sm:text-lg font-medium">
            Core technologies, languages, frameworks, and developer tools I build applications with.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-2 sm:px-5 sm:py-2.5 rounded-md text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#FFD400] text-[#050505] shadow-lg scale-105 border-2 border-[#FFD400]'
                  : 'bg-[#151515] border border-[#2A2A2A] text-gray-300 hover:text-[#FFD400] hover:border-[#FFD400]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Skills Wall Grid */}
        {selectedCategory === 'All' ? (
          <motion.div
            key="all-skills"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {allSkillsList.map((skill, idx) => (
              <motion.div
                key={skill}
                variants={itemVariants}
                data-cursor="skill"
                data-cursor-label="TECH"
                className="skill-tag group relative p-3 sm:p-5 rounded-md bg-[#181818] border-2 border-[#FFF04A]/40 text-[#FFF04A] text-center font-black uppercase tracking-wider text-xs sm:text-base cursor-default transition-all duration-300 hover:bg-[#FFF04A] hover:text-[#050505] hover:border-[#FFF04A] hover:-translate-y-1.5 shadow-lg flex items-center justify-center gap-1.5 sm:gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-[#FFF04A] group-hover:text-[#050505] transition-colors shrink-0" />
                <span>{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredGroups.map((group, groupIdx) => {
              const IconComp = categoryIcons[group.category] || Code2;
              return (
                <motion.div
                  key={group.category || groupIdx}
                  variants={itemVariants}
                  className="p-6 rounded-md bg-[#151515] border-2 border-[#FFD400]/50 relative overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-md bg-[#FFD400] text-[#050505] font-black shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-white tracking-tight uppercase font-heading">
                          {group.category}
                        </h3>
                        <span className="text-xs text-[#FFD400] font-mono font-bold">
                          {group.skills.length} CORE TOOLS
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-xs text-gray-300 mb-5 leading-relaxed font-medium">
                      {group.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skillName, skillIdx) => (
                        <span
                          key={skillName || skillIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#050505] border border-[#FFD400]/40 text-[#FFD400] text-xs font-bold uppercase hover:bg-[#FFD400] hover:text-[#050505] transition-all cursor-default"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{skillName}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

      </div>
    </section>
  );
}


