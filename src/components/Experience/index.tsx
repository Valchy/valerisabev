import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './Experience.module.css';

export default function Experience() {
	return (
		<section id="experience" className={classNames(styles.experience, 'flex-col-center-center')}>
			<div className="container">
				<div className="line"></div>
				<h2 className="section-title">EXPERIENCE</h2>
				<div className="flex-row">
					<div className="flex-col-center-none">
						<Link href="https://bauwerksolutions.com/" target="_BLANK">
							<a rel="noreferrer" href="https://bauwerksolutions.com/" target="_BLANK">
								<img
									className={classNames(styles.company_img)}
									src="/imgs/bauwerk-building-solutions.png"
									alt="Logo of Bauwerk Building Solutions"
								/>
							</a>
						</Link>
						<div className={classNames(styles.connection_line)}></div>
					</div>
					<div className={classNames(styles.experience_item)}>
						<h3>Full Stack Web Development</h3>
						<h4 className={classNames(styles.exp_desktop)}>Bauwerk Building Solutions | United States | Dec 2020 - Today</h4>
						<h4 className={classNames(styles.exp_mobile)}>
							Bauwerk Building Solutions <br />
							United States | Dec 2020 - Today
						</h4>
						<ul>
							<li>Developed an e-commerce website with secure custom functionalities.</li>
							<li>Utilised Next.js with React.js to perform server-side rendering and optimise to SEO strategies.</li>
							<li>Built a sophisticated admin dashboard for static content generation.</li>
							<li>Implemented Git for our distributed version-control system and MySQL as our database.</li>
							<li>Debugged and performed integration testing before deployment.</li>
						</ul>
					</div>
				</div>
				<div className="flex-row">
					<div className="flex-col-center-none">
						<Link href="https://bauwerksolutions.com/" target="_BLANK">
							<a rel="noreferrer" href="https://bauwerksolutions.com/" target="_BLANK">
								<img
									className={classNames(styles.company_img)}
									src="/imgs/bauwerk-building-solutions.png"
									alt="Logo of Bauwerk Building Solutions"
								/>
							</a>
						</Link>
						<div className={classNames(styles.connection_line)}></div>
					</div>
					<div className={classNames(styles.experience_item)}>
						<h3>Frontend React.js Web Development</h3>
						<h4 className={classNames(styles.exp_desktop)}>Bauwerk Building Solutions | United States | May 2019 - Dec 2020</h4>
						<h4 className={classNames(styles.exp_mobile)}>
							Bauwerk Building Solutions <br />
							United States | May 2019 - Dec 2020
						</h4>
						<ul>
							<li>Engineered a complex configurator with 2D algorithmic graphical animations using p5.js.</li>
							<li>Created a practical dashboard for data management and data analysis.</li>
							<li>Implemented SEO strategies and marketing tools to increase sales.</li>
							<li>Implemented marketing tools SEO and SPA practices to increase sales.</li>
							<li>Provided a stunning UI and UX by using React.js, JavaScript, jQuery, html, css, json and ajax.</li>
							<li>Planned out website development, converting designs into a usable responsive website.</li>
							<li>Managed team communications and information for remote meetings within Slack.</li>
						</ul>
					</div>
				</div>
				<div className="flex-row">
					<div className="flex-col-center-none">
						<Link href="http://www.eurorisksystems.com/" target="_BLANK">
							<a rel="noreferrer" href="http://www.eurorisksystems.com/" target="_BLANK">
								<img
									/* defer */ className={classNames(styles.company_img)}
									src="/imgs/eurorisk-systems.jpg"
									alt="Logo of Eurorisk Systems ltd."
								/>
							</a>
						</Link>
						<div className={classNames(styles.connection_line)}></div>
					</div>
					<div className={classNames(styles.experience_item)}>
						<h3>Frontend Web Development</h3>
						<h4 className={classNames(styles.exp_desktop)}>Eurorisk Systems | Varna, Bulgaria | Apr. 2018 - June 2018</h4>
						<h4 className={classNames(styles.exp_mobile)}>
							Eurorisk Systems <br />
							Varna, Bulgaria | Apr. 2018 - June 2018
						</h4>
						<ul>
							<li>Utilised Three.js to animate 3D computer graphics in a web browser using WebGL.</li>
							<li>Accomplished a beautiful website interface with javascript, jQuery, html, css, json and ajax.</li>
							<li>Built a rich component admin dashboard with the dhtmlx.js framework.</li>
							<li>Ran debugging tests to eliminate flaws and catch out glitches prior to publishing the code.</li>
							<li>Demonstrated responsiveness across Chrome, Safari, Firefox and other common browsers.</li>
							<li>Kept work areas clean, organized and safe to promote efficiency and team safety.</li>
						</ul>
					</div>
				</div>
				<div className="flex-row">
					<div className="flex-col-center-none">
						<Link href="https://www.transcard.bg/en/" target="_BLANK">
							<a rel="noreferrer" href="https://www.transcard.bg/en/" target="_BLANK">
								<img
									className={classNames(styles.company_img)}
									src="/imgs/transcard-financial-services.webp"
									alt="Logo of Transcard Financial Services"
								/>
							</a>
						</Link>
						<div className={classNames(styles.connection_line)}></div>
					</div>
					<div className={classNames(styles.experience_item)}>
						<h3>Full Stack Web Development</h3>
						<h4 className={classNames(styles.exp_desktop)}>
							Transcard Financial Services | Varna, Bulgaria | Mar. 2017 - Mar. 2018
						</h4>
						<h4 className={classNames(styles.exp_mobile)}>
							Transcard Financial Services <br />
							Varna, Bulgaria | Mar. 2017 - Mar. 2018
						</h4>
						<ul>
							<li>Developed multiple web projects by adopting and applying essential technical skills.</li>
							<li>Applied multiple web tools to design, maintain and deploy websites.</li>
							<li>Designed and executed security measures such as Linux server firewalls and SSL encryption.</li>
							<li>Planned and engineered RESTful web services to manipulate dynamic datasets.</li>
							<li>Troubleshot and debugged code, ensuring cross-browser compatibility.</li>
							<li>Enhanced communication and presentation capabilities by working in a team environment.</li>
						</ul>
					</div>
				</div>
				<div className={classNames(styles.empty_circle)}></div>
			</div>
		</section>
	);
}
