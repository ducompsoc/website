import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { PageTitle } from '../page-title/page-title';
import { Button } from '../button/button';

import './contact.scss';

export const Contact: React.FC = () => (
	<div className="contact">
		<PageTitle image="stock/f-flipped.jpg" verticalPosition={60}>Contact us</PageTitle>

		<div className="container">
			<p>Leave your queries, comments, feedback, and suggestions below.</p>
			<form name="contact" method="post" action="/contact/success" data-netlify="true" data-netlify-recaptcha="true">
				<input type="hidden" name="form-name" value="contact" />

				<input
					type="text"
					placeholder="Your name"
					required />

				<input
					type="email"
					placeholder="Your email address"
					required />

				<input
					type="text"
					placeholder="Your message subject"
					required />

				<textarea
					placeholder="Your message"
					required />

				<ReCAPTCHA size="invisible" sitekey="6LfdeDEUAAAAAB4DSPMWwkqKYrHIvzjvXnU9u4mU" />

				<div><Button>Send</Button></div>
			</form>
		</div>
	</div>
);

export const ContactSuccess: React.FC = () => (
	<div className="contact">
		<PageTitle image="stock/f-flipped.jpg" verticalPosition={60}>Contact us</PageTitle>

		<div className="container">
			<p className="success">Thanks! Your message has been sent. We'll be in touch soon.</p>
		</div>
	</div>
);

