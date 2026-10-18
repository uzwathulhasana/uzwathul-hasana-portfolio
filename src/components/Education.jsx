import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, CheckCircle2, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section id="education" className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 relative bg-[#050505] text-white overflow-hidden border-t-4 border-[#FFF04A]">
      {/* Decorative Background Text */}
      <div className="absolute top-6 left-6 text-[14vw] font-black text-[#FFF04A]/5 leading-none select-none pointer-events-none font-heading uppercase">
        EDU
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#FFF04A] text-[#050505] text-xs font-black uppercase tracking-widest mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>05 / ACADEMIC QUALIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#FFF04A] tracking-tight mb-3 sm:mb-4 uppercase font-heading">
            EDUCATION
          </h2>
          <p className="text-gray-300 text-sm sm:text-lg font-medium">
            Foundational computer applications coursework and advanced software engineering master's program.
          </p>
        </motion.div>

        {/* Education Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 sm:p-8 rounded-md bg-[#151515] border-2 border-[#2A2A2A] hover:border-[#FFF04A] relative overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-2xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md bg-[#FFF04A] text-[#050505] text-xs font-black font-mono uppercase">
                    {edu.period}
                  </span>
                  <span className="text-xs font-black text-[#FFF04A] flex items-center gap-1 uppercase tracking-wider font-heading">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {edu.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-2xl font-black text-white leading-snug uppercase font-heading">
                    {edu.degree}
                  </h3>
                  <p className="text-xs font-black text-[#FFF04A] mt-1 uppercase font-heading">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-gray-400 flex items-center gap-1 mt-1 font-medium">
                    <MapPin className="w-3 h-3 text-[#FFF04A]" />
                    <span>{edu.location}</span>
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-2 border-t border-[#2A2A2A] font-medium">
                  {edu.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2A2A2A] flex items-center justify-between text-xs text-gray-400 font-mono font-bold">
                <span className="flex items-center gap-1.5 text-[#FFF04A]">
                  <Award className="w-3.5 h-3.5" />
                  Computer Applications Focus
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
