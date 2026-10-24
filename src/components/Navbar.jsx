import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { scrollToSection } from '../utils/scrollHelper';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education & Certificate' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navRef = React.useRef(null);
  const mobileMenuRef = React.useRef(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Touch/click outside listener to automatically dismiss/go back from mobile menu
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleTouchOrClickOutside = (e) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        navRef.current &&
        !navRef.current.contains(e.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('touchstart', handleTouchOrClickOutside, { passive: true });
    document.addEventListener('mousedown', handleTouchOrClickOutside);

    return () => {
      document.removeEventListener('touchstart', handleTouchOrClickOutside);
      document.removeEventListener('mousedown', handleTouchOrClickOutside);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    // 1. High-performance IntersectionObserver for active section highlighting (zero forced layout reflow)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    // 2. Throttled scroll listener using requestAnimationFrame for navbar elevation
    let ticking = false;
    let lastScrolled = false;

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20;
          if (scrolled !== lastScrolled) {
            lastScrolled = scrolled;
            setIsScrolled(scrolled);
          }
          ticking = false;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      scrollToSection(id);
    }, 20);
  };


  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Dynamic Golden Scroll Progress Bar */}
      <motion.div
        className="h-[3.5px] bg-gradient-to-r from-[#FFD84D] via-[#F4BD32] to-[#E0A015] origin-left shadow-[0_0_10px_rgba(255,216,77,0.85)]"
        style={{ scaleX }}
      />

      {/* Screen Backdrop for Mobile Menu: touching the screen automatically goes back/closes menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            onTouchStart={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/45 backdrop-blur-[2px] lg:hidden -z-10"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <nav
        ref={navRef}
        className={`px-3.5 sm:px-6 lg:px-8 py-2.5 sm:py-3 transition-all duration-300 sm:backdrop-blur-md ${
          isScrolled
            ? 'bg-white/95 sm:bg-white/70 border-b border-white/70 shadow-[0_8px_30px_rgba(17,17,17,0.04)]'
            : 'bg-[#FFFBEA]/95 sm:bg-white/35 border-b border-white/40'
        }`}
        style={{
          transform: 'translateZ(0)',
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-4">
          
          {/* UH Logo Badge & Title: name color stays #111111 on mobile touch; hover color change only on desktop lg */}
          <button
            type="button"
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 sm:gap-2.5 group text-left focus:outline-none shrink-0 cursor-pointer select-none active:bg-transparent"
            style={{ WebkitTapHighlightColor: 'transparent' }}
            aria-label="Scroll to top"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[#FFE86B] via-[#FFD84D] to-[#F59E0B] text-[#111111] font-extrabold flex items-center justify-center text-[11px] sm:text-xs tracking-tight shadow-sm lg:group-hover:scale-105 transition-transform">
              UH
            </div>
            <div className="leading-tight">
              <span className="font-extrabold text-xs sm:text-base text-[#111111] block tracking-tight lg:group-hover:text-[#F4BD32] transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#6B6451] font-medium block">
                Web Developer
              </span>
            </div>
          </button>

          {/* Desktop Nav Items (Middle) with Frosted Glass Pill */}
          <div className="hidden lg:flex items-center gap-1 bg-white/60 backdrop-blur-md border border-white/80 rounded-full px-2 py-1 shadow-[0_4px_20px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-xs transition-all duration-200 relative px-3 py-1.5 rounded-full cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FFE86B] via-[#FFD84D] to-[#F59E0B] text-[#111111] font-black shadow-xs'
                      : 'text-[#111111]/75 hover:text-[#111111] hover:bg-black/5 font-semibold'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

            {/* Right Action: Download Resume Button (hidden on mobile, visible on desktop) & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              <a
                href="/k.Uzwathul_Hasana_Resume.pdf"
                download="k.Uzwathul_Hasana_Resume.pdf"
                className="hidden lg:inline-flex pill-btn-dark py-2 px-4.5 text-xs font-bold cursor-pointer"
                aria-label="Download Resume"
              >
                <span>Download Resume</span>
                <Download className="w-3.5 h-3.5" />
              </a>

            {/* Mobile Hamburger Toggle with Golden Glass Badge */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-xl bg-[#FFF1A8]/90 hover:bg-[#FFD84D] backdrop-blur-md border border-[#FFD84D] text-[#111111] transition-all shadow-xs cursor-pointer active:scale-95 flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#111111]" /> : <Menu className="w-5 h-5 text-[#111111]" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer with Frosted Glass */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, height: 0, y: -6 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -6 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="lg:hidden overflow-hidden mt-2.5 rounded-2xl bg-white/95 backdrop-blur-2xl border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.95)]"
              style={{
                WebkitBackdropFilter: 'blur(20px)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="p-3 sm:p-4 flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-left px-3.5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-between cursor-pointer ${
                        isActive
                          ? 'bg-[#FFD84D] text-[#111111] shadow-2xs'
                          : 'text-[#111111]/80 hover:bg-black/5'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />}
                    </button>
                  );
                })}

                <div className="pt-2 border-t border-[#111111]/10 mt-1">
                  <a
                    href="/k.Uzwathul_Hasana_Resume.pdf"
                    download="k.Uzwathul_Hasana_Resume.pdf"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full pill-btn-dark py-2 sm:py-2.5 text-xs font-bold justify-center gap-2 cursor-pointer"
                    aria-label="Download Resume"
                  >
                    <span>Download Resume</span>
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
