import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { config } from '../../config';

import './footer.scss';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const [thisYear] = config.sponsors.years;
const sponsors = config.sponsors.companies.filter(company => company.years.includes(thisYear));

const links: { name: string; to: string }[] = [
	{
		name: 'Home',
		to: '/',
	},
	{
		name: 'Events',
		to: '/events',
	},
	{
		name: 'Sponsors',
		to: '/sponsors',
	},
	{
		name: 'Team',
		to: '/team',
	},
	{
		name: 'Contact',
		to: '/contact',
	},
];

export const Footer: React.FC = () => (
    <footer>
		<div className="section">
			<div className="container">
				Our sponsors:

				<div className="sponsors row center wrap">
					{sponsors.map(sponsor => <div key={sponsor.name}><a href={sponsor.link} target="_blank" rel="noopener noreferrer"><img src={`/images/${sponsor.thumb || sponsor.image}`} alt={sponsor.name} title={sponsor.name} /></a></div>)}
				</div>
			</div>
		</div>

		<div className="separator"></div>

		<div className="section">
			<div className="container row">
				<div className="info">
					<p>
						&copy; 2016-2020 <a href="/">Durham University Computing Society</a>.
					</p>

					<p>
						Durham University Computing Society is a student group affiliated with <a href="https://durhamsu.com/" target="_blank" rel="noopener noreferrer">Durham Students' Union</a>, which is registered in England as a company limited by guarantee (07689815) and a charity (1145400). Durham Students' Union's registered office is Dunelm House, New Elvet, Durham, DH1 3AN.
					</p>

					<p>
						Durham University Computing Society follows Durham Students' Union's <a href="https://www.durhamsu.com/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</a>.
					</p>

					<p>
						DurHack 2018-2019 photos by Durham Photographer. See <a href="https://durhack.com" target="_blank" rel="noopener noreferrer">durhack.com</a>.
					</p>
				</div>

				<div className="links">
					{links.map(({ to, name }) => <div key={to}><Link to={to}><FontAwesomeIcon icon={faChevronRight} /> {name}</Link></div>)}

					<div>
						<a href="https://durhack.com/" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faChevronRight} /> durhack.com
						</a>
					</div>

					<div className="oss">
						<a href="https://github.com/ducompsoc/website" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faGithub} /> This site is open-source.
						</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
);
