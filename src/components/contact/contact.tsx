import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

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

export class Contact extends React.PureComponent<{}, IContactState> {
	private recaptchaRef = React.createRef<ReCAPTCHA>();

	constructor(props: {}) {
		super(props);

		this.state = {
			name: '',
			email: '',
			subject: '',
			content: '',
			success: false,
			error: null,
		};
	}

	public render() {
		const {
			name,
			email,
			subject,
			content,
			success,
			error,
		} = this.state;

		return (
			<div className="contact">
				<PageTitle image="stock/f-flipped.jpg" verticalPosition={60}>Contact us</PageTitle>

				<div className="container">
					<p>Leave your queries, comments, feedback, and suggestions below.</p>

					{success && <p className="success">Thanks! Your message has been sent. We'll be in touch soon.</p>}
					{error && !success && <p className="error">{error}</p>}

					<form onSubmit={this.handleSubmit}>
						<input
							type="text"
							onChange={this.handleNameChange}
							value={name}
							placeholder="Your name"
							required
							disabled={success} />

						<input
							type="email"
							onChange={this.handleEmailChange}
							value={email}
							placeholder="Your email address"
							required
							disabled={success} />

						<input
							type="text"
							onChange={this.handleSubjectChange}
							value={subject}
							placeholder="Your message subject"
							required
							disabled={success} />

						<textarea
							onChange={this.handleContentChange}
							value={content}
							placeholder="Your message"
							required
							disabled={success} />

						<ReCAPTCHA
							ref={this.recaptchaRef}
							size="invisible"
							sitekey="6LfdeDEUAAAAAB4DSPMWwkqKYrHIvzjvXnU9u4mU"
							onChange={this.handleCaptchaChange} />
						{!success && <div><Button>Send</Button></div>}
					</form>
				</div>
			</div>
		);
	}

	private handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ name: event.target.value });
	}

	private handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ email: event.target.value });
	}

	private handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ subject: event.target.value });
	}

	private handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		this.setState({ content: event.target.value });
	}

	private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		console.log('submit');
		event.preventDefault();
		this.recaptchaRef.current!.execute();
	}

	/* private handleSend = (event: React.MouseEvent) => {
		event.preventDefault();
		console.log('hi');
	} */

	private handleCaptchaChange = (token: string | null) => {
		if (!token) {
			return;
		}

		const { name, email, subject, content } = this.state;

		fetch(true ? 'http://127.0.0.1:9000/api/contact' : '/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				realname: name,
				email,
				subject,
				msgbody: content,
				'g-recaptcha-response': token,
			}),
		})
			.then(res => {
				if (!res.ok) {
					if (res.status >= 500) {
						throw new Error('internal server error');
					}

					return res.text().then(error => this.setState({ error }));
				}

				this.setState({ success: true });
			})
			.catch(err => {
				console.error(err);

				this.setState({
					error: 'So sorry, but something went wrong while we were trying to ' +
						'send your message. Instead, please drop us an email at ' +
						'computing.society[@]durham.ac.uk.',
				});
			})
			.then(() => {
				this.recaptchaRef.current!.reset();
			});
	}
}
