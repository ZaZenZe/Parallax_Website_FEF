import { motion } from 'motion/react';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <motion.div
          className="footer__heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span className="footer__label">Thanks for visiting</span>
          <h2>Miku Dayo says bye-bye~</h2>
        </motion.div>

        <motion.p
          className="footer__note"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Keep the rhythm alive, support your favourite producers, and never stop sharing the glow-stick energy. This tiny site closes here so the focus stays on the music.
        </motion.p>

        <div className="footer__meta">
          <span>Crafted with teal dreams · {new Date().getFullYear()}</span>
          <div className="footer__links">
            <a href="#home">Back to top</a>
            <a href="#facts">Jump to facts</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
