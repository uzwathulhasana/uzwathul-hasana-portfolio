import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, RotateCw, User, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/profile.png';

export default function ProfileFlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(prev => !prev);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleFlip();
    }
  };

  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="w-full max-w-md mx-auto relative cursor-pointer select-none group focus:outline-none"
      tabIndex={0}
      role="button"
      aria-label="Toggle developer profile 3D card view"
      onClick={handleFlip}
      onKeyDown={handleKeyDown}
      data-cursor="project"
      data-cursor-label="FLIP"
      style={{ perspective: '1200px' }}
    >
      <div
        className="w-full min-h-[340px] sm:min-h-[440px] relative transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* ==================== FRONT SIDE: PROFILE PHOTO ==================== */}
        <div
          className="absolute inset-0 w-full h-full bg-[#050505] rounded-xl border-2 border-[#FFF04A] shadow-2xl p-5 flex flex-col justify-between overflow-hidden group-hover:border-[#FFFF66] transition-colors"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}
        >
          {/* Card Top Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#292929]">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFF04A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFF04A]"></span>
              </span>
              <span className="text-[11px] font-mono font-black uppercase text-[#FFF04A] tracking-wider">PROFILE CARD</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400 font-bold">
              <User className="w-3.5 h-3.5 text-[#FFF04A]" />
              <span>developer.photo</span>
            </div>
          </div>

          {/* Profile Photo Frame */}
          <div className="relative my-2 flex-1 rounded-lg overflow-hidden border border-[#292929] bg-[#111111] flex items-center justify-center group-hover:scale-[1.01] transition-transform duration-500">
            <img
              src={profileImg}
              alt="Uzwathul Hasana Profile"
              className="w-full h-48 sm:h-72 object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent opacity-85" />

            <div className="absolute bottom-3 left-3 right-3 text-left">
              <span className="px-2.5 py-0.5 rounded bg-[#FFF04A] text-[#050505] text-[10px] font-black uppercase tracking-widest font-mono inline-block mb-1">
                MCA GRADUATE
              </span>
              <h3 className="text-base sm:text-xl font-black text-white uppercase font-heading tracking-tight leading-none">
                UZWATHUL HASANA
              </h3>
            </div>
          </div>

          {/* Bottom Flip Hint Bar */}
          <div className="pt-3 border-t border-[#292929] flex items-center justify-between text-xs font-mono text-[#FFF04A] font-bold">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack Web Developer</span>
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] bg-[#181818] px-3 py-1 rounded border border-[#FFF04A]/40 group-hover:bg-[#FFF04A] group-hover:text-[#050505] transition-all uppercase tracking-wider font-black">
              <span>CLICK TO EXPLORE</span>
              <RotateCw className="w-3 h-3 animate-spin-slow" />
            </span>
          </div>
        </div>

        {/* ==================== BACK SIDE: DEVELOPER CODE CARD ==================== */}
        <div
          className="absolute inset-0 w-full h-full bg-[#050505] rounded-xl border-2 border-[#FFF04A] shadow-2xl p-5 flex flex-col justify-between overflow-hidden text-slate-200"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#292929]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FFF04A]" />
              <div className="w-3 h-3 rounded-full bg-[#FFF7A8]" />
              <div className="w-3 h-3 rounded-full bg-[#292929]" />
            </div>
            <div className="text-xs font-mono text-gray-400 flex items-center gap-1 font-bold">
              <Terminal className="w-3.5 h-3.5 text-[#FFF04A]" />
              <span>developer.profile.js</span>
            </div>
          </div>

          {/* Code / Profile Snippet */}
          <div className="font-mono text-xs text-gray-300 space-y-2.5 my-auto py-2">
            <div>
              <span className="text-[#FFF04A]">const</span> <span className="text-white">developer</span> = &#123;
            </div>
            <div className="pl-4">
              <span className="text-gray-400">name</span>: <span className="text-[#FFF04A]">"{personalInfo.name}"</span>,
            </div>
            <div className="pl-4">
              <span className="text-gray-400">role</span>: <span className="text-[#FFF04A]">"Full Stack Developer"</span>,
            </div>
            <div className="pl-4">
              <span className="text-gray-400">degree</span>: <span className="text-[#FFF04A]">"MCA (2024 - 2026)"</span>,
            </div>
            <div className="pl-4">
              <span className="text-gray-400">internship</span>: <span className="text-[#FFF04A]">"QMEX Solutions"</span>,
            </div>
            <div className="pl-4">
              <span className="text-gray-400">location</span>: <span className="text-[#FFF04A]">"{personalInfo.location}"</span>,
            </div>
            <div className="pl-4">
              <span className="text-gray-400">stack</span>: [<span className="text-[#FFF04A]">"React"</span>, <span className="text-[#FFF04A]">"Python"</span>, <span className="text-[#FFF04A]">"MySQL"</span>, <span className="text-[#FFF04A]">"Tailwind"</span>],
            </div>
            <div>&#125;;</div>
          </div>

          {/* Bottom Flip Back Hint */}
          <div className="pt-3 border-t border-[#292929] flex items-center justify-between text-xs font-mono text-[#FFF04A] font-bold">
            <span className="text-gray-400 text-[10px]">TAP ANYWHERE TO FLIP</span>
            <span className="inline-flex items-center gap-1 text-[11px] bg-[#181818] px-3 py-1 rounded border border-[#FFF04A]/40 group-hover:bg-[#FFF04A] group-hover:text-[#050505] transition-all uppercase tracking-wider font-black">
              <RotateCw className="w-3 h-3" />
              <span>SEE PHOTO</span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
