import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import '../styles/LoadingScreen.scss';

type LoadingScreenProps = {
  onComplete: () => void;
};

// Neon circular audio visualizer for a Vocaloid-style vibe
const VisualizerCanvas = ({ intensity = 1 }: { intensity?: number }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    let running = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    window.addEventListener('resize', resize);
    resize();

    // Helper to cycle colors across bars
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const hsl = (h: number, s: number, l: number) => `hsl(${h}deg ${s}% ${l}%)`;

    const draw = (time: number) => {
      if (!running) return;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      const cx = w / 2;
      const cy = h / 2;

      // Opaque clear to avoid additive brightness build-up
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#030a16';
      ctx.fillRect(0, 0, w, h);

      const t = time / 1000;
      const bars = Math.floor(180);
      const baseRadius = Math.min(w, h) * 0.22;
  const lineWidth = 2;

      ctx.save();
      ctx.translate(cx, cy);

      for (let i = 0; i < bars; i += 1) {
        const a = (i / bars) * Math.PI * 2;
        // Procedural pseudo-audio using layered sines; scaled by intensity
        const amp = (
          0.6 +
          0.4 * Math.sin(t * 2.2 + i * 0.22) +
          0.25 * Math.sin(t * 3.7 - i * 0.51) +
          0.15 * Math.sin(t * 5.4 + i * 0.93)
        ) * intensity;

        const barLen = lerp(10, 60, Math.min(1, Math.max(0, amp)));

        const hue = 170 + Math.sin(i * 0.12 + t * 0.8) * 50; // teal->pink sweep
        ctx.strokeStyle = hsl(hue, 100, 58);
        ctx.shadowColor = hsl(hue, 100, 50);
        ctx.lineWidth = lineWidth;
        ctx.shadowBlur = 8;
        ctx.globalAlpha = 0.85;

        const x1 = Math.cos(a) * baseRadius;
        const y1 = Math.sin(a) * baseRadius;
        const x2 = Math.cos(a) * (baseRadius + barLen);
        const y2 = Math.sin(a) * (baseRadius + barLen);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

  // Inner neon circle (dimmed for stability)
  ctx.globalAlpha = 0.7;
  ctx.shadowBlur = 12;
  ctx.strokeStyle = '#23c6ff';
  ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius - 8, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      running = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [intensity]);

  return <canvas ref={canvasRef} className="loading__viz" aria-hidden />;
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

      {/* Neon circular music visualizer */}
      <VisualizerCanvas intensity={0.9 + progress / 200} />
      <div className="loading__scanlines" aria-hidden="true" />

      <motion.div
        className="loading__badge"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img src="/miku/miku-chibi.png" alt="Chibi Miku" />
        <span>MIKU DAYO BOOTING</span>
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
