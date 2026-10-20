import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Briefcase, Laptop, Code2 } from 'lucide-react';
import { experienceData, myGoal } from '../data/portfolioData';

const experienceIcons = [Briefcase, Laptop, Code2];

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-14 sm:py-28 px-3.5 sm:px-6 lg:px-8 relative z-10 bg-[#FFFAF0] border-b border-[#111111]/6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - Scroll Animated */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-2 sm:space-y-3 mb-8 sm:mb-16 text-left"
        >
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="section-badge">04</span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight">
              Experience
            </h2>
          </div>
          <p className="text-[#6B6451] text-xs sm:text-base font-medium max-w-xl">
            Hands-on experience in design, learning and collaboration.
          </p>
        </motion.div>

        {/* 2-Column Layout: Progressive Timeline on Left, Floating Note on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Progressive Timeline with Vertical Stem */}
          <div className="lg:col-span-8 relative text-left">
            
            {/* Animated Vertical Timeline Line */}
            <motion.div
              initial={shouldReduceMotion ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              style={{ originY: 0 }}
              className="absolute left-[16px] sm:left-[23px] top-4 bottom-4 sm:top-6 sm:bottom-6 w-0.5 bg-gradient-to-b from-[#FFD84D] via-[#F4BD32] to-[#FFD84D]/25 -z-0"
              aria-hidden="true"
            />

            <div className="space-y-4 sm:space-y-8 relative z-10">
              {experienceData.map((exp, index) => {
                const Icon = experienceIcons[index % experienceIcons.length];
                const isEven = index % 2 === 0;
                // Alternating entry direction where appropriate (left vs right)
                const initialX = shouldReduceMotion ? 0 : (isEven ? -26 : 26);

                return (
                  <motion.div
                    key={exp.id}
                    initial={shouldReduceMotion ? false : { opacity: 0, x: initialX }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="glass-card p-3.5 sm:p-7 rounded-xl sm:rounded-2xl relative overflow-hidden"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-5">
                      {/* Timeline Node Badge with Smooth Scale Up */}
                      <motion.div
                        initial={shouldReduceMotion ? false : { scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: index * 0.12 + 0.1, type: "spring", stiffness: 300, damping: 20 }}
                        className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#FFD84D] text-[#111111] flex items-center justify-center shrink-0 shadow-sm mt-0.5 border sm:border-2 border-white ring-1 sm:ring-2 ring-[#FFD84D]/40"
                      >
                        <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                      </motion.div>

                      {/* Content with Staggered Delays for Dates, Job Titles, and Descriptions */}
                      <div className="space-y-2 sm:space-y-3 flex-1">
                        <div>
                          <motion.div
                            initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: index * 0.12 + 0.12 }}
                            className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2"
                          >
                            <h3 className="text-base sm:text-xl font-extrabold text-[#111111]">
                              {exp.company}
                            </h3>
                            {exp.period && (
                              <span className="text-[10px] sm:text-xs font-bold text-[#F4BD32] bg-[#FFF1A8] px-2.5 py-0.5 sm:px-3 sm:py-0.5 rounded-full">
                                {exp.period}
                              </span>
                            )}
                          </motion.div>

                          <motion.p
                            initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: index * 0.12 + 0.18 }}
                            className="text-[11px] sm:text-sm font-semibold text-[#6B6451] mt-0.5"
                          >
                            {exp.role}
                          </motion.p>
                        </div>

                        {/* Bullets with Micro-Stagger */}
                        <ul className="space-y-1 sm:space-y-1.5 text-[11px] sm:text-sm text-[#111111]/85 font-medium leading-relaxed">
                          {exp.bullets.map((bullet, bIdx) => (
                            <motion.li
                              key={bIdx}
                              initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.35, delay: index * 0.12 + 0.22 + bIdx * 0.05 }}
                              className="flex items-start gap-1.5 sm:gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD84D] mt-1.5 sm:mt-2 shrink-0" />
                              <span>{bullet}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Floating Editorial Note in Yellow Blob */}
          <div className="lg:col-span-4 flex justify-center items-center mt-4 sm:mt-0">
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [2, -2, 2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-52 h-52 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-[#FFF1A8] via-[#FFD84D]/40 to-[#FFFBEA] p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow-lg border border-[#FFD84D]/50 select-none"
            >
              {/* Doodle accents */}
              <div className="text-lg sm:text-2xl text-[#E0A015] mb-1.5 sm:mb-2">✦</div>
              <div className="font-handwriting text-2xl sm:text-4xl text-[#111111] font-bold leading-snug max-w-[160px] sm:max-w-[190px]">
                {myGoal.noteSubtitle}
              </div>
              <div className="text-lg sm:text-xl text-[#E0A015] mt-1.5 sm:mt-2">♡</div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
