import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/profile.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <footer className="bg-[#050505] text-white border-t-2 border-[#FFF04A] py-10 sm:py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Info */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-[#FFF04A] p-0.5 shadow-md shrink-0 overflow-hidden border border-[#FFF04A]">
            <img
              src={profileImg}
              alt={personalInfo.name}
              className="w-full h-full object-cover object-top rounded-[4px] filter brightness-105 contrast-105"
            />
          </div>
          <div>
            <h4 className="text-[#FFF04A] font-black text-base sm:text-lg uppercase font-heading tracking-tight">{personalInfo.name}</h4>
            <p className="text-gray-400 text-xs font-mono font-bold uppercase tracking-wider">
              MCA GRADUATE × WEB DEVELOPER
            </p>
          </div>
        </div>

        {/* Center Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-300 font-bold uppercase tracking-wider">
          <button onClick={() => scrollTo('hero')} className="hover:text-[#FFF04A] transition-colors">Home</button>
          <button onClick={() => scrollTo('about')} className="hover:text-[#FFF04A] transition-colors">About</button>
          <button onClick={() => scrollTo('skills')} className="hover:text-[#FFF04A] transition-colors">Skills</button>
          <button onClick={() => scrollTo('projects')} className="hover:text-[#FFF04A] transition-colors">Projects</button>
          <button onClick={() => scrollTo('experience')} className="hover:text-[#FFF04A] transition-colors">Experience</button>
          <button onClick={() => scrollTo('education')} className="hover:text-[#FFF04A] transition-colors">Education</button>
          <button onClick={() => scrollTo('certifications')} className="hover:text-[#FFF04A] transition-colors">Certifications</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-[#FFF04A] transition-colors">Contact</button>
        </div>

        {/* Right Social & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-md bg-[#181818] border border-[#292929] text-gray-300 hover:text-[#FFF04A] hover:border-[#FFF04A] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-md bg-[#181818] border border-[#292929] text-gray-300 hover:text-[#FFF04A] hover:border-[#FFF04A] transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-md bg-[#FFF04A] text-[#050505] font-black hover:bg-[#FFFF66] transition-all"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>

      <div className="max-w-6xl mx-auto pt-8 mt-8 border-t border-[#292929] font-mono text-center text-xs text-gray-400 font-bold">
        <p>
          © 2026 {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
