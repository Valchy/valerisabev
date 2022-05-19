import { submitEmail } from '@lib/emailjs';
import classNames from 'classnames';
import styles from './Contact.module.css';

export default function Contact() {
	return (
		<section id="contact" className={classNames(styles.contact, 'flex-col-center-center')}>
			<div className="container">
				<div className="line"></div>
				<h2 className="section-title">CONTACT ME</h2>
				<p>
					Feel free to send me a message if you have any inquiries.
					<br />
					<a className={classNames(styles.mail_link)} href="mailto:contact@valerisabev.com">
						contact@valerisabev.com
					</a>
				</p>
				<div className="flex-row">
					<div className={classNames(styles.contact_img)}></div>
					<div className={classNames(styles.contact_form, 'flex-col')}>
						<input type="text" id="contact_name" placeholder="Your name" />
						<input type="email" id="contact_email" placeholder="Your email" />
						<input type="text" id="contact_subject" placeholder="Subject" />
						<textarea rows={4} id="contact_message" placeholder="Message"></textarea>
						<br />
						<br />
						<button id="contact_submit" type="submit" onClick={submitEmail} className="flex-row-center-center">
							<span>Send Message</span>
							<div className={classNames(styles.spinner)}></div>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
