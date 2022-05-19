import { useState, useEffect } from 'react';
import { useViewportScroll, motion } from 'framer-motion';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './Navbar.module.css';

export default function Navbar() {
	const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
	const [navbarOverlay, setNavbarOverlay] = useState(false);
	const { scrollY } = useViewportScroll();

	useEffect(() => {
		return scrollY.onChange(() => {
			if (scrollY?.current > 48 && !navbarOverlay) setNavbarOverlay(true);
			else if (scrollY?.current <= 48 && navbarOverlay) setNavbarOverlay(false);
		});
	}, [scrollY, navbarOverlay]);

	const toggleBurgerMenu = () => {
		setOpenBurgerMenu((prevState) => !prevState);
	};

	return (
		<motion.header
			animate={navbarOverlay ? { backgroundColor: '#000' } : {}}
			transition={{ duration: 0.3 }}
			className={classNames(styles.header, 'flex-col-center-center fade')}
		>
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
		</motion.header>
	);
}
