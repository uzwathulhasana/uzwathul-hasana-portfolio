import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundBlobs() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Top Left Floating Warm Blob (matching mockup left annotation) */}
      <motion.div
        animate={{
          x: [0, 35, -25, 0],
          y: [0, -40, 25, 0],
          scale: [1, 1.12, 0.95, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-36 -left-36 w-[420px] h-[420px] sm:w-[560px] sm:h-[560px] rounded-full bg-gradient-to-br from-[#FFF1A8]/70 via-[#FFD84D]/35 to-transparent blur-3xl opacity-75"
      />

      {/* Top Right Hero Blob Accent */}
      <motion.div
        animate={{
          x: [0, -45, 30, 0],
          y: [0, 35, -35, 0],
          scale: [1, 1.1, 0.96, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/4 -right-28 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-bl from-[#FFD84D]/35 via-[#FFF1A8]/45 to-transparent blur-3xl opacity-65"
      />

      {/* Left Edge Floating Yellow Spheres (Mockup Left Circles) */}
      <motion.div
        animate={{
          y: [0, -18, 0],
          x: [0, 8, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[28%] left-4 sm:left-12 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#FFD84D] to-[#FFF1A8] shadow-md opacity-50 blur-[0.5px]"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -6, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute top-[48%] left-6 sm:left-16 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#FFD84D] shadow-sm opacity-45"
      />

      {/* Right Edge Subtle Parallax Movement Shapes (Mockup Right Annotation) */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, -15, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute top-[42%] -right-20 w-72 h-72 rounded-full bg-gradient-to-l from-[#FFF1A8]/50 via-[#FFD84D]/25 to-transparent blur-2xl opacity-60"
      />

      {/* Lower Mid Experience Ambient Glow */}
      <motion.div
        animate={{
          y: [0, 22, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[68%] right-8 sm:right-20 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-[#FFD84D] to-[#FFF1A8] shadow-md opacity-40 blur-[0.5px]"
      />

      {/* Bottom Floating Yellow Blobs in Background (Mockup Bottom Right Annotation) */}
      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -25, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
        className="absolute bottom-1/4 -right-32 w-80 h-80 sm:w-[520px] sm:h-[520px] rounded-full bg-gradient-to-tl from-[#FFF1A8]/55 via-[#FFD84D]/25 to-transparent blur-3xl opacity-55"
      />

      {/* Bottom Left Soft Warm Glow */}
      <motion.div
        animate={{
          x: [0, -25, 25, 0],
          y: [0, 30, -25, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-12 -left-36 w-80 h-80 sm:w-[480px] sm:h-[480px] rounded-full bg-gradient-to-tr from-[#FFF1A8]/45 via-[#FFD84D]/20 to-transparent blur-3xl opacity-50"
      />
      </div>

      {/* Viewport Floating Geometric Accents & Sparkles (z-20 pointer-events-none) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-20 select-none" aria-hidden="true">
        <motion.div
          animate={{
            y: [0, -16, 0],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-36 right-1/4 text-2xl text-[#E0A015]/70 pointer-events-none select-none"
        >
          ✦
        </motion.div>

        <motion.div
          animate={{
            y: [0, 18, 0],
            rotate: [0, -90, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-52 left-1/4 text-xl text-[#FFD84D]/60 pointer-events-none select-none"
        >
          ✦
        </motion.div>

        <motion.div
          animate={{
            rotate: [0, 360],
            y: [0, -12, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-32 right-16 w-16 h-16 rounded-full border-2 border-dashed border-[#FFD84D]/25 pointer-events-none"
        />

        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.25, 0.6, 0.25],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-[58%] left-8 text-lg text-[#E0A015]/60 pointer-events-none select-none"
        >
          ✦
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[62%] right-1/3 w-10 h-10 rounded-full border border-[#FFD84D]/35 pointer-events-none"
        />
      </div>
    </>
  );
}
