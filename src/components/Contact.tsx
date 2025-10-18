import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Contact.scss';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const mikuRef = useRef<HTMLImageElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !mikuRef.current || !bubbleRef.current) return;

    const ctx = gsap.context(() => {
      // Hanging Miku animation: pops out on scroll down, retracts on scroll up
      gsap.fromTo(
        mikuRef.current,
        {
          y: -280,
          opacity: 0,
          scale: 0.85,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'top 20%',
            scrub: 1.2,
            toggleActions: 'play reverse play reverse',
          },
        }
      );

      // Speech bubble appears slightly after Miku
      gsap.fromTo(
        bubbleRef.current,
        {
          opacity: 0,
          y: -20,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            end: 'top 15%',
            scrub: 0.8,
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact__bg" aria-hidden="true" />

      <div className="contact__content">
        <span className="contact__eyebrow">Get in touch</span>
        <h2 className="contact__title">
          Let's connect and create <span>something amazing</span>
        </h2>
        <p className="contact__text">
          Whether you're a fellow Miku fan, a developer exploring parallax, or just curious—drop a message and let's chat about digital idols,
          web magic, or anything in between.
        </p>

        <form className="contact__form">
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="your@email.com" required />
          </div>
          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Tell me what's on your mind..." rows={5} required />
          </div>
          <button type="submit" className="contact__submit">
            Send Message
          </button>
        </form>
      </div>

      <img
        ref={mikuRef}
        src="/miku/miku-hanging.png"
        alt="Miku Dayo hanging from above"
        className="contact__miku"
      />

      <div ref={bubbleRef} className="contact__bubble">
        <span className="contact__bubble-text">It's me mikuuu</span>
      </div>
    </section>
  );
};

export default Contact;
