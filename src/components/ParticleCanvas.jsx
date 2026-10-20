import React, { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animId;
    const parent = canvas.parentElement;
    let width = (canvas.width = (parent ? parent.offsetWidth : window.innerWidth) || 800);
    let height = (canvas.height = (parent ? parent.offsetHeight : window.innerHeight) || 600);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth || 800;
      height = canvas.height = canvas.parentElement.offsetHeight || 600;
    };

    window.addEventListener('resize', handleResize);

    // Create 32 soft yellow particles
    const particleCount = 32;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.max(1, Math.random() * 2 + 1),
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.2,
      baseAlpha: Math.random() * 0.4 + 0.15,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      angle: Math.random() * Math.PI * 2,
    }));

    const render = () => {
      try {
        ctx.clearRect(0, 0, width, height);

        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.angle += p.pulseSpeed;
          p.alpha = p.baseAlpha + Math.sin(p.angle) * 0.15;

          // Wrap around boundaries
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;

          if (Number.isFinite(p.x) && Number.isFinite(p.y)) {
            ctx.beginPath();
            const rad = Math.max(0.5, p.radius * 2);
            const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, rad);
            gradient.addColorStop(0, `rgba(255, 216, 77, ${Math.max(0, Math.min(1, p.alpha))})`);
            gradient.addColorStop(1, 'rgba(255, 216, 77, 0)');
            ctx.fillStyle = gradient;
            ctx.arc(p.x, p.y, rad, 0, Math.PI * 2);
            ctx.fill();
          }
        });

        animId = requestAnimationFrame(render);
      } catch (err) {
        // Fallback gracefully without breaking React
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-70"
      aria-hidden="true"
    />
  );
}
