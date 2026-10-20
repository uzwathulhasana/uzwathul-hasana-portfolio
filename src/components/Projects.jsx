import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  AlertCircle,
  Cpu,
  Github,
  Eye,
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ParticleCanvas from './ParticleCanvas';
import ProjectModal from './ProjectModal';

export default function Projects() {
  // Order projects exactly as seen in design:
  // 01: Apparel Design, 02: Inventory Reorder Alert, 03: QMEX Learning Hub
  const sortedProjects = [
    projectsData.find((p) => p.id === 'apparel-design-system') || projectsData[1],
    projectsData.find((p) => p.id === 'inventory-reorder-alert') || projectsData[2],
    projectsData.find((p) => p.id === 'qmex-learning-hub') || projectsData[0],
  ].filter(Boolean);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Auto-advance card every 10 seconds
  useEffect(() => {
    if (isPaused || selectedProject) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sortedProjects.length);
    }, 10000); // exactly 10 seconds

    return () => clearInterval(timer);
  }, [activeIndex, isPaused, selectedProject, sortedProjects.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? sortedProjects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % sortedProjects.length);
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-32 px-3.5 sm:px-6 lg:px-8 bg-[#111111] text-white relative overflow-hidden z-10 border-b border-white/10"
    >
      {/* Particle Canvas Glow in Background */}
      <ParticleCanvas />

      {/* Dynamic Ambient Golden Glow in Background (hidden on mobile for performance) */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[360px] bg-gradient-to-r from-[#FFD84D]/15 via-[#FFF1A8]/8 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-10 right-10 w-[360px] h-[360px] bg-[#E0A015]/10 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-16"
        >
          <div className="space-y-2 sm:space-y-3 text-left">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="section-badge">03</span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Featured Projects
              </h2>
            </div>
            <p className="text-white/65 text-xs sm:text-base max-w-2xl font-medium leading-relaxed">
              A collection of my recent work. Each project reflects my focus on creating simple, useful, and beautiful full-stack solutions.
            </p>
          </div>

          <a
            href="https://github.com/uzwathulhasana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FFD84D] hover:text-[#FFF1A8] transition-colors self-start md:self-end"
          >
            <span>View All on GitHub</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
        </motion.div>

        {/* 3D Deck / Carousel Layout with Depth Reveal Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-[510px] sm:h-[550px] md:h-[530px] flex items-center justify-center my-4 sm:my-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {sortedProjects.map((project, index) => {
            const N = sortedProjects.length;
            let offset = (index - activeIndex) % N;
            if (offset < -1) offset += N;
            if (offset > 1) offset -= N;

            const isCenter = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;

            return (
              <motion.div
                key={project.id}
                initial={false}
                animate={{
                  x: isCenter ? '0%' : isLeft ? '-64%' : isRight ? '64%' : '0%',
                  scale: isCenter ? 1 : 0.86,
                  opacity: isCenter ? 1 : 0.32,
                  zIndex: isCenter ? 30 : 10,
                  filter: isCenter ? 'blur(0px) brightness(1)' : 'blur(1px) brightness(0.7)',
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => {
                  if (!isCenter) setActiveIndex(index);
                }}
                className={`absolute w-[92vw] max-w-[340px] sm:max-w-[480px] md:max-w-[530px] rounded-xl sm:rounded-3xl p-4 sm:p-6 text-left backdrop-blur-xl transition-all duration-300 select-none ${
                  isCenter
                    ? 'bg-[#12121A]/85 border-2 border-[#FFD84D]/50 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_35px_rgba(255,216,77,0.18),inset_0_1px_1px_rgba(255,255,255,0.12)] cursor-default hover:border-[#FFD84D]/80 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_42px_rgba(255,216,77,0.28),inset_0_1px_1px_rgba(255,255,255,0.16)]'
                    : 'bg-[#14141E]/65 border border-white/12 shadow-[0_15px_35px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.06)] cursor-pointer hover:opacity-85 hover:border-[#FFD84D]/50 hover:shadow-[0_15px_35px_rgba(255,216,77,0.12)]'
                }`}
              >
                {/* Header: Role Pill & Number Badge */}
                <div className="flex items-center justify-between gap-2.5 sm:gap-3 pb-2.5 sm:pb-3.5 border-b border-white/10">
                  <span className="px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-mono font-bold tracking-wider uppercase border border-[#FFD84D]/50 bg-gradient-to-r from-[#FFD84D]/15 to-[#F59E0B]/10 text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2A3] via-[#FFD84D] to-[#F59E0B] truncate max-w-[190px] sm:max-w-none">
                    {project.role}
                  </span>
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-gradient-to-br from-[#FFE86B] via-[#FFD84D] to-[#F59E0B] text-[#111111] font-mono font-black text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-xs">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title & Description with Yellow Gradient */}
                <div className="mt-2.5 sm:mt-4">
                  <h3 className="text-base sm:text-xl md:text-2xl font-black uppercase tracking-tight leading-snug line-clamp-2 bg-gradient-to-r from-[#FFF5C0] via-[#FFD84D] to-[#F5A623] bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-[11px] sm:text-[13px] text-white/80 font-medium leading-relaxed mt-1.5 sm:mt-2 line-clamp-2">
                    {project.shortDescription || project.description}
                  </p>
                </div>

                {/* Structured Callout 1: Problem Solved */}
                <div className="mt-2.5 sm:mt-3.5 p-2.5 sm:p-3.5 rounded-lg sm:rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/10 text-left">
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#FFE86B] via-[#FFD84D] to-[#F59E0B] bg-clip-text text-transparent">
                    <AlertCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFD84D] shrink-0" />
                    <span>Problem Solved:</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-white/75 font-normal leading-relaxed mt-1 line-clamp-2">
                    {project.caseStudy?.problem || project.description}
                  </p>
                </div>

                {/* Structured Callout 2: Technical Architecture */}
                <div className="mt-2 sm:mt-2.5 p-2.5 sm:p-3.5 rounded-lg sm:rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/10 text-left">
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#FFE86B] via-[#FFD84D] to-[#F59E0B] bg-clip-text text-transparent">
                    <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFD84D] shrink-0" />
                    <span>Technical Architecture:</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-white/75 font-normal leading-relaxed mt-1 line-clamp-2">
                    {project.caseStudy?.solution || project.description}
                  </p>
                </div>

                {/* Technology Pills */}
                <div className="flex flex-wrap items-center gap-1 sm:gap-2 mt-2.5 sm:mt-4">
                  {project.tags.slice(0, 5).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg text-[9px] sm:text-xs font-mono font-bold tracking-wider uppercase border border-[#FFD84D]/40 text-[#FFD84D] bg-gradient-to-r from-[#FFD84D]/10 to-[#F59E0B]/5"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md sm:rounded-lg text-[9px] sm:text-xs font-mono font-bold text-white/60 border border-white/10 bg-white/5">
                      +{project.tags.length - 5}
                    </span>
                  )}
                </div>

                {/* Action Bar: Case Study & Code Buttons */}
                <div className="flex items-center justify-between pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="inline-flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FFE86B] via-[#FFD84D] to-[#F59E0B] hover:opacity-80 transition-opacity group/btn cursor-pointer"
                  >
                    <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFD84D] group-hover/btn:scale-110 transition-transform" />
                    <span>View Case Study</span>
                    <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFD84D]" />
                  </button>

                  <a
                    href={project.githubUrl || 'https://github.com/uzwathulhasana'}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg bg-white/10 hover:bg-white/15 text-white text-[11px] sm:text-xs font-bold border border-white/15 hover:border-[#FFD84D]/50 transition-all shadow-2xs backdrop-blur-sm"
                  >
                    <Github className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                    <span>Code</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Carousel Navigation Bar (Matching user screenshot) */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 select-none">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#12121A]/85 backdrop-blur-md border-2 border-white/15 hover:border-[#FFD84D] flex items-center justify-center text-[#FFD84D] hover:bg-[#1A1A22] transition-all hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-[#FFD84D]" strokeWidth={2.5} />
          </button>

          {/* Center Indicator Pill with 10s Timer Animation */}
          <div className="bg-[#121218]/80 backdrop-blur-md border border-white/15 rounded-full px-3.5 py-1.5 sm:px-5 sm:py-2.5 flex items-center gap-2 sm:gap-2.5 shadow-md">
            {sortedProjects.map((_, dotIdx) => {
              const isActive = activeIndex === dotIdx;
              return (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setActiveIndex(dotIdx)}
                  className="cursor-pointer transition-all duration-300 relative focus:outline-none"
                  aria-label={`Slide ${dotIdx + 1}`}
                >
                  {isActive ? (
                    <motion.div
                      layoutId="carouselActivePill"
                      className="w-6 h-2 sm:w-8 sm:h-2.5 rounded-full bg-gradient-to-r from-[#FFE86B] via-[#FFD84D] to-[#F59E0B] relative overflow-hidden shadow-xs"
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    >
                      {/* Animated 10-second filling indicator */}
                      <motion.div
                        key={activeIndex + '-' + (isPaused ? 'p' : 'r')}
                        initial={{ width: '0%' }}
                        animate={{ width: isPaused ? '0%' : '100%' }}
                        transition={{ duration: 10, ease: 'linear' }}
                        className="h-full bg-black/25 rounded-full"
                      />
                    </motion.div>
                  ) : (
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#353544] hover:bg-white/60 transition-colors" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#12121A]/85 backdrop-blur-md border-2 border-white/15 hover:border-[#FFD84D] flex items-center justify-center text-[#FFD84D] hover:bg-[#1A1A22] transition-all hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
            aria-label="Next project"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-[#FFD84D]" strokeWidth={2.5} />
          </button>
        </div>

      </div>

      {/* Case Study Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
