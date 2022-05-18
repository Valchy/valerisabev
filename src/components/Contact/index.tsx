import { submitEmail } from '@lib/emailjs';
// import './Contact.module.css';

export default function Contact() {
	return (
		<section id="contact" className="flex-col-center-center">
			<div className="container">
				<div className="line"></div>
				<h2 className="section-title">CONTACT ME</h2>
				<p>
					Feel free to send me a message if you have any inquiries.
					<br />
					<a className="mail-link" href="mailto:contact@valerisabev.com">
						contact@valerisabev.com
					</a>
				</p>
				<div className="flex-row">
					<div className="contact-img"></div>
					<div className="contact-form flex-col">
						<input type="text" id="contact_name" placeholder="Your name" />
						<input type="email" id="contact_email" placeholder="Your email" />
						<input type="text" id="contact_subject" placeholder="Subject" />
						<textarea rows={4} id="contact_message" placeholder="Message"></textarea>
						<br />
						<br />
						<button id="contact_submit" type="submit" onClick={submitEmail} className="flex-row-center-center">
							<span>Send Message</span>
							<div className="spinner"></div>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
