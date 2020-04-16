import React from 'react';

import { PageTitle } from '../page-title/page-title';
import { Button } from '../button/button';

import './agm.scss';

export class AGM extends React.PureComponent {
	public render() {
		return (
			<div>
				<PageTitle image="stock/c.jpg" verticalPosition={40}>CompSoc AGM</PageTitle>

				<div className="agm-page container">

					<p>
						CompSoc's Annual General Meeting was conducted between 00:00 and 23:59 on the 15th April 2020. A <a href="http://community.dur.ac.uk/computing.society/proposed_constitution.pdf" target="_blank" rel="noopener noreferrer">new constitution</a> was approved, and your new exec for 2020/2021 was chosen. A full breakdown of the results is now available.
					</p>

					<Button raised={true} onClick={this.goToResults}>Read the results</Button>

					<p>The manifestos for each member of your new exec have been included below. Thank you to everyone who nominated themselves, and thank you to everyone who participated in Wednesday's vote.</p>

					<div className="row">
						<div className="half">
							<h3>President</h3>
							<h4>Tom Nudd</h4>

							<p>Hi, I'm Tom. I've served as Publicity Officer over the last year and am running for President this year!</p>
							<p>In addition to my duties as Publicity Officer - sending the society's emails and promoting events - my contributions include creating and maintaining a document of CompSoc expenses, ordering pizza, purchasing snacks, helping organise a film night, and negotiating a sponsorship contract.</p>
							<p>If elected, I wish to introduce a series of workshops giving a practical introduction to programming to engage with more people. I will work with DU Women in Tech to hold joint events (in addition to their ongoing work and events) and oversee the merger between our organisations. Additionally, CompSoc must provide a welcoming and discrimination-free space to anyone; I will introduce procedures to ensure the society can effectively handle incidents.</p>
							<p>I am aware of the importance of supporting our subdivisions (e.g. DurHack) to help them run smoothly, and will help them obtain additional charge cards and work with the incoming Head of Finance. Attending multiple hackathons over the last year has highlighted the importance of providing support to hackers. I will prioritise obtaining additional sponsorship to expand the travel reimbursement budget. Providing a more broad experience would also be important to me - it would be great to work with business and AI societies to collaborate on hosting talks over the coming year.</p>
							<p>If you have any questions, please message me or drop me an email (thomas.g.nudd@durham.ac.uk)!</p>
						</div>

						<div className="half">
							<h3>Secretary</h3>
							<h4>Meredith Gibbons</h4>

							<p>Hi everyone, my name is Meredith and I would love to be your secretary next year. As someone who has already been on the CompSoc exec (finance assistant), I’m experienced in how the society runs and passionate about making it as good as it can be!</p>
							<p>Historically, the position of secretary was not very well-defined - I want to change that. As secretary I would not only assist with meetings and logistics, but actively reach out to new sponsors. I would also work closely with existing sponsors and the events officer to facilitate sponsored events and assist with our weekly meetings.</p>
						</div>
					</div>

					<div className="row">
						<div className="half">
							<h3>CompSoc Finance Officer</h3>
							<h4>Heidi Januszewski</h4>

							<p>Hi there! I’m already involved with DurHack as Press Officer this year and I’m really looking forward to working with the team more! I actually study English and History, which is basically the opposite of what you would expect from someone wanting to do a role associated with finance. However, I have a lot of experience in different positions that require good organisation and time management skills, and I think that these will come in handy for budgeting and sorting out finances. I also just love to try as many different things as I can and I'm dedicated to everything that I do, so I’d love the opportunity to learn something new as Finance Officer!</p>
						</div>

						<div className="half">
							<h3>Events Officer</h3>
							<h4>Irenitemi Agbejule</h4>

							<p>I have experience in hosting and marketing events such as the international nights and cafés for my college's international society in my role as marketing officer. Furthermore I have experience liaising with larger organisations through my work with BT at the start of last year. In addition I am the marketing and photography officer for the JCR at my college as well which shows that I can balance the responsibility of having an exec position alongside other work. I also really enjoy interacting and working with others and making new friends which compsoc has definitely helped with and I really want to be a bigger part of it going forward.</p>
						</div>
					</div>

					<div className="row">
						<div className="half">
							<h3>Media &amp; Publicity Officer</h3>
							<h4>Re-open Nominations</h4>
							<p>We will be holding an Additional General Meeting for this position at a later date.</p>
						</div>

						<div className="half">
							<h3>Web Officer</h3>
							<h4>Ethan Waite</h4>

							<p>Hi! I’m Ethan, a soon-to-be 3rd Year Computer Science student, and I’d love to be CompSoc’s Web Officer for 2020/2021.</p>

							<p>Last year, I re-implemented both compsoc.tech and durhack.com, giving both a fresh new look and a new modern codebase using TypeScript and Sass. I really wanted the new compsoc.tech design to be the central place for the many events that CompSoc runs over the course of the year, so I made the website dynamically generate based on what’s happening.</p>

							<p>This year, I’d love not only to keep the website up-to-date with what’s going on, but also expand its scope to encourage students to take part in hackathons, to provide more information and context around the workshops that CompSoc runs throughout the year (so the website acts more so as a valuable resource for students interested in programming and technology), and to make sure the website is more appropriately advertising for CompSoc’s annual hackathon, DurHack, especially for students who might not study Computer Science.</p>

							<p>I have experience with HTML, CSS, JavaScript and TypeScript, and I’ve had the pleasure of doing website work for some great companies, like Microsoft. I also really enjoyed running workshops for CompSoc for everyone last year, such as a workshop on Websockets & Electron and a workshop on REST APIs, and I’d love to be able to run more next year too. I’d like to drive CompSoc closer towards running workshops that cover a breadth of topics, are accessible to everyone of various skill levels, and are interactive enough to be really engaging. Thanks!</p>
						</div>
					</div>
				</div>
			</div>
		);
	}

	private goToResults = () => {
		window.open('https://community.dur.ac.uk/computing.society/agm.pdf');
	}
}
