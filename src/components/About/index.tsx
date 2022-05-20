import { motion } from 'framer-motion';
import classNames from 'classnames';
import useScrollAnimation from '@hooks/useScrollAnimation';
import styles from './About.module.css';

interface AboutProps {
	aboutData: any;
}

export default function About({ aboutData }: AboutProps) {
	const [ref, controls] = useScrollAnimation(0.8);
	const onScrollAnimation = {
		visible: { opacity: 1, transition: { duration: 1 } },
		hidden: { opacity: 0 },
	};

	return (
		<motion.section
			ref={ref}
			animate={controls}
			initial="hidden"
			variants={onScrollAnimation}
			id="about"
			className={classNames(styles.about, 'flex-col-center-center')}
		>
			<div className="container">
				<div className="flex-col">
					<div className="flex-row-center-sBetween">
						<h2 className="section-title">ABOUT ME</h2>
						<div className="line"></div>
					</div>
					<div className="flex-row about-text-wrapper">
						<div className="fGrow" dangerouslySetInnerHTML={{ __html: `${aboutData.text.html}` }} />
						<img src={aboutData?.image?.url} alt="Happy summer with Valeri Sabev" />
					</div>
				</div>
			</div>
		</motion.section>
	);
}
