import classNames from 'classnames';
import styles from './Hero.module.css';

interface HeroProps {
	heroData: any;
}

export default function Hero({ heroData }: HeroProps) {
	return (
		<section
			id="home"
			style={{ backgroundImage: `url(${heroData.image.url})` }}
			className={classNames(styles.home, 'flex-col-center-center')}
		>
			<div className="container flex-col-center-center">
				<h1 className={classNames(styles.page_title)}>
					<span>{heroData.secondaryTitle}</span>
					<br />
					<b>{heroData.title}</b>
				</h1>
				<p className={classNames(styles.page_description)}>
					{heroData.topSkills.map((skill: string) => (
						<span key={skill}>
							<b> # </b>
							{skill}
						</span>
					))}
					<br />
					{heroData.bottomSkills.map((skill: string) => (
						<span key={skill}>
							<b> # </b>
							{skill}
						</span>
					))}
				</p>
				<div className={classNames(styles.cv_wrapper)}>
					<a className={classNames(styles.cv_btn)} href={heroData.callToActionUrl} rel="noreferrer" target="_BLANK">
						{heroData.callToActionText}
					</a>
				</div>
			</div>
		</section>
	);
}
