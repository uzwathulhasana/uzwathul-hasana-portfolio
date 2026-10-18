import React from 'react';
import { motion } from 'framer-motion';
import { User, Sparkles, Brain, BookOpen, Layers, Languages, Gamepad2, Terminal, CheckCircle2 } from 'lucide-react';
import { personalInfo, aboutStats } from '../data/portfolioData';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
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
    <section id="about" className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 relative bg-[#FFF04A] text-[#050505] overflow-hidden border-y-4 border-[#050505]">
      {/* Decorative Background Text */}
      <div className="absolute top-6 right-6 text-[14vw] font-black text-[#050505]/10 leading-none select-none pointer-events-none font-heading uppercase">
        01
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#050505] text-[#FFF04A] text-xs font-black uppercase tracking-widest mb-3">
            <User className="w-3.5 h-3.5" />
            <span>01 / ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-black text-[#050505] tracking-tight mb-3 sm:mb-4 uppercase font-heading">
            WHO AM I?
          </h2>
          <p className="text-[#050505]/80 text-sm sm:text-xl font-bold">
            MCA Graduate & Web Developer focused on building functional software.
          </p>
        </motion.div>

        {/* Content Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Main Story & Positioning Card */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <motion.div variants={itemVariants} className="p-6 sm:p-10 rounded-md bg-[#050505] text-white border-2 border-[#050505] space-y-6 flex-1 shadow-2xl">
              <div className="inline-flex items-center gap-2 text-[#FFF04A] text-xs font-mono font-bold uppercase tracking-wider">
                <Terminal className="w-4 h-4 text-[#FFF04A]" />
                <span>POSITIONING STATEMENT</span>
              </div>

              <h3 className="text-xl sm:text-3xl font-black text-white leading-snug font-heading">
                {personalInfo.positioning}
              </h3>

              <p className="text-gray-300 text-xs sm:text-base leading-relaxed font-medium">
                {personalInfo.aboutBio}
              </p>

              <div className="p-4 rounded-md bg-[#181818] border border-[#292929] space-y-2">
                <div className="text-xs font-black text-[#FFF04A] uppercase tracking-widest flex items-center gap-1.5 font-heading">
                  <Brain className="w-4 h-4" />
                  <span>Development Philosophy</span>
                </div>
                <p className="text-xs text-gray-300 italic leading-relaxed">
                  "{personalInfo.philosophy}"
                </p>
              </div>
            </motion.div>

            {/* Core Competency Highlights */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-md bg-[#050505] text-white border-2 border-[#050505] flex items-start gap-3">
                <div className="p-2.5 rounded-md bg-[#FFF04A] text-[#050505] font-bold shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#FFF04A] uppercase tracking-wider font-heading">Full-Stack Capability</h4>
                  <p className="text-xs text-gray-300 mt-1 font-medium">Frontend interfaces to normalized SQL databases.</p>
                </div>
              </div>

              <div className="p-5 rounded-md bg-[#050505] text-white border-2 border-[#050505] flex items-start gap-3">
                <div className="p-2.5 rounded-md bg-[#FFF04A] text-[#050505] font-bold shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#FFF04A] uppercase tracking-wider font-heading">Continuous Learner</h4>
                  <p className="text-xs text-gray-300 mt-1 font-medium">Actively building skills with modern tools & AI.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Stats Grid & Languages */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div variants={itemVariants} className="p-6 rounded-md bg-[#050505] text-white border-2 border-[#050505]">
              <h3 className="text-xs font-black text-[#FFF04A] uppercase tracking-widest mb-4 flex items-center gap-2 font-heading">
                <Sparkles className="w-4 h-4 text-[#FFF04A]" />
                <span>Profile Highlights</span>
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {aboutStats.map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-md bg-[#181818] border border-[#292929] text-center">
                    <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest block mb-1">{stat.label}</span>
                    <span className="text-sm font-black text-[#FFF04A] uppercase block font-heading">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6 rounded-md bg-[#050505] text-white border-2 border-[#050505] space-y-4">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-black text-[#FFF04A] mb-2 flex items-center gap-1.5 font-heading">
                  <Languages className="w-4 h-4" />
                  <span>Languages</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.languages.map((lang, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-md bg-[#FFF04A] text-[#050505] text-xs font-extrabold uppercase">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#292929]">
                <h4 className="text-xs uppercase tracking-widest font-black text-[#FFF04A] mb-2 flex items-center gap-1.5 font-heading">
                  <Gamepad2 className="w-4 h-4" />
                  <span>Hobbies & Interests</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.hobbies.map((hobby, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-md bg-[#FFF04A] text-[#050505] text-xs font-extrabold uppercase">
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}


