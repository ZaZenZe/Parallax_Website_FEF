import { motion } from 'motion/react';
import '../styles/Works.scss';

const featuredWorks = [
  {
    title: 'Urban Dreams',
    category: 'Photography',
    image: '/assets/gallery/works_thumnail_01.jpg',
  },
  {
    title: 'Digital Flow',
    category: 'Motion Design',
    image: '/assets/gallery/works_thumnail_02.jpg',
  },
  {
    title: 'Chromatic Waves',
    category: '3D Art',
    image: '/assets/gallery/works_thumnail_03.jpg',
  },
  {
    title: 'Future Vision',
    category: 'Installation',
    image: '/assets/gallery/works_thumnail_04.jpg',
  },
];

const Works = () => {
  const letters = 'SELECTED WORKS'.split('');

  return (
    <section className="works" id="works">
      <div className="works__container">
        <motion.h2
          className="works__title"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              className="works__title-char"
              initial={{ opacity: 0, y: 80, rotateX: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h2>

        <div className="works__grid">
          {featuredWorks.map(({ title, category, image }) => (
            <motion.article
              key={title}
              className="works__item"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="works__image">
                <img src={image} alt={title} />
                <div className="works__overlay">
                  <span>{category}</span>
                </div>
              </div>
              <div className="works__info">
                <h3>{title}</h3>
                <span className="works__arrow">→</span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.a
          href="#gallery"
          className="works__cta"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          View all works
        </motion.a>
      </div>
    </section>
  );
};

export default Works;
