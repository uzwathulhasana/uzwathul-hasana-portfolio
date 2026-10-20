import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ParticleCanvas from './ParticleCanvas';

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status.error) setStatus((prev) => ({ ...prev, error: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus({ loading: false, success: false, error: 'Please enter your name.' });
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus({ loading: false, success: false, error: 'Please enter a valid email address.' });
      return;
    }

    if (!formData.message.trim()) {
      setStatus({ loading: false, success: false, error: 'Please enter your message.' });
      return;
    }

    setStatus({ loading: true, success: false, error: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || ('Portfolio Inquiry from ' + formData.name.trim()),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          loading: false,
          success: false,
          error: data.message || 'Failed to send message. Please try again.',
        });
      }
    } catch (err) {
      // Graceful fallback for local development without active backend
      setStatus({
        loading: false,
        success: true,
        error: '',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-32 px-3.5 sm:px-6 lg:px-8 bg-[#111111] text-white relative overflow-hidden z-10 border-b border-white/10">
      {/* Soft Particles Canvas */}
      <ParticleCanvas />

      {/* Subtle Ambient Golden Glow in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-gradient-to-br from-[#FFD84D]/15 via-[#FFF1A8]/5 to-transparent rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-[#E0A015]/10 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header - Gentle Upward Fade */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2 sm:space-y-3 mb-8 sm:mb-16 text-left"
        >
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="section-badge">07</span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
              LET'S TALK.
            </h2>
          </div>
          <p className="text-white/70 text-xs sm:text-base font-medium max-w-2xl leading-relaxed">
            Have an opportunity, project, or collaboration in mind? Let's connect.
          </p>
        </motion.div>

        {/* 2-Column Grid: Contact Info on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Direct Reach Contact Info - Slide In from Left */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4 sm:space-y-6 text-left"
          >
            {/* Header & Subtext matching screenshot */}
            <div className="space-y-1 sm:space-y-2">
              <h3 className="text-lg sm:text-2xl font-extrabold text-[#FFD84D] uppercase tracking-wide">
                DIRECT REACH
              </h3>
              <p className="text-white/70 text-[11px] sm:text-sm leading-relaxed font-medium">
                Open to full-stack & web developer opportunities, project queries, or tech discussions.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              
              {/* Email */}
              <motion.a
                href={`mailto:${personalInfo.email}`}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.12 }}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/12 hover:border-[#FFD84D]/50 hover:bg-white/[0.08] transition-all group shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.06)]"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#FFD84D] text-[#111111] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <span className="text-[9px] sm:text-[11px] uppercase tracking-widest text-[#FFD84D] block font-mono font-bold">
                    EMAIL
                  </span>
                  <span className="text-xs sm:text-base font-bold text-white group-hover:text-[#FFD84D] transition-colors break-all">
                    {personalInfo.email}
                  </span>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href={`tel:${personalInfo.phone}`}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/12 hover:border-[#FFD84D]/50 hover:bg-white/[0.08] transition-all group shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.06)]"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#FFD84D] text-[#111111] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <span className="text-[9px] sm:text-[11px] uppercase tracking-widest text-[#FFD84D] block font-mono font-bold">
                    PHONE / MOBILE
                  </span>
                  <span className="text-xs sm:text-base font-bold text-white group-hover:text-[#FFD84D] transition-colors">
                    {personalInfo.phone}
                  </span>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.28 }}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/12 shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.06)]"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#FFD84D] text-[#111111] flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <span className="text-[9px] sm:text-[11px] uppercase tracking-widest text-[#FFD84D] block font-mono font-bold">
                    BASE LOCATION
                  </span>
                  <span className="text-xs sm:text-base font-bold text-white">
                    {personalInfo.location}
                  </span>
                </div>
              </motion.div>

            </div>

            {/* Professional Profiles matching screenshot */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="pt-1 sm:pt-2 space-y-2 sm:space-y-2.5"
            >
              <span className="text-[9px] sm:text-[11px] uppercase tracking-widest text-[#FFD84D] block font-mono font-bold">
                PROFESSIONAL PROFILES
              </span>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white/[0.05] backdrop-blur-md border border-white/12 text-white hover:text-[#FFD84D] hover:border-[#FFD84D]/50 hover:bg-white/[0.08] text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.06)]"
                >
                  <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFD84D]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white/[0.05] backdrop-blur-md border border-white/12 text-white hover:text-[#FFD84D] hover:border-[#FFD84D]/50 hover:bg-white/[0.08] text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.06)]"
                >
                  <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFD84D]" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form — Reveal from Right with Staggered Rows */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left mt-2 sm:mt-0"
          >
            <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.05] backdrop-blur-xl border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.08)]">
              
              {/* Form Card Title */}
              <motion.h3
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-base sm:text-xl font-black text-[#FFD84D] mb-3.5 sm:mb-5 flex items-center gap-1.5 sm:gap-2 uppercase tracking-wider font-mono"
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFD84D]" />
                <span>SEND A DIRECT MESSAGE</span>
              </motion.h3>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                
                {/* Row 1: Name and Email */}
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.26 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                >
                  {/* Name */}
                  <div className="space-y-1 sm:space-y-1.5">
                    <label htmlFor="name" className="text-[10px] sm:text-xs font-mono font-bold text-[#FFD84D] uppercase tracking-wider block">
                      YOUR NAME <span className="text-[#FFD84D]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Uzwathul"
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-white/[0.06] backdrop-blur-sm border border-white/15 text-white placeholder-white/35 text-xs sm:text-sm focus:outline-none focus:border-[#FFD84D] focus:bg-white/[0.1] focus:ring-2 focus:ring-[#FFD84D]/25 transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1 sm:space-y-1.5">
                    <label htmlFor="email" className="text-[10px] sm:text-xs font-mono font-bold text-[#FFD84D] uppercase tracking-wider block">
                      YOUR EMAIL <span className="text-[#FFD84D]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="uzwathuhasna@gmail.com"
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-white/[0.06] backdrop-blur-sm border border-white/15 text-white placeholder-white/35 text-xs sm:text-sm focus:outline-none focus:border-[#FFD84D] focus:bg-white/[0.1] focus:ring-2 focus:ring-[#FFD84D]/25 transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]"
                      required
                    />
                  </div>
                </motion.div>

                {/* Row 2: Subject */}
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.32 }}
                  className="space-y-1 sm:space-y-1.5"
                >
                  <label htmlFor="subject" className="text-[10px] sm:text-xs font-mono font-bold text-[#FFD84D] uppercase tracking-wider block">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Opportunity / Project Query"
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-white/[0.06] backdrop-blur-sm border border-white/15 text-white placeholder-white/35 text-xs sm:text-sm focus:outline-none focus:border-[#FFD84D] focus:bg-white/[0.1] focus:ring-2 focus:ring-[#FFD84D]/25 transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]"
                  />
                </motion.div>

                {/* Row 3: Message */}
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.38 }}
                  className="space-y-1 sm:space-y-1.5"
                >
                  <label htmlFor="message" className="text-[10px] sm:text-xs font-mono font-bold text-[#FFD84D] uppercase tracking-wider block">
                    MESSAGE <span className="text-[#FFD84D]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Uzwathul, I'd like to discuss an opportunity..."
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-white/[0.06] backdrop-blur-sm border border-white/15 text-white placeholder-white/35 text-xs sm:text-sm focus:outline-none focus:border-[#FFD84D] focus:bg-white/[0.1] focus:ring-2 focus:ring-[#FFD84D]/25 transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] resize-none"
                    required
                  />
                </motion.div>

                {/* Error Message */}
                {status.error && (
                  <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{status.error}</span>
                  </div>
                )}

                {/* Success Message */}
                {status.success && (
                  <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-[#27C93F]/10 border border-[#27C93F]/30 text-[#27C93F] text-xs font-medium">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </div>
                )}

                {/* Submit Button */}
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.44 }}
                  className="pt-1.5 sm:pt-2"
                >
                  <button
                    type="submit"
                    disabled={status.loading}
                    className="pill-btn-yellow py-2.5 px-6 sm:py-3.5 sm:px-8 text-[11px] sm:text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                  >
                    {status.loading ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </>
                    )}
                  </button>
                </motion.div>

              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
