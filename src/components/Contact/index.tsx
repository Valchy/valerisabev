import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import useScrollAnimation from '@hooks/useScrollAnimation';
import styles from './Contact.module.css';

interface ContactProps {
	contactData: any;
}

export default function Contact({ contactData }: ContactProps) {
	const [ref, controls] = useScrollAnimation(0.2);
	const onScrollAnimation = {
		visible: { opacity: 1, x: 0, transition: { duration: 1 } },
		hiddenLeft: { opacity: 0, x: -100 },
		hiddenRight: { opacity: 0, x: 100 },
	};

	const [contactForm, setContactForm] = useState({
		loading: false,
		disabled: false,
		text: 'Send message',
		color: '',
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// Init email js
	useEffect(() => emailjs.init('user_jMLVyZdHDVBTqzG0911GH'));

	const submitEmail = (data: any) => {
		setContactForm((prevState) => ({ ...prevState, loading: true, disabled: true }));

		emailjs
			.send('service_wt3uoi8', 'template_ellgqlc', data, 'user_jMLVyZdHDVBTqzG0911GH')
			.then(
				(res) => setContactForm((prevState) => ({ ...prevState, color: '#29ba1f', text: 'Successfully sent!' })),
				(err) => setContactForm((prevState) => ({ ...prevState, color: '#f44336', text: 'Something happend :/' }))
			)
			.finally(() => {
				setContactForm((prevState) => ({ ...prevState, loading: false }));
			});
	};

	return (
		<section ref={ref} id="contact" className={classNames(styles.contact, 'flex-col-center-center')}>
			<div className="container">
				<div className="line"></div>
				<h2 className="section-title">CONTACT ME</h2>
				<p>
					{contactData.description}
					<br />
					<a className={classNames(styles.mail_link)} href="mailto:contact@valerisabev.com">
						contact@valerisabev.com
					</a>
				</p>
				<div className="flex-row">
					<motion.div
						animate={controls}
						initial="hiddenLeft"
						variants={onScrollAnimation}
						style={{ backgroundImage: `url(${contactData?.image?.url})` }}
						className={classNames(styles.contact_img)}
					/>
					<motion.form
						animate={controls}
						initial="hiddenRight"
						variants={onScrollAnimation}
						onSubmit={handleSubmit(submitEmail)}
						className={classNames(styles.contact_form, 'flex-col')}
					>
						<span className={classNames(styles.error_handler, errors.contact_name && styles.show_error)}>
							Name {errors.contact_name && 'is required'}
						</span>
						<input {...register('contact_name', { required: true })} type="text" placeholder="Gordon Ramsay" />

						<span className={classNames(styles.error_handler, errors.contact_email && styles.show_error)}>
							Email {errors.contact_email && 'is required'}
						</span>
						<input {...register('contact_email', { required: true })} type="email" placeholder="example@gmail.com" />

						<span className={classNames(styles.error_handler, errors.contact_subject && styles.show_error)}>
							Subject {errors.contact_subject && 'is required'}
						</span>
						<input
							{...register('contact_subject', { required: true })}
							type="text"
							placeholder="Attention grabbing subject..."
						/>

						<span className={classNames(styles.error_handler, errors.contact_message && styles.show_error)}>
							Message {errors.contact_message && 'is required'}
						</span>
						<textarea
							{...register('contact_message', { required: true })}
							rows={4}
							placeholder="My super cool message..."
						></textarea>
						<br />
						<button
							disabled={contactForm.disabled}
							type="submit"
							className="flex-row-center-center"
							style={contactForm?.color ? { backgroundColor: contactForm.color } : {}}
						>
							{contactForm.loading ? <div className={classNames(styles.spinner)}></div> : <span>{contactForm.text}</span>}
						</button>
					</motion.form>
				</div>
			</div>
		</section>
	);
}
