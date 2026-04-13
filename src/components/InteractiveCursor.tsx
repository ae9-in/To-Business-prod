'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function InteractiveCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Mouse position values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring configuration for smooth trailing effect
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Fast spring configuration for the center dot
  const dotX = useSpring(cursorX, { damping: 40, stiffness: 800, mass: 0.1 });
  const dotY = useSpring(cursorY, { damping: 40, stiffness: 800, mass: 0.1 });

  useEffect(() => {
    setMounted(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <>
      {/* Tiny solid dot that instantly follows cursor */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-600 rounded-full pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Larger glowing ring that trails behind */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-blue-400 max-md:hidden"
        style={{
          width: isHovering ? 64 : 36,
          height: isHovering ? 64 : 36,
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: isHovering ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
          boxShadow: isHovering ? '0 0 20px rgba(59, 130, 246, 0.2)' : 'none',
        }}
        animate={{
          scale: isHovering ? 1.2 : 1,
          opacity: isHovering ? 0.8 : 0.4,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
