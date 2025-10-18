import type { RefObject } from 'react';
import { useScroll } from 'motion/react';

export type LayerConfig = {
  speed?: number; // positive moves with scroll, negative opposes
  rotate?: number; // degrees across full section scroll
  scale?: [number, number]; // from,to scale across section
};

export const useParallax = <T extends HTMLElement>(
  target: RefObject<T>,
  layers: Record<string, LayerConfig>
) => {
  const { scrollYProgress } = useScroll({ target, offset: ['start start', 'end start'] });

  const outputs = Object.entries(layers).reduce((acc, [key, cfg]) => {
    const speed = cfg.speed ?? 0;
    const y = scrollYProgress.to((v) => `${v * speed * 100}%`);
    const rotate = scrollYProgress.to((v) => v * (cfg.rotate ?? 0));
    const scale = scrollYProgress.to((v) => {
      if (!cfg.scale) return 1;
      const [from, to] = cfg.scale;
      return from + (to - from) * v;
    });

    (acc as Record<string, { y: typeof y; rotate: typeof rotate; scale: typeof scale }>)[key] = {
      y,
      rotate,
      scale,
    };
    return acc;
  }, {} as Record<string, { y: ReturnType<typeof scrollYProgress.to>; rotate: ReturnType<typeof scrollYProgress.to>; scale: ReturnType<typeof scrollYProgress.to> }>);

  return { scrollYProgress, layers: outputs };
};

export default useParallax;
