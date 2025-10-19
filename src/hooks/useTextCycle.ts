import { useEffect, useState } from 'react';

const titles = [
  'Miku Dayo',
  '初音ミク',
  'ミクだよ',
  'Hatsune',
  'Vocaloid',
  'Miku Dayo',
];

export const useTextCycle = (options?: { intervalMs?: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalMs = options?.intervalMs ?? 500;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs]);

  return titles[currentIndex];
};

export default useTextCycle;
