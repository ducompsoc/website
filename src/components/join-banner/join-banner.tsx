import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faSlackHash } from '@fortawesome/free-brands-svg-icons';

import { Button } from '../button/button';
import { popup } from '../../util/typeform';

import './interlaced.png';
import './join-banner.scss';

export class JoinBanner extends React.PureComponent {
	public render() {
		return (
			<div className="join-banner">
				<div className="container">
					<Button onClick={this.handleJoinClick} size="large">Join now</Button>
					<div className="socials">
						<a href="https://www.facebook.com/DurhamCompSoc" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faFacebookF} />
						</a>

						<a href="https://twitter.com/ducompsoc" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faTwitter} />
						</a>

						<a href="https://ducompsoc.slack.com/" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faSlackHash} />
						</a>
					</div>
				</div>
			</div>
		);
	}

	private handleJoinClick = () => {
		popup.open();
	}
}
