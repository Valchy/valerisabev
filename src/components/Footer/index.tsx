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
						<Link href="https://www.facebook.com/ValchyGaming/" target="_BLANK">
							<a className="footer-social-link fade">
								<img defer src="/imgs/facebook-icon.svg" alt="Facebook social media icon" />
							</a>
						</Link>
						<Link href="https://www.instagram.com/valeri_sabev/" target="_BLANK">
							<a className="footer-social-link fade">
								<img defer src="/imgs/instagram-icon.svg" alt="Instagram social media icon" />
							</a>
						</Link>
						<Link href="https://github.com/Valchy" target="_BLANK">
							<a className="footer-social-link fade">
								<img defer src="/imgs/github-icon.svg" alt="GitHub icon" />
							</a>
						</Link>
						<Link href="https://www.linkedin.com/in/valerisabev" target="_BLANK">
							<a className="footer-social-link fade">
								<img defer src="/imgs/linkedin-icon.svg" alt="LinkedIn icon" />
							</a>
						</Link>
					</div>
				</div>
				<div className="flex-col-fEnd-none footer-links">
					<b> Links </b>
					<div className="flex-col-fEnd-none">
						<Link href="assets/valeri-sabev-cv.pdf" target="_BLANK">
							<a>Check out my CV</a>
						</Link>
						<Link href="#education">
							<a>My Education</a>
						</Link>
						<Link href="#experience">
							<a>My Experience</a>
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
