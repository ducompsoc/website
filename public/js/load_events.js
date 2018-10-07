// load_events.js
// Loads the events and renders them on the page

$(document).ready(() => {

    const generateEventHTML = ((event, type) => {
        let eventHTML = `<div class="row">
            <p class="event-date">${event.date}</p>
            <img src="${event.image_url}" />
            <a class="btn btn-info btn-block" href="#${event.short_name}" data-toggle="collapse">${event.name}</a>
            <div class="collapse ${type === 'upcoming' ? 'in' : ''}" id="${event.short_name}">`;

        event.text.forEach((line) => {
            eventHTML += `<p>${line}</p>`;
        });

        if (event.more_info_url) {
            let more_info_text = '';
            if (event.more_info_url.indexOf('https://www.facebook.com/') === 0 || event.more_info_url.indexOf('https://facebook.com/') === 0) {
                more_info_text = `Facebook Event for ${event.name}`;
            } else {
                more_info_text = `More info about ${event.name}`;
            }
            eventHTML += `<a href="${event.more_info_url}" target="_blank">&raquo; ${more_info_text}</a>`;
        }

        eventHTML += '<hr /></div></div>';

        return eventHTML;
    });

    $.getJSON('/data/events.json', (data) => {
        console.log(data);

        // Render the upcoming events
        data.events.upcoming.forEach((event) => {
            $('#upcoming_events').append(generateEventHTML(event, 'upcoming'));
        });

        // Render the past events
        data.events.past.forEach((event) => {
            $('#past_events').append(generateEventHTML(event, 'past'));
        });

        $('#upcoming_events img, #past_events img').on('load', () => {
            $('.row.loading-gif').hide();
            $('#upcoming_events, #past_events').removeClass('hidden');
        });
    });
});
