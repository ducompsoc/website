import React from 'react';
import { Link } from 'react-router-dom';

import { IEvent } from '../../util/data';

import './event-card.scss';

export interface IEventCardProps {
	event: IEvent | null;
}

export class EventCard extends React.PureComponent<IEventCardProps> {
	public render() {
		const { event } = this.props;

		if (!event) {
			return (
				<div className="event-card filler column center">
					<div>
						<h4>And more coming soon</h4>
						<p>We've got events lined up with sponsors such as TPP and Waterstons. Stay tuned!</p>
					</div>
				</div>
			);
		}

		const content = (
			<div className="inner flex column">
				<div className="image" style={{ backgroundImage: `url(/images/${event.thumbnail})` }}></div>

				<div className="info column flex">
					<div className="flex">
						<h4>{event.name}</h4>
						<p dangerouslySetInnerHTML={{ __html: event.description.join(' ') }} />
					</div>
					<div className="row center foot">
						<div className="when">{event.when.text}</div>
						{event.location && <div className="location">{event.location}</div>}
						<div className="flex"></div>
						{event.link && <React.Fragment><div className="arrow-line"></div><div className="arrow-head"></div></React.Fragment>}
					</div>
				</div>
			</div>
		);

		if (!event.link) {
			return <div className="event-card column">{content}</div>;
		}

		if (!/^https?:\/\//.test(event.link)) {
			return <Link to={event.link} className="event-card column linked">{content}</Link>;
		}

		return <a href={event.link} target="_blank" rel="noopener noreferrer" className="event-card column linked">{content}</a>;
	}
};
