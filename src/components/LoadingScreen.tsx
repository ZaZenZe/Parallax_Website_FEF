import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import '../styles/LoadingScreen.scss';

type LoadingScreenProps = {
  onComplete: () => void;
};

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(onComplete, 420);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [progress, onComplete]);

  return (
    <motion.div
      className="loading"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="loading__backdrop" aria-hidden="true" />

      <motion.div
        className="loading__badge"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img src="/miku/miku-chibi.png" alt="Chibi Miku" />
        <span>Miku Dayo booting</span>
      </motion.div>

      <div className="loading__progress">
        <motion.div
          className="loading__meter"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: 'easeOut', duration: 0.35 }}
        />
        <div className="loading__labels">
          <span>{progress}%</span>
          <span>tuning synthesizers</span>
        </div>
      </div>

      <motion.div
        className="loading__ring"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
      />
    </motion.div>
  );
};

export default LoadingScreen;
