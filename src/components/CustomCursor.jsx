import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorColor, setCursorColor] = useState('#FFF04A'); // '#FFF04A' (Light Yellow) or '#050505' (Black)
  const [cursorMode, setCursorMode] = useState('default'); // 'default', 'cta', 'project', 'social', 'skill', 'button', 'text', 'link', 'input'
  const [cursorLabel, setCursorLabel] = useState('');
  const [isClicking, setIsClicking] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef(null);

  // References for tracking active magnetic element & tilt card
  const activeMagneticEl = useRef(null);
  const activeTiltEl = useRef(null);

  useEffect(() => {
    // Disable on touch / coarse pointer devices or reduced motion preference
    const isTouch = window.matchMedia('(pointer: coarse)').matches || !window.matchMedia('(hover: hover)').matches;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || isReducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);
    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      mousePos.current = { x, y };

      // Update main dot immediately via transform
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }

      // Target element inspection & priority hierarchy
      const target = e.target;
      if (!target) return;

      // 1. INPUT / TEXTAREA SAFETY (Priority 1)
      const inputEl = target.closest('input, textarea, select, [contenteditable="true"]');
      if (inputEl) {
        setCursorMode('input');
        resetMagnetic();
        resetTilt();
        return;
      }

      // 2. PRIMARY CTA / MAIN BUTTONS (Priority 2)
      const ctaEl = target.closest('.btn-primary, .btn-secondary, [data-cursor="cta"], [data-magnetic]');
      // 3. PROJECT SHOWCASE / CARD / IMAGE (Priority 3)
      const projectEl = target.closest('.project-card, [data-cursor="project"], img');
      // 4. SOCIAL ICONS (Priority 4)
      const socialEl = target.closest('.social-icon, a[href*="linkedin"], a[href*="github"], a[href*="mailto"], [data-cursor="social"]');
      // 5. SKILL TAGS (Priority 5)
      const skillEl = target.closest('.skill-tag, [data-cursor="skill"]');
      // 6. GENERAL BUTTONS / SUBMIT (Priority 6)
      const buttonEl = target.closest('button, [role="button"], input[type="submit"], [data-cursor="button"]');
      // 7. MAJOR HEADINGS & SPECIAL TEXT (Priority 7)
      const textEl = target.closest('h1, h2, h3, [data-cursor="text"]');
      // 8. LINKS (Priority 8)
      const linkEl = target.closest('a, nav button, [data-cursor="link"]');

      // State determination & label selection
      let newMode = 'default';
      let newLabel = '';

      if (ctaEl) {
        newMode = 'cta';
        const customLabel = ctaEl.getAttribute('data-cursor-label');
        newLabel = customLabel || 'CLICK';
        applyMagnetic(ctaEl, x, y);
      } else {
        resetMagnetic();
      }

      if (projectEl) {
        newMode = 'project';
        const customLabel = projectEl.getAttribute('data-cursor-label');
        newLabel = customLabel || 'VIEW';
        applyTilt(projectEl, x, y);
      } else {
        resetTilt();
      }

      if (!ctaEl && !projectEl) {
        if (socialEl) {
          newMode = 'social';
          newLabel = socialEl.getAttribute('data-cursor-label') || 'OPEN';
        } else if (skillEl) {
          newMode = 'skill';
          newLabel = skillEl.getAttribute('data-cursor-label') || 'TECH';
        } else if (buttonEl) {
          newMode = 'button';
          newLabel = buttonEl.getAttribute('data-cursor-label') || 'CLICK';
        } else if (textEl) {
          newMode = 'text';
          newLabel = textEl.getAttribute('data-cursor-label') || '';
        } else if (linkEl) {
          newMode = 'link';
          newLabel = linkEl.getAttribute('data-cursor-label') || '';
        }
      }

      setCursorMode(newMode);
      setCursorLabel(newLabel);

      // Section theme adaptation (#FFF04A Light Yellow vs #050505 Black)
      const yellowSection = target.closest('#about, #projects, #education, #certifications, #contact, .bg-\\[\\#FFF04A\\]');
      if (yellowSection) {
        setCursorColor('#050505'); // Black cursor on Light Yellow section
      } else {
        setCursorColor('#FFF04A'); // Light Yellow cursor on Black section
      }
    };

    // Helper: Apply subtle magnetic pull to CTA elements (max 8-10px)
    const applyMagnetic = (el, mouseX, mouseY) => {
      if (activeMagneticEl.current && activeMagneticEl.current !== el) {
        resetMagnetic();
      }
      activeMagneticEl.current = el;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (mouseX - centerX) * 0.22;
      const deltaY = (mouseY - centerY) * 0.22;
      const clampX = Math.max(-10, Math.min(10, deltaX));
      const clampY = Math.max(-10, Math.min(10, deltaY));

      el.style.transform = `translate3d(${clampX}px, ${clampY}px, 0) scale(1.02)`;
      el.style.transition = 'transform 0.15s ease-out';
    };

    const resetMagnetic = () => {
      if (activeMagneticEl.current) {
        activeMagneticEl.current.style.transform = 'translate3d(0, 0, 0) scale(1)';
        activeMagneticEl.current.style.transition = 'transform 0.3s ease-out';
        activeMagneticEl.current = null;
      }
    };

    // Helper: Apply subtle 3D card tilt (max 3-4 deg)
    const applyTilt = (card, mouseX, mouseY) => {
      if (activeTiltEl.current && activeTiltEl.current !== card) {
        resetTilt();
      }
      activeTiltEl.current = card;
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const relX = mouseX - centerX;
      const relY = mouseY - centerY;
      const tiltY = (relX / (rect.width / 2)) * 3.5;
      const tiltX = -(relY / (rect.height / 2)) * 3.5;

      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
      card.style.transition = 'transform 0.1s ease-out';
    };

    const resetTilt = () => {
      if (activeTiltEl.current) {
        activeTiltEl.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        activeTiltEl.current.style.transition = 'transform 0.4s ease-out';
        activeTiltEl.current = null;
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => {
      mousePos.current = { x: -100, y: -100 };
      resetMagnetic();
      resetTilt();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth RAF loop for outer ring delayed lerp
    const render = () => {
      const lerp = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerp;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      resetMagnetic();
      resetTilt();
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  if (!enabled || cursorMode === 'input') return null;

  // Outer Ring Size Map per Mode
  const modeSizeMap = {
    default: 32,
    link: 42,
    text: 44,
    skill: 44,
    social: 52,
    button: 58,
    cta: 64,
    project: 76,
  };

  const targetSize = modeSizeMap[cursorMode] || 32;
  const clickScale = isClicking ? 0.82 : 1;
  const isInteractive = cursorMode !== 'default';

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Main Cursor Dot */}
      <div
        ref={dotRef}
        style={{
          width: '7px',
          height: '7px',
          backgroundColor: cursorColor,
          transition: 'background-color 0.2s ease, opacity 0.2s ease',
          opacity: isInteractive ? 0.3 : 1,
        }}
        className="fixed top-0 left-0 rounded-full pointer-events-none shadow-sm"
      />

      {/* Outer Delayed Morphing Ring */}
      <div
        ref={ringRef}
        style={{
          width: `${targetSize}px`,
          height: `${targetSize}px`,
          borderColor: cursorColor,
          backgroundColor: isInteractive
            ? (cursorColor === '#FFF04A' ? 'rgba(255, 240, 74, 0.15)' : 'rgba(5, 5, 5, 0.15)')
            : 'transparent',
          transform: `scale(${clickScale})`,
          transition: 'width 0.22s ease-out, height 0.22s ease-out, border-color 0.2s ease, background-color 0.2s ease, transform 0.15s ease',
        }}
        className="fixed top-0 left-0 rounded-full border-2 pointer-events-none flex items-center justify-center shadow-md"
      />
    </div>
  );
}
