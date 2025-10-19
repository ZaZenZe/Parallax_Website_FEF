import type { RefObject } from 'react';
import { useScroll, useTransform, type MotionValue } from 'motion/react';

export type SectionParallax = {
  progress: MotionValue<number>;
  bgDrift: MotionValue<number>;
  midDrift: MotionValue<number>;
  foreDrift: MotionValue<number>;
  reverseDrift: MotionValue<number>;
  fade: MotionValue<number>;
  scale: MotionValue<number>;
  rotate: MotionValue<number>;
};

export const useSectionParallax = <T extends HTMLElement>(target: RefObject<T | null>): SectionParallax => {
  const { scrollYProgress } = useScroll({ target, offset: ['start start', 'end start'] });

  // layer drifts
  const bgDrift = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const midDrift = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const foreDrift = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const reverseDrift = useTransform(scrollYProgress, [0, 1], [0, -150]);

  // common effects
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.15]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8]);

  return { progress: scrollYProgress, bgDrift, midDrift, foreDrift, reverseDrift, fade, scale, rotate };
};

export default useSectionParallax;
