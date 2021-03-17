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
						CompSoc's Annual General Meeting was conducted between 00:00 and 23:59 on the 15th March 2021. Your new exec for 2021/2022 was chosen, and a full breakdown of the results is now available.
					</p>

					<Button raised={true} onClick={this.goToResults}>Read the results</Button>

					<div className="row">
						<div className="half">
							<h3>President</h3>
							<h4>Tom Nudd</h4>
							<p>Hi, I'm Tom and running for re-election as CompSoc President! I have served as President over the last year and Publicity Officer over the previous year.</p>
							<p>Over the last year, I have helped CompSoc navigate the transition to digital events. Last summer, I spearheaded our first digital game jam, DurJam, which I hope to run again in the coming months. Since then, I have organised a range of workshops, socials, and sponsor events throughout the year, and hope to continue these when in-person events return.</p>
							<p>Despite the pandemic, I have secured new sponsorship and increased CompSoc's income. I would like to use this income to help provide higher-quality events and introduce CompSoc stash. Having attended 24 hackathons in various capacities, I believe in encouraging CompSoc members to participate in hackathons and would re-introduce the Hackathon Reimbursement Fund for travel expenses when in-person events safely return.</p>
							<p>If you have any questions, feel free to send me a message or email me (thomas.g.nudd@durham.ac.uk)!</p>
						</div>

						<div className="half">
							<h3>Secretary</h3>
							<h4>Steve Thomas</h4>
							<p>Hi everyone! I'm Steve, a third-year Computer Science student, and I believe I have a lot of experience to bring to the role of Secretary.</p>
							<p>My organisational qualities have shone through as a Workshop Facilitator for the Raspberry Pi Foundation, having to organise and lead two-day hackathons, and I was a President of a local youth club for over 2 years.</p>
							<p>I also have a great deal of experience working in a team. I am part of a Durham student start-up, Internly, which has won various rounds of funding from the university and has seen fantastic success in its maiden year. As part of this, I have established a connection with 50+ recruiters and I hope to host a variety of events with these recruiters during my tenure.</p>
							<p>With me as Secretary, you can hope to see more internship/grad job application support and networking events with Early Careers recruiters from a wide variety of companies. I will also strive to increase the number of workshops we have throughout the year, allowing you to build your skills with new technologies.</p>
						</div>
					</div>

					<div className="row">
						<div className="half">
							<h3>CompSoc Finance Officer</h3>
							<h4>Olivia Hampshire</h4>
							<p>I've been DUWiT's finance officer for this year and I've really enjoyed it. I'm really passionate about computer science and I think being involved with CompSoc as a member of the exec would be a great experience.</p>
						</div>

						<div className="half">
							<h3>Events Officer</h3>
							<h4>Disha Gupta</h4>
							<p>I would like to be Events Officer so I can help arrange educational talks and social events with potential networking opportunities. I would love to be able to have many events next year to make up for the lack this year.</p>
							<p>I think I will be suited for this role as I have planned events in the past and I would love to attend CompSoc events so I understand what they need to be like to be well liked!</p>
						</div>
					</div>

					<div className="row">
						<div className="half">
							<h3>Media &amp; Publicity Officer</h3>
							<h4>Heidi Januszewski</h4>
							<p>Hi all, I'm running to be Media and Publicity Officer this year and would really appreciate your vote! I was Finance Officer last year and therefore know a lot about how the society works. In fact, I actually ended up doing a lot of publicity since we didn't have a Publicity Officer last year! I also created a lot of media for DurJam - our first entirely-online hackathon that we ran last summer - such as our logo and other advertisements that I posted on social media. I really enjoyed both experiences and would love to do more publicity as an official position in CompSoc. This year, I would aim to improve the society's efficiency by sending out our emails more regularly and also by posting on social media more, which will make CompSoc look more professional. I also enjoy art a lot and would like to update the Facebook cover photo and logo in order to give the society a new look.</p>
						</div>

						<div className="half">
							<h3>Web Officer</h3>
							<h4>Ethan Waite</h4>
							<p>Hi, I’m Ethan! I’m a soon-to-be fourth year CS student, and I’d love to be your CompSoc Web Officer. This year, I’ve had the pleasure of creating the website for CompSoc’s 96-hour Summer Game Jam at www.durj.am, during which I ran a Git workshop, delivered the Closing Ceremony, and helped to organise the event.</p>
							<p>I created the current CompSoc website at www.compsoc.tech, and beyond that, I built the website, event platform, and livestreaming system for DurHack 2020, at durhack.com.</p>
							<p>Despite CompSoc being forced online this year, I have helped to run our Monday sessions on Zoom, which includes some socials and my own Web Development workshop. I was also part of CompSoc’s participation in the Virtual Freshers’ Fair, where I delivered our promotional video and took part in the Teams meetings for prospective members.</p>
							<p>This year, with everything (hopefully) returning a bit closer to normal, I hope to refocus on making CompSoc’s own website more useful, by keeping it up-to-date with what’s going on and making sure that we’re using it alongside our social media channels to promote the opportunities that CompSoc members have. Ultimately, I want to take CompSoc’s website beyond being a marketing tool for prospective students, and become something that existing members feel like they want to frequent.</p>
							<p>Additionally, I’ve had the opportunity to deliver workshops in Electron &amp; Websockets, in REST APIs, and in AWS, but I’d love to deliver even more workshops in the upcoming academic year. I love all things JavaScript (including TypeScript, Node.js, React), and work professionally with tools like Docker/Kubernetes that I’d love to be able to incorporate.</p>
						</div>
					</div>
				</div>
			</div>
		);
	}

	private goToResults = () => {
		window.open('/agm.pdf');
	}
}
