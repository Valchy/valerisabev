import Image from 'next/image';
import Link from 'next/link';
// import './Footer.module.css';

export default function Footer() {
	return (
		<footer className="footer flex-col-center-none">
			<div className="flex-row-none-sBetween container footer-data">
				<div className="flex-col-fStart-none footer-contact-info">
					<b> Contact Info </b>
					<div className="flex-col">
						<span>contact@valerisabev.com</span>
						<span>Freelancing student in</span>
						<span>Barcelona, Spain</span>
					</div>
				</div>
				<div className="flex-col-center-none footer-social-media">
					<b> Social Media </b>
					<div className="flex-row-center-center">
						<a
							rel="noreferrer"
							href="https://www.facebook.com/ValchyGaming/"
							target="_BLANK"
							className="footer-social-link fade"
						>
							<img /* defer */ src="/imgs/facebook-icon.svg" alt="Facebook social media icon" />
						</a>
						<a
							rel="noreferrer"
							href="https://www.instagram.com/valeri_sabev/"
							target="_BLANK"
							className="footer-social-link fade"
						>
							<img /* defer */ src="/imgs/instagram-icon.svg" alt="Instagram social media icon" />
						</a>
						<a rel="noreferrer" href="https://github.com/Valchy" target="_BLANK" className="footer-social-link fade">
							<img /* defer */ src="/imgs/github-icon.svg" alt="GitHub icon" />
						</a>
						<a
							rel="noreferrer"
							href="https://www.linkedin.com/in/valerisabev"
							target="_BLANK"
							className="footer-social-link fade"
						>
							<img /* defer */ src="/imgs/linkedin-icon.svg" alt="LinkedIn icon" />
						</a>
					</div>
				</div>
				<div className="flex-col-fEnd-none footer-links">
					<b> Links </b>
					<div className="flex-col-fEnd-none">
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

			<div className="flex-row-center-center container copyright">
				<p>
					Copyright ©{new Date().getFullYear()}
					<br className="hide-on-desktop" />
					All rights reserved | Valeri Sabev
				</p>
			</div>
		</footer>
	);
}
