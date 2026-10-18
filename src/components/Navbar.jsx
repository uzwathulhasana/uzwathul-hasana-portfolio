import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Code, Sparkles, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

import profileImg from '../assets/profile.png';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ isDarkMode, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="h-1 bg-[#FFF04A] origin-left"
        style={{ scaleX }}
      />

      <nav className={`px-4 sm:px-6 lg:px-8 py-3.5 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--nav-bg)] backdrop-blur-xl border-b border-[var(--border)] shadow-lg'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo / Profile Avatar */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-md bg-[#FFF04A] p-0.5 shadow-md group-hover:scale-105 transition-transform overflow-hidden border border-[#FFF04A] shrink-0">
              <img
                src={profileImg}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top rounded-[4px] filter brightness-105 contrast-105"
              />
            </div>
            <div>
              <span className="font-extrabold text-sm sm:text-lg tracking-tight text-[#FFF04A] flex items-center gap-1.5 uppercase font-heading whitespace-nowrap">
                {personalInfo.name} <Sparkles className="w-3.5 h-3.5 text-[#FFF04A] opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-theme-muted font-bold">MCA Graduate × Web Developer</span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-1 bg-theme-surface/90 border border-theme rounded-full px-3 py-1.5 backdrop-blur-md shadow-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 ${
                    isActive ? 'text-[var(--nav-link-active-text)] font-black' : 'text-theme-secondary hover:text-[#FFF04A]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[var(--nav-link-active-bg)] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Hire Me Prominent CTA */}
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary px-5 py-2.5 text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary px-2 py-1 text-[10px] uppercase font-bold"
            >
              Hire Me
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-md bg-theme-surface border border-theme text-theme-primary hover:text-[#FFF04A]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-3 p-4 bg-theme-surface border border-theme rounded-xl backdrop-blur-2xl shadow-2xl flex flex-col gap-1.5"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-md text-xs uppercase font-bold tracking-wider transition-all ${
                    isActive
                      ? 'bg-[#FFF04A] text-[#050505] font-extrabold'
                      : 'text-theme-secondary hover:bg-theme-surfaceHover hover:text-[#FFF04A]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#050505]" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </nav>
    </header>
  );
}



