import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './Experience.module.css';

interface ExperienceProps {
	experienceData: any[];
}

export default function Experience({ experienceData }: ExperienceProps) {
	return (
		<section id="experience" className={classNames(styles.experience, 'flex-col-center-center')}>
			<div className="container">
				<div className="line"></div>
				<h2 className="section-title">EXPERIENCE</h2>
				{experienceData
					.filter(({ display }) => display)
					.map(({ title, description, achievements, image }, index: number) => (
						<div className="flex-row" key={`${title}-${index}`}>
							<div className="flex-col-center-none">
								<Link href="https://bauwerksolutions.com/" target="_BLANK">
									<a rel="noreferrer" href="https://bauwerksolutions.com/" target="_BLANK">
										<img
											className={classNames(styles.company_img)}
											src={image.url}
											alt="Logo of Bauwerk Building Solutions"
										/>
									</a>
								</Link>
								<div className={classNames(styles.connection_line)}></div>
							</div>
							<div className={classNames(styles.experience_item)}>
								<h3>{title}</h3>
								<h4>{description}</h4>
								<ul>
									{achievements.map((achievement: string) => (
										<li key={`${achievement}-${index}`}>{achievement}</li>
									))}
								</ul>
							</div>
						</div>
					))}
				<div className={classNames(styles.empty_circle)}></div>
			</div>
		</section>
	);
}
