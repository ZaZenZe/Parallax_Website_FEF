import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import '../styles/Hero.scss';

const heroWords = 'CREATIVE'.split('');
const heroOutlineWords = 'STUDIO'.split('');

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const fadeOut = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const shapeDrift = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const mediaLeftY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const mediaRightY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <motion.div className="hero__background" style={{ opacity: fadeOut }} />

      <motion.div className="hero__shapes" style={{ y: shapeDrift }}>
        <img src="/assets/hero/abstract-shape.png" alt="Abstract shard" className="hero__shape hero__shape--a" />
        <img src="/assets/hero/geometric-shapes.png" alt="Geometric pattern" className="hero__shape hero__shape--b" />
        <img src="/assets/hero/cube-abstract-shape.png" alt="Cube" className="hero__shape hero__shape--c" />
        <img src="/assets/hero/spiral.png" alt="Spiral" className="hero__shape hero__shape--d" />
      </motion.div>

      <motion.div className="hero__content" style={{ y: translateY, opacity: fadeOut }}>
        <div className="hero__heading">
          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.17, 0.67, 0.12, 0.82] }}
          >
            <span className="hero__word">
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

            <span className="hero__word hero__word--outline">
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

        <div className="hero__media">
          <motion.img
            src="/assets/hero/works_3d_model_01.png"
            alt="Floating sculpture"
            className="hero__media-item hero__media-item--left"
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 0.75, scale: 1, rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
            style={{ y: mediaLeftY }}
          />
          <motion.img
            src="/assets/hero/works_3d_model_02.png"
            alt="Floating sculpture"
            className="hero__media-item hero__media-item--right"
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 0.75, scale: 1, rotate: -360 }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            style={{ y: mediaRightY }}
          />
        </div>
      </motion.div>

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
