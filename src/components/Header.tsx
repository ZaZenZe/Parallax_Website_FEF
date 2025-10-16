import { motion } from 'motion/react';
import { useState } from 'react';
import '../styles/Header.scss';

const navigationItems = [
	{ label: 'Home', href: '#hero' },
	{ label: 'About', href: '#about' },
	{ label: 'Works', href: '#works' },
	{ label: 'Gallery', href: '#gallery' },
	{ label: 'Contact', href: '#contact' },
];

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

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
				>
					Creative Studio
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
