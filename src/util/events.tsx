import { IEvent } from './data';
import { config } from '../config';

const { events, feature } = config;

export const now = new Date();
//export const now = new Date('2019-10-06T12:00:00.000Z')

export function getFeature() {
	let bestPriority = -Infinity;

	const event = events.find(({ when, feature }) => {
		// If the event has already happened, or it doesn't have a feature, don't feature it.
		const date = when.dates.find(date => date > now);
		if (!date || !feature) {
			return false;
		}

		// If the event has a feature threshold date that's too far in the future, don't feature it.
		if (now.getTime() < date.getTime() - (feature.daysBefore * 24 * 60 * 60 * 1000)) {
			return false;
		}

		// If the event is a lower priority than the one we found, don't feature it.
		let priority = feature.priority || 0;
		if (priority < bestPriority) {
			return false;
		}

		bestPriority = priority || 0;
		return true;
	});

	if (event && event.feature) {
		return event.feature;
	}

	return feature;
}

export function getOrderedEvents() {
	return events.sort((eventA, eventB) => getComparativeDateForEvent(eventA) > getComparativeDateForEvent(eventB) ? 1 : -1);
}

export function getComparativeDateForEvent(event: IEvent) {
	// Get the first future date, or if there is none, get the last past date.
	return event.when.dates.find(date => date > now) || event.when.dates[event.when.dates.length - 1];
}
