import React from 'react';
import classnames from 'classnames';

import { getOrderedEvents, now } from '../../util/events';
import { EventCard } from '../event-card/event-card';

import './event-carousel.scss';

let events = getOrderedEvents();
events = events.slice(events.filter(event => !event.when.dates.some(date => date > now)).length - 1);

export const EventCarousel: React.FC = () => {
	const items = events.map((event, index) => (
		<div
			className={classnames('event', 'wow', event.when.dates.some(date => date > now) ? 'upcoming' : 'past')}
			style={{ transitionDelay: `${index / 2}s` }}
			key={index}>
			<EventCard event={event} />
		</div>
	));

	const filler = (
		<div className="flex filler wow" style={{ transitionDelay: `${items.length / 2}s`}}>
			<EventCard event={null} />
		</div>
	);

	return (
		<div className="event-carousel row">
			{items}
			{items.length < 4 && filler}
		</div>
	);
};
