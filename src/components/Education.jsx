import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, Award, Sparkles } from 'lucide-react';
import { educationData, certificationsData, quoteCard } from '../data/portfolioData';

export default function Education() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="education" className="py-14 sm:py-28 px-3.5 sm:px-6 lg:px-8 relative z-10 bg-[#FFF5D6] border-b border-[#111111]/6">
      <div className="max-w-7xl mx-auto">
        
        {/* 3-Column Layout: 05 Education | 06 Certifications | Dark Quote Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Column 1: 05 Education — Float-Up Reveal */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6 text-left">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
              className="flex items-center gap-2.5 sm:gap-3"
            >
              <span className="section-badge">05</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
                Education
              </h2>
            </motion.div>

            <div className="space-y-3 sm:space-y-4">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 32, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={shouldReduceMotion ? {} : {
                    y: -3,
                    scale: 1.015,
                    boxShadow: '0 12px 28px -4px rgba(224,160,21,0.14)',
                  }}
                  className="glass-card p-3.5 sm:p-5 rounded-xl sm:rounded-[22px] space-y-1 sm:space-y-1.5 transition-shadow duration-200"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-1.5 sm:mb-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FFF1A8] text-[#F4BD32] flex items-center justify-center shrink-0">
                      <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <h3 className="text-sm sm:text-lg font-extrabold text-[#111111]">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-[#111111]">
                    {edu.institution}
                  </p>
                  {edu.affiliation && (
                    <p className="text-[10px] sm:text-[11px] text-[#6B6451] italic">
                      {edu.affiliation}
                    </p>
                  )}
                  <span className="inline-block text-[10px] sm:text-[11px] font-bold text-[#F4BD32] bg-[#FFF1A8] px-2.5 py-0.5 rounded-full mt-0.5 sm:mt-1">
                    {edu.period}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: 06 Certifications — 3D Flip-In Effect */}
          <div id="certifications" className="lg:col-span-4 space-y-4 sm:space-y-6 text-left" style={{ perspective: 1000 }}>
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
              className="flex items-center gap-2.5 sm:gap-3"
            >
              <span className="section-badge">06</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
                Certifications
              </h2>
            </motion.div>

            <div className="space-y-3 sm:space-y-4">
              {certificationsData.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={shouldReduceMotion ? false : { opacity: 0, rotateX: 18, y: 24, transformPerspective: 1000 }}
                  whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={shouldReduceMotion ? {} : {
                    y: -4,
                    scale: 1.015,
                    boxShadow: '0 14px 30px -4px rgba(255, 216, 77, 0.35), 0 0 0 1.5px #FFD84D',
                    borderColor: '#FFD84D',
                  }}
                  className="glass-card p-3.5 sm:p-5 rounded-xl sm:rounded-[22px] space-y-1 sm:space-y-1.5 transition-all duration-200"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-1.5 sm:mb-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FFF1A8] text-[#F4BD32] flex items-center justify-center shrink-0">
                      <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <h3 className="text-sm sm:text-lg font-extrabold text-[#111111]">
                      {cert.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-[#6B6451]">
                    {cert.issuer}
                  </p>
                  <span className="inline-block text-[10px] sm:text-[11px] font-bold text-[#F4BD32] bg-[#FFF1A8] px-2.5 py-0.5 rounded-full mt-0.5 sm:mt-1">
                    {cert.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 3: Dark Quote Card — Smooth Glow Reveal */}
          <div className="lg:col-span-4 flex items-center mt-2 sm:mt-0">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full min-h-[190px] sm:min-h-[260px] rounded-xl sm:rounded-[22px] bg-[#12121A]/90 backdrop-blur-xl text-white p-5 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-[#FFD84D]/35 shadow-[0_20px_50px_rgba(0,0,0,0.35),0_0_30px_rgba(255,216,77,0.1),inset_0_1px_1px_rgba(255,255,255,0.12)] hover:border-[#FFD84D]/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4),0_0_40px_rgba(255,216,77,0.2)] transition-all duration-300"
            >
              {/* Subtle gold doodle leaves/sparks on top */}
              <div className="flex justify-between items-start">
                <div className="text-xl sm:text-2xl text-[#FFD84D] opacity-80 select-none">
                  🌿
                </div>
                <div className="text-xs sm:text-sm text-[#FFD84D] opacity-70">
                  ✦
                </div>
              </div>

              {/* Main Golden Quote in Caveat handwriting */}
              <div className="my-auto text-left py-2.5 sm:py-4">
                <blockquote className="font-handwriting text-2xl sm:text-4xl text-[#FFD84D] font-bold leading-tight tracking-wide drop-shadow-sm">
                  {quoteCard.quote}
                </blockquote>
              </div>

              {/* Bottom heart and sparks doodle */}
              <div className="flex justify-end items-center gap-1.5 text-xs text-[#FFD84D]/70 font-mono">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFD84D]" />
                <span className="text-[10px] sm:text-[11px] text-white/50 tracking-wider">ALWAYS LEARNING</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
