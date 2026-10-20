import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, Linkedin, Github, Mail, Download } from 'lucide-react';
import { personalInfo, myGoal } from '../data/portfolioData';
import profileImg from '../assets/profile.png';
import { scrollToSection } from '../utils/scrollHelper';

export default function Hero() {
  const heroRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Different parallax speeds for decorative yellow shapes
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 120]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -95]);
  const blob3Y = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 75]);
  const sparklesParallax = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -60]);

  const scrollTo = (id) => {
    scrollToSection(id);
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative pt-24 pb-14 sm:pt-40 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-10 bg-gradient-to-b from-[#FFF9E6] via-[#FFF6D8] to-[#FFF3CE] border-b border-[#111111]/6"
    >
      {/* Dynamic Animated Background Accents with Parallax Scrolling */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* Subtle Floating Dot Grid Texture */}
        <div 
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: 'radial-gradient(#111111 1.2px, transparent 1.2px)',
            backgroundSize: '36px 36px',
          }}
        />

        {/* Ambient Drifting Warm Blob 1 (Top Left) - Parallax Scroll Layer */}
        <motion.div style={{ y: blob1Y }} className="hidden sm:block absolute -top-24 -left-24">
          <motion.div
            animate={shouldReduceMotion ? {} : {
              x: [0, 45, -25, 0],
              y: [0, -35, 25, 0],
              scale: [1, 1.15, 0.95, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-96 h-96 sm:w-[480px] sm:h-[480px] rounded-full bg-gradient-to-br from-[#FFF1A8]/80 via-[#FFD84D]/40 to-transparent blur-3xl"
          />
        </motion.div>

        {/* Ambient Drifting Warm Blob 2 (Top Right behind profile) - Faster Parallax */}
        <motion.div style={{ y: blob2Y }} className="hidden sm:block absolute top-10 -right-20">
          <motion.div
            animate={shouldReduceMotion ? {} : {
              x: [0, -40, 30, 0],
              y: [0, 35, -30, 0],
              scale: [1, 1.1, 0.92, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="w-80 h-80 sm:w-[520px] sm:h-[520px] rounded-full bg-gradient-to-bl from-[#FFD84D]/35 via-[#FFF1A8]/50 to-transparent blur-3xl"
          />
        </motion.div>

        {/* Ambient Drifting Glow 3 (Bottom Center / Left) - Parallax Scroll Layer */}
        <motion.div style={{ y: blob3Y }} className="hidden sm:block absolute -bottom-20 left-1/4">
          <motion.div
            animate={shouldReduceMotion ? {} : {
              x: [0, 30, -30, 0],
              y: [0, -20, 20, 0],
              scale: [0.95, 1.08, 0.95],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="w-80 h-80 rounded-full bg-gradient-to-tr from-[#FFF1A8]/60 via-[#FFD84D]/25 to-transparent blur-2xl"
          />
        </motion.div>

        {/* Animated Floating Golden Sparkles ✦ with Subtle Parallax */}
        <motion.div style={{ y: sparklesParallax }} className="hidden sm:block absolute inset-0 pointer-events-none">
          <motion.div
            animate={shouldReduceMotion ? {} : {
              y: [0, -18, 0],
              rotate: [0, 180, 360],
              opacity: [0.35, 0.85, 0.35],
              scale: [0.9, 1.15, 0.9],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-24 left-[15%] text-2xl text-[#E0A015] font-serif"
          >
            ✦
          </motion.div>

          <motion.div
            animate={shouldReduceMotion ? {} : {
              y: [0, 22, 0],
              rotate: [0, -120, -240, -360],
              opacity: [0.3, 0.75, 0.3],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className="absolute top-44 left-[42%] text-lg text-[#F4BD32]"
          >
            ✦
          </motion.div>

          <motion.div
            animate={shouldReduceMotion ? {} : {
              y: [0, -15, 0],
              rotate: [0, 90, 180],
              opacity: [0.25, 0.7, 0.25],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5,
            }}
            className="absolute bottom-28 left-[8%] text-xl text-[#E0A015]"
          >
            ✧
          </motion.div>

          <motion.div
            animate={shouldReduceMotion ? {} : {
              y: [0, 18, 0],
              rotate: [0, -180, -360],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
            className="absolute top-28 right-[12%] text-2xl text-[#E0A015]"
          >
            ✦
          </motion.div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.25, 0.65, 0.25],
          }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
          className="absolute bottom-20 right-[28%] text-base text-[#F4BD32]"
        >
          ✦
        </motion.div>

        {/* Floating Rotating Dashed Rings */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -top-10 right-10 sm:right-24 w-28 h-28 rounded-full border-2 border-dashed border-[#FFD84D]/35"
        />

        <motion.div
          animate={{
            rotate: [360, 0],
            y: [0, -12, 0],
          }}
          transition={{
            rotate: { duration: 24, repeat: Infinity, ease: "linear" },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
          className="absolute bottom-16 left-6 sm:left-14 w-20 h-20 rounded-full border border-dashed border-[#E0A015]/30"
        />

        {/* Floating Mini Glowing Circles */}
        <motion.div
          animate={{
            y: [0, -14, 0],
            x: [0, 6, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
          className="absolute top-1/3 left-4 w-3.5 h-3.5 rounded-full bg-[#FFD84D] shadow-sm opacity-60"
        />

        <motion.div
          animate={{
            y: [0, 16, 0],
            x: [0, -8, 0],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.2,
          }}
          className="absolute bottom-32 right-8 w-4 h-4 rounded-full bg-gradient-to-tr from-[#FFD84D] to-[#FFF1A8] shadow-sm opacity-50"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs (Centered only in mobile view) */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-3 sm:space-y-6 text-center sm:text-left flex flex-col items-center sm:items-start"
          >
            {/* Header Block: Greeting, Name, Role with tight mobile spacing */}
            <div className="flex flex-col items-center sm:items-start space-y-0.5 sm:space-y-2">
              {/* Script Greeting matching screenshot */}
              <div className="inline-block transform -rotate-2 origin-center sm:origin-left">
                <span className="font-handwriting text-xl sm:text-4xl lg:text-5xl text-[#E0A015] tracking-normal font-bold">
                  Hello, I'm
                </span>
              </div>

              {/* Main Name Heading - Single line on mobile, 2 stacked lines on desktop */}
              <h1 className="text-3xl sm:text-7xl lg:text-8xl font-extrabold text-[#111111] tracking-tight leading-tight sm:leading-[1.02] text-center sm:text-left">
                <span className="inline sm:block">Uzwathul </span>
                <span className="font-script font-normal text-[#E0A015] italic inline sm:block drop-shadow-sm sm:-mt-2">
                  Hasana
                </span>
              </h1>

              {/* Role Line - Only Web Developer */}
              <div className="text-base sm:text-2xl font-extrabold tracking-tight text-[#111111] flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 pt-0.5 sm:pt-0">
                <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#E0A015] animate-pulse" />
                <span className="text-[#E0A015]">Web</span>
                <span>Developer</span>
              </div>
            </div>

            {/* Intro Paragraph in Subtle Glass Panel */}
            <div className="p-3 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/55 backdrop-blur-md border border-white/70 shadow-[0_8px_30px_rgba(224,160,21,0.06),inset_0_1px_2px_rgba(255,255,255,0.9)] max-w-xl space-y-3 sm:space-y-4 mx-auto sm:mx-0 w-full text-left">
              <p className="text-[#595240] text-sm sm:text-lg leading-relaxed font-medium">
                {personalInfo.shortIntro}
              </p>

              {/* CTA Buttons: View My Work, Contact Me, and Resume in single line on mobile */}
              <div className="flex items-center justify-between sm:justify-start gap-1 sm:gap-3.5 pt-1 w-full">
                <button
                  onClick={() => scrollTo('projects')}
                  className="pill-btn-dark !px-2 sm:!px-6 !py-2 sm:!py-3 !text-[11px] sm:!text-sm cursor-pointer shadow-md hover:shadow-lg transition-all whitespace-nowrap flex-1 sm:flex-initial justify-center gap-1 sm:gap-2"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                </button>

                <button
                  onClick={() => scrollTo('contact')}
                  className="pill-btn-outline !px-2 sm:!px-6 !py-2 sm:!py-3 !text-[11px] sm:!text-sm bg-white/60 backdrop-blur-sm border-white/80 cursor-pointer shadow-2xs hover:bg-white/80 transition-all whitespace-nowrap flex-1 sm:flex-initial justify-center"
                >
                  <span>Contact Me</span>
                </button>

                <a
                  href="/k.Uzwathul_Hasana_Resume.pdf"
                  download="k.Uzwathul_Hasana_Resume.pdf"
                  className="sm:hidden pill-btn-yellow !px-2 !py-2 !text-[11px] cursor-pointer shadow-2xs transition-all whitespace-nowrap flex items-center justify-center gap-1 flex-1"
                  aria-label="Download Resume"
                >
                  <span>Resume</span>
                  <Download className="w-3 h-3 shrink-0" />
                </a>
              </div>
            </div>

            {/* Social Icons Bar (LinkedIn, GitHub, Email) with Frosted Glass */}
            <div className="flex items-center justify-center sm:justify-start gap-2.5 sm:gap-3.5 pt-1">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/70 backdrop-blur-md border border-white/80 text-[#111111] flex items-center justify-center hover:bg-[#FFD84D] hover:border-[#FFD84D] hover:scale-105 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/70 backdrop-blur-md border border-white/80 text-[#111111] flex items-center justify-center hover:bg-[#FFD84D] hover:border-[#FFD84D] hover:scale-105 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)]"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/70 backdrop-blur-md border border-white/80 text-[#111111] flex items-center justify-center hover:bg-[#FFD84D] hover:border-[#FFD84D] hover:scale-105 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)]"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Organic Blob Photo with Floating Tech Badges & Handwritten Note */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.88, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Top Doodle Accents (3 Radiating sparks above head) */}
            <div className="absolute -top-7 right-20 sm:right-28 z-20 pointer-events-none select-none text-[#E0A015] opacity-90">
              <svg width="48" height="40" viewBox="0 0 48 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M10 26 C 13 17, 16 11, 20 7" />
                <path d="M24 22 C 24 15, 24 9, 24 3" />
                <path d="M38 26 C 35 17, 32 11, 28 7" />
              </svg>
            </div>

            {/* Organic Yellow Blob Wrapper */}
            <div className="relative w-56 h-64 sm:w-84 sm:h-96 md:w-96 md:h-[420px] flex items-center justify-center">
              {/* Soft Ambient Background Spread */}
              <div className="absolute -right-6 -bottom-6 sm:-right-10 sm:-bottom-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-[#FFF1A8]/60 via-[#FFD84D]/30 to-transparent blur-2xl pointer-events-none -z-10" />

              {/* Animated Morphing Yellow Blob Background */}
              <motion.div
                animate={{
                  borderRadius: [
                    '65% 35% 58% 42% / 46% 64% 36% 54%',
                    '52% 48% 44% 56% / 58% 42% 58% 42%',
                    '44% 56% 64% 36% / 50% 50% 50% 50%',
                    '65% 35% 58% 42% / 46% 64% 36% 54%',
                  ],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-tr from-[#E0A015] via-[#FFD84D] to-[#FFF1A8] shadow-2xl"
              />

              {/* Inner Photo Frame with smooth organic crop */}
              <div className="relative w-[92%] h-[92%] rounded-[58%_42%_52%_48%/48%_56%_44%_52%] overflow-hidden flex items-end justify-center">
                <img
                  src={profileImg}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top filter brightness-105 contrast-105 hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* FLOATING TECH TOOLS LOGOS AROUND THE IMAGE */}
              
              {/* 1. React Badge (Top-Left) */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [-3, 3, -3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-2 -left-2 sm:-top-5 sm:-left-5 z-30 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/75 backdrop-blur-lg shadow-[0_10px_25px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] border border-white/80 flex items-center justify-center hover:scale-115 hover:bg-white/90 hover:border-[#FFD84D]/50 transition-all duration-300 group cursor-default"
                title="React"
              >
                <svg className="w-4 h-4 sm:w-7 sm:h-7 group-hover:rotate-180 transition-transform duration-1000" viewBox="0 0 115 102" fill="#61DAFB">
                  <ellipse rx="11" ry="4.2" cx="57.5" cy="51" fill="#61DAFB" />
                  <g stroke="#61DAFB" strokeWidth="4.5" fill="none">
                    <ellipse rx="50" ry="19" cx="57.5" cy="51" />
                    <ellipse rx="50" ry="19" cx="57.5" cy="51" transform="rotate(60 57.5 51)" />
                    <ellipse rx="50" ry="19" cx="57.5" cy="51" transform="rotate(120 57.5 51)" />
                  </g>
                </svg>
              </motion.div>

              {/* 2. Figma Badge (Bottom-Left) */}
              <motion.div
                animate={{
                  y: [0, 9, 0],
                  rotate: [3, -3, 3],
                }}
                transition={{
                  duration: 4.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
                className="absolute bottom-6 -left-2 sm:bottom-14 sm:-left-7 z-30 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/75 backdrop-blur-lg shadow-[0_10px_25px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] border border-white/80 flex items-center justify-center hover:scale-115 hover:bg-white/90 hover:border-[#FFD84D]/50 transition-all duration-300 group cursor-default"
                title="Figma"
              >
                <svg className="w-3.5 h-4 sm:w-6 sm:h-7" viewBox="0 0 38 57" fill="none">
                  <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                  <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                  <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                  <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                  <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
                </svg>
              </motion.div>

              {/* 3. JavaScript Badge (Bottom-Right) */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [-4, 4, -4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2,
                }}
                className="absolute -bottom-2 right-4 sm:-bottom-4 sm:right-14 z-30 p-1.5 sm:p-2.5 rounded-xl sm:rounded-2xl bg-white/75 backdrop-blur-lg shadow-[0_10px_25px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] border border-white/80 flex items-center justify-center hover:scale-115 hover:bg-white/90 hover:border-[#FFD84D]/50 transition-all duration-300 group cursor-default"
                title="JavaScript"
              >
                <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-md bg-[#F7DF1E] text-[#111111] flex items-end justify-end p-0.5 font-black text-[9px] sm:text-[10px] leading-none shadow-sm">
                  JS
                </div>
              </motion.div>

              {/* 4. Tailwind CSS Badge (Top-Right) */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                  rotate: [3, -3, 3],
                }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.8,
                }}
                className="absolute -top-3 right-16 sm:-top-3 sm:right-10 z-20 p-1.5 sm:p-2.5 rounded-xl sm:rounded-2xl bg-white/75 backdrop-blur-lg shadow-[0_10px_25px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] border border-white/80 flex items-center justify-center hover:scale-115 hover:bg-white/90 hover:border-[#FFD84D]/50 transition-all duration-300 group cursor-default"
                title="Tailwind CSS"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="#06B6D4">
                  <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
                </svg>
              </motion.div>

              {/* Bottom Left Subtle Curved Accent Line */}
              <div className="absolute -bottom-4 left-4 z-20 pointer-events-none select-none text-[#E0A015] opacity-85">
                <svg width="40" height="30" viewBox="0 0 40 30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M4 12 C 14 26, 26 24, 36 10" />
                </svg>
              </div>

              {/* Floating Handwritten Note on the Right */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [3, 0, 3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-3 sm:-right-24 lg:-right-28 top-3 sm:top-12 z-30 max-w-[120px] sm:max-w-[180px] select-none pointer-events-none text-left"
              >
                <div className="font-handwriting text-[15px] sm:text-3xl text-[#111111] font-bold leading-tight drop-shadow-sm whitespace-pre-line">
                  {myGoal.heroNote}
                </div>
              </motion.div>

              {/* Small Subtle Mouse Pointer Doodle */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-5 right-20 sm:-top-3 sm:right-4 z-10 pointer-events-none select-none"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#111111" className="opacity-75">
                  <path d="M4 2l16 11-7.5 1.5L9 22 4 2z" />
                </svg>
              </motion.div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
