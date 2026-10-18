import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (status.error) setStatus(prev => ({ ...prev, error: '' }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase().trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (!formData.name.trim()) {
      setStatus({ loading: false, success: false, error: 'Name is required.' });
      return;
    }

    if (!formData.email.trim()) {
      setStatus({ loading: false, success: false, error: 'Email is required.' });
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus({ loading: false, success: false, error: 'Please enter a valid email address.' });
      return;
    }

    if (!formData.message.trim()) {
      setStatus({ loading: false, success: false, error: 'Message is required.' });
      return;
    }

    setStatus({ loading: true, success: false, error: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim()
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          loading: false,
          success: false,
          error: data.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 relative bg-[#FFF04A] text-[#050505] overflow-hidden border-y-4 border-[#050505]">
      {/* Decorative Background Text */}
      <div className="absolute top-6 right-6 text-[14vw] font-black text-[#050505]/10 leading-none select-none pointer-events-none font-heading uppercase">
        08
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#050505] text-[#FFF04A] text-xs font-black uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>08 / GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-black text-[#050505] tracking-tight mb-3 sm:mb-4 uppercase font-heading">
            LET'S TALK.
          </h2>
          <p className="text-[#050505]/80 text-sm sm:text-xl font-bold">
            Have an opportunity, project, or collaboration in mind? Let's connect.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-md bg-[#050505] text-white border-2 border-[#050505] space-y-6 shadow-2xl">
              <h3 className="text-lg sm:text-2xl font-black text-[#FFF04A] uppercase font-heading">Direct Reach</h3>
              <p className="text-xs text-gray-300 font-medium">
                Open to full-stack & web developer opportunities, project queries, or tech discussions.
              </p>

              <div className="space-y-4">
                {/* Email Card */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center sm:items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-md bg-[#181818] border border-[#292929] hover:border-[#FFF04A] transition-all group"
                >
                  <div className="p-2 sm:p-3 rounded-md bg-[#FFF04A] text-[#050505] font-black group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#FFF04A] uppercase tracking-widest block font-bold">Email</span>
                    <span className="text-xs sm:text-sm font-bold sm:font-black text-white group-hover:text-[#FFF04A] transition-colors break-all sm:break-normal">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                {/* Phone Card */}
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center sm:items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-md bg-[#181818] border border-[#292929] hover:border-[#FFF04A] transition-all group"
                >
                  <div className="p-2 sm:p-3 rounded-md bg-[#FFF04A] text-[#050505] font-black group-hover:scale-105 transition-transform shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#FFF04A] uppercase tracking-widest block font-bold">Phone / Mobile</span>
                    <span className="text-xs sm:text-sm font-bold sm:font-black text-white group-hover:text-[#FFF04A] transition-colors">
                      +91 {personalInfo.phone}
                    </span>
                  </div>
                </a>

                {/* Location Card */}
                <div className="flex items-center sm:items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-md bg-[#181818] border border-[#292929]">
                  <div className="p-2 sm:p-3 rounded-md bg-[#FFF04A] text-[#050505] font-black shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#FFF04A] uppercase tracking-widest block font-bold">Base Location</span>
                    <span className="text-xs sm:text-sm font-bold sm:font-black text-white">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-3 sm:pt-4 border-t border-[#292929] space-y-2 sm:space-y-3">
                <span className="text-[9px] sm:text-[10px] font-mono text-[#FFF04A] uppercase tracking-widest block font-bold">Professional Profiles</span>
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 rounded-md bg-[#181818] border border-[#292929] text-white hover:text-[#FFF04A] hover:border-[#FFF04A] text-[11px] sm:text-xs font-bold uppercase transition-all"
                  >
                    <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFF04A]" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 rounded-md bg-[#181818] border border-[#292929] text-white hover:text-[#FFF04A] hover:border-[#FFF04A] text-[11px] sm:text-xs font-bold uppercase transition-all"
                  >
                    <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFF04A]" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-md bg-[#050505] text-white border-2 border-[#050505] relative shadow-2xl">
              <h3 className="text-lg sm:text-2xl font-black text-[#FFF04A] mb-4 sm:mb-6 flex items-center gap-2 uppercase font-heading">
                <Sparkles className="w-5 h-5 text-[#FFF04A]" />
                <span>Send a Direct Message</span>
              </h3>

              {status.success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-md bg-[#FFF04A]/15 border-2 border-[#FFF04A] text-center space-y-3 my-8 text-white"
                >
                  <div className="w-12 h-12 rounded-full bg-[#FFF04A] text-[#050505] mx-auto flex items-center justify-center font-black">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-black text-[#FFF04A] uppercase font-heading">Message Sent Successfully!</h4>
                  <p className="text-sm text-gray-200 font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus({ loading: false, success: false, error: '' })}
                    className="mt-4 btn-primary px-5 py-2.5 rounded-md text-xs font-black uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {status.error && (
                    <div className="p-3 rounded-md bg-red-500/20 border border-red-500 text-red-300 text-xs flex items-center gap-2 font-bold">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{status.error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#FFF04A] font-black uppercase tracking-widest mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Uzwathul"
                        className="w-full px-3 py-3 sm:px-4 sm:py-3.5 rounded-md bg-[#181818] border-2 border-[#292929] text-white focus:border-[#FFF04A] outline-none text-xs sm:text-sm font-medium transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#FFF04A] font-black uppercase tracking-widest mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="uzwathuhasna@gmail.com"
                        className="w-full px-3 py-3 sm:px-4 sm:py-3.5 rounded-md bg-[#181818] border-2 border-[#292929] text-white focus:border-[#FFF04A] outline-none text-xs sm:text-sm font-medium transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#FFF04A] font-black uppercase tracking-widest mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Opportunity / Project Query"
                      className="w-full px-3 py-3 sm:px-4 sm:py-3.5 rounded-md bg-[#181818] border-2 border-[#292929] text-white focus:border-[#FFF04A] outline-none text-xs sm:text-sm font-medium transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#FFF04A] font-black uppercase tracking-widest mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Uzwathul, I'd like to discuss an opportunity..."
                      className="w-full px-3 py-3 sm:px-4 sm:py-3.5 rounded-md bg-[#181818] border-2 border-[#292929] text-white focus:border-[#FFF04A] outline-none text-xs sm:text-sm font-medium resize-none transition-colors"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status.loading}
                    className="btn-primary w-full py-3 sm:py-4 px-4 sm:px-6 rounded-md text-[10px] sm:text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01] transition-all disabled:opacity-50"
                  >
                    {status.loading ? (
                      <span>SENDING...</span>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}


