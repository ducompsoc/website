import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faInstagram,
	faDiscord,
} from "@fortawesome/free-brands-svg-icons";

import { Button } from "../button/button";

import "./interlaced.png";
import "./join-banner.scss";

export class JoinBanner extends React.PureComponent {
	public render() {
		return (
			<div className="join-banner">
				<div className="container">
					<Button onClick={this.handleJoinClick} size="large">
						Join now
					</Button>
					<div className="socials">
						<a
							href="https://www.facebook.com/DurhamCompSoc"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faFacebookF} />
						</a>

						<a
							href="https://instagram.com/ducompsoc"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faInstagram} />
						</a>

						<a
							href="https://compsoc.tech/discord"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faDiscord} />
						</a>
					</div>
				</div>
			</div>
		);
	}

	private handleJoinClick = () => {
		window.open("https://compsoc.tech/join");
	};
}
