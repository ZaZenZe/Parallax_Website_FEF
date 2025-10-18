import { motion } from 'motion/react';
import { useRef } from 'react';
import '../styles/Hero.scss';
import { useSectionParallax } from '../hooks/useSectionParallax';
import useMouseParallax from '../hooks/useMouseParallax';
import useFontCycle from '../hooks/useFontCycle';

const heroWords = 'PARALLAX'.split('');
const heroOutlineWords = 'WEBSITE'.split('');

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { bgDrift, midDrift, foreDrift, reverseDrift, fade } = useSectionParallax(heroRef);
  const mouse = useMouseParallax(40);
  const funkyFont = useFontCycle({ intervalMs: 500 });

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <motion.div className="hero__background" style={{ opacity: fade }} />

  <motion.div className="hero__shapes" style={{ y: bgDrift }}>
        <img src="/assets/hero/abstract-shape.png" alt="Abstract shard" className="hero__shape hero__shape--a" />
        <img src="/assets/hero/geometric-shapes.png" alt="Geometric pattern" className="hero__shape hero__shape--b" />
        <img src="/assets/hero/cube-abstract-shape.png" alt="Cube" className="hero__shape hero__shape--c" />
        <img src="/assets/hero/spiral.png" alt="Spiral" className="hero__shape hero__shape--d" />
      </motion.div>

      <motion.div className="hero__content" style={{ y: midDrift, opacity: fade }}>
        <div className="hero__heading">
          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.17, 0.67, 0.12, 0.82] }}
          >
            <span className="hero__word" style={{ fontFamily: funkyFont }}>
              {heroWords.map((letter, index) => (
                <motion.span
                  key={letter + index}
                  className="hero__letter"
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>

            <span className="hero__word hero__word--outline" style={{ fontFamily: funkyFont }}>
              {heroOutlineWords.map((letter, index) => (
                <motion.span
                  key={letter + index}
                  className="hero__letter hero__letter--outline"
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 + index * 0.08 }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            Immersive digital experiences blending art, design, and technology.
          </motion.p>
        </div>

        {/* Media is now absolutely positioned floats to avoid overlapping the headline */}
      </motion.div>

      {/* Main 3D models (pop-in + parallax) */}
      <motion.img
        src="/assets/hero/works_3d_model_01.png"
        alt="model left"
        className="hero__float hero__float--model1"
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        whileInView={{ opacity: 0.9, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ y: foreDrift, x: mouse.x }}
      />
      <motion.img
        src="/assets/hero/works_3d_model_02.png"
        alt="model right"
        className="hero__float hero__float--model2"
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        whileInView={{ opacity: 0.9, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
        style={{ y: reverseDrift, x: mouse.x }}
      />

      {/* Minimal supporting floaters (non-overlapping) */}
      <motion.img src="/assets/hero/world.png" alt="world" className="hero__float hero__float--world" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 0.9, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ y: bgDrift, x: mouse.x }} />
      <motion.img src="/assets/hero/heart.png" alt="heart" className="hero__float hero__float--heart" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 0.9, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} style={{ y: midDrift, x: mouse.x }} />
      <motion.img src="/assets/hero/video-streaming.png" alt="stream" className="hero__float hero__float--stream" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 0.9, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} style={{ y: reverseDrift, x: mouse.x }} />

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="hero__scroll-text">SCROLL</span>
        <span className="hero__scroll-line" />
      </motion.div>
    </section>
  );
};

export default Hero;
