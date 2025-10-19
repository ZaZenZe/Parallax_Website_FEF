// no-op shim retained for backward compatibility; not used in current build

export type LayerConfig = {
  speed?: number; // positive moves with scroll, negative opposes
  rotate?: number; // degrees across full section scroll
  scale?: [number, number]; // from,to scale across section
};

export const useParallax = () => {
  return {
    scrollYProgress: { get: () => 0, on: () => () => {} },
    layers: {},
  } as const;
};

export default useParallax;
