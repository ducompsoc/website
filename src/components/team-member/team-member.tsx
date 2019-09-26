import React from 'react';

import { ICurrentTeamMember, ITeamMember } from '../../util/data';

import './team-member.scss';

export interface ICurrentTeamMemberProps {
	current: true;
	member: ICurrentTeamMember;
	index: number;
}

export interface IPreviousTeamMemberProps {
	current: false;
	member: ITeamMember;
}

export type TeamMemberProps = ICurrentTeamMemberProps | IPreviousTeamMemberProps;

export const TeamMember: React.FC<TeamMemberProps> = (props: TeamMemberProps) => (
	<div className="team-member">
		<img
			src={`/images/team/${props.member.image || 'placeholder.png'}`}
			style={{ transitionDelay: `${((props.current && props.index) || 0) / 10}s` }}
			alt={`A photograph of ${props.member.name}`} />

		<h4>{props.member.name}</h4>
		<div className="role">{props.member.role}</div>
		<p className="description">{props.current && props.member.description}</p>
	</div>
);
