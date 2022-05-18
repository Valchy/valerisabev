// On load event handler
$(window).on('load', () => {
	// Fade out spinning svg loader
	$('.loader-gif').fadeOut(300);

	// Add navabr blur if already scrolled
	toggleNavbarClass();

	// Initiate animate on scroll
	// AOS.init({once: true});

	// Init email js
	emailjs.init('user_jMLVyZdHDVBTqzG0911GH');
});

// Mobile burger btn toggle
$('#burger, #main-nav li').on('click', e => {
	$('#burger').toggleClass('is-open');
	$('#main-nav').toggleClass('is-open');
});

// Add navabar blur on scroll
$(document).on('scroll', toggleNavbarClass);

// Clicking on anchor tags starting with '#' makes a smooth scroll removes the default url stuff
$(document).on('click', 'a[href^="#"]', function (event) {
	// Scroll animation upon nav link click
	$('html, body').animate(
		{
			scrollTop: $($.attr(this, 'href')).offset().top - $('header').height()
		},
		800
	);
});

function toggleNavbarClass() {
	$('header').toggleClass('header-scrolled', $(this).scrollTop() > $('header').height() / 1.5);
}

function submitEmail() {
	let alertText = 'Success!',
		alertColor = '#43f436';

	const form = {
		contact_name: $('#contact_name').val().length > 0 ? $('#contact_name').val() : false,
		contact_email: $('#contact_email').val().length > 0 ? $('#contact_email').val() : false,
		contact_subject: $('#contact_subject').val().length > 0 ? $('#contact_subject').val() : false,
		contact_message: $('#contact_message').val().length > 0 ? $('#contact_message').val() : false
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
				response => {
					alertText = 'Success!';
					alertColor = '#43f436';
				},
				error => {
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
