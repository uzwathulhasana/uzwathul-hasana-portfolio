import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2, Building2, Code } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="experience" className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 relative bg-[#FFF04A] text-[#050505] overflow-hidden border-y-4 border-[#050505]">
      {/* Decorative Large Section Identifier */}
      <div className="absolute top-6 right-6 text-[15vw] font-black text-[#050505]/10 leading-none select-none pointer-events-none font-heading uppercase">
        04
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#050505] text-[#FFF04A] text-xs font-black uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>04 / PRACTICAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#050505] tracking-tight mb-3 sm:mb-4 uppercase font-heading">
            EXPERIENCE
          </h2>
          <p className="text-[#050505]/80 text-sm sm:text-lg font-bold">
            Client-facing software development, application maintenance, and web development internships.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-8"
        >
          {experienceData.map((exp, idx) => {
            const expNum = (idx + 1).toString().padStart(2, '0');
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 sm:p-8 rounded-md bg-[#050505] text-white border-2 border-[#050505] relative overflow-hidden shadow-2xl"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#2A2A2A]">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                      <span className="bg-[#FFF04A] text-[#050505] font-black px-2.5 py-0.5 rounded text-xs font-mono">
                        {expNum}
                      </span>
                      <h3 className="text-xl sm:text-3xl font-black text-[#FFF04A] uppercase font-heading">{exp.role}</h3>
                      <span className="px-3 py-1 rounded-md bg-[#151515] border border-[#FFF04A]/40 text-[#FFF04A] text-xs font-bold uppercase">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-300 text-sm font-bold flex-wrap">
                      <span className="text-white font-extrabold flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-[#FFF04A]" />
                        {exp.company}
                      </span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 text-xs font-medium">{exp.companyCategory}</span>
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end gap-1 text-xs text-gray-400 font-mono font-bold">
                    <div className="flex items-center gap-1.5 text-[#FFF04A]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-300">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 font-medium">
                  {exp.summary}
                </p>

                {/* Concrete Bullet Highlights */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs uppercase font-black tracking-widest text-[#FFF04A] mb-2 font-heading">Key Responsibilities & Deliverables:</h4>
                  {exp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#FFF04A] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-[#292929] flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono text-[#FFF04A] flex items-center gap-1 font-bold">
                      <Code className="w-3.5 h-3.5" /> Tech Stack:
                    </span>
                    {exp.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 rounded-md bg-[#181818] border border-[#FFF04A]/40 text-[#FFF04A] text-xs font-mono font-bold uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://learninghub.qmex.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-label="VISIT"
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#FFF04A] hover:underline uppercase tracking-wider font-heading"
                  >
                    <span>Live Project Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}


