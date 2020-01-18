import React from 'react';

import { PageTitle } from '../page-title/page-title';
import { Sponsor } from '../sponsor/sponsor';
import { ArrowedLink } from '../arrowed-link/arrowed-link';
import { config } from '../../config';

import './past-sponsors.scss';

const pastYears = config.sponsors.years.slice(2);
const sponsors = config.sponsors.companies;

export class PastSponsors extends React.PureComponent {
	public render() {
		const content = pastYears.map(year => {
			const list = sponsors
				.filter(company => company.years.includes(year))
				.map(company => <Sponsor key={company.name} company={company} />);

			return (
				<div key={year}>
					<h2>{year}</h2>
					{list}
				</div>
			);
		});

		return (
			<div className="past-sponsors">
				<PageTitle image="stock/k.jpg" verticalPosition={35}>Previous sponsors</PageTitle>

				<div className="container">
					<ArrowedLink to="/sponsors" reverse={true}>Back to this year's sponsors</ArrowedLink>
					{content}
				</div>
			</div>
		);
	}
}
