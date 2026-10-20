import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Layers } from 'lucide-react';
import { skillsFilterTabs, skillsGridList } from '../data/portfolioData';

// Recognizable technology logos (crisp inline SVGs matching the brand aesthetics)
const techLogos = {
  html: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#E34F26" aria-hidden="true">
      <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.4 4.5H5.1l.4 4.5h12.6l-.4 4.3-5.7 1.6-5.7-1.6-.3-3.1H3.6l.5 5.5L12 21.6l7.9-2.2 1-14.9z"/>
    </svg>
  ),
  css: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#1572B6" aria-hidden="true">
      <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.4 4.5H5.1l.4 4.5h12.6l-.4 4.3-5.7 1.6-5.7-1.6-.3-3.1H3.6l.5 5.5L12 21.6l7.9-2.2 1-14.9z"/>
    </svg>
  ),
  javascript: (
    <div className="w-5 h-5 rounded-sm bg-[#F7DF1E] text-[#111111] flex items-end justify-end p-0.5 font-black text-[9px] leading-none shrink-0 shadow-2xs" aria-hidden="true">
      JS
    </div>
  ),
  react: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 115 102" fill="#61DAFB" aria-hidden="true">
      <ellipse rx="11" ry="4.2" cx="57.5" cy="51" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="4.5" fill="none">
        <ellipse rx="50" ry="19" cx="57.5" cy="51" />
        <ellipse rx="50" ry="19" cx="57.5" cy="51" transform="rotate(60 57.5 51)" />
        <ellipse rx="50" ry="19" cx="57.5" cy="51" transform="rotate(120 57.5 51)" />
      </g>
    </svg>
  ),
  tailwind: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#06B6D4" aria-hidden="true">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>
  ),
  nodejs: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#5FA04E" aria-hidden="true">
      <path d="M12 2L3.5 6.9v9.8L12 21.6l8.5-4.9V6.9L12 2zm6.7 13.9L12 20l-6.7-3.9V7.9L12 4l6.7 3.9v8z"/>
      <circle cx="12" cy="12" r="3" fill="#5FA04E" />
    </svg>
  ),
  python: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M11.9 2c-3.1 0-4.9 1.4-4.9 3.2v2.4h5v.8H5.2C3.4 8.4 2 10.1 2 12.3c0 2.2 1.5 3.7 3.4 3.7h1.6v-2.3c0-2 1.7-3.6 3.7-3.6h5V9.3c0-1.8-1.6-3.2-3.8-3.2zm-2 1.7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#3776AB"/>
      <path d="M12.1 22c3.1 0 4.9-1.4 4.9-3.2v-2.4h-5v-.8h6.8c1.8 0 3.2-1.7 3.2-3.9 0-2.2-1.5-3.7-3.4-3.7H17v2.3c0 2-1.7 3.6-3.7 3.6h-5v.8c0 1.8 1.6 3.2 3.8 3.2zm2-1.7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="#FFD438"/>
    </svg>
  ),
  flask: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 2v7.31L4.65 19.3A2 2 0 0 0 6.39 22h11.22a2 2 0 0 0 1.74-2.7L14 9.31V2"/>
      <line x1="8.5" y1="2" x2="15.5" y2="2"/>
      <line x1="8.5" y1="6" x2="15.5" y2="6"/>
      <path d="M6 18h12"/>
    </svg>
  ),
  php: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 256 138" fill="none" aria-hidden="true">
      <ellipse cx="128" cy="69" rx="128" ry="69" fill="#777BB4" />
      <path d="M62 43h28c11 0 18 2 22 7s4 11 1 18c-3 8-9 13-17 15-5 1-13 1-22 1H60l-7 33H33L54 43h8zm15 23l-3 15h9c5 0 9-1 11-3s4-5 5-9c1-4 0-7-2-8s-6-2-11-2h-9zM128 43h20l-14 74h-20l14-74zm48 0h28c11 0 18 2 22 7s4 11 1 18c-3 8-9 13-17 15-5 1-13 1-22 1h-14l-7 33h-20l21-74h8zm15 23l-3 15h9c5 0 9-1 11-3s4-5 5-9c1-4 0-7-2-8s-6-2-11-2h-9z" fill="#FFFFFF"/>
    </svg>
  ),
  mysql: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2C6.48 2 2 4.24 2 7v10c0 2.76 4.48 5 10 5s10-2.24 10-5V7c0-2.76-4.48-5-10-5zm0 2c4.42 0 8 1.57 8 3s-3.58 3-8 3-8-1.57-8-3 3.58-3 8-3zm8 13c0 1.43-3.58 3-8 3s-8-1.57-8-3v-2.2c1.9 1.34 4.77 2.2 8 2.2s6.1-0.86 8-2.2V17zm0-4.5c0 1.43-3.58 3-8 3s-8-1.57-8-3v-2.2c1.9 1.34 4.77 2.2 8 2.2s6.1-0.86 8-2.2v2.2z" fill="#00758F"/>
      <path d="M14.5 10.5c-.8.5-1.7.8-2.5.8-1 0-1.8-.4-2.5-.9" stroke="#F29111" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  firebase: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3.89 15.67L6.2 1.34c.05-.33.45-.48.71-.27l3.66 2.92-6.68 11.68z" fill="#FFA000"/>
      <path d="M12.57 6.74l2.45-2.45c.24-.24.64-.17.78.14l4.31 9.87-7.54-7.56z" fill="#F57C00"/>
      <path d="M2.38 18.73l9.04 5.09c.36.2.8.2 1.16 0l9.04-5.09-3.07-7.03L2.38 18.73z" fill="#FFCA28"/>
    </svg>
  ),
  supabase: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12.92 2.14a1 1 0 0 0-1.63.15l-8.5 13.5a1 1 0 0 0 .97 1.48h7.42l-2.03 5.4a1 1 0 0 0 1.77.87l9.5-13.5a1 1 0 0 0-.82-1.58h-7.3l2.62-5.46a1 1 0 0 0-1-.86z" fill="#3ECF8E"/>
    </svg>
  ),
  java: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 19c3.5 1 8.5 1 12 0-1-1.5-2.5-2-4.5-2-2 0-5 .5-7.5 2z" fill="#EA2D2E"/>
      <path d="M4 21c5 1.5 13 1.5 17 0-1-1-3-1.5-5.5-1.5-3 0-7.5.5-11.5 1.5z" fill="#5382A1"/>
      <path d="M13.5 12c1.5 1.5 2 3 .5 4.5-1.5 1.5-4 1.5-5 0 2 0 3-1.5 2.5-3s-2-2.5-1-4c1-1.5 2.5-.5 3 2.5z" fill="#007396"/>
      <path d="M16 8.5c1 1.2 1.5 2.5.5 3.5-1 1-3 1-4 0 1.5 0 2.2-1 1.8-2s-1.5-1.8-.7-3c.8-1.2 1.8-.4 2.4 1.5z" fill="#E76F00"/>
    </svg>
  ),
  sql: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#336791" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      <path d="M12 12l3 3m0-3l-3 3" stroke="#F4BD32" strokeWidth="2"/>
    </svg>
  ),
  git: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#F05032" aria-hidden="true">
      <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0l-2 2 2.6 2.6c.6-.2 1.3-.1 1.8.4.5.5.7 1.2.5 1.8l2.5 2.5c.6-.2 1.3-.1 1.8.4.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.6-.6-.7-1.4-.4-2.1l-2.3-2.3v5.6c.2.2.3.4.3.7 0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8c0-.7.4-1.3 1-1.6V8.7c-.6-.3-1-.9-1-1.6 0-.5.2-1 .6-1.3L7.3 3.3 2.4 8.2c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.6c.6-.5.6-1.4 0-1.9z"/>
    </svg>
  ),
  github: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#181717" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  ),
  vscode: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#007ACC" aria-hidden="true">
      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.27a1 1 0 0 0 0 1.46l3.41 3.27-3.41 3.27a1 1 0 0 0 0 1.46l1.322 1.21a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.94-2.377A1.5 1.5 0 0 0 24 19.985V4.015a1.5 1.5 0 0 0-.85-1.428zM18 16.54l-6.54-5.54L18 5.46v11.08z"/>
    </svg>
  ),
  vite: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21.5 4.3l-9.1 16.9a.8.8 0 0 1-1.4 0L1.9 4.3a.8.8 0 0 1 .8-1.2h18a.8.8 0 0 1 .8 1.2z" fill="#BD34FE"/>
      <path d="M14.6 2.5l-6.8 13.3a.5.5 0 0 0 .7.7l3.7-2 1.3 4.8a.5.5 0 0 0 .9.1l5.5-10.7a.5.5 0 0 0-.7-.7l-3.6 1.9 1.1-6.7a.5.5 0 0 0-.9-.5z" fill="#FFD84D"/>
    </svg>
  ),
  uiux: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 38 57" fill="none" aria-hidden="true">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
    </svg>
  ),
  responsive: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#0ACF83" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
      <path d="M17 12h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1z" fill="#FFF1A8" stroke="#0ACF83" strokeWidth="1.5"/>
    </svg>
  ),
  digitalmarketing: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#E0A015" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 11l18-5v12L3 14v-3z"/>
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
      <path d="M12 5V2"/>
    </svg>
  ),
  seo: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#E0A015" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      <polyline points="8 12 11 9 14 12 17 7"/>
    </svg>
  ),
  aitools: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2l2.4 5.6L20 10l-4.4 4 1.4 6-5-3.2L7 20l1.4-6-4.4-4 5.6-2.4L12 2z" fill="#8B5CF6"/>
      <circle cx="19" cy="5" r="2.5" fill="#FFD84D"/>
    </svg>
  ),
  razorpay: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14.5 2H6.8L2 14.5l5.5 1.2L9.2 11h4.8c4.2 0 7-2.6 7-6.5C21 2.9 18.2 2 14.5 2z" fill="#0C2340"/>
      <path d="M6.2 17l-1.2 5h4.6l1.2-5H6.2z" fill="#0284C7"/>
    </svg>
  ),
  'google-oauth': (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
    </svg>
  ),
  'ms-word': (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="20" height="18" rx="4" fill="#185ABD" />
      <path d="M7 8l2.4 8h1.2L12 11l1.4 5h1.2L17 8h-1.6l-1 5.5L13 8h-1.2l-1.4 5.5L9.4 8H7z" fill="#FFFFFF" />
    </svg>
  ),
  'ms-excel': (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="20" height="18" rx="4" fill="#107C41" />
      <path d="M8 8l3 4-3 4h1.8l2.2-3 2.2 3H16l-3-4 3-4h-1.8L12 11 9.8 8H8z" fill="#FFFFFF" />
    </svg>
  ),
  'ms-powerpoint': (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="20" height="18" rx="4" fill="#C43E1C" />
      <path d="M8.5 8h4.5a3 3 0 0 1 0 6H10.5v2H8.5V8zm2 4.2h2.2a1.2 1.2 0 1 0 0-2.4H10.5v2.4z" fill="#FFFFFF" />
    </svg>
  ),
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter skills based on active category
  const filteredSkills = skillsGridList.filter((skill) =>
    skill.categories.includes(activeFilter)
  );

  return (
    <section id="skills" className="py-14 sm:py-28 px-3.5 sm:px-6 lg:px-8 relative z-10 bg-[#FFF8EA] border-b border-[#111111]/6 overflow-hidden">
      
      {/* Dynamic Animated Ambient Orbs in Background */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 -right-16 w-80 h-80 rounded-full bg-gradient-to-br from-[#FFD84D]/20 via-[#FFF1A8]/10 to-transparent blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 25, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
        className="absolute bottom-1/4 -left-16 w-80 h-80 rounded-full bg-gradient-to-tr from-[#FFF1A8]/30 via-[#FFD84D]/15 to-transparent blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-12 text-left"
        >
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="section-badge">02</span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight flex items-center gap-2 sm:gap-3">
                <span>Technical Skills</span>
                <motion.span
                  animate={{ rotate: [0, 20, 0, -20, 0], scale: [1, 1.15, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="inline-block text-[#F4BD32] text-xl sm:text-3xl select-none"
                  aria-hidden="true"
                >
                  ✦
                </motion.span>
              </h2>
            </div>
            <p className="text-xs sm:text-base text-[#6B6451] font-medium max-w-xl">
              Core technologies, tools, and digital capabilities organized across full-stack engineering disciplines.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#6B6451] self-start sm:self-end">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 text-[11px] sm:text-sm rounded-full bg-white/70 backdrop-blur-md border border-white/80 text-[#111111] shadow-[0_2px_8px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)]">
              <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E0A015]" />
              <span>Showing {filteredSkills.length} Skills</span>
            </span>
            <div className="hidden sm:flex items-center gap-1 text-[#F4BD32]">
              <ArrowRight className="w-4 h-4 text-[#FFD84D]" />
            </div>
          </div>
        </motion.div>

        {/* Category Filter Tabs with Gliding Spring Pill Animation */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-start md:justify-center gap-1.5 sm:gap-2.5 overflow-x-auto pb-3 sm:pb-4 mb-6 sm:mb-10 no-scrollbar px-1"
        >
          {skillsFilterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                type="button"
                className={`relative px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-[11px] sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer select-none focus:outline-none ${
                  isActive
                    ? 'text-[#111111]'
                    : 'text-[#111111]/75 bg-white/65 backdrop-blur-md border border-white/80 hover:bg-[#FFD84D]/25 hover:text-[#111111] hover:border-[#FFD84D]/60 shadow-[0_2px_8px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)]'
                }`}
              >
                {/* Smooth Gliding Active Pill Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTabPill"
                    className="absolute inset-0 bg-[#FFD84D] rounded-lg sm:rounded-xl border-2 border-[#111111] shadow-sm -z-1"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}

                <span className="relative z-10 flex items-center gap-1 sm:gap-1.5 font-black">
                  {tab.label}
                  {tab.id === 'additional' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E0A015]" />
                  )}
                </span>

                {/* Golden Sparkle on Active Tab */}
                {isActive && (
                  <span
                    className="absolute -bottom-1 -right-1 text-[10px] sm:text-xs text-[#E0A015] pointer-events-none select-none"
                    aria-hidden="true"
                  >
                    ✦
                  </span>
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Cards Grid - 5 Columns with Scroll Stagger, Hover Lift & Golden Glow */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3.5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              return (
                <motion.div
                  key={skill.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{
                    duration: 0.45,
                    delay: Math.min(index * 0.035, 0.45),
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                    boxShadow: '0 14px 28px -4px rgba(255, 216, 77, 0.35), 0 0 0 1.5px #FFD84D, inset 0 1px 1px rgba(255, 255, 255, 0.95)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-lg sm:rounded-xl bg-white/70 backdrop-blur-md border border-white/80 px-2.5 py-2.5 sm:px-3.5 sm:py-4 min-h-[52px] sm:min-h-[72px] flex items-center justify-start gap-2 sm:gap-2.5 group cursor-default select-none shadow-[0_4px_16px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)] transition-all duration-300 hover:bg-white/90"
                >
                  {/* Circular Checkmark Badge */}
                  <div
                    className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-[1.5px] sm:border-[1.8px] border-[#E0A015] bg-[#FFF1A8]/70 backdrop-blur-xs flex items-center justify-center shrink-0 group-hover:bg-[#FFD84D] group-hover:border-[#111111] transition-all duration-200 shadow-2xs"
                  >
                    <svg
                      className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#111111]"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="2.5 6 5 8.5 9.5 3.5" />
                    </svg>
                  </div>

                  {/* Technology Crisp SVG Logo with Micro Hover Tilt */}
                  <div className="shrink-0 transform group-hover:scale-115 group-hover:rotate-6 transition-transform duration-200 [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5 [&>div]:w-4 [&>div]:h-4 sm:[&>div]:w-5 sm:[&>div]:h-5">
                    {techLogos[skill.id] || (
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-[#FFD84D]/40 text-[#111111] flex items-center justify-center text-[8px] sm:text-[9px] font-bold">
                        {skill.name.slice(0, 2)}
                      </div>
                    )}
                  </div>

                  {/* Skill Name in Uppercase Bold */}
                  <div className="min-w-0 flex-1 text-left">
                    {skill.lines ? (
                      <div className="font-extrabold text-[11px] sm:text-[13px] tracking-wider uppercase text-[#111111] leading-tight group-hover:text-[#000000] transition-colors">
                        {skill.lines.map((line, idx) => (
                          <div key={idx}>{line}</div>
                        ))}
                      </div>
                    ) : (
                      <span className="font-extrabold text-[11px] sm:text-[13px] tracking-wider uppercase text-[#111111] leading-tight block truncate group-hover:text-[#000000] transition-colors">
                        {skill.name}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
