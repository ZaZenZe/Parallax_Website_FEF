import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/ParallaxBackground.scss';

gsap.registerPlugin(ScrollTrigger);

const ParallaxBackground = () => {
  const bgContainerRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bgContainerRef.current || !layer1Ref.current || !layer2Ref.current || !layer3Ref.current) return;

    const heroSection = document.querySelector<HTMLElement>('#home');
    const aboutSection = document.querySelector<HTMLElement>('#about');
    const contactSection = document.querySelector<HTMLElement>('#contact');

    if (!heroSection || !aboutSection || !contactSection) return;

    const ctx = gsap.context(() => {
      gsap.set(layer1Ref.current, { opacity: 1, scale: 1, y: 0 });
      gsap.set(layer2Ref.current, { opacity: 0, scale: 1.05, y: 20 });
      gsap.set(layer3Ref.current, { opacity: 0, scale: 1.08, y: 40 });

      // Hero background gently eases out as About section approaches
      gsap.timeline({
        scrollTrigger: {
          trigger: aboutSection,
          start: 'top bottom',
          end: 'top center',
          scrub: 1.3,
        },
      }).to(layer1Ref.current, {
        opacity: 0,
        scale: 1.08,
        y: 120,
        ease: 'none',
      });

      // About background gradually fades in, then out before Contact
      gsap.timeline({
        scrollTrigger: {
          trigger: aboutSection,
          start: 'top bottom',
          end: 'center center',
          scrub: 1.3,
        },
      }).fromTo(
        layer2Ref.current,
        {
          opacity: 0,
          scale: 1.05,
          y: 40,
        },
        {
          opacity: 0.65,
          scale: 1,
          y: 0,
          ease: 'none',
        }
      );

      gsap.timeline({
        scrollTrigger: {
          trigger: contactSection,
          start: 'top bottom',
          end: 'center center',
          scrub: 1.3,
        },
      }).to(layer2Ref.current, {
        opacity: 0,
        scale: 1.03,
        y: 100,
        ease: 'none',
      });

      // Contact background builds in more slowly for a calm finish
      gsap.timeline({
        scrollTrigger: {
          trigger: contactSection,
          start: 'top bottom',
          end: 'bottom center',
          scrub: 1.3,
        },
      }).fromTo(
        layer3Ref.current,
        {
          opacity: 0,
          scale: 1.08,
          y: 60,
        },
        {
          opacity: 0.55,
          scale: 1,
          y: 0,
          ease: 'none',
        }
      );

      // Gentle parallax drift for each layer across the whole page
      gsap.to(layer1Ref.current, {
        y: 110,
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 2,
        },
      });

      gsap.to(layer2Ref.current, {
        y: 140,
        scrollTrigger: {
          trigger: aboutSection,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2.2,
        },
      });

      gsap.to(layer3Ref.current, {
        y: 120,
        scrollTrigger: {
          trigger: contactSection,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2.4,
        },
      });
    }, bgContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="parallax-bg" ref={bgContainerRef}>
      <div className="parallax-bg__layer parallax-bg__layer--1" ref={layer1Ref}>
        <img src="/layers/bg_miku.jpg" alt="" />
      </div>
      <div className="parallax-bg__layer parallax-bg__layer--2" ref={layer2Ref}>
        <img src="/layers/Hero_BG(3).jpeg" alt="" />
      </div>
      <div className="parallax-bg__layer parallax-bg__layer--3" ref={layer3Ref}>
        <img src="/layers/Hero_BG(4).jpeg" alt="" />
      </div>
    </div>
  );
};

export default ParallaxBackground;
