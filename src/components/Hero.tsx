import { useEffect, useRef, useState } from 'react';
import { motion, useTransform } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useMouseParallax from '../hooks/useMouseParallax';
import useTextCycle from '../hooks/useTextCycle';
import '../styles/Hero.scss';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Hero = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const { x, y } = useMouseParallax(28);
  const slowX = useTransform(x, (value) => value * 0.35);
  const slowY = useTransform(y, (value) => value * 0.35);
  const midX = useTransform(x, (value) => value * 0.65);
  const midY = useTransform(y, (value) => value * 0.65);
  const reverseX = useTransform(x, (value) => value * -0.35);
  const reverseY = useTransform(y, (value) => value * -0.35);

  // Slower cycle for the big hero title
  const cyclingTitle = useTextCycle({ intervalMs: 1200 });

  const heroRef = useRef<HTMLElement>(null);
  const filmLogoRef = useRef<HTMLDivElement>(null);
  const filmOverlayRef = useRef<HTMLDivElement>(null);
  const fixedLogoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  // Cinematic intro animation
  useEffect(() => {
    if (!filmLogoRef.current || !filmOverlayRef.current) return;

    const tl = gsap.timeline({
      defaults: { ease: 'power2.inOut' },
      onComplete: () => setIntroComplete(true),
    });

    // Phase 1: Logo emerges from black (0-2s)
    tl.fromTo(
      filmLogoRef.current,
      { opacity: 0, scale: 0.8, z: -500 },
      { opacity: 1, scale: 1, z: 0, duration: 2 }
    );

    // Phase 2: Dolly zoom out (2-4s)
    tl.to(
      filmLogoRef.current,
      { scale: 0.6, z: -200, duration: 2 },
      '+=0.5'
    );

    // Phase 3: Reveal main site (4-5.5s)
    tl.to(
      filmOverlayRef.current,
      { opacity: 0, duration: 1.5 },
      '-=0.5'
    );

    // Phase 4: Logo to fixed position (5.5-6.5s)
    tl.to(
      filmLogoRef.current,
      {
        scale: 0.2,
        x: '-40vw',
        y: '-42vh',
        duration: 1,
      },
      '-=0.5'
    );

    return () => {
      tl.kill();
    };
  }, []);

  // Scroll parallax after intro
  useEffect(() => {
    if (!introComplete || !fixedLogoRef.current || !contentRef.current || !backgroundRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=150%',
          scrub: 1.5,
          pin: false,
        },
      });

      tl.to(fixedLogoRef.current, {
        rotationY: 15,
        z: -100,
        ease: 'power2.out',
      }, 0);

      tl.to(contentRef.current, {
        opacity: 0,
        y: 100,
        ease: 'power2.in',
      }, 0);

      tl.to(backgroundRef.current, {
        scale: 1.1,
        opacity: 0.6,
        ease: 'power1.out',
      }, 0);
    }, heroRef);

    return () => ctx.revert();
  }, [introComplete]);

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* Film intro overlay */}
      <div className="hero__film-overlay" ref={filmOverlayRef}>
        <div className="hero__film-logo" ref={filmLogoRef}>
          <h1 className="hero__film-title">初音ミク</h1>
          <p className="hero__film-subtitle">Hatsune Miku</p>
        </div>
      </div>

      {/* Background layers */}
      <div className="hero__background" ref={backgroundRef}>
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
      </div>

      {/* Fixed logo (top-left after intro) */}
      <nav className="hero__nav">
        <div className="hero__logo-fixed" ref={fixedLogoRef}>
          <img
            src="/miku/miku-logo.svg"
            alt="Hatsune Miku logo"
            className="hero__logo-img"
          />
          <span className="hero__brand" aria-label="Parallax Demo">Parallax&nbsp;<em>Demo</em></span>
        </div>
        <ul className="hero__menu">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main content */}
      <div className="hero__content" ref={contentRef}>
        <motion.div
          className="hero__intro"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: introComplete ? 1 : 0, y: introComplete ? 0 : 60 }}
          transition={{ duration: 0.8, ease: [0.17, 0.67, 0.12, 0.92] }}
        >
          <div className="hero__badge">Digital idol tribute</div>
          <h1 className="hero__title">
            <span>Welcome to</span>
            <strong className="hero__title-dynamic">{cyclingTitle}</strong>
          </h1>
          <p className="hero__subtitle">
            A cinematic parallax experience celebrating Hatsune Miku&apos;s bubbly mascot persona. Watch layers unfold with depth, explore lore, and connect with the digital diva.
          </p>
          <div className="hero__cta">
            <a href="#about" className="hero__btn hero__btn--primary">Discover More</a>
            <a href="#contact" className="hero__btn hero__btn--ghost">Get in Touch</a>
          </div>
        </motion.div>

        <motion.img
          src="/miku/miku-full-art.png"
          alt="Illustration of Hatsune Miku"
          className="hero__character"
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ 
            opacity: introComplete ? 1 : 0, 
            scale: introComplete ? 1 : 0.9, 
            y: introComplete ? 0 : 40 
          }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          style={{ x: midX, y: midY }}
        />
      </div>

      <motion.img
        src="/miku/miku-silhouette.png"
        alt="Silhouetted Miku"
        className="hero__accent"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: introComplete ? 0.55 : 0, y: introComplete ? 0 : 40 }}
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