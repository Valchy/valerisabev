import Link from 'next/link';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import useScrollAnimation from '@hooks/useScrollAnimation';
import styles from './Experience.module.css';

interface ExperienceProps {
	experienceData: any[];
}

export default function Experience({ experienceData }: ExperienceProps) {
	const [ref, controls] = useScrollAnimation(0.2);
	const onScrollAnimation = {
		visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.5, delay: 0.4 * i } }),
		hidden: { opacity: 0, y: -50 },
	};

	return (
		<section ref={ref} id="experience" className={classNames(styles.experience, 'flex-col-center-center')}>
			<div className="container">
				<div className="line"></div>
				<h2 className="section-title">EXPERIENCE</h2>
				{experienceData.map(({ title, description, achievements, link, image, alt }, index: number) => (
					<motion.div
						animate={controls}
						initial="hidden"
						custom={index}
						variants={onScrollAnimation}
						className="flex-row"
						key={`${title}-${index}`}
					>
						<div className="flex-col-center-none">
							<Link href={link} target="_BLANK">
								<a rel="noreferrer" href={link} target="_BLANK">
									<img className={classNames(styles.company_img)} src={image?.url} alt={alt} />
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
					</motion.div>
				))}
				<motion.div
					animate={controls}
					initial="hidden"
					custom={experienceData.length}
					variants={onScrollAnimation}
					className={classNames(styles.empty_circle)}
				></motion.div>
			</div>
		</section>
	);
}
