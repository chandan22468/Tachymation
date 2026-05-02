import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const isHoveringButton = useRef(false);
  const isHoveringText = useRef(false);
  const rafId = useRef(null);

  const updateCursor = useCallback(() => {
    const ring = ringRef.current;
    if (!ring) return;

    ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
    ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;

    ring.style.left = `${ringPos.current.x}px`;
    ring.style.top = `${ringPos.current.y}px`;

    rafId.current = requestAnimationFrame(updateCursor);
  }, []);

  useEffect(() => {
    const isMobile = window.matchMedia('(pointer: coarse)').matches;
    if (isMobile) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    const handleMouseDown = () => {
      gsap.to(dot, { scale: 0.6, duration: 0.1 });
    };

    const handleMouseUp = () => {
      gsap.to(dot, { scale: 1, duration: 0.2 });
    };

    const handleButtonEnter = () => {
      isHoveringButton.current = true;
      ring.classList.add('expanded');
      ring.classList.remove('underline');
    };

    const handleButtonLeave = () => {
      isHoveringButton.current = false;
      ring.classList.remove('expanded');
    };

    const handleTextEnter = () => {
      if (!isHoveringButton.current) {
        isHoveringText.current = true;
        ring.classList.add('underline');
      }
    };

    const handleTextLeave = () => {
      isHoveringText.current = false;
      ring.classList.remove('underline');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    const buttons = document.querySelectorAll('button, .magnetic-btn, a');
    buttons.forEach((btn) => {
      btn.addEventListener('mouseenter', handleButtonEnter);
      btn.addEventListener('mouseleave', handleButtonLeave);
    });

    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span');
    textElements.forEach((el) => {
      el.addEventListener('mouseenter', handleTextEnter);
      el.addEventListener('mouseleave', handleTextLeave);
    });

    rafId.current = requestAnimationFrame(updateCursor);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      buttons.forEach((btn) => {
        btn.removeEventListener('mouseenter', handleButtonEnter);
        btn.removeEventListener('mouseleave', handleButtonLeave);
      });
      textElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleTextEnter);
        el.removeEventListener('mouseleave', handleTextLeave);
      });
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [updateCursor]);

  const isMobile = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
  if (isMobile) return null;

  return (
    <>
      <div ref={dotRef} className="custom-cursor cursor-dot" />
      <div ref={ringRef} className="custom-cursor cursor-ring" />
    </>
  );
};

export default CustomCursor;
