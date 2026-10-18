import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, ArrowUpRight, Cpu, AlertCircle, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  // Auto-rotate cards every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section id="projects" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative bg-[#FFF04A] text-[#050505] overflow-hidden border-y-4 border-[#050505]">
      {/* Decorative Background Watermark Text */}
      <div className="absolute top-6 right-6 text-[14vw] font-black text-[#050505]/10 leading-none select-none pointer-events-none font-heading uppercase">
        03
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left max-w-3xl mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#050505] text-[#FFF04A] text-xs font-black uppercase tracking-widest mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03 / PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#050505] tracking-tight mb-2 sm:mb-3 uppercase font-heading">
            SELECTED WORK
          </h2>
          <p className="text-[#050505]/80 text-sm sm:text-lg font-bold">
            Real-world full-stack web applications, automation tools, and client platforms.
          </p>
        </motion.div>

        {/* 3D Coverflow Carousel Container */}
        <div className="relative py-4 my-2" style={{ perspective: '1200px' }}>
          
          {/* Main 3D Card Stage */}
          <div className="relative h-[310px] sm:h-[480px] w-full flex items-center justify-center">
            {projectsData.map((project, idx) => {
              const projectNumber = (idx + 1).toString().padStart(2, '0');
              
              // Calculate relative offset for 3D coverflow positioning
              let offset = idx - activeIndex;
              if (offset < -1 && projectsData.length > 2) offset += projectsData.length;
              if (offset > 1 && projectsData.length > 2) offset -= projectsData.length;

              const isActive = offset === 0;

              // Compute 3D Card Animation Attributes
              let rotateY = 0;
              let scale = 1;
              let xTranslate = '0%';
              let zIndex = 30;
              let opacity = 1;
              let filter = 'brightness(100%)';

              if (offset === -1) {
                rotateY = 22;
                scale = 0.82;
                xTranslate = '-58%';
                zIndex = 20;
                opacity = 0.65;
                filter = 'brightness(70%)';
              } else if (offset === 1) {
                rotateY = -22;
                scale = 0.82;
                xTranslate = '58%';
                zIndex = 20;
                opacity = 0.65;
                filter = 'brightness(70%)';
              } else if (offset !== 0) {
                rotateY = offset < 0 ? 32 : -32;
                scale = 0.7;
                xTranslate = offset < 0 ? '-100%' : '100%';
                zIndex = 10;
                opacity = 0;
                filter = 'brightness(40%)';
              }

              return (
                <motion.div
                  key={project.id}
                  onClick={() => !isActive && setActiveIndex(idx)}
                  animate={{
                    rotateY,
                    scale,
                    x: xTranslate,
                    opacity,
                    zIndex,
                    filter,
                  }}
                  transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className={`absolute w-full max-w-[275px] sm:max-w-md sm:max-w-lg h-[290px] sm:h-[450px] rounded-xl border-3 border-[#050505] overflow-hidden flex flex-col justify-between shadow-2xl bg-[#050505] text-white transition-shadow duration-300 ${
                    isActive ? 'cursor-default shadow-3xl border-4' : 'cursor-pointer hover:opacity-90'
                  }`}
                >
                  {/* Card Top Header Bar */}
                  <div className="px-3 py-1.5 sm:px-5 sm:py-3.5 bg-[#111111] border-b-2 border-[#292929] flex items-center justify-between shrink-0">
                    <span className="px-2 py-0.5 rounded-md bg-[#050505] border border-[#FFF04A]/60 text-[#FFF04A] text-[9.5px] sm:text-xs font-black uppercase tracking-wider font-mono truncate max-w-[190px] sm:max-w-none">
                      {project.role}
                    </span>
                    <div className="bg-[#FFF04A] text-[#050505] px-2.5 py-0.5 rounded-md font-black text-xs sm:text-sm tracking-tighter font-heading shadow-md shrink-0">
                      {projectNumber}
                    </div>
                  </div>

                  {/* Card Main Body */}
                  <div className="p-2.5 sm:p-5 flex-1 flex flex-col justify-between overflow-hidden">
                    <div className="space-y-1 sm:space-y-2">
                      <h3 className="text-sm sm:text-xl font-black uppercase tracking-tight text-[#FFF04A] font-heading leading-tight line-clamp-1">
                        {project.title}
                      </h3>

                      <p className="text-[10px] sm:text-sm text-gray-300 leading-snug font-medium line-clamp-1 sm:line-clamp-2">
                        {project.shortDescription}
                      </p>

                      {/* Problem Solved Container */}
                      <div className="p-1.5 sm:p-2.5 rounded-md bg-[#181818] border border-[#292929] space-y-0.5">
                        <div className="text-[9px] sm:text-[11px] font-black text-[#FFF04A] flex items-center gap-1 sm:gap-1.5 uppercase tracking-widest font-heading">
                          <AlertCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFF04A] shrink-0" />
                          <span>Problem Solved:</span>
                        </div>
                        <p className="text-[9.5px] sm:text-xs text-gray-300 leading-snug font-medium line-clamp-1 sm:line-clamp-2">
                          {project.problem}
                        </p>
                      </div>

                      {/* Technical Architecture Container */}
                      <div className="p-1.5 sm:p-2.5 rounded-md bg-[#FFF04A]/10 border border-[#FFF04A]/30 text-white space-y-0.5">
                        <div className="text-[9px] sm:text-[11px] font-black text-[#FFF04A] flex items-center gap-1 sm:gap-1.5 uppercase tracking-widest font-heading">
                          <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFF04A] shrink-0" />
                          <span>Technical Architecture:</span>
                        </div>
                        <p className="text-[9.5px] sm:text-xs text-gray-200 leading-snug font-medium line-clamp-1 sm:line-clamp-2">
                          {project.technicalHighlight}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer: Tech Stack & Actions */}
                    <div className="space-y-1 sm:space-y-2.5 pt-1 sm:pt-2.5 border-t border-[#292929] shrink-0">
                      {/* Tech Tags - Mobile 3 tags, Desktop 5 tags */}
                      <div className="flex sm:hidden flex-wrap gap-1">
                        {project.stack.slice(0, 3).map((tech, techIdx) => (
                          <span key={techIdx} className="px-1.5 py-0.5 rounded bg-[#181818] border border-[#FFF04A] text-[#FFF04A] text-[8.5px] font-mono font-black uppercase">
                            {tech}
                          </span>
                        ))}
                        {project.stack.length > 3 && (
                          <span className="px-1 py-0.5 rounded bg-[#181818] border border-[#292929] text-gray-400 text-[8.5px] font-mono font-bold">
                            +{project.stack.length - 3}
                          </span>
                        )}
                      </div>
                      <div className="hidden sm:flex flex-wrap gap-1.5">
                        {project.stack.slice(0, 5).map((tech, techIdx) => (
                          <span key={techIdx} className="px-2 py-0.5 rounded bg-[#181818] border border-[#FFF04A] text-[#FFF04A] text-xs font-mono font-black uppercase">
                            {tech}
                          </span>
                        ))}
                        {project.stack.length > 5 && (
                          <span className="px-1.5 py-0.5 rounded bg-[#181818] border border-[#292929] text-gray-400 text-[10px] font-mono font-bold">
                            +{project.stack.length - 5}
                          </span>
                        )}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center justify-between pt-0.5 pb-0.5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(project);
                          }}
                          className="text-[9.5px] sm:text-xs font-black text-[#FFF04A] flex items-center gap-1 uppercase tracking-wider font-heading hover:underline group/btn shrink-0"
                        >
                          <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFF04A] group-hover/btn:scale-110 transition-transform" />
                          <span>View Case Study</span>
                          <ArrowUpRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                        </button>

                        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-md bg-[#FFF04A] text-[#050505] text-[9.5px] sm:text-xs font-black uppercase flex items-center gap-1 hover:bg-[#FFFF66] transition-colors shadow-sm"
                              title="Live Demo"
                            >
                              <span>Demo</span>
                              <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-md bg-[#181818] text-white border border-[#292929] hover:border-[#FFF04A] hover:text-[#FFF04A] text-[9.5px] sm:text-xs font-bold uppercase flex items-center gap-1 transition-colors"
                              title="GitHub Source"
                            >
                              <Github className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                              <span>Code</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-5 mt-4 relative z-40">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-[#050505] text-[#FFF04A] border-2 border-[#050505] hover:bg-[#FFF04A] hover:text-[#050505] transition-all shadow-xl hover:scale-110 focus:outline-none"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5 stroke-[3]" />
            </button>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-2 bg-[#050505]/90 px-4 py-1.5 rounded-full border border-[#050505]">
              {projectsData.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveIndex(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === dotIdx
                      ? 'w-7 bg-[#FFF04A]'
                      : 'w-2 bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to project ${dotIdx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-[#050505] text-[#FFF04A] border-2 border-[#050505] hover:bg-[#FFF04A] hover:text-[#050505] transition-all shadow-xl hover:scale-110 focus:outline-none"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5 stroke-[3]" />
            </button>
          </div>

        </div>

        {/* Modal Dialog */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
