import { motion } from 'motion/react';
import '../styles/About.scss';

const stats = [
  { label: 'Projects', value: '15+' },
  { label: 'Years', value: '5+' },
  { label: 'Concepts', value: '100+' },
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__media">
          <motion.img
            src="/assets/hero/abstract-glass-shape.png"
            alt="Abstract glass"
            className="about__shape about__shape--primary"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <motion.img
            src="/assets/hero/world.png"
            alt="World icon"
            className="about__shape about__shape--secondary"
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
          <motion.img
            src="/assets/hero/thinking.png"
            alt="Thinking icon"
            className="about__shape about__shape--accent"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </div>

        <div className="about__content">
          <motion.span
            className="about__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About the studio
          </motion.span>

          <motion.h2
            className="about__title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            We craft immersive digital stories with bold motion and thoughtful detail.
          </motion.h2>

          <motion.p
            className="about__description"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            From interactive installations to narrative-driven product launches, our multidisciplinary team explores the borders of design, technology, and art direction. Every concept is tuned for emotional impact and lasting impressions.
          </motion.p>

          <motion.div
            className="about__stats"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            {stats.map(({ label, value }) => (
              <div key={label} className="about__stat">
                <span className="about__stat-value">{value}</span>
                <span className="about__stat-label">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
