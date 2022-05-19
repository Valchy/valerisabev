import classNames from 'classnames';
import styles from './Hero.module.css';

export default function Hero() {
	return (
		<section id="home" className={classNames(styles.home, 'flex-col-center-center')}>
			<div className="container flex-col-center-center">
				<h1 className={classNames(styles.page_title)}>
					<span> Hello, I&apos;m </span>
					<br />
					<b> Valeri Sabev </b>
				</h1>
				<p className={classNames(styles.page_description)}>
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
				<div className={classNames(styles.cv_wrapper)}>
					<a
						className={classNames(styles.cv_btn)}
						href="https://media.graphassets.com/kVeZhnj6TYWTTvSqAjvU"
						rel="noreferrer"
						target="_BLANK"
					>
						Take a look at my CV
					</a>
				</div>
			</div>
		</section>
	);
}
