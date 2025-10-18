import { motion, useTransform } from 'motion/react';
import useMouseParallax from '../hooks/useMouseParallax';
import '../styles/Hero.scss';

const navLinks = [
  { label: 'Facts', href: '#facts' },
  { label: 'Spotlight', href: '#spotlight' },
  { label: 'Gallery', href: '#gallery' },
];

const Hero = () => {
  const { x, y } = useMouseParallax(28);
  const slowX = useTransform(x, (value) => value * 0.35);
  const slowY = useTransform(y, (value) => value * 0.35);
  const midX = useTransform(x, (value) => value * 0.65);
  const midY = useTransform(y, (value) => value * 0.65);
  const reverseX = useTransform(x, (value) => value * -0.35);
  const reverseY = useTransform(y, (value) => value * -0.35);

  return (
    <section className="hero" id="home">
      <div className="hero__overlay" aria-hidden="true" />

      <nav className="hero__nav">
        <div className="hero__logo">
          <img src="/miku/miku-logo.svg" alt="Stylized Miku logo" />
          <span>Miku Dayo</span>
        </div>
        <ul className="hero__menu">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <motion.img
        src="/layers/Hero_BG.jpeg"
        alt="Nebula texture backdrop"
        className="hero__layer hero__layer--base"
        style={{ x: slowX, y: slowY }}
        aria-hidden="true"
      />
      <motion.img
        src="/layers/Hero_BG(3).jpeg"
        alt="Soft gradient cloud"
        className="hero__layer hero__layer--mid"
        style={{ x: midX, y: midY }}
        aria-hidden="true"
      />
      <motion.img
        src="/layers/Hero_BG(5).jpeg"
        alt="Bloom highlight"
        className="hero__layer hero__layer--glow"
        style={{ x: reverseX, y: reverseY }}
        aria-hidden="true"
      />

      <div className="hero__content">
        <motion.div
          className="hero__intro"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.17, 0.67, 0.12, 0.92] }}
        >
          <div className="hero__badge">Digital idol tribute</div>
          <h1 className="hero__title">
            <span>Welcome to</span>
            <strong>Miku Dayo</strong>
          </h1>
          <p className="hero__subtitle">
            A compact parallax playground celebrating Hatsune Miku&apos;s bubbly mascot persona. Glide through neon twilight layers, pick up
            quick lore, and meet Miku as she peeks into view.
          </p>
          <div className="hero__cta">
            <a href="#facts" className="hero__btn hero__btn--primary">Begin scrolling</a>
            <a href="#gallery" className="hero__btn hero__btn--ghost">View snapshots</a>
          </div>
        </motion.div>

        <motion.img
          src="/miku/miku-full-art.png"
          alt="Illustration of Hatsune Miku"
          className="hero__character"
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          style={{ x: midX, y: midY }}
        />
      </div>

      <motion.img
        src="/miku/miku-silhouette.png"
        alt="Silhouetted Miku"
        className="hero__accent"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.55, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        style={{ x: reverseX, y: reverseY }}
      />

      <div className="hero__scroll">
        <div className="hero__scroll-track">
          <span>scroll down • scroll down • scroll down • scroll down • </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
