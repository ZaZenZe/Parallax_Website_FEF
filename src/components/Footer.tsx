import { motion } from 'motion/react';
import { useFontCycle } from '../hooks/useFontCycle';
import '../styles/Footer.scss';

const Footer = () => {
  const dynamicFont = useFontCycle({ intervalMs: 500 });

  return (
    <footer className="footer">
      <div className="footer__inner">
        <motion.div
          className="footer__credits"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="footer__credits-text neon-shift" style={{ fontFamily: dynamicFont }}>
            This website is made as a project for school purposes.
          </p>
          <p className="footer__credits-text neon-shift" style={{ fontFamily: dynamicFont }}>
            Hatsune Miku is a registered trademark of Crypton Future Media, Inc.
          </p>
          <p className="footer__credits-signature neon-shift" style={{ fontFamily: dynamicFont }}>
            Made by Ricky SDE
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
