import React from 'react';
import { useParams } from 'react-router';

import { PageTitle } from '../page-title/page-title';
import { Button } from '../button/button';

import './contact.scss';

export interface IContactState {
	name: string;
	email: string;
	subject: string;
	content: string;
	success: boolean;
	error: string | null;
}

function getForm(isSuccess: boolean) {
	if (isSuccess) {
		return <p className="success">Thanks! Your message has been sent. We'll be in touch soon.</p>;
	}

	return (
		<>
			<p>Leave your queries, comments, feedback, and suggestions below.</p>
			<form name="contact" method="post" action="/contact/success" data-netlify="true" data-netlify-recaptcha="true">
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

				<div data-netlify-recaptcha="true"></div>
				<div><Button>Send</Button></div>
			</form>
		</>
	);
}

export const Contact: React.FC = () => {
	const { success } = useParams<{ success: string }>();

	return (
		<div className="contact">
			<PageTitle image="stock/f-flipped.jpg" verticalPosition={60}>Contact us</PageTitle>

			<div className="container">
				{getForm(success === 'success')}
			</div>
		</div>
	);
}
