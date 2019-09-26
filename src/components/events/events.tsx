import React from 'react';

import { PageTitle } from '../page-title/page-title';
import { EventCard } from '../event-card/event-card';
import { getOrderedEvents, now } from '../../util/events';

import './events.scss';

let events = getOrderedEvents();
let index = events.filter(event => !event.when.dates.some(date => date > now)).length;

let upcoming = events.slice(index);
let past = events.slice(0, index).reverse();

export class Events extends React.PureComponent {
	public render() {
		const upcomingItems = upcoming.map((event, index) => (
			<div className="event upcoming" key={index}>
				<EventCard event={event} />
			</div>
		));

		const pastItems = past.map((event, index) => (
			<div className="event past" key={index}>
				<EventCard event={event} />
			</div>
		));

		let upcomingSection = (
			<div className="grid row wrap">{upcomingItems}</div>
		);

		if (!upcomingItems.length) {
			upcomingSection = <div>We haven't got any new events to announce just yet; please check back later.</div>
		}

		return (
			<div className="events-page">
				<PageTitle image="stock/n.jpg" verticalPosition={35}>Events</PageTitle>

				<div className="container">
					<p>
						CompSoc holds events all year round, from hackathons to tech-talks to weekly meetings. Come along and learn something new, meet new people and build some awesome stuff.
					</p>

					{upcomingSection}

					<h4>Previous events:</h4>

					<div className="grid row wrap">
						{pastItems}
					</div>
				</div>
			</div>
		);
	}
}
