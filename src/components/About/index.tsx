import Link from 'next/link';
import Image from 'next/image';
// import './About.module.css';

export default function About() {
	return (
		<section id="about" className="flex-col-center-center">
			<div className="container">
				<div className="flex-col">
					<div className="flex-row-center-sBetween">
						<h2 className="section-title">ABOUT ME</h2>
						<div className="line"></div>
					</div>
					<div className="flex-row about-text-wrapper">
						<p className="fGrow">
							&#x3c; Hey_there /&#x3e; my name is Valeri Sabev and I am a full stack web developer from Bulgaria.
							<wbr /> Currently, I am a student at{' '}
							<Link href="https://harbour.space/" target="_BLANK">
								<a>Harbour.Space</a>
							</Link>{' '}
							university <wbr /> in Barcelona, Spain studying Computer Science, Cyber Security and High-tech entrepreneurship.{' '}
							<wbr /> <br />
							<br />
							My areas of expertise include the fundamental web development tool kit as well as react.js and jQuery for
							<wbr /> fast and responsive frontend development. For a secure and reliable backend I use node.js, python and
							MySQL. <wbr /> In addition to this, I have also acquired valuable cyber security, pentesting and digital
							marketing skills. <wbr />
							<br />
							<br />
							• Started coding when I was 15 years old but <wbr /> got my hands on a computer when I was just eight.
							<br />
							• Tennis has been in my life for over 10 years <wbr /> as I have also competed in numerous tournaments.
							<br />
							• My hobbies include extreme water sports such as <wbr /> windsurfing, kitesurfing and wakeboarding.
							<br />
							• I enjoy gaming and it has always been a passion of mine to play with friends.
							<br />
							• Recently got myself into crypto currencies <wbr /> as I find the blockchain technology fascinating.
						</p>
						<img defer src="/imgs/about_pic.jpg" alt="Happy summer photo of Valeri Sabev" />
					</div>
				</div>
			</div>
		</section>
	);
}
