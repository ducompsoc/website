import React from 'react';

import { PageTitle } from '../page-title/page-title';
import { Button } from '../button/button';

import './durhack.scss';

/**
 * todo: it would be lovely if, in the future, the content of this page was
 * also in the configuration file.
 */

export class DurHack extends React.PureComponent {
	public render() {
		return (
			<div className="durhack-page">
				<PageTitle image="stock/p-cropped.jpg" verticalPosition={70}>DurHack</PageTitle>

				<div className="container">
					<div className="row">
						<div className="time">
							<h3>2020</h3>
						</div>

						<div className="description" style={{ width: '100%' }}>
							<p>
								DurHack is returning for its fifth iteration this November, with an all-new digital format.
							</p>

							<p>
								Pre-register for the event now to be the first to know when tickets become available, at:
							</p>

							<div>
								<Button raised={true} onClick={this.goToWebsite}>durhack.com/preregister</Button>
							</div>

							<p>
								If you’re interested in sponsoring DurHack 2020:
							</p>

							<div>
								<Button raised={true} to="/contact">Get in touch</Button>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="time">
							<h3>2019</h3>
							<div className="date">23rd - 24th November</div>
						</div>

						<div className="description">
							<p>
								CompSoc runs a large-scale annual hackathon with students from all sorts of backgrounds.
							</p>

							<p>
								In 2019, DurHack returned for its fourth iteration, which welcomed 200 students from all over the UK and Europe.
							</p>

							<p>
								Sponsors like Durham County Council, Atom Bank, Goldman Sachs, Waterstons, Capital One, and StarLeaf helped to make this our largest hackathon yet.
							</p>

							<p>
								<img src="/images/durhack/2019.jpg" alt="Photograph from DurHack 2019" />
							</p>
						</div>
					</div>

					<div className="row">
						<div className="time">
							<h3>2018</h3>
							<div className="date">17th - 18th November</div>
						</div>

						<div className="description">
							<p>
								The third iteration of DurHack was the most successful iteration of DurHack yet!
							</p>

							<p>
								150 of the best and brighest hackers from Durham and around the world pushed the boundaries of technology to new limits.
							</p>

							<p>
								Sponsors like Bloomberg, GitHub, TPP, Waterstons, Durham County Council and more helped to grow DurHack to the biggest hackathon in north-east England.
							</p>

							<img src="/images/durhack/2018.jpg" alt="Photograph from DurHack 2018" />
						</div>
					</div>

					<div className="row">
						<div className="time">
							<h3>2017</h3>
							<div className="date">9th - 10th December</div>
						</div>

						<div className="description">
							<p>
								CompSoc brought back DurHack for a second year running and it was a huge success. With Durham County Council, Barclays, TPP, .TECH Domains, Waterstons, Entrepreneurs Durham, The Keyboard Company, the Department of Computer Science and Durham Students' Union on board as sponsors, this event was jam-packed with prizes and was not a hackathon to be missed!
							</p>

							<img src="/images/durhack/2017.jpg" alt="Photograph from DurHack 2017" />
						</div>
					</div>

					<div className="row">
						<div className="time">
							<h3>2017</h3>
							<div className="date">28th - 29th January</div>
						</div>

						<div className="description">
							<p>
								DurHack first ran in January 2017, CompSoc's first ever 24-hour hackathon sponsored by big names like Durham County Council, GitHub, MLH, Sunderland Software City, Durham Students' Union, Entrepreneurs Durham, Waterstons, Barclays, Microsoft and Durham University.
							</p>

							<p>
								With enormous data sets from in and around Durham, participants from various UK universities utilised it to produce something that can potentially make a different to the region. 24 hours of coding interspersed with workshops, games, VR, short sleep sprints and awesome food, the event was a massive success.
							</p>

							<img src="/images/durhack/1.png" alt="Photograph from the first DurHack" />
						</div>
					</div>
				</div>
			</div>
		);
	}

	private goToWebsite = () => {
		window.open('https://durhack.com/preregister');
	}
}
