import { motion } from 'motion/react';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer__container">
        <motion.div
          className="footer__heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Let us craft your next big idea.</h2>
          <a href="mailto:hello@creativestudio.com">hello@creativestudio.com</a>
        </motion.div>

        <div className="footer__grid">
          <motion.div
            className="footer__column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3>Visit</h3>
            <p>
              99 Parallax Avenue
              <br />
              Paris, France
            </p>
          </motion.div>

          <motion.div
            className="footer__column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3>Follow</h3>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Behance</a></li>
              <li><a href="#">Dribbble</a></li>
            </ul>
          </motion.div>

          <motion.div
            className="footer__column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3>Navigate</h3>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#works">Works</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </motion.div>
        </div>

        <div className="footer__meta">
          <span>© {new Date().getFullYear()} Creative Studio. All rights reserved.</span>
          <div className="footer__badges">
            <span className="footer__badge footer__badge--magenta" />
            <span className="footer__badge footer__badge--cyan" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
