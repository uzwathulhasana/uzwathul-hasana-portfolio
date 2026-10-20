import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Linkedin, Github, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education & Certificate' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: personalInfo.github, icon: Github, label: 'GitHub' },
    { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
  ];

  return (
    <motion.footer
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#0B0B0E] text-white pt-10 pb-8 sm:pt-16 sm:pb-12 px-3.5 sm:px-6 lg:px-8 border-t border-white/10 relative z-10"
    >
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-10">
        
        {/* Top Row: Brand Info, Nav Links, Social Icons */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 text-center lg:text-left">
          
          {/* Brand Info */}
          <div>
            <h3 className="font-extrabold text-base sm:text-xl text-white tracking-tight">
              {personalInfo.name}
            </h3>
            <p className="text-[11px] sm:text-xs text-white/50 font-medium mt-0.5">
              Web Developer
            </p>
          </div>

          {/* Navigation Links with Gentle Hover Shift */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 sm:gap-x-6 sm:gap-y-2 text-[11px] sm:text-xs font-semibold text-white/70">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="hover:text-[#FFD84D] hover:-translate-y-0.5 transition-all duration-200 focus:outline-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social Icons with Micro-Stagger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {socialLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label !== 'Email' ? "_blank" : undefined}
                  rel={item.label !== 'Email' ? "noopener noreferrer" : undefined}
                  initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                  className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/10 text-white/80 flex items-center justify-center hover:bg-[#FFD84D] hover:text-[#111111] hover:border-[#FFD84D] hover:scale-110 transition-all duration-200"
                  aria-label={item.label}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </motion.a>
              );
            })}
          </div>

        </div>

        {/* Bottom Row: Designed with ♥ by Uzwathul Hasana in single line */}
        <div className="pt-5 sm:pt-8 border-t border-white/10 flex flex-row items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-white/45 font-medium whitespace-nowrap">
          <span>Designed with</span>
          <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFD84D] fill-[#FFD84D] inline-block animate-pulse shrink-0" />
          <span>by {personalInfo.name}</span>
        </div>

      </div>
    </motion.footer>
  );
}
