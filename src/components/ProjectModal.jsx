import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Code2,
  AlertCircle,
  Cpu,
  UserCheck,
  Trophy,
  Sparkles,
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // 1. Temporarily pause Lenis smooth momentum scroll so native modal wheel/touch scroll works flawlessly
    if (typeof window !== 'undefined' && window.__lenis) {
      window.__lenis.stop();
    }
    // 2. Lock document body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // 3. Close on Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      if (typeof window !== 'undefined' && window.__lenis) {
        window.__lenis.start();
      }
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const cs = project.caseStudy || {
    overview: project.shortDescription || project.description,
    problem: 'Optimizing user experience and streamlining workflow interactions.',
    solution: project.description,
    features: [
      'Responsive layout for mobile and desktop',
      'Interactive component architecture',
      'Optimized load times and asset delivery',
      'User-tested interface workflows',
    ],
    technology: project.tags || [],
    myContribution: project.role,
    challenges: 'Ensuring high performance, state reliability, and cross-device consistency.',
    result: 'Successfully delivered high-quality application meeting functional specifications.',
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3.5 sm:p-6"
      data-lenis-prevent="true"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
      />

      {/* Modal Dialog Card: Decreased size on mobile (w-[90vw] max-w-[360px] max-h-[82vh]), preserved on desktop (sm:w-full sm:max-w-4xl sm:max-h-[90vh]) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[90vw] max-w-[360px] sm:w-full sm:max-w-4xl bg-[#131318]/95 backdrop-blur-2xl border border-[#FFD84D]/45 rounded-xl sm:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_60px_rgba(255,216,77,0.18),inset_0_1px_1px_rgba(255,255,255,0.12)] z-10 text-white max-h-[82vh] sm:max-h-[90vh] flex flex-col overflow-hidden"
        data-lenis-prevent="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-20 p-1.5 sm:p-2.5 rounded-full bg-white/10 text-white/80 hover:bg-gradient-to-r hover:from-[#FFE86B] hover:to-[#F59E0B] hover:text-[#111111] transition-all duration-200 cursor-pointer shadow-md backdrop-blur-sm"
          aria-label="Close modal"
        >
          <X className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex-shrink-0 p-3 sm:p-7 bg-[#171720]/80 backdrop-blur-xl border-b border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 sm:gap-4 pr-7 sm:pr-10">
            <div>
              {/* Project Case Study Badge with Yellow Gradient */}
              <span className="px-2 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-gradient-to-r from-[#FFF2A3] via-[#FFD84D] to-[#F59E0B] text-[#111111] text-[8.5px] sm:text-xs font-black uppercase tracking-wider mb-1.5 sm:mb-2.5 inline-block shadow-sm">
                Project Case Study
              </span>
              <h3 className="text-base sm:text-3xl font-black text-white tracking-tight leading-snug">
                {project.title}
              </h3>
              {/* Role with Shimmering Yellow Gradient */}
              <p className="text-[10px] sm:text-sm mt-0.5 sm:mt-1.5 font-bold tracking-wide bg-gradient-to-r from-[#FFF5C0] via-[#FFD84D] to-[#F5A623] bg-clip-text text-transparent">
                {project.role}
              </p>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 px-2.5 sm:py-2.5 sm:px-5 rounded-full bg-gradient-to-r from-[#FFE86B] via-[#FFD84D] to-[#F59E0B] hover:from-[#FFF1A8] hover:to-[#FFD84D] text-[#111111] font-black text-[10px] sm:text-xs inline-flex items-center gap-1 sm:gap-1.5 transition-all shadow-[0_4px_20px_rgba(255,216,77,0.35)] hover:scale-105 active:scale-95"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1 sm:py-2.5 rounded-full bg-white/5 border border-white/15 text-white hover:border-[#FFD84D] hover:text-[#FFD84D] transition-colors text-[10px] sm:text-xs font-bold"
                >
                  <Github className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>Repository</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Modal Body: Fully Scrollable with Yellow Gradient Custom Scrollbar */}
        <div
          ref={scrollContainerRef}
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          style={{ WebkitOverflowScrolling: 'touch' }}
          className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-3 sm:p-8 space-y-3 sm:space-y-6 [&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-gradient-to-b [&::-webkit-scrollbar-thumb]:from-[#FFE86B] [&::-webkit-scrollbar-thumb]:via-[#FFD84D] [&::-webkit-scrollbar-thumb]:to-[#F59E0B] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:from-[#FFF1A8] hover:[&::-webkit-scrollbar-thumb]:to-[#F5A623]"
        >
          {/* Tech Stack Badges */}
          <div className="flex items-center gap-1 sm:gap-2 flex-wrap pb-2 sm:pb-4 border-b border-white/10">
            <span className="text-[10px] sm:text-xs font-mono font-black uppercase flex items-center gap-1 sm:gap-1.5 bg-gradient-to-r from-[#FFE86B] via-[#FFD84D] to-[#F59E0B] bg-clip-text text-transparent">
              <Code2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFD84D]" /> Technology:
            </span>
            {cs.technology.map((tech, idx) => (
              <span
                key={idx}
                className="px-1.5 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full bg-white/5 border border-white/10 text-white/90 text-[9px] sm:text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Overview & Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-5">
            <div className="p-2.5 sm:p-5 rounded-lg sm:rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 space-y-1 sm:space-y-2">
              <h4 className="text-[10.5px] sm:text-sm font-black uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#FFE86B] via-[#FFD84D] to-[#F59E0B] bg-clip-text text-transparent">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFD84D]" />
                Overview
              </h4>
              <p className="text-[10.5px] sm:text-sm text-gray-300 leading-relaxed font-normal">
                {cs.overview}
              </p>
            </div>

            <div className="p-2.5 sm:p-5 rounded-lg sm:rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 space-y-1 sm:space-y-2">
              <h4 className="text-[10.5px] sm:text-sm font-black uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#FFE86B] via-[#FFD84D] to-[#F59E0B] bg-clip-text text-transparent">
                <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFD84D]" />
                The Problem
              </h4>
              <p className="text-[10.5px] sm:text-sm text-gray-300 leading-relaxed font-normal">
                {cs.problem}
              </p>
            </div>
          </div>

          {/* Solution & Contribution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-5">
            <div className="p-2.5 sm:p-5 rounded-lg sm:rounded-2xl bg-gradient-to-br from-[#FFD84D]/15 via-[#FFD84D]/5 to-transparent border border-[#FFD84D]/40 backdrop-blur-md space-y-1 sm:space-y-2">
              <h4 className="text-[10.5px] sm:text-sm font-black uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#FFE86B] via-[#FFD84D] to-[#F59E0B] bg-clip-text text-transparent">
                <Cpu className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFD84D]" />
                The Solution
              </h4>
              <p className="text-[10.5px] sm:text-sm text-gray-200 leading-relaxed font-normal">
                {cs.solution}
              </p>
            </div>

            <div className="p-2.5 sm:p-5 rounded-lg sm:rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 space-y-1 sm:space-y-2">
              <h4 className="text-[10.5px] sm:text-sm font-black uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#FFE86B] via-[#FFD84D] to-[#F59E0B] bg-clip-text text-transparent">
                <UserCheck className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFD84D]" />
                My Contribution
              </h4>
              <p className="text-[10.5px] sm:text-sm text-gray-300 leading-relaxed font-normal">
                {cs.myContribution}
              </p>
            </div>
          </div>

          {/* Application Features */}
          {cs.features && cs.features.length > 0 && (
            <div className="p-2.5 sm:p-5 rounded-lg sm:rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 space-y-2 sm:space-y-3">
              <h4 className="text-[10.5px] sm:text-sm font-black uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#FFE86B] via-[#FFD84D] to-[#F59E0B] bg-clip-text text-transparent">
                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFD84D]" />
                Key Application Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2.5">
                {cs.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-sm text-gray-300 font-normal"
                  >
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFD84D] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges & Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-5 pb-2 sm:pb-4">
            <div className="p-2.5 sm:p-5 rounded-lg sm:rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 space-y-1 sm:space-y-2">
              <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400">
                Technical Challenge:
              </h4>
              <p className="text-[10.5px] sm:text-sm text-gray-300 leading-relaxed font-normal">
                {cs.challenges}
              </p>
            </div>

            <div className="p-2.5 sm:p-5 rounded-lg sm:rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 space-y-1 sm:space-y-2">
              <h4 className="text-[10.5px] sm:text-xs font-black uppercase tracking-wider flex items-center gap-1.5 bg-gradient-to-r from-[#FFE86B] via-[#FFD84D] to-[#F59E0B] bg-clip-text text-transparent">
                <Trophy className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFD84D]" /> Result & Outcome:
              </h4>
              <p className="text-[10.5px] sm:text-sm text-gray-300 leading-relaxed font-normal">
                {cs.result}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (typeof document !== 'undefined') {
    return createPortal(modalContent, document.body);
  }

  return modalContent;
}
