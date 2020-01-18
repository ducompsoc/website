import React from 'react';

import { ISponsor } from '../../util/data';
import { ArrowedLink } from '../arrowed-link/arrowed-link';

import './sponsor.scss';

export interface ISponsorProps {
	company: ISponsor;
}

export const Sponsor: React.FC<ISponsorProps> = ({ company }: ISponsorProps) => (
	<div className="row sponsor">
		<div className="logo">
			<div style={{ backgroundImage: `url(/images/${company.image})`}}></div>
		</div>

		<div>
			<h3>{company.name}</h3>

			{company.description.map((content, index) => <p key={index} dangerouslySetInnerHTML={{ __html: content }}></p>)}

			<ArrowedLink to={company.link} external={true}>Find out more</ArrowedLink>
		</div>
	</div>
);
