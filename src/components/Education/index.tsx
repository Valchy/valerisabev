import classNames from 'classnames';
import { motion } from 'framer-motion';
import useScrollAnimation from '@hooks/useScrollAnimation';
import styles from './Education.module.css';

interface EducationProps {
	educationData: any[];
}

export default function Education({ educationData }: EducationProps) {
	const [ref, controls] = useScrollAnimation(0.2);
	const onScrollAnimation = {
		visible: (i: number) => ({ opacity: 1, x: 0, transition: { duration: 1, staggerChildren: 0.5, delay: 0.5 * i } }),
		hidden: { opacity: 0, x: 200 },
	};

	return (
		<motion.section ref={ref} id="education" className={classNames(styles.education, 'flex-col-center-center')}>
			<div className="container">
				<div className="line"></div>
				<h2 className="section-title">EDUCATION</h2>
				<div className="flex-col">
					{educationData.map(({ title, description, achievements, image, alt }, index: number) => (
						<motion.div
							animate={controls}
							initial="hidden"
							custom={index}
							variants={onScrollAnimation}
							className={classNames(styles.education_item, 'flex-row')}
							key={`${title}-${index}`}
						>
							<img src={image?.url} alt={alt} />
							<div>
								<h3>{title}</h3>
								<h4>{description}</h4>
								<ul>
									{achievements.map((achievement: string, index: number) => (
										<li key={`${achievement}-${index}`}>{achievement}</li>
									))}
								</ul>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
}
