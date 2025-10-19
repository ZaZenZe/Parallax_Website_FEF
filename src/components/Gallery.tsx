import { motion } from 'motion/react';
import '../styles/Gallery.scss';

type GalleryItem = {
  id: number;
  title: string;
  caption: string;
  image: string;
};

const items: GalleryItem[] = [
  {
    id: 1,
    title: 'Starlight Stage',
    caption: 'A holographic encore captured in teal and violet haze.',
    image: '/miku/miku-silhouette.png',
  },
  {
    id: 2,
    title: 'Project Diva Bloom',
    caption: 'Classic outfit, energetic pose—Miku in full performance mode.',
    image: '/miku/hatsune-miku-project-diva-f.png',
  },
  {
    id: 3,
    title: 'Soft Light Sketch',
    caption: 'A calm moment reminding us that even digital idols rest.',
    image: '/miku/hatsune-miku-thinking.png',
  },
];

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <motion.div
        className="gallery__intro"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <span className="gallery__eyebrow">Mini showcase</span>
        <h2 className="gallery__title">Snapshots from the fan vault</h2>
        <p className="gallery__text">
          A tight selection of visuals to keep the scroll light. Soft gradients and neon trims echo Miku&apos;s palette without letting assets clash.
        </p>
      </motion.div>

      <div className="gallery__strip">
        {items.map((item, index) => (
          <motion.figure
            key={item.id}
            className="gallery__item"
            initial={{ opacity: 0, y: 50, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ delay: index * 0.12, duration: 0.6 }}
          >
            <div className="gallery__frame">
              <img src={item.image} alt={item.title} />
            </div>
            <figcaption>
              <h3>{item.title}</h3>
              <p>{item.caption}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
