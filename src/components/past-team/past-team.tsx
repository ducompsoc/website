import React from 'react';

import { PageTitle } from '../page-title/page-title';
import { ArrowedLink } from '../arrowed-link/arrowed-link';
import { TeamMember } from '../team-member/team-member';
import { config } from '../../config';

import './past-team.scss';

export class PastTeam extends React.PureComponent {
	public render() {
		const content = config.teams.past.map(team => {
			const grid = team.members.map(member => (
				<div key={member.name}><TeamMember current={false} member={member} key={member.name} /></div>
			));

			return (
				<div key={team.year}>
					<h2>Exec {team.year}</h2>
					<div className="row wrap grid wow">{grid}</div>
				</div>
			);
		});

		return (
			<div className="past-team">
				<PageTitle image="stock/b.jpg" verticalPosition={35}>Previous exec</PageTitle>

				<div className="container">
					<ArrowedLink to="/team" reverse={true}>Back to this year's committee</ArrowedLink>

					{content}
				</div>
			</div>
		)
	}
}
