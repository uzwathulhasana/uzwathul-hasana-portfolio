import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Code2, AlertCircle, Cpu, UserCheck, Trophy, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!project) return null;

  const cs = project.caseStudy || {
    overview: project.shortDescription,
    problem: project.problem,
    solution: project.technicalHighlight,
    features: project.features || [],
    technology: project.stack || [],
    myContribution: project.role,
    challenges: "Optimizing code architecture and ensuring responsive state handling across views.",
    result: "Delivered working application meeting client and project objectives."
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pt-20 sm:pt-24 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative w-full max-w-4xl bg-[#181818] border-2 border-[#FFF04A] rounded-md shadow-2xl overflow-hidden z-10 my-auto text-white max-h-[85vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-20 p-1.5 sm:p-2.5 rounded sm:rounded-md bg-[#050505] text-[#FFF04A] hover:bg-[#FFF04A] hover:text-[#050505] border border-[#FFF04A] transition-all"
            aria-label="Close modal"
          >
            <X className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
          </button>

          {/* Modal Header */}
          <div className="p-4 sm:p-8 bg-[#111111] border-b border-[#292929]">
            <div className="flex flex-wrap items-end justify-between gap-3 sm:gap-4 pr-10 sm:pr-12">
              <div>
                <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-md bg-[#FFF04A] text-[#050505] text-[10px] sm:text-xs font-black uppercase tracking-wider mb-1.5 sm:mb-2 inline-block">
                  Project Case Study
                </span>
                <h3 className="text-base sm:text-4xl font-black text-white uppercase font-heading tracking-tight leading-tight">{project.title}</h3>
                <p className="text-[#FFF04A] text-xs sm:text-sm mt-0.5 sm:mt-1 font-bold">{project.role}</p>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-md text-[10px] sm:text-xs font-black uppercase tracking-wider flex items-center gap-1 sm:gap-1.5 shadow-md"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-md bg-[#050505] border border-[#292929] text-white font-bold text-[10px] sm:text-xs uppercase flex items-center gap-1 sm:gap-1.5 hover:border-[#FFF04A] hover:text-[#FFF04A] transition-colors"
                  >
                    <Github className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>Repository</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Modal Body: Complete Case Study */}
          <div className="flex-1 overflow-y-auto p-3.5 sm:p-8 space-y-3.5 sm:space-y-6">
            
            {/* Tech Stack Badges */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap pb-3 sm:pb-4 border-b border-[#292929]">
              <span className="text-[10px] sm:text-xs text-[#FFF04A] font-mono font-bold uppercase flex items-center gap-1">
                <Code2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFF04A]" /> Technology:
              </span>
              {cs.technology.map((tech, idx) => (
                <span key={idx} className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-md bg-[#050505] border border-[#FFF04A] text-[#FFF04A] text-[9.5px] sm:text-xs font-mono font-black uppercase">
                  {tech}
                </span>
              ))}
            </div>

            {/* Overview & Problem */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
              <div className="p-3.5 sm:p-5 rounded-md bg-[#111111] border border-[#292929] space-y-1 sm:space-y-2">
                <h4 className="text-xs sm:text-sm font-black text-[#FFF04A] uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 font-heading">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFF04A]" />
                  Overview
                </h4>
                <p className="text-[11px] sm:text-sm text-gray-300 leading-relaxed font-medium">
                  {cs.overview}
                </p>
              </div>

              <div className="p-3.5 sm:p-5 rounded-md bg-[#111111] border border-[#292929] space-y-1 sm:space-y-2">
                <h4 className="text-xs sm:text-sm font-black text-[#FFF04A] uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 font-heading">
                  <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFF04A]" />
                  The Problem
                </h4>
                <p className="text-[11px] sm:text-sm text-gray-300 leading-relaxed font-medium">
                  {cs.problem}
                </p>
              </div>
            </div>

            {/* Solution & Contribution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
              <div className="p-3.5 sm:p-5 rounded-md bg-[#FFF04A]/10 border border-[#FFF04A]/40 space-y-1 sm:space-y-2">
                <h4 className="text-xs sm:text-sm font-black text-[#FFF04A] uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 font-heading">
                  <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFF04A]" />
                  The Solution
                </h4>
                <p className="text-[11px] sm:text-sm text-gray-200 leading-relaxed font-medium">
                  {cs.solution}
                </p>
              </div>

              <div className="p-3.5 sm:p-5 rounded-md bg-[#111111] border border-[#292929] space-y-1 sm:space-y-2">
                <h4 className="text-xs sm:text-sm font-black text-[#FFF04A] uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 font-heading">
                  <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFF04A]" />
                  My Contribution
                </h4>
                <p className="text-[11px] sm:text-sm text-gray-300 leading-relaxed font-medium">
                  {cs.myContribution}
                </p>
              </div>
            </div>

            {/* Application Features */}
            {cs.features && cs.features.length > 0 && (
              <div className="p-3.5 sm:p-5 rounded-md bg-[#111111] border border-[#292929] space-y-2 sm:space-y-3">
                <h4 className="text-xs sm:text-sm font-black text-[#FFF04A] uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 font-heading">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFF04A]" />
                  Key Application Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {cs.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 sm:gap-2 text-[10.5px] sm:text-xs text-gray-300 font-medium">
                      <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFF04A] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges & Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 pt-1 sm:pt-2">
              <div className="p-3.5 sm:p-5 rounded-md bg-[#111111] border border-[#292929] space-y-1 sm:space-y-2">
                <h4 className="text-[10px] sm:text-xs uppercase font-black tracking-widest text-gray-400 font-heading">Technical Challenge:</h4>
                <p className="text-[11px] sm:text-sm text-gray-300 leading-relaxed font-medium">
                  {cs.challenges}
                </p>
              </div>

              <div className="p-3.5 sm:p-5 rounded-md bg-[#111111] border border-[#292929] space-y-1 sm:space-y-2">
                <h4 className="text-[10px] sm:text-xs uppercase font-black tracking-widest text-[#FFF04A] flex items-center gap-1 sm:gap-1.5 font-heading">
                  <Trophy className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFF04A]" /> Result & Outcome:
                </h4>
                <p className="text-[11px] sm:text-sm text-gray-300 leading-relaxed font-medium">
                  {cs.result}
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}


