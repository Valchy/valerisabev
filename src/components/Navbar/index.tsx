import { useState, useEffect } from 'react';
import { useViewportScroll, motion } from 'framer-motion';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './Navbar.module.css';
import type { GetMainPageQuery } from '@generated/graphql';

type NavItem = {
	title: string;
	link: string;
	openInNewTab: boolean;
};

interface NavbarProps {
	navbarData: any;
	locale: string;
	// NonNullable<GetMainPageQuery['page']>['localizations']
}

export default function Navbar({ navbarData, locale }: NavbarProps) {
	const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
	const [navbarOverlay, setNavbarOverlay] = useState(false);
	const { scrollY } = useViewportScroll();

	useEffect(() => {
		if (scrollY.get() > 40 && !navbarOverlay) setNavbarOverlay(true);

		return scrollY.onChange(() => {
			if (scrollY.get() > 40 && !navbarOverlay) setNavbarOverlay(true);
			else if (scrollY.get() <= 40 && navbarOverlay) setNavbarOverlay(false);
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
					<b className="fade">{navbarData.initials}</b>
				</Link>
				<nav className={styles.nav_links}>
					{navbarData.navItems
						.filter(({ display }: { display: boolean }) => display)
						.map(({ title, link, openInNewTab }: any) => (
							<a className="fade" href={link} rel="noreferrer nofollow" target={openInNewTab ? '_BLANK' : '_SELF'} key={link}>
								{title}
							</a>
						))}
					<Link href="/" locale={locale === 'en' ? 'bg' : 'en'} rel="noreferrer nofollow">
						<span className={classNames(styles.locale, 'fade')}>{locale === 'bg' ? 'BG' : 'EN'}</span>
					</Link>
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
					{navbarData.navItems
						.filter(({ display }: { display: boolean }) => display)
						.map(({ title, link, openInNewTab }: any) => (
							<li key={`mobile-link-${link}`}>
								<a
									onClick={toggleBurgerMenu}
									href={link}
									rel="noreferrer nofollow"
									target={openInNewTab ? '_BLANK' : '_SELF'}
								>
									{title}
								</a>
							</li>
						))}
				</ul>
				<Link href="/" locale={locale === 'en' ? 'bg' : 'en'} rel="noreferrer nofollow">
					<div className={classNames(styles.locale_mobile, openBurgerMenu && styles.is_open_locale)}>
						{locale === 'bg' ? 'BG' : 'EN'}
					</div>
				</Link>
			</nav>
		</motion.header>
	);
}
