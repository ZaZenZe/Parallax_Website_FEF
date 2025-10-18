import { useEffect } from 'react';
import { useMotionValue, useSpring, useTransform } from 'motion/react';

// Returns MotionValues x,y that move in response to mouse position.
// strength: pixels at the edges (half viewport) — e.g., 40 => ~±40px
export default function useMouseParallax(strength = 30) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // smooth spring
  const sx = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 120, damping: 20, mass: 0.6 });

  // map normalized cursor [-0.5, 0.5] to pixels
  const x = useTransform(sx, (v) => v * strength);
  const y = useTransform(sy, (v) => v * strength);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const nx = e.clientX / innerWidth - 0.5; // [-0.5, 0.5]
      const ny = e.clientY / innerHeight - 0.5;
      mx.set(nx * 2); // approximate [-1, 1]
      my.set(ny * 2);
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [mx, my]);

  return { x, y };
}
