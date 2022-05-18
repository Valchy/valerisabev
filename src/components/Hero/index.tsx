// import './Hero.module.css';

export default function Hero() {
	return (
		<section id="home" className="flex-col-center-center">
			<div className="container flex-col-center-center">
				<h1 className="page-title">
					<span> Hello, I&apos;m </span>
					<br />
					<b> Valeri Sabev </b>
				</h1>
				<p className="page-description">
					<span>
						<b> # </b> Full Stack Web Development{' '}
					</span>
					<span>
						<b> # </b> Cyber Security
					</span>
					<br />
					<span>
						<b> # </b> Blockchain{' '}
					</span>
					<span>
						<b> # </b> High-tech entrepreneurship{' '}
					</span>
					<span>
						<b> # </b> SEO{' '}
					</span>
				</p>
				<div className="cv-wrapper">
					<a className="cv-btn" href="assets/valeri-sabev-cv.pdf" target="_BLANK">
						Take a look at my CV
					</a>
				</div>
			</div>
		</section>
	);
}
