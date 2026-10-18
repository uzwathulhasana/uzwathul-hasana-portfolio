import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download, Code2, Terminal, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ProfileFlipCard from './ProfileFlipCard';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
    }
  };


  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 sm:pt-20 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[var(--black-section-bg)] text-[var(--black-section-text)]">
      {/* Dynamic Background Glow & Grid */}
      <div className="absolute inset-0 bg-hero-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#FFF04A]/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFF04A]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Background Watermark Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-[#FFF04A]/5 font-extrabold text-[12vw] leading-none select-none pointer-events-none uppercase tracking-tighter font-heading">
        WEB / CODE / BUILD
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          {/* Left / Top Text Column */}
          <div className="md:col-span-8 flex flex-col items-center md:items-start text-center md:text-left">
            
            {/* Location & Status Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFF04A]/15 border border-[#FFF04A]/40 text-[#FFF04A] text-[10px] sm:text-xs font-black tracking-widest uppercase mb-4 sm:mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFF04A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFF04A]"></span>
              </span>
              <span>AVAILABLE FOR OPPORTUNITIES</span>
            </motion.div>

            {/* Main Name & Title */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-2 sm:mb-3 leading-none font-heading uppercase">
              UZWATHUL <br className="hidden sm:inline" />
              <span className="text-[#FFF04A]">HASANA</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="flex items-center gap-1.5 text-sm sm:text-xl font-extrabold text-[#FFF04A] uppercase tracking-wider mb-4 sm:mb-6 font-heading">
              <Code2 className="hidden sm:inline-block w-4 h-4 sm:w-5 sm:h-5 text-[#FFF04A] shrink-0" />
              <h2>MCA Graduate • Web Developer • Full-Stack Developer</h2>
            </motion.div>

            {/* Supporting Text */}
            <motion.p variants={itemVariants} className="text-gray-300 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl font-medium">
              I build practical, responsive web applications that turn ideas into useful digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-nowrap items-center justify-center md:justify-start gap-1.5 sm:gap-3.5 mb-6 sm:mb-8">
              <button
                onClick={() => scrollTo('projects')}
                className="btn-primary px-2.5 py-2 sm:px-7 sm:py-4 text-[9.5px] sm:text-xs font-black uppercase tracking-tight sm:tracking-widest flex items-center gap-1 sm:gap-2 shadow-lg whitespace-nowrap shrink-0"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="btn-secondary px-2.5 py-2 sm:px-7 sm:py-4 text-[9.5px] sm:text-xs font-black uppercase tracking-tight sm:tracking-widest flex items-center gap-1 sm:gap-2 whitespace-nowrap shrink-0"
              >
                <span>LET'S CONNECT</span>
              </button>

              <a
                href="/k.Uzwathul_Hasana_Resume.pdf"
                download="k.Uzwathul_Hasana_Resume.pdf"
                className="px-2.5 py-2 sm:px-6 sm:py-4 rounded-md bg-[#181818] border border-[#292929] text-white font-bold text-[9.5px] sm:text-xs uppercase tracking-tight sm:tracking-wider flex items-center gap-1 sm:gap-2 hover:border-[#FFF04A] hover:text-[#FFF04A] transition-all whitespace-nowrap shrink-0"
              >
                <Download className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFF04A]" />
                <span>RESUME</span>
              </a>
            </motion.div>

            {/* Social Links Bar */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 pt-3 border-t border-[#292929] w-full justify-center md:justify-start">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-gray-400 font-bold">Connect Direct:</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-md bg-[#181818] border border-[#292929] text-gray-300 hover:text-[#FFF04A] hover:border-[#FFF04A] transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-md bg-[#181818] border border-[#292929] text-gray-300 hover:text-[#FFF04A] hover:border-[#FFF04A] transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-md bg-[#181818] border border-[#292929] text-gray-300 hover:text-[#FFF04A] hover:border-[#FFF04A] transition-all"
                aria-label="Email Contact"
              >
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column 3D Flip Card */}
          <div className="md:col-span-4 w-full max-w-[260px] sm:max-w-sm mx-auto md:max-w-none">
            <motion.div variants={itemVariants}>
              <ProfileFlipCard />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
