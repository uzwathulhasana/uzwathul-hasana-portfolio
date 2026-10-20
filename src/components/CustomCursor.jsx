import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const glowRef = useRef(null);
  const pos = useRef({ x: -200, y: -200 });
  const currentPos = useRef({ x: -200, y: -200 });
  const rafId = useRef(null);

  useEffect(() => {
    // Check if device supports hover and has no reduced motion preference
    const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasHover || prefersReducedMotion) {
      return;
    }

    setVisible(true);

    const handleMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      if (glowRef.current) glowRef.current.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      if (glowRef.current) glowRef.current.style.opacity = '1';
    };

    const render = () => {
      try {
        // Smooth lerp (linear interpolation)
        currentPos.current.x += (pos.current.x - currentPos.current.x) * 0.15;
        currentPos.current.y += (pos.current.y - currentPos.current.y) * 0.15;

        if (glowRef.current && Number.isFinite(currentPos.current.x) && Number.isFinite(currentPos.current.y)) {
          glowRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
        }

        rafId.current = requestAnimationFrame(render);
      } catch (err) {
        // Safe fallback
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={glowRef}
      className="cursor-glow"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '420px',
        height: '420px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 216, 77, 0.18) 0%, rgba(255, 216, 77, 0.05) 40%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 35,
        transition: 'opacity 0.3s ease',
        willChange: 'transform',
      }}
    />
  );
}
