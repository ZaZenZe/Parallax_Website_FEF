import { useEffect, useMemo, useState } from 'react';

// Cycles through a list of font families every `intervalMs` milliseconds
export const useFontCycle = (options?: { intervalMs?: number }) => {
  const intervalMs = options?.intervalMs ?? 1400;

  // Keep the list small and fun. These are loaded from index.html
  const fonts = useMemo(
    () => [
      'Bangers, cursive',
      'Monoton, cursive',
      'Rubik Glitch, system-ui',
      'Concert One, sans-serif',
      'Orbitron, sans-serif',
      'Press Start 2P, cursive',
      'Oswald, sans-serif',
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % fonts.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [fonts.length, intervalMs]);

  return fonts[index];
};

export default useFontCycle;
