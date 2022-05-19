import { useEffect, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './Navbar.module.css';

export default function Navbar() {
	const [navbarOverlay, setNavbarOverlay] = useState(false);
	const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

	useEffect(() => {
		const toggleNavbar = () => {
			if (window.scrollY > 48 && !navbarOverlay) setNavbarOverlay(true);
			else if (navbarOverlay) setNavbarOverlay(false);
		};

		toggleNavbar();
		window.addEventListener('scroll', toggleNavbar);
		return () => window.removeEventListener('scroll', toggleNavbar);
	}, [navbarOverlay]);

	const toggleBurgerMenu = () => {
		setOpenBurgerMenu((prevState) => !prevState);
	};

	return (
		<header className={classNames(navbarOverlay && 'header_scrolled', styles.header, 'flex-col-center-center fade')}>
			<div className="container flex-row-center-sBetween">
				<Link href="/">
					<b className="fade">VS</b>
				</Link>
				<nav className={styles.nav_links}>
					<a className="fade" href="#about" rel="nofollow">
						About
					</a>
					<a className="fade" href="#education" rel="nofollow">
						Education
					</a>
					<a className="fade" href="#experience" rel="nofollow">
						Experience
					</a>
					{/* <a className="fade" href="#story">My Story</a> */}
					{/* <a className="fade" href="#certification">Certification</a> */}
					{/* <a className="fade" href="#services">Services</a> */}
					<a className="fade" href="#contact" rel="nofollow">
						Contact
					</a>
					{/* <a className="fade" href="https://blog.valerisabev.com/">Blog</a> */}
				</nav>
				<button
					onClick={toggleBurgerMenu}
					className={classNames(styles.open_main_nav, openBurgerMenu && styles.is_open)}
					aria-label="Mobile navigation menu"
				>
					<span className={styles.burger}></span>
				</button>
			</div>
			<nav className={classNames(styles.main_nav, openBurgerMenu && styles.is_open)}>
				<ul>
					<li>
						<a onClick={toggleBurgerMenu} href="#about" rel="nofollow">
							About
						</a>
					</li>
					<li>
						<a onClick={toggleBurgerMenu} href="#education" rel="nofollow">
							Education
						</a>
					</li>
					<li>
						<a onClick={toggleBurgerMenu} href="#experience" rel="nofollow">
							Experience
						</a>
					</li>
					{/* <li><a href="#">My Story</a></li> */}
					{/* <li><a href="#">Certification</a></li> */}
					{/* <li><a href="#">Services</a></li> */}
					<li>
						<a onClick={toggleBurgerMenu} href="#contact" rel="nofollow">
							Contact
						</a>
					</li>
					{/* <li><a href="#blog">Blog</a></li> */}
				</ul>
			</nav>
		</header>
	);
}
