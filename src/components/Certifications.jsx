import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Building2, Calendar, Sparkles, UserCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  return (
    <section id="certifications" className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 relative bg-[#FFF04A] text-[#050505] overflow-hidden border-y-4 border-[#050505]">
      {/* Animated Background Text & Decorative Elements */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-6 right-6 text-[14vw] font-black text-[#050505] leading-none select-none pointer-events-none font-heading uppercase"
      >
        06
      </motion.div>

      {/* Floating Animated Ambient Light */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-[#050505] pointer-events-none blur-3xl opacity-20"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left max-w-3xl mb-16"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#050505] text-[#FFF04A] text-xs font-black uppercase tracking-widest mb-3 cursor-default shadow-md"
          >
            <Award className="w-3.5 h-3.5" />
            <span>06 / VERIFIED CREDENTIALS</span>
          </motion.div>
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-black text-[#050505] tracking-tight mb-3 sm:mb-4 uppercase font-heading">
            CERTIFICATIONS
          </h2>
          <p className="text-[#050505]/80 text-sm sm:text-xl font-bold">
            Verified industry internship certificate, masterclasses, and training credentials.
          </p>
        </motion.div>

        {/* Certificate Cards Grid - Eliminates side blank space */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
        >
          {certificationsData.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.45)',
                transition: { duration: 0.25, ease: 'easeOut' }
              }}
              className="p-6 sm:p-8 rounded-xl bg-[#050505] text-white border-2 border-[#050505] flex flex-col justify-between shadow-2xl relative overflow-hidden group"
            >
              {/* Card Glow Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFF04A]/5 rounded-bl-full pointer-events-none group-hover:bg-[#FFF04A]/10 transition-colors duration-300" />

              <div className="space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#292929] pb-4">
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FFF04A] text-[#050505] text-xs font-black uppercase tracking-wider"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{cert.badge || "Verified Credential"}</span>
                  </motion.div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#FFF04A] font-bold">
                    <Calendar className="w-3.5 h-3.5 text-[#FFF04A]" />
                    <span>{cert.date || cert.year}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-2xl font-black text-[#FFF04A] leading-snug uppercase font-heading group-hover:text-white transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-white font-bold text-xs sm:text-base mt-2 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#FFF04A] flex-shrink-0" />
                    <span>{cert.organization}</span>
                  </p>
                  {cert.instructors && (
                    <p className="text-xs text-gray-400 font-medium mt-1.5 flex items-center gap-1.5">
                      <UserCheck className="w-3.5 h-3.5 text-[#FFF04A] flex-shrink-0" />
                      <span>{cert.instructors}</span>
                    </p>
                  )}
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-medium">
                  {cert.description}
                </p>
              </div>

              {/* Core Focus Skills */}
              <div className="pt-5 mt-5 border-t border-[#292929] space-y-2.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFF04A] flex items-center gap-1 font-bold">
                  <Sparkles className="w-3 h-3" />
                  Core Focus:
                </span>
                <div className="flex flex-wrap gap-2">
                  {(cert.skills || ["Software Development", "React.js", "Python"]).map((skill) => (
                    <motion.span 
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-2.5 py-1 rounded-md bg-[#181818] border border-[#292929] text-[#FFF04A] text-xs font-mono font-bold uppercase group-hover:border-[#FFF04A]/40 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

