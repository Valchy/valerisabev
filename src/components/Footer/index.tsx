import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

interface FooterProps {
	footerData: any;
}

export default function Footer({ footerData }: FooterProps) {
	return (
		<footer className={classNames(styles.footer, 'flex-col-center-none')}>
			<div className={classNames(styles.footer_data, 'flex-row-none-sBetween container')}>
				<div className={classNames(styles.footer_contact_info, 'flex-col-fStart-none')}>
					<b> Contact Info </b>
					<div className="flex-col">
						<span>contact@valerisabev.com</span>
						<span>Freelancing student in</span>
						<span>Barcelona, Spain</span>
					</div>
				</div>
				<div className={classNames(styles.footer_social_media, 'flex-col-center-none')}>
					<b> Social Media </b>
					<div className="flex-row-center-center">
						<a
							rel="noreferrer"
							href="https://www.facebook.com/ValchyGaming/"
							target="_BLANK"
							className={classNames(styles.footer_social_link, 'fade')}
						>
							<img src="/imgs/facebook-icon.svg" alt="Facebook social media" />
						</a>
						<a
							rel="noreferrer"
							href="https://www.instagram.com/valeri_sabev/"
							target="_BLANK"
							className={classNames(styles.footer_social_link, 'fade')}
						>
							<img src="/imgs/instagram-icon.svg" alt="Instagram social media" />
						</a>
						<a
							rel="noreferrer"
							href="https://github.com/Valchy"
							target="_BLANK"
							className={classNames(styles.footer_social_link, 'fade')}
						>
							<img src="/imgs/github-icon.svg" alt="GitHub" />
						</a>
						<a
							rel="noreferrer"
							href="https://www.linkedin.com/in/valerisabev"
							target="_BLANK"
							className={classNames(styles.footer_social_link, 'fade')}
						>
							<img src="/imgs/linkedin-icon.svg" alt="LinkedIn" />
						</a>
					</div>
				</div>
				<div className={classNames(styles.footer_links, 'flex-col-fEnd-none')}>
					<b> Links </b>
					<div className={classNames('flex-col-fEnd-none')}>
						<a rel="noreferrer" href="assets/valeri-sabev-cv.pdf" target="_BLANK">
							Check out my CV
						</a>
						<Link href="#education">
							<a href="#education">My Education</a>
						</Link>
						<Link href="#experience">
							<a href="#experience">My Experience</a>
						</Link>
					</div>
				</div>
			</div>

			<div className={classNames(styles.copyright, 'flex-row-center-center container')}>
				<p>
					Copyright ©{new Date().getFullYear()}
					<br />
					All rights reserved | Valeri Sabev
				</p>
			</div>
		</footer>
	);
}
