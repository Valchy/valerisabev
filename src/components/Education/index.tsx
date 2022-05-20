import Image from 'next/image';
import classNames from 'classnames';
import styles from './Education.module.css';

interface EducationProps {
	educationData: any[];
}

export default function Education({ educationData }: EducationProps) {
	return (
		<section id="education" className={classNames(styles.education, 'flex-col-center-center')}>
			<div className="container">
				<div className="line"></div>
				<h2 className="section-title">EDUCATION</h2>
				<div className="flex-col">
					{educationData.map(({ title, description, achievements, image, alt }, index: number) => (
						<div className={classNames(styles.education_item, 'flex-row')} key={`${title}-${index}`}>
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
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
