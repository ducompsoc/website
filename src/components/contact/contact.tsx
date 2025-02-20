import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { PageTitle } from "../page-title/page-title";
import { Button } from "../button/button";

import "./contact.scss";

export const Contact: React.FC = () => {
	const [form, setForm] = useState("compsoc")

	return (
		<div className="contact">
			<PageTitle image="stock/f-flipped.jpg" verticalPosition={60}>
				Contact us
			</PageTitle>

			<div className="container">
				<p>Leave your queries, comments, feedback, and suggestions below.</p>
				<p>Please select if your query relates to CompSoc or DurHack:</p>
				<select onChange={(e) => setForm(e.target.value)}>
					<option value="compsoc">CompSoc</option>
					<option value="durhack">DurHack</option>
				</select>
				<form
					name="contact"
					method="post"
					action="/contact/success"
					data-netlify="true"
					data-netlify-recaptcha="true"
					className={form !== "compsoc" ? "hidden" : ""}
				>
					<input type="hidden" name="form-name" value="contact" />

					<input type="text" name="name" placeholder="Your name" required />

					<input
						type="email"
						name="email"
						placeholder="Your email address"
						required
					/>

					<input
						type="text"
						name="subject"
						placeholder="Your message subject"
						required
					/>

					<textarea name="message" placeholder="Your message" required />

					<ReCAPTCHA sitekey="6LfdeDEUAAAAAB4DSPMWwkqKYrHIvzjvXnU9u4mU" />

					<div>
						<Button>Send</Button>
					</div>
				</form>
				<form
					name="durhack"
					method="post"
					action="/contact/success"
					data-netlify="true"
					data-netlify-recaptcha="true"
					className={form !== "durhack" ? "hidden" : ""}
				>
					<input type="hidden" name="form-name" value="durhack" />

					<input type="text" name="name" placeholder="Your name" required />

					<input
						type="email"
						name="email"
						placeholder="Your email address"
						required
					/>

					<input
						type="text"
						name="subject"
						placeholder="Your message subject"
						required
					/>

					<textarea name="message" placeholder="Your message" required />

					<ReCAPTCHA sitekey="6LfdeDEUAAAAAB4DSPMWwkqKYrHIvzjvXnU9u4mU" />

					<div>
						<Button>Send</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export const ContactSuccess: React.FC = () => (
	<div className="contact">
		<PageTitle image="stock/f-flipped.jpg" verticalPosition={60}>
			Contact us
		</PageTitle>

		<div className="container">
			<p className="success">
				Thanks! Your message has been sent. We'll be in touch soon.
			</p>
		</div>
	</div>
);
