/**
 * Hi! All the website's dynamic content, like events, are all included in a
 * single object. The structure of this object is explained in these
 * interfaces.
 */
export interface ISiteData {
	feature: IFeature;
	events: IEvent[];
	sponsors: ISponsorList;
	teams: IExec;
}

/**
 * A "feature" is the first thing you see when you load the homepage.
 */
export interface IFeature {

	/**
	 * What should the large title text say? Please keep this short.
	 */
	title: string;

	/**
	 * What should it say below the title text? This can be slightly
	 * longer. <250 characters recommended. Each element of the array
	 * is a new line.
	 */
	tagline: string[];

	/**
	 * The path of the background image. This should be a GOOD QUALITY,
	 * LARGE PHOTOGRAPH. Feel free to use photos in the 'stock' folder if
	 * you have none. Please *DO NOT* use logos, transparent images, etc.
	 */
	image: string;

	/**
	 * Would you like the foreground to be light or dark? What you say
	 * here should depend on whether the background image is light or
	 * dark. For example, if the background image above is super bright,
	 * change this to 'dark'. If in doubt, say 'light'.
	 */
	foreground?: 'light' | 'dark'; // default light

	/**
	 * You can optionally specify a button to show in the foreground.
	 */
	button?: {

		/**
		 * What should the button say (e.g. 'Join now', 'Learn more',
		 * 'See more info', 'Sign up now')? Please avoid 'click here'.
		 */
		text: string;

		/**
		 * URL to send the user to if they click the button. If you
		 * don't specify a destination, we'll send the user to the mailing
		 * list signup.
		 */
		destination?: string;

	}
}

/**
 * If this feature is attached to an event, we also need some extra properites
 * to make sure we know when to show this feature over the default one.
 */
export interface IEventFeature extends IFeature {

	/**
	 * How many days in advance of the event should the event be featured on
	 * the top?
	 */
	daysBefore: number;

	/**
	 * If there are multiple events, what priority should this event have?
	 * Higher number means higher priority. Default is 0. If events have the
	 * same priority, the soonest event wins.
	 */
	priority?: number;

}

/**
 * Every event must have these properties.
 */
export interface IEvent {
	/**
	 * The name of the event (e.g. 'Durhack 2019').
	 */
	name: string;

	/**
	 * A description of the event. Please keep it short (preferably <200
	 * characters).
	 */
	description: string[];

	/**
	 * The URL of somewhere the person can find out more about the event. For
	 * example, this could be the URL to a Facebook event. If you're trying to
	 * link to another page on the site, specify a path (e.g. '/contact').
	 */
	link: string;

	/**
	 * The path of the image to represent this event. Please don't specify a
	 * full external URL. If this event doesn't have any decent images yet,
	 * check out the images in the 'stock' folder.
	 *
	 * Prefer photos -- nothing with any transparency, please!
	 */
	thumbnail: string;

	/**
	 * When is the event?
	 */
	when: {

		/**
		 * An array of date objects representing when this event takes place.
		 * It's an array because some events might be recurring (e.g. our
		 * weekly meeting). These dates are never actually shown on the site.
		 * They are used to figure out when an event is upcoming or in the
		 * past.
		 */
		dates: Date[];

		/**
		 * A human-readable string representing when this event takes place.
		 * e.g. 'Mondays, 6:15pm', '31st October 2019', 'November 2019'.
		 */
		text: string;

	}

	/**
	 * Optionally, where is this event? Please keep this very short. (e.g.
	 * 'E240').
	 */
	location?: string;

	/**
	 * In the run up to this event, we can give it some extra publicity by
	 * changing the homepage's feature to something else. If you want to do
	 * this, specify a feature here -- otherwise, feel free to leave it out.
	 *
	 * (This feature will not show up for past events.)
	 */
	feature?: IEventFeature;
}

/**
 * Every team member must have...
 */
export interface ITeamMember {
	/**
	 * Their full name.
	 */
	name: string;

	/**
	 * The path to a photo of them. Leave it as null if we should use a placeholder.
	 */
	image: string | null;

	/**
	 * The name of their role.
	 */
	role: string;
}

/**
 * If the team member is still on the exec, they should ALSO have...
 */
export interface ICurrentTeamMember extends ITeamMember {
	/**
	 * A description of what their role does.
	 */
	description: string;
}

/**
 * Every "past exec team" (i.e. a team from a previous academic year) must have...
 */
export interface IPastExecTeam {
	/**
	 * The years this team was active. Please use this exact format: "2019/2020".
	 */
	year: string;

	/**
	 * An array of team members.
	 */
	members: ITeamMember[];
}

/**
 * Exec information includes...
 */
export interface IExec {

	/**
	 * The current exec. (This is just an array of team members.)
	 */
	current: ICurrentTeamMember[];

	/**
	 * Past teams.
	 */
	past: IPastExecTeam[];

}

/**
 * Every sponsor, past or present, must include the following properties.
 */
export interface ISponsor {

	/**
	 * The company's name.
	 */
	name: string;

	/**
	 * Link to the company's website.
	 */
	link: string;

	/**
	 * A description of what the company do. Feel free to use HTML if you
	 * really want to (but please make sure any links open in a new tab, with
	 * target="_blank"). Each element of the array is a paragraph.
	 */
	description: string[];

	/**
	 * The path to the logo of the company. For all current sponsors, please
	 * make sure this logo is transparent. SVG files are welcome.
	 */
	image: string;

	/**
	 * An array of academic years this company have ssponsored us. For example,
	 * a company that sponsored us for two years might have: ["2018/2019",
	 * "2017/2018"]. Strictly stick to this date format, please!
	 */
	years: string[];

}

/**
 * For the sponsors page and the footer, we need to know...
 */
export interface ISponsorList {

	/**
	 * An array of the companies that are sponsoring us or have sponsored us in
	 * the past.
	 */
	companies: ISponsor[];

	/**
	 * An array of the academic years we should show on the Sponsors page. For
	 * example, ["2019/2020", "2018/2019"]. Please strictly keep this date
	 * format.
	 *
	 * The years must be in order, where the current year is first.
	 */
	years: string[];

}
