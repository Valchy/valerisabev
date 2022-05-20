import classNames from 'classnames';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

interface HeroProps {
	heroData: any;
}

export default function Hero({ heroData }: HeroProps) {
	return (
		<section
			id="home"
			style={{ backgroundImage: `url(${heroData?.image?.url})` }}
			className={classNames(styles.home, 'flex-col-center-center')}
		>
			<div className="container flex-col-center-center">
				<div className={classNames(styles.page_title)}>
					<motion.h2 animate={{ x: [0, -10, 0] }} transition={{ delay: 0.7, type: 'spring' }}>
						{heroData.secondaryTitle}
					</motion.h2>
					{/* <b>{heroData.title}</b> */}
					<motion.h1 animate={{ x: [0, 10, 0] }} transition={{ delay: 0.7, type: 'spring' }}>
						{heroData.title}
					</motion.h1>
				</div>

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
				<motion.div
					className={classNames(styles.cv_wrapper)}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					<a className={classNames(styles.cv_btn)} href={heroData.callToActionUrl} rel="noreferrer" target="_BLANK">
						{heroData.callToActionText}
					</a>
				</motion.div>
			</div>
		</section>
	);
}
