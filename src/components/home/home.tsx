import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Helmet from 'react-helmet';

import { Button } from '../button/button';
import { JoinBanner } from '../join-banner/join-banner';
import { EventCarousel } from '../event-carousel/event-carousel';
import { getFeature } from '../../util/events';

import './home.scss';

const feature = getFeature();

export class Home extends React.PureComponent {
	public render() {
		let button = <Button onClick={this.handleJoinClick}>Join now</Button>;

		if (feature.button) {
			button = <Button onClick={this.handleFeatureButtonClick}>{feature.button.text}</Button>
		}

		return (
			<div className="home">
				<Helmet>
					<title>Homepage » Durham CompSoc</title>
				</Helmet>

				<div className="feature" style={{ backgroundImage: `url(/images/${feature.image})` }}>
					<div className="flex"></div>
					<div className="container">
						<div className="info">
							<h3><span><span>{feature.title}</span></span></h3>
							<span><span>{feature.tagline.join(' ')}</span></span>
						</div>

						<div className="cta">
							{button}
						</div>
					</div>
				</div>

				<div className="container">
					<div className="comment">
						<div className="row">
							<div className="flex">
								CompSoc is Durham University Computing Society. It is run entirely by students and serves to promote programming, development and general computing. We are a community of passionate problem solvers who come together to run weekly meetings, workshops and hackathons throughout the year. No matter if you're a novice or expert, come down to see what we have to offer!
							</div>
						</div>
					</div>

					<div className="events-header row center">
						<div className="events-title">
							<h2>Events</h2>
						</div>

						<div className="flex"></div>

						<div>
							<a href="/join" target="_blank" className="subscribe-link">
								<FontAwesomeIcon icon={faEnvelope} />
								<span>Subscribe</span>
							</a>
						</div>
					</div>

					<EventCarousel />
				</div>

				<JoinBanner />
			</div>
		);
	}

	private handleJoinClick = () => {
		window.open('/join');
	}

	private handleFeatureButtonClick = () => {
		window.open(feature.button!.destination);
	}
}
