import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Briefcase } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
export default function ResumeCTA() {

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 relative bg-[#050505] text-white overflow-hidden border-t-4 border-[#FFF04A]">
      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-[#FFF04A]/5 font-extrabold text-[13vw] leading-none select-none pointer-events-none font-heading uppercase">
        BUILD
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#FFF04A] text-[#050505] text-xs font-black uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" />
            <span>07 / CAREER OPPORTUNITIES</span>
          </div>

          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-black text-[#FFF04A] leading-none uppercase font-heading tracking-tight">
            LET'S BUILD <br />
            SOMETHING USEFUL.
          </h2>

          <p className="text-gray-300 text-sm sm:text-xl font-medium max-w-2xl mx-auto">
            Download my resume and explore my work. I am ready for technical opportunities.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="/k.Uzwathul_Hasana_Resume.pdf"
              download="k.Uzwathul_Hasana_Resume.pdf"
              data-cursor="cta"
              className="btn-primary px-5 py-3 sm:px-8 sm:py-4 rounded-md text-[10px] sm:text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-xl"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME</span>
            </a>

            <button
              onClick={scrollToContact}
              data-cursor="cta"
              data-cursor-label="TALK"
              className="px-5 py-3 sm:px-8 sm:py-4 rounded-md bg-[#181818] border-2 border-[#FFF04A] text-[#FFF04A] hover:bg-[#FFF04A] hover:text-[#050505] text-[10px] sm:text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all shadow-lg"
            >
              <Mail className="w-4 h-4" />
              <span>CONTACT ME</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

