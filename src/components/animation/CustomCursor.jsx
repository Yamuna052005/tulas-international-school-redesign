import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const INTERACTIVE =
  'a, button, input, select, textarea, label, summary, [role="button"], [role="tab"], [role="switch"], [data-cursor="hover"]';

/**
 * Ring + dot that follow the pointer. Position is driven by motion values
 * (no React re-renders per mouse move); only hover/visibility are state.
 * Rendered only on devices with a fine pointer, so touch screens never see it.
 */
export default function CustomCursor() {
  const hasFinePointer = useMediaQuery('(hover: hover) and (pointer: fine)');
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (!hasFinePointer) return undefined;

    const handleMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setIsVisible(true);
    };
    const handleOver = (event) => setIsHovering(Boolean(event.target.closest?.(INTERACTIVE)));
    const handleLeave = () => setIsVisible(false);

    window.addEventListener('pointermove', handleMove, { passive: true });
    window.addEventListener('pointerover', handleOver, { passive: true });
    document.documentElement.addEventListener('pointerleave', handleLeave);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerover', handleOver);
      document.documentElement.removeEventListener('pointerleave', handleLeave);
    };
  }, [hasFinePointer, x, y]);

  if (!hasFinePointer) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-5 -mt-5 h-10 w-10 rounded-full border-2 border-white mix-blend-difference"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: isHovering ? 1.7 : 1,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovering ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0)',
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-white mix-blend-difference"
        style={{ x, y }}
        animate={{ opacity: isVisible && !isHovering ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
