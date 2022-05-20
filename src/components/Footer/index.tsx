import classNames from 'classnames';
import Link from 'next/link';
import styles from './Footer.module.css';

interface FooterProps {
	footerData: any;
	locale: string;
}

export default function Footer({ footerData, locale }: FooterProps) {
	return (
		<footer className={classNames(styles.footer, 'flex-col-center-none')}>
			<div className={classNames(styles.footer_data, 'flex-row-none-sBetween container')}>
				<div className={classNames(styles.footer_contact_info, 'flex-col-fStart-none')}>
					<b>{locale === 'bg' ? 'Информация' : 'Contact Info'}</b>
					<div className="flex-col">
						<span>contact@valerisabev.com</span>
						<span>Freelancing student in</span>
						<span>Barcelona, Spain</span>
					</div>
				</div>
				<div className={classNames(styles.footer_social_media, 'flex-col-center-none')}>
					<b>{locale === 'bg' ? 'Социални Мрежи' : 'Social Media'}</b>
					<div className="flex-row-center-center">
						{footerData.footerItems
							.filter(({ display }: { display: boolean }) => display)
							.map(({ link, alt, openInNewTab, image }: any) => (
								<a
									key={link}
									href={link}
									rel="noreferrer nofollow"
									target={openInNewTab ? '_BLANK' : '_SELF'}
									className={classNames(styles.footer_social_link, 'fade')}
								>
									<img src={image?.url} alt={alt} />
								</a>
							))}
					</div>
				</div>
				<div className={classNames(styles.footer_links, 'flex-col-fEnd-none')}>
					<b>{locale === 'bg' ? 'Линкове' : 'Links'}</b>
					<div className={classNames('flex-col-fEnd-none')}>
						<a rel="noreferrer" href="assets/valeri-sabev-cv.pdf" target="_BLANK">
							Check out my CV
						</a>
						<Link href="#education">
							<a href="#education">My Education</a>
						</Link>
						<Link href="#experience">
							<a href="#experience">My Experience</a>
						</Link>
					</div>
				</div>
			</div>

			<div className={classNames(styles.copyright, 'flex-row-center-center container')}>
				<p>
					Copyright ©{new Date().getFullYear()}
					<br />
					All rights reserved | Valeri Sabev
				</p>
			</div>
		</footer>
	);
}
