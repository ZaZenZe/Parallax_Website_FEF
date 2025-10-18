import { motion } from 'motion/react';
import '../styles/Spotlight.scss';

const Spotlight = () => {
  return (
    <section className="spotlight" id="spotlight">
      <div className="spotlight__glow" aria-hidden="true" />

      <motion.div
        className="spotlight__copy"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7 }}
      >
        <span className="spotlight__eyebrow">Character moment</span>
        <h2 className="spotlight__title">Miku Dayo takes center stage</h2>
        <p className="spotlight__text">
          A playful tribute to the iconic mascot costume that swept fan events. Hovering between virtual and tangible, Miku Dayo is
          the wink that keeps the fandom smiling.
        </p>
        <ul className="spotlight__points">
          <li>Soft neon rim lights keep the mood dreamy and futuristic.</li>
          <li>Layered parallax reveals subtly shifting depth as you scroll.</li>
          <li>Each scene keeps focus on Miku—no stray overlaps, only spotlight.</li>
        </ul>
      </motion.div>

      <motion.img
        src="/miku/miku-hanging.png"
        alt="Miku Dayo hanging from above"
        className="spotlight__miku"
        initial={{ y: -180, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.3, ease: [0.17, 0.67, 0.12, 0.92] }}
      />

      <motion.div
        className="spotlight__bubble"
        initial={{ y: -80, opacity: 0 }}
        whileInView={{ y: -12, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
      >
        <span className="spotlight__bubble-text">It&apos;s me, Mikuuu!</span>
      </motion.div>
    </section>
  );
};

export default Spotlight;
