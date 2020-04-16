import React from 'react';

import { PageTitle } from '../page-title/page-title';
import { TeamMember } from '../team-member/team-member';
import { ArrowedLink } from '../arrowed-link/arrowed-link';
import { Button } from '../button/button';
import { config } from '../../config';

import './team.scss';

export class Team extends React.PureComponent {
	public render() {
		const currentGridWidth = `${200 / (Math.ceil(config.teams.current.length / 2) * 2)}%`;
		const current = config.teams.current.map((member, index) => (
			<div key={member.name} style={{ width: currentGridWidth }}>
				<TeamMember current={true} member={member} key={member.name} index={index} />
			</div>
		));

		return (
			<div className="team">
				<PageTitle image="stock/b.jpg" verticalPosition={35} title="The Team">About us</PageTitle>

				<div className="container">
					<p>
						The Executive Officers of CompSoc exist to manage and run the society. They are passionate about teaching, putting on events for the society and ensuring it is a fun place for all who are enthused about technology.
					</p>

					<div className="row grid wrap wow">
						{current}
					</div>

					<div className="row wrap align-center">
						<div>
							<Button to="/contact">Contact us</Button>
						</div>
						<div className="flex"></div>
						<div className="prev-link">
							<ArrowedLink to="/team/previous">See previous exec members</ArrowedLink>
						</div>
					</div>

					<p>Society logo designed by Molly Watkins.</p>
				</div>
			</div>
		)
	}
}
