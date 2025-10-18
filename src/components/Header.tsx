import { motion, useScroll, useTransform } from 'motion/react';
import { useState } from 'react';
import '../styles/Header.scss';
import useFontCycle from '../hooks/useFontCycle';

const navigationItems = [
	{ label: 'Home', href: '#hero' },
	{ label: 'About', href: '#about' },
	{ label: 'Works', href: '#works' },
	{ label: 'Gallery', href: '#gallery' },
	{ label: 'Contact', href: '#contact' },
];

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// subtle parallax on logo with page scroll
	const { scrollYProgress } = useScroll();
		const logoScale = useTransform(scrollYProgress, [0, 0.2, 1], [1.04, 1, 0.96]);
	const logoRotate = useTransform(scrollYProgress, [0, 1], [0, -6]);

	// funky font cycling
		const logoFont = useFontCycle({ intervalMs: 500 });

	const toggleMenu = () => setIsMenuOpen((prev) => !prev);
	const closeMenu = () => setIsMenuOpen(false);

	return (
		<header className="header">
			<div className="header__container">
				<motion.a
					href="#hero"
					className="header__logo"
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					onClick={closeMenu}
					style={{ scale: logoScale, rotate: logoRotate, fontFamily: logoFont }}
				>
					Parallax Website
				</motion.a>

				<nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
					<ul className="header__menu">
						{navigationItems.map(({ label, href }, index) => (
							<motion.li
								key={href}
								className="header__menu-item"
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
							>
								<a href={href} onClick={closeMenu}>
									<span className="header__menu-index">0{index + 1}</span>
									<span className="header__menu-label">{label}</span>
								</a>
							</motion.li>
						))}
					</ul>
				</nav>

				<button
					type="button"
					className={`header__burger ${isMenuOpen ? 'header__burger--active' : ''}`}
					onClick={toggleMenu}
					aria-label="Toggle navigation"
				>
					<span />
					<span />
					<span />
				</button>
			</div>
		</header>
	);
};

export default Header;
