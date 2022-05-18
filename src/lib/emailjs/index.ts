// Init email js
import emailjs from '@emailjs/browser';
emailjs.init('user_jMLVyZdHDVBTqzG0911GH');

export function submitEmail() {
	let alertText = 'Success!',
		alertColor = '#43f436';

	const form = {
		contact_name: $('#contact_name').val().length > 0 ? $('#contact_name').val() : false,
		contact_email: $('#contact_email').val().length > 0 ? $('#contact_email').val() : false,
		contact_subject: $('#contact_subject').val().length > 0 ? $('#contact_subject').val() : false,
		contact_message: $('#contact_message').val().length > 0 ? $('#contact_message').val() : false,
	};

	const changeButtonBack = () => {
		$('#contact_submit').css('background-color', 'var(--mainBlue)');
		$('#contact_submit span').text('Send Message');
	};

	// Error handling
	if (!form.contact_name || !form.contact_email || !form.contact_subject || !form.contact_message) {
		alertText = 'Please fill out all the inputs';
		alertColor = '#f44336';

		$('#contact_submit').css('background-color', alertColor).show();
		$('#contact_submit span').text(alertText);

		setTimeout(changeButtonBack, 3000);
	} else {
		$('#contact_submit').attr('disabled', true);
		$('#contact_submit span').hide();
		$('#contact_submit .spinner').show();

		// Sending the email
		emailjs
			.send('service_wt3uoi8', 'template_ellgqlc', form, 'user_jMLVyZdHDVBTqzG0911GH')
			.then(
				(response) => {
					alertText = 'Success!';
					alertColor = '#43f436';
				},
				(error) => {
					alertText = 'Error!';
					alertColor = '#f44336';
				}
			)
			.finally(() => {
				$('#contact_submit').attr('disabled', false).css('background-color', alertColor).show();
				$('#contact_submit .spinner').hide();
				$('#contact_submit span').text(alertText).show();
				setTimeout(changeButtonBack, 3000);
			});
	}
}
