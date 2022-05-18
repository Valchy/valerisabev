import Link from 'next/link';
// import './Navbar.module.css';

export default function Navbar() {
	return (
		<header className="header flex-col-center-center fade">
			<div className="container flex-row-center-sBetween">
				<Link href="/">
					<a>
						<b className="fade">VS</b>
					</a>
				</Link>
				<div className="nav-links">
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
					{/* <a className="fade" href="#blog">Blog (ACTUALLY MAKE ONE)</a> */}
				</div>
				<button id="burger" className="open-main-nav" aria-label="Mobile navigation menu">
					<span className="burger"></span>
				</button>
			</div>
			<nav className="main-nav" id="main-nav">
				<ul>
					<li>
						<a href="#about" rel="nofollow">
							About
						</a>
					</li>
					<li>
						<a href="#education" rel="nofollow">
							Education
						</a>
					</li>
					<li>
						<a href="#experience" rel="nofollow">
							Experience
						</a>
					</li>
					{/* <li><a href="#">My Story</a></li> */}
					{/* <li><a href="#">Certification</a></li> */}
					{/* <li><a href="#">Services</a></li> */}
					<li>
						<a href="#contact" rel="nofollow">
							Contact
						</a>
					</li>
					{/* <li><a href="#blog">Blog</a></li> */}
				</ul>
			</nav>
		</header>
	);
}
