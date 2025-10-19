import { motion } from 'motion/react';
import '../styles/About.scss';

type Fact = {
  id: string;
  title: string;
  highlight: string;
  description: string;
};

const facts: Fact[] = [
  {
    id: '01',
    title: 'Vocaloid Pioneer',
    highlight: '2007 debut',
    description:
      'Hatsune Miku launched as a voicebank in 2007 and quickly became the face of the Vocaloid movement, inspiring a global wave of fan music.',
  },
  {
    id: '02',
    title: 'Crowd-Sourced Star',
    highlight: '10k+ producers',
    description:
      'Thousands of creators contribute songs, illustrations, and stories. Miku exists because a passionate community keeps imagining new performances for her.',
  },
  {
    id: '03',
    title: 'Live In Hologram',
    highlight: 'World tours',
    description:
      'From Tokyo to Los Angeles, Miku has taken the stage as a holographic performer, complete with bandmates, choreography, and cheering glow-stick seas.',
  },
  {
    id: '04',
    title: 'Name With Meaning',
    highlight: 'Future sound',
    description:
      '"Hatsune" means first sound and "Miku" hints at the future, a promise that new voices and ideas will keep emerging from her digital persona.',
  },
];

const About = () => {
  return (
    <section className="about" id="about">
      <motion.div
        className="about__intro"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7 }}
      >
        <span className="about__eyebrow">Lore fragments</span>
        <h2 className="about__title">
          Snapshots from the <span>world of Miku Dayo</span>
        </h2>
        <p className="about__text">
          A brief stroll through the highlights—community-powered music, holographic stages, and the future-forward spirit that defines Hatsune Miku.
        </p>
      </motion.div>

      <div className="about__grid">
        {facts.map((fact, index) => (
          <motion.article
            key={fact.id}
            className="about__card"
            initial={{ opacity: 0, y: 40, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <header className="about__card-header">
              <span className="about__badge">{fact.id}</span>
              <span className="about__highlight">{fact.highlight}</span>
            </header>
            <h3 className="about__card-title">{fact.title}</h3>
            <p className="about__card-text">{fact.description}</p>
          </motion.article>
        ))}
      </div>

      <motion.img
        src="/miku/miku-peeking.png"
        alt="Chibi Miku peeking"
        className="about__mascot"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
    </section>
  );
};

export default About;

