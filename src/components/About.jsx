import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, GraduationCap, Calendar, PenTool, Lightbulb, Users, RotateCw } from 'lucide-react';
import { personalInfo, myGoal } from '../data/portfolioData';
import techWorkspaceImg from '../assets/tech-workspace.jpg';

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const pillarIcons = {
    Design: PenTool,
    'Problem Solving': Lightbulb,
    Teamwork: Users,
    'Continuous Learning': RotateCw,
  };

  const quickDetails = [
    { icon: MapPin, text: personalInfo.location },
    { icon: GraduationCap, text: personalInfo.degree },
    { icon: Calendar, text: personalInfo.availability },
  ];

  return (
    <section id="about" className="py-14 sm:py-28 px-3.5 sm:px-6 lg:px-8 relative z-10 bg-[#FFFCF2] border-b border-[#111111]/6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading with Yellow Number Badge - Reveal from Left */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2.5 sm:gap-3 mb-8 sm:mb-16"
        >
          <span className="section-badge">01</span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight">
            About Me
          </h2>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Bio, Quick Info, Signature - Upward Reveal + Stagger */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6 text-left">
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#6B6451] text-sm sm:text-lg leading-relaxed font-medium"
            >
              {personalInfo.aboutBio}
            </motion.p>

            {/* Quick Info List - Staggered Item Entrance */}
            <div className="space-y-2.5 sm:space-y-3.5 pt-1 sm:pt-2">
              {quickDetails.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.15 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold text-[#111111]"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FFF1A8] text-[#F4BD32] flex items-center justify-center shrink-0">
                      <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <span>{item.text}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Handwritten Signature matching mockup */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2 sm:pt-4"
            >
              <span className="font-handwriting text-2xl sm:text-4xl text-[#111111] font-bold tracking-wide inline-block transform -rotate-2">
                {personalInfo.signature}
              </span>
            </motion.div>
          </div>

          {/* Right Column: "My goal" Card with Tech Graphic - Reveal from the Right */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_12px_36px_rgba(224,160,21,0.08),inset_0_1px_2px_rgba(255,255,255,0.95)] relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                
                {/* Left Side: Goal Info & Pillars */}
                <div className="md:col-span-6 space-y-4 sm:space-y-5 text-left">
                  <div>
                    <h3 className="text-lg sm:text-2xl font-extrabold text-[#111111] mb-1 sm:mb-1.5">
                      {myGoal.title}
                    </h3>
                    <p className="text-[11px] sm:text-sm text-[#6B6451] leading-relaxed font-medium">
                      {myGoal.description}
                    </p>
                  </div>

                  {/* 4 Pillars - Staggered Scroll Entrance */}
                  <div className="space-y-2.5 sm:space-y-3 pt-1">
                    {myGoal.pillars.map((pillar, idx) => {
                      const Icon = pillarIcons[pillar.title] || PenTool;
                      return (
                        <motion.div
                          key={pillar.title}
                          initial={{ opacity: 0, x: -16 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                          className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-bold text-[#111111]"
                        >
                          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FFF1A8] text-[#F4BD32] flex items-center justify-center shrink-0 shadow-sm">
                            <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          </div>
                          <span>{pillar.title}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Side: Tech Related Image in the Card with "Better Design, Better Tomorrow" Thought */}
                <div className="md:col-span-6 flex items-center justify-center relative mt-2 sm:mt-0">
                  <div className="relative w-full aspect-square max-w-[210px] sm:max-w-xs rounded-2xl overflow-hidden border border-[#FFD84D]/50 shadow-md group bg-white/70">
                    <img
                      src={techWorkspaceImg}
                      alt="Developer Tech Workspace"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/20 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* "Better design, better tomorrow" Thought Sticky Note */}
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                      rotate: [-3, 1, -3],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-2 -left-1 sm:-bottom-4 sm:-left-3 z-20 px-2.5 py-2 sm:px-4 sm:py-3 rounded-xl bg-[#FFD84D] text-[#111111] shadow-xl border-2 border-white select-none cursor-default max-w-[160px] sm:max-w-[215px] transform -rotate-2"
                  >
                    <div className="font-handwriting text-sm sm:text-lg font-bold leading-tight text-[#111111]">
                      “Better design,
                      <br />
                      better tomorrow.”
                    </div>
                    <div className="font-handwriting text-[10px] sm:text-xs text-[#111111]/80 font-semibold mt-0.5">
                      Small steps create big results ♡
                    </div>
                  </motion.div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
