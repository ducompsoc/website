import React from "react";

import { PageTitle } from "../page-title/page-title";
import { Button } from "../button/button";
import { Sponsor } from "../sponsor/sponsor";
import { ArrowedLink } from "../arrowed-link/arrowed-link";
import { config } from "../../config";

import "./sponsors.scss";

const [thisYear] = config.sponsors.years;
const sponsors = config.sponsors.companies.filter((company) =>
	company.years.includes(thisYear)
);

export class Sponsors extends React.PureComponent {
	public render() {
		return (
			<div className="sponsors-page">
				<PageTitle image="stock/k.jpg" verticalPosition={35}>
					Sponsors
				</PageTitle>

				<div className="container">
					{sponsors.map((company) => (
						<Sponsor key={company.name} company={company} />
					))}

					<div className="row wrap align-center foot">
						<div>
							<div className="tagline">Interested in sponsoring us?</div>
							<Button to="/contact">Contact us</Button>
						</div>
						<div className="flex"></div>
						<div className="prev-link">
							<ArrowedLink to="/sponsors/previous">
								See sponsors from previous years
							</ArrowedLink>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
