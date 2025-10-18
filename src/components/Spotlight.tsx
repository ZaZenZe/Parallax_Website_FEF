import { motion } from 'motion/react';
import '../styles/Spotlight.scss';

const Spotlight = () => {
  return (
    <section className="spotlight" id="spotlight">
      <div className="spotlight__glow" aria-hidden="true" />

      <div className="spotlight__copy">
        <span className="spotlight__eyebrow">Center stage</span>
        <h2 className="spotlight__title">Meet the mascot — playful, curious, unmistakably Miku</h2>
        <p className="spotlight__text">
          Scroll a little and she drops by to say hello. This section keeps the layout tidy so elements never collide: image in the
          middle, message on top, and soft glows behind.
        </p>
        <ul className="spotlight__points">
          <li>Non-overlapping layers</li>
          <li>Subtle, smooth entrance</li>
          <li>Optimized for small page length</li>
        </ul>
      </div>

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
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        role="status"
        aria-live="polite"
      >
        <span className="spotlight__bubble-text">It's me Mikuuu ♫</span>
      </motion.div>
    </section>
  );
};

export default Spotlight;
