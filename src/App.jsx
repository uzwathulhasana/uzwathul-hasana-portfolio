import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackgroundBlobs from './components/BackgroundBlobs';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFBEA] text-[#111111] flex flex-col font-sans selection:bg-[#FFD84D] selection:text-[#111111] relative">
      {/* Background Drifting Ambient Blobs */}
      <BackgroundBlobs />

      {/* Desktop Cursor Glow */}
      <CustomCursor />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Sections matching Mockup hierarchy */}
      <main className="flex-1 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Dark Footer */}
      <Footer />
    </div>
  );
}
