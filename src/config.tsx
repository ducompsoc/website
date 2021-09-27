import { ISiteData } from './util/data';

/**
 * Hiya! Most of the website's dynamic content can be edited from this file.
 *
 * This includes things like the homepage's big feature, upcoming/past events,
 * team members, sponsors, and a few other configuration variables.
 *
 * We use TypeScript to make sure this object stays consistent. Please check
 * the site still works and that there are no errors when building/linting
 * afterwards.
 *
 * For full documentation, please refer to src/util/data.tsx
 */

// TODO: a *lot* of the copy needs changing/reviewing
export const config: ISiteData = {
	feature: {
		title: 'Welcome to CompSoc',
		tagline: [
			'Do you love technology? Programming? Or just want to learn something new? CompSoc runs talks, hackathons and workshops for Durham students throughout the year.',
		],
		image: 'stock/a.jpg',
	},

	events: [
		// Our recurring weekly meeting.
		{
			name: 'Weekly Meeting',
			description: [
				'In the past, we\'ve had quizzes, helping people with projects, programming help, casual social events. We\'ll often provide free food to make it up to those of you who miss College supper.',
			],
			link: '',
			thumbnail: 'stock/j.jpg',
			when: {
				dates: [
					new Date('2019-10-07T18:00:00+01:00'),
					new Date('2019-10-14T18:00:00+01:00'),
					new Date('2019-10-21T18:00:00+01:00'),
					new Date('2019-10-28T18:00:00Z'), // BST ends 27th October
					new Date('2019-11-04T18:00:00Z'),
					new Date('2019-11-11T18:00:00Z'),
					new Date('2019-11-18T18:00:00Z'),
					new Date('2019-11-25T18:00:00Z'),
					new Date('2019-12-02T18:00:00Z'),
					new Date('2020-01-13T18:00:00Z'),
					new Date('2020-01-27T18:00:00Z'),
					new Date('2020-02-10T18:00:00Z'),
					new Date('2020-02-24T18:00:00Z'),
					new Date('2020-03-09T18:00:00Z'),
				],
				text: 'Mondays, 6pm',
			},
			location: 'TLC 113',
			/* feature: {
				title: 'Weekly meetings now in TLC 113',
				tagline: [
					'We\'re moving! Durham University Computing Society\'s weekly meeting is now in TLC 113 (Teaching & Learning Centre).',
					'Come along on Monday at 6pm.',
				],
				image: 'stock/a.jpg',
				priority: -1,
				daysBefore: 7,
			}, */
		},

		// New events.
		{
			name: 'DurHack 2021',
			description: [
				'DurHack is CompSoc\'s flagship annual hackathon, where students come together to push technology to new limits in a digital invention marathon. Register your interest at durhack.com.',
			],
			link: 'https://durhack.com/',
			thumbnail: 'stock/u.jpg',
			when: {
				dates: [new Date('2021-11-28T12:00:00Z')],
				text: '27th-28th November',
			},
			location: 'In-person and online',
		},
		{
			name: 'CompSoc at Freshers\' Fair 2021',
			when: {
				dates: [new Date('2021-09-29T18:00:00Z')],
				text: '29th Sept 2021',
			},
			thumbnail: 'events/ff19.jpg',
			link: 'https://www.facebook.com/events/1108743579654456/',
			location: 'Maiden Castle Sports Centre',
			description: [
				'CompSoc will be at Freshers\' Fair! Come say hi if you’re interested in tech, computers, programming, or if you want to learn. Chat to us and find out more about what CompSoc is and what we do!'
			]
		},
		{
			name: 'CompSoc AGM 2021',
			description: [
				'The AGM is running online on 15th March. Elect your executive committee for 2021/2022.',
			],
			link: './agm',
			thumbnail: 'stock/p.jpg',
			when: {
				dates: [new Date('2021-03-15T23:59:59Z')],
				text: '15th March',
			},
			feature: {
				title: 'Vote for your next CompSoc exec',
				tagline: [
					'You can now vote for your CompSoc exec members for the next academic year, in CompSoc\'s AGM. Voting closes at midnight.',
				],
				button: {
					text: 'Vote now',
					destination: './agm',
				},
				image: 'stock/p.jpg',
				daysBefore: 2,
			},
		},
		{
			name: 'DurHack 2020',
			description: [
				'DurHack is CompSoc\'s flagship annual hackathon, where students come together to push technology to new limits in a digital invention marathon. Tickets are now available and are free!',
			],
			link: 'https://durhack.com/',
			thumbnail: 'stock/e.jpg',
			when: {
				dates: [new Date('2020-11-14T12:00:00Z')],
				text: '14th-15th November',
			},
			feature: {
				title: 'Registration now open for DurHack',
				tagline: [
					'Secure your place at CompSoc\'s annual hackathon. Students of all experience levels will come together in teams of up to five, helping and learning from each other in order to create their own project.',
				],
				button: {
					text: 'Get your tickets',
					destination: 'https://durhack.com/',
				},
				image: 'stock/e.jpg',
				priority: 1,
				daysBefore: 21,
			},
			location: 'Online',
		},
		{
			name: 'CompSoc with Thought Machine',
			description: [
				'Join Luke and Lorenzo from Thought Machine for a crazy night of fun and madness. Join us on Zoom to be in with a chance of winning some mystery prizes - from the wonderful to the down right weird.',
			],
			link: 'https://www.facebook.com/events/1066761363755449',
			thumbnail: 'events/thoughtmachine.jpg',
			when: {
				dates: [new Date('2020-11-02T19:15:00Z')],
				text: '2nd Nov @ 7.15pm',
			},
			location: 'Online',
		},
		{
			name: 'MLH Localhost: Intro to Python',
			description: [
				'Learn the basics of Python at this online workshop. No prior knowledge is assumed, so this will be especially useful to those new to coding.',
			],
			link: 'https://www.facebook.com/events/2420169084955593/',
			thumbnail: 'stock/m.jpg',
			when: {
				dates: [new Date('2020-10-05T19:15:00Z')],
				text: '5th Oct @ 7:15pm',
			},
			location: 'Online',
		},
		{
			name: 'DurJam: CompSoc\'s summer game jam',
			description: [
				'Make a game from scratch in teams of up to five, in a free 4-day digital event with interactive workshops and prizes for the best submissions. Open to all students and graduates from the last year.',
			],
			link: 'https://durj.am/',
			thumbnail: 'events/durjam.png',
			when: {
				dates: [new Date('2020-08-30T18:00:00Z')],
				text: '26th-30th August',
			},
			location: 'Online',
			feature: {
				title: 'DurJam: CompSoc\'s summer game jam',
				tagline: [
					'CompSoc\'s game jam will run from 26th-30th August. Make a game from scratch in teams of up to five, in a free 4-day digital event with interactive workshops and prizes for the best submissions.',
				],
				button: {
					text: 'Find out more',
					destination: 'https://durj.am/',
				},
				image: 'stock/r.jpg',
				priority: 2,
				daysBefore: 31,
			},
		},
		{
			name: 'Electron Workshop',
			description: [
				'We’ll be making a simple desktop chat application together with Electron, Node.js and websockets, all from scratch with no prior web programming knowledge assumed.',
			],
			link: '',
			thumbnail: 'events/electron.png',
			when: {
				dates: [new Date('2020-03-02T18:00:00Z')],
				text: '2nd March, 6pm',
			},
			location: 'TLC 113',
			feature: {
				title: 'Come along to our Electron workshop',
				tagline: [
					'For this week\'s Monday workshop, we’ll be making a simple desktop chat application together, all from scratch with no prior web programming knowledge assumed.',
					'Come to TLC 113 on Monday at 6pm.'
				],
				image: 'stock/a.jpg',
				daysBefore: 7,
			},
		},
		{
			name: 'Acing the Technical Interview Workshop',
			description: [
				'We\'ll be running a workshop in place of this week\'s weekly meeting.',
			],
			link: '',
			thumbnail: 'stock/t.jpg',
			when: {
				dates: [new Date('2020-01-20T18:00:00Z')],
				text: '20th January, 6pm'
			},
			location: 'TLC 113',
			feature: {
				title: 'Come along to our workshop on Monday!',
				tagline: [
					'We\'re running our Acing the Technical Interview Workshop on Monday, 6pm in TLC 113.'
				],
				image: 'stock/a.jpg',
				priority: -1,
				daysBefore: 7,
			},
		},
		{
			name: 'BAE Systems Capture the Flag',
			description: [
				'BAE Systems Applied Intelligence are running a Capture the Flag event, a day of cyber security challenges and games. This event is ticketed.',
			],
			link: 'https://www.facebook.com/events/2327862003984760/',
			thumbnail: 'stock/r.jpg',
			when: {
				dates: [new Date('2020-01-18T09:30:00Z')],
				text: '18th January, 9:30am'
			},
		},
		{
			name: 'DurHack 2019',
			description: [
				'CompSoc runs a large-scale annual hackathon with students from all sorts of backgrounds. At DurHack 2018, we had 150 students from all over the UK and Europe!',
			],
			link: 'https://durhack.com',
			thumbnail: 'events/durhack2018photo.jpg',
			when: {
				dates: [new Date('2019-11-23T09:00:00Z')],
				text: '23rd November 2019',
			},
			/* feature: {
				title: 'DurHack 2019 is coming!',
				tagline: [
					'This year, join 150 hackers to create, innovate and push technology to new limits.',
				],
				button: {
					text: 'Find out more about DurHack',
					destination: 'https://durhack.com/',
				},
				image: '',
				priority: 2, // durhack is important
				daysBefore: 7,
			}, */
		},
		{
			name: 'Durham Local Hack Day – Learn',
			description: [
				'CompSoc will be hosting a free workshop on 12 October, where we will teach you how to build and deploy your first website! Come to E240 in the Higginson Building.',
			],
			link: 'https://www.facebook.com/events/525510958210911/',
			thumbnail: 'events/lhd2019.jpg',
			when: {
				dates: [new Date('2019-10-12T09:30:00+01:00')],
				text: '12th October, 9:30am',
			},
			feature: {
				title: 'Local Hack Day on Saturday',
				tagline: [
					'CompSoc will be hosting a free workshop, where we will teach you how to build and deploy your first website!',
					'Come to E240 in the Higginson Building on Saturday 12 October from 9:30 till 16:30. Pizza is provided!',
				],
				image: 'stock/d.jpg',
				daysBefore: 5,
				button: {
					text: 'Go to Facebook event',
					destination: 'https://www.facebook.com/events/525510958210911/',
				},
			},
		},

		// The events below have been scraped from the previous CompSoc website.
		{
			name: 'TPP Coding Challenge with CompSoc',
			when: {
				dates: [new Date('2019-06-10T18:00:00Z')],
				text: '10th June 2019',
			},
			thumbnail: 'events/events_tpp_pub_quiz.jpg',
			link: 'https://www.facebook.com/events/451374975639599/',
			description: [
				'TPP is excited to announce a Coding Challenge on <b>Monday 10<sup>th</sup> June 2019</b>, in collaboration with CompSoc!',
				'Unlike a typical pub quiz, you\'ll need to exercise your problem solving skills to tackle the range of challenges set instead of applying your general knowledge.',
				'There will be free food and drinks, both soft and alcoholic, available for attendees throughout the whole event. There will also be Raspberry Pis available to members of the winning team.',
				'We recommend teams of about 5-6 people, but smaller groups are welcome too, and if you\'re unsure who to come with then we\'ll be happy to match you up with other keen problem solvers on the day. Some questions require specific knowledge so you will want a programmer on your team!',
				'Tickets are limited. Please see the Facebook event for more information.'
			]
		},
		{
			name: 'Tech Careers Event',
			when: {
				dates: [new Date('2019-06-14T18:00:00Z')],
				text: '14th June 2019',
			},
			// thumbnail: 'events/events_careers_in_tech.jpg',
			thumbnail: 'stock/l.jpg',
			link: 'https://careers.dur.ac.uk/leap/event.html?id=17613&service=Careers+Centre',
			description: [
				'Technology is omnipresent and finds application across a multitude of industries. We are bringing together professionals and current students with experience from about 15 different industries like Big Tech, Automobile, Finance, Scientific Computing, Consumer Goods, Cybersecurity, Data, UX Design, Research, etc. to name a few, who you can chat with to find out what working with technology in a particular field entails. You will also have an opportunity to learn about unconventional technology careers like Technology Journalism and Scientific Publishing via a live stream with leading professionals.',
				'The event is FREE and OPEN TO ALL and will be held on 14 June, 13.30 - 16.30. Please register your interest through the link below.',
				'There\'s also free one-on-one CV and LinkedIn review with our careers advisors to help you this application season. Bring your friends along and spread the word!'
			]
		},
		{
			name: 'Artificial Intelligence at Waterstons',
			when: {
				dates: [new Date('2019-02-06T18:00:00Z')],
				text: '6th February 2019',
			},
			// thumbnail: 'events/ai_waterstons.png',
			thumbnail: 'stock/q.jpg',
			link: 'https://www.facebook.com/events/294134691142826/',
			description: [
				'We are seeing AI everywhere in technology, from taking better pictures on your phone, to self-driving cars. Waterstons present an introduction to AI, through everyone’s favourite game: Rock, Paper, Scissors, Waterbomb, Dynamite.',
				'Compete in teams to build the ultimate game playing AI, and then challenge the other teams’ AIs to see who has mastered the game.',
				'Waterstons developers will be on hand to help you learn how to code the AI, setup, and deploy. Any programming language will be suitable.'
			]
		},
		{
			name: 'American Express - Web Dev & Deployment',
			when: {
				dates: [new Date('2019-02-23T18:00:00Z')],
				text: '23rd January 2019',
			},
			thumbnail: 'events/amex-logo.png',
			link: 'https://www.facebook.com/events/242934183268890/',
			description: [
			  'Having your own personal website can be a great way to stand out from the crowd.',
			  'The aim of the workshop is to give attendees the tools to build and deploy their very own website. We’ll cover some examples, what to include, popular technologies and deployment methods.',
			  'Whether you already have your own website and are simply looking to get it online or you haven’t even begun, we’ll have something useful for you! The session will consist of a short introduction, followed by hands-on help from American Express demonstrators.'
			]
		},
		{
			name: 'Afternoon with Arista – HPC in Industry',
			when: {
				dates: [new Date('2018-11-28T18:00:00Z')],
				text: '28th November 2018',
			},
			thumbnail: 'events/arista.jpg',
			link: 'https://www.facebook.com/events/269230507111831/',
			description: [
				'A workshop associated with HPC in industry, followed later by a career talk on what to expect from employers, internships, interviews, and your first few months in the industry.'
			]
		},
		{
			name: 'DurHack 2018',
			when: {
				dates: [new Date('2018-11-17T18:00:00Z')],
				text: '17th-18th November 2018',
			},
			thumbnail: 'events/events_dh18_dark.png',
			link: 'https://durhack.com/',
			description: [
				'DurHack is back! Join us from <b>17<sup>th</sup>–18<sup>th</sup> November 2018</b> at the <b>Calman Learning Centre</b> for the third edition of DurHack. This year, <b>150</b> hackers from Durham and around the world will be pushing the boundaries of technology to new limits.',
				'See <a href=\'https://durhack.com\'>durhack.com</a> for tickets and more information.'
			]
		},
		{
			name: 'Scott Logic Coding Challenge',
			when: {
				dates: [new Date('2018-11-03T18:00:00Z')],
				text: '3rd November 2018',
			},
			thumbnail: 'events/slcc.png',
			link: 'https://www.facebook.com/events/247433799281385/',
			description: [
				'Scott Logic hosted an AI coding challenge in <b>E240, Higginson Building</b> at <b>1pm on Saturday 3<sup>rd</sup> November 2018</b> to help students with an interest in software development use their coding skills in a fun challenge. This gave students an opportunity to practise their coding skills and gave them more experience to help boost their CVs.',
				'The event was open to all Computing Society members. You didn\'t need to be a Computer Science student to take part, however, having a reasonable working knowledge of Java was helpful.',
				'The best team, <em>BaddaBing BaddaBoom</em>, won Amazon vouchers!',
				'There were also several Scott Logic developers there to help. They were very friendly, so chatting with them about what it\'s like to do their job, and get tips from them to help you start your career in software development, was a great idea.',
				'<b>What was the coding challenge?</b>',
				'The code challenge was a turn-based game for AI bots written in Java. At the start of each turn, your bot was provided with the current game state, e.g. map size, your team details and visible food items. Your task was to provide the next move for each of your players so that they could collect food, defend the home base or attack enemy locations. Students had some utility routines at their disposal, e.g. distance between two locations, a basic routing algorithm, but it was up to them how they balanced the activities of their players to maximise their chances of winning.',
				'Once students had designed and written their bots, they uploaded them to the game server and pitted them against a series of test bots to hone their skills. The final challenge was a battle against bots developed by rival teams.',
				'<b>What was the format for the afternoon?</b>',
				'13:00 – Welcome, setup, and introduction to the AI challenge<br />13:30 – Challenge starts<br />17:00 – Challenge finishes, debrief and awarding of prizes<br />Followed by pizza and drinks at <b>The Library</b> bar on <b>Saddler Street</b>',
				'<b>What were the requirements?</b>',
				'Students had to bring a laptop with the following software installed:',
				'<em>Essential:</em><ul><li>JDK (preferably 1.9, but we\'ll double-check for compatibility), with <code>JAVA_HOME</code> set appropriately</li></ul>',
				'<em>Recommended:</em><ul><li>Bash, CMD or other terminal</li><li>An IDE (e.g. IntelliJ, NetBeans or Eclipse, a text editor would work but might slow development)</li><li>git (although we can also provide a zip file or other means of accessing the contestant starter kit)</li></ul>'
			],
		},
		{
			name: 'TPP CompSoc Pub Quiz – October 2018',
			when: {
				dates: [new Date('2018-10-23T18:00:00Z')],
				text: '23rd October 2018',
			},
			thumbnail: 'events/events_tpp_pub_quiz.jpg',
			link: 'https://www.facebook.com/events/353265825415828/',
			description: [
				'TPP is excited to announce a Coding Challenge on <b>Tuesday 23<sup>rd</sup> October 2018</b>, in collaboration with CompSoc!',
				'Unlike a typical pub quiz, you\'ll need to exercise your problem solving skills to tackle the range of challenges set instead of applying your general knowledge.',
				'There will be free food and drinks, both soft and alcoholic, available for attendees throughout the whole event. There will also be great prizes on offer for the winning teams (Such as Raspberry Pi computers and a Hotel Chocolat hamper).',
				'We recommend teams of about 5-6 people, but smaller groups are welcome too, and if you\'re unsure who to come with then we\'ll be happy to match you up with other keen problem solvers on the day. Some questions require specific knowledge so you will want a programmer on your team!',
				'Entry is free of charge and doesn’t require a ticket, so feel free to just show up on the day!'
			]
		},
		{
			name: 'CompSoc at DSU Freshers Fair 2018',
			when: {
				dates: [new Date('2018-10-03T18:00:00Z')],
				text: '3rd October 2018',
			},
			thumbnail: 'events/ff18.jpg',
			link: 'https://www.facebook.com/events/194160121380478/',
			description: [
				'Join CompSoc at the Freshers Fair to collect freebies and learn more about our activities!',
				'We’ll be in ER140! Come and join us if you’re interested in tech, computers, programming, or want to learn, and we’ll give you some freebies!'
			]
		},
		{
			name: 'TPP CompSoc Pub Quiz – June 2018',
			when: {
				dates: [new Date('2018-06-11T18:00:00Z')],
				text: '11th June 2018',
			},
			thumbnail: 'events/events_tpp_pub_quiz.jpg',
			link: 'https://www.facebook.com/events/162858361233386/',
			description: [
				'TPP is excited to announce a Coding Challenge on Monday 11th June, in collaboration with CompSoc!',
				'Unlike a typical pub quiz, you\'ll need to exercise your problem solving skills to tackle the range of challenges set instead of applying your general knowledge.',
				'<b>Bring a laptop and your favourite code editor; your programming skills will be tested!</b>',
				'There will be free food and drinks, both soft and alcoholic, available for attendees throughout the whole event. There will also be great prizes on offer for the winning teams (Raspberry Pi computers and a Hotel Chocolat hamper).',
				'We recommend teams of about 5-6 people, but smaller groups are welcome too, and if you\'re unsure who to come with then we\'ll be happy to match you up with other keen problem solvers on the day. Some questions require specific knowledge so you will want a programmer on your team!',
				'Entry is free of charge and doesn’t require a ticket, so feel free to just show up on the day!'
			]
		},
		{
			name: 'Annual General Meeting 2018',
			when: {
				dates: [new Date('2018-03-12T18:00:00Z')],
				text: '12th March 2018',
			},
			thumbnail: 'events/agm_18.png',
			link: 'https://www.facebook.com/events/2172930349611497/',
			description: [
				'We\'re recruiting new people to run CompSoc. Exec roles are held from the end of the AGM in March 2018 to the end of the AGM in March 2019. Enthusiasm, commitment and perseverance will be needed for all of these roles. However, they are excellent additions to your CV and you will gain a lot of experience working with companies and sponsors in a corporate manner, and you will add a lot of professional skills to your skill set.'
			]
		},
		{
			name: 'TPP CompSoc Pub Quiz – February 2018',
			when: {
				dates: [new Date('2018-02-27T18:00:00Z')],
				text: '27th February 2018',
			},
			thumbnail: 'events/events_tpp_pub_quiz.jpg',
			link: 'https://www.facebook.com/events/2030221730580619/',
			description: [
				'Come and join TPP and CompSoc at The Boat Club by Elvet Bridge on 27th February 2018 and test your programming skills in our Pub Quiz. Bring a laptop and your favourite code editor – your problem-solving skills will be tested! Free food, beer, and soft drinks will be provided for all students. We’ll also be giving away great prizes such as Raspberry Pis and Amazon vouchers. With no entry fee, there’s nothing stopping you from assembling a group (max team size 6) of your most intelligent friends and coming along!'
			]
		},
		{
			name: 'DurHack 2017',
			when: {
				dates: [new Date('2017-12-09T18:00:00Z')],
				text: '9th–10th December 2017',
			},
			thumbnail: 'events/events_durhack_2.jpg',
			link: '/durhack',
			description: [
				'CompSoc brought back <a href=\'http://durhack.tech\'>DurHack</a> for a second year running and it was a huge success. With <a href=\'http://www.durham.gov.uk/\'>Durham County Council</a>, <a href=\'https://jobs.barclays.co.uk/\'>Barclays</a>, <a href=\'https://tpptop50.com\'>TPP</a>, <a href=\'https://get.tech\'>.TECH Domains</a>, <a href=\'https://www.waterstons.com/careers\'>Waterstons</a>, <a href=\'http://www.entrepreneursdurham.co.uk/\'>Entrepreneurs Durham</a>, <a href=\'http://www.keyboardco.com\'>The Keyboard Company</a>, the <a href=\'https:///www.dur.ac.uk/computer.science\'>Department of Computer Science</a> and <a href=\'https://www.durhamsu.com\'>Durham Students\' Union</a> on board as sponsors, this event was jam-packed with prizes and was not a hackathon to be missed!'
			]
		},
		{
			name: 'THG Company Presentation and Drinks',
			when: {
				dates: [new Date('2017-10-24T18:00:00Z')],
				text: '24th October 2017',
			},
			thumbnail: 'events/thg.png',
			link: 'https://www.facebook.com/events/325627244576664/',
			description: [
				'Join THG at 18:00 on 24th October 2017 at ER152, Elvet Riverside, to know more about their company and careers with them, followed by drinks.'
			]
		},
		{
			name: 'DurHack',
			when: {
				dates: [new Date('2017-01-29T18:00:00Z')],
				text: '28th–29th January 2017',
			},
			thumbnail: 'events/events_Durhack_2017.png',
			link: '/durhack',
			description: [
				'Durham University had its first ever 24-hour hackathon sponsored by big names like Durham County Council, GitHub, MLH, Sunderland Software City, Durham Students\' Union, Entrepreneurs Durham, Waterstons, Barclays, Microsoft and Durham University. With enormous data sets from in and around Durham, participants from various UK universities utilised it to produce something that can potentially make a difference to the region. 24 hours of coding interspersed with workshops, games, VR, short sleep sprints and awesome food, the event was a massive success.'
			]
		},
		{
			name: 'MLH Local Hack Day',
			when: {
				dates: [new Date('2016-12-03T18:00:00Z')],
				text: '3rd December 2016',
			},
			thumbnail: 'events/hackday.jpg',
			link: 'https://localhackday.mlh.io/',
			description: [
				'We organised a 12-hour-long event for building, problem-solving, coding and meeting new people on 3rd December 2016, and it turned out to be a great success! :-)'
			]
		},
		{
			name: 'Build-A-Chatbot!',
			when: {
				dates: [new Date('2016-12-01T18:00:00Z')],
				text: '1st December 2016',
			},
			thumbnail: 'events/buildachatbot.jpg',
			link: 'https://www.facebook.com/events/1322032881161709/',
			description: [
				'Build-A-Chatbot with Joe Nash, Program Manager at GitHub. Joe is a functional programmer and hacker with a passion for developer relations and community building, who joined us for a fun evening on 1st December 2016, learning to build a Facebook chatbot.'
			]
		},
		{
			name: 'Introduction to Coding Workshop',
			when: {
				dates: [new Date('2016-11-29T18:00:00Z')],
				text: '29th November 2016',
			},
			thumbnail: 'events/edcode.jpg',
			link: 'https://www.facebook.com/events/1890151881207928/',
			description: [
				'We held the first session of a weekly Introduction to Coding workshop in collaboration with <a href=\'http://www.entrepreneursdurham.co.uk\'>Entrepreneurs Durham</a> on 29th November 2016'
			]
		},
		{
			name: 'BP Supply and Trading Event',
			when: {
				dates: [new Date('2016-10-24T18:00:00Z')],
				text: '24th October 2016',
			},
			thumbnail: 'events/about_carousel_3-BP_Supply_And_Trading_2016-17.jpg',
			link: 'https://www.facebook.com/events/369911576674539/',
			description: [
				'The BP Supply and Trading Event was held on 24th October 2016, where Justin Fay from BP enlightened students about their graduate and placement roles and how technology is integrated into BP\'s business.'
			]
		},
		{
			name: 'Scott Logic Durham University Hackathon',
			when: {
				dates: [new Date('2016-05-04T18:00:00Z')],
				text: '4th May 2016',
			},
			thumbnail: 'events/winners.jpg',
			link: 'https://www.facebook.com/events/1608529472702814/',
			description: [
				'Our sponsors Scott Logic organised a hackathon on 4th May 2016. Another fun event with code, lots of free pizza and beer!'
			]
		},
		{
			name: 'Dur(h).ac._k',
			when: {
				dates: [new Date('2016-03-02T18:00:00Z')],
				text: '2nd March 2016',
			},
			thumbnail: 'events/about_carousel_1-Joe_Nash_Durhack_Initial_Talks_Group_Photo_2016-17.jpg',
			link: 'https://www.facebook.com/events/234166873592041/',
			description: [
				'Joe Nash from PayPal talked to the students on 2nd March 2016 about what hackathons are, how they are often misunderstood as attempts to break into systems, and how they are a brilliant opportunity to network with people from all parts of the world, develop new skills and an opportunity to land in a job as well! That\'s how Joe ended up working at PayPal.',
				'The students also got introduced to NodeJS.'
			]
		}
	],

	sponsors: {
		years: [
			'2020/2021',
			'2019/2020',
			'2018/2019',
			'2017/2018',
			'2016/2017'
		],
		companies: [
			{
				name: 'Thought Machine',
				link: 'https://thoughtmachine.net/',
				image: 'sponsors/thought-machine.gif',
				description: [
					'<strong>Thought Machine</strong> is solving one of the biggest problems in banking. Since we launched in 2014, our mission has been to liberate banks from outdated, legacy technology which makes it difficult for them to innovate in a world where the biggest tech brands such as Netflix and Spotify are operating in the cloud.',
					'Our flagship product, Vault, is a cloud-native, core banking engine built to run any type of bank - from established global banks all the way to new challenger banks. Vault is used by the likes of Lloyds Bank, Atom Bank and Standard Chartered.',
					'Every year, we hire many graduates for full-time roles, as well as students for 10-week summer internships and industrial placements in London. You will work in a team with our front end and back end engineers, using cutting-edge technology to deliver both client-facing and internal projects. You will develop ownership and responsibility for your own work and learn how to build software in an agile manner. You’ll gain a wealth of knowledge, skills and experience while having lots of fun in our awesome work environment.',
					'Join us and make an impact on our mission to revolutionise core banking!',
				],
				years: ['2020/2021'],
			},
			{
				name: 'Teach First',
				link: 'https://www.teachfirst.org.uk/',
				image: 'sponsors/teach-first.png',
				thumb: 'sponsors/teach-first-horiz.svg',
				description: [
					'Education in the UK isn’t fair. We need to unlock the potential in every child, not just some.',
					'<strong>Teach First</strong> develop the inspiring teachers and leaders who will make it happen. Together, we’ll build a better future with a fair education for all.Teach First are the UK’s largest graduate recruiter, voted top 10 in The Times Top 100. They seek, develop and support teaches and leaders who are determined to make a difference where it’s needed the most.',
				],
				years: ['2020/2021', '2019/2020'],
			},
			{
				name: 'Scott Logic',
				link: 'https://www.scottlogic.com/careers/',
				image: 'sponsors/scott-logic-transparent.png',
				description: [
					'At <b>Scott Logic</b>, we design and build software that transforms the performance of some of the world’s biggest and most demanding organisations, and we\'re always on the look out for talented individuals to join our team. Our <a href="https://www.scottlogic.com/careers/graduates-programme/" target="_blank">Graduate Programme</a> is a great way to kickstart your technology career. You’ll learn new skills, work on a diverse set of internal and client projects, and figure out what makes a globally successful software team tick.',
				],
				years: ['2020/2021', '2019/2020', '2018/2019', '2017/2018', '2016/2017'],
			},
			{
				name: 'Arista Networks',
				link: 'https://www.arista.com/en/careers',
				image: 'sponsors/arista.svg',
				description: [
					'<b>Arista Networks</b> was founded to pioneer and deliver software-driven cloud networking solutions for large data center storage and computing environments.',
				],
				years: ['2018/2019'],
			},
			{
				name: 'Bede Gaming',
				link: 'https://bedegaming.com/careers',
				image: 'sponsors/bede.png',
				description: [
					'<b>Bede Gaming</b> is a leading supplier of software to the online gambling industry. We offer world class platforms to gaming and betting operators, powering some of the market’s biggest brands and processing hundreds of millions of transactions per month. Bede provides innovative solutions to achieve digital ambitions. Built on a single-code base and API-led, means that our products act as the enabler to operators&rsquo; online objectives. Easily integrated with any 3<sup>rd</sup> party supplier, Bede gives back choice and flexibility to customers.',
				],
				years: ['2018/2019'],
			},
			{
				name: 'TPP',
				link: 'https://www.tpp-uk.com/careers',
				image: 'sponsors/tpp.svg',
				description: [
					'<b>TPP</b> is a cutting-edge software company based in Leeds. We\'re revolutionising healthcare across the world with our pioneering research and technology solutions. We\'re doing some amazing things here at TPP and we have some really exciting projects coming up. That\'s why we\'re looking for super-intelligent, geeky graduates for a number of vacancies, including our software developer and analyst roles. We don\'t require any previous experience at all and we offer amazing starting salaries of £50,000 with generous pay rises.',
				],
				years: ['2020/2021', '2019/2020', '2018/2019', '2017/2018'],
			},
			{
				name: 'StarLeaf',
				link: 'https://www.starleaf.com/about-us/careers',
				image: 'sponsors/starleaf.png',
				description: [
					'Founded in the UK in 2008, <b>StarLeaf</b> has a global footprint with representation on every continent and offices across the world. They are on a mission to transform the way businesses communicate and collaborate by designing intuitive messaging, premium meeting and calling solutions.',
					'In September, the company was named in the Gartner 2018 Magic Quadrant for Meeting Solutions and one of the fastest growing tech companies in the UK by The Sunday Times Hiscox Tech Track 100.',
					'StarLeaf\'s culture is built on collaboration, inclusion, creativity and support. This permeates everything they do, across all their teams and operations. They believe everyone at StarLeaf has a part to play in their success and that everyone should be rewarded for their contribution. This is why every single StarLeaf employee becomes a shareholder through the company’s share option scheme.',
				],
				years: ['2019/2020', '2018/2019'],
			},
			{
				name: 'Schroders',
				link: 'http://schroders.com/',
				image: 'sponsors/schroders-c.png',
				description: [
					'For over two centuries and more than seven generations <b>Schroders</b> have grown and developed our expertise in tandem with our clients\' needs and interests.',
				],
				years: ['2017/2018'],
			},
			{
				name: 'BlackRock',
				link: 'https://careers.blackrock.com/campusrecruitment',
				image: 'sponsors/blackrock-c.jpg',
				description: [
					'<b>BlackRock</b> combines the best of being a technology pioneer and financial leader. Since our inception in 1988, we’ve grown from an entrepreneurial start-up into the world’s largest investment manager by putting technology - and continuous innovation - at the heart of our business. Today, as the world’s largest asset manager, with more than $5.7 trillion under management, BlackRock brings together financial leadership and state-of-the-art technology to provide answers to millions of investors who entrust their financial futures to us.',
				],
				years: ['2017/2018'],
			},
			{
				name: '.TECH Domains',
				link: 'https://get.tech/',
				image: 'sponsors/radix-c.png',
				description: [
					'Since its launch 2 years ago, <b>.TECH Domains</b> has become the de facto domain extension for programmers, startups, tech brands and enthusiasts. With over 250,000 registrations, .TECH has seen a rapid adoption globally, including brands like Viacom.tech, TNW.tech and CES.tech. .TECH has been a constant promoter of the developer and student community, including supporting coding schools, university clubs, college fests as well as over 200 hackathons worldwide.',
				],
				years: ['2017/2018'],
			},
			{
				name: 'Jenson',
				link: 'http://www.jensonsolutions.com/',
				image: 'sponsors/jenson-c.png',
				description: [
					'<b>Jenson</b> are an experienced team of finance professionals providing a variety of services to a number of clients, ranging in size from start-ups through to fully listed companies quoted on the London Stock Exchange and NASDAQ. Our team of professionals has a wealth of experience across a number of sectors, enabling us to provide an efficient service and bring relevant experience to most organisations to support their strategic requirements. We also work closely with a group of private investors who often supply equity and debt funding to our clients.',
				],
				years: ['2017/2018'],
			},
			{
				name: 'Waterstons',
				link: 'https://www.waterstons.com/careers',
				image: 'sponsors/waterstons.svg',
				description: [
					'<strong>Waterstons</strong> are an IT consultancy with a keen business focus based in Durham! We’re open and honest, we’ll challenge you when you need challenging and we’ve been around for over twenty-five years. We provide creative technology-based solutions to improve business performance and increase competitive advantage.',
				],
				years: ['2019/2020'],
			},
			{
				name: 'Optiver',
				link: 'https://www.optiver.com/eu/en/working-at-optiver',
				image: 'sponsors/optiver.svg',
				description: [
					'<strong>Optiver</strong> are a leading global electronic market maker, focused on pricing, execution and risk management. We trade bonds, cash equities, exchange-traded funds, listed derivatives and foreign exchange. We pioneer our own trading strategies and systems using clean code and sophisticated technology. We achieve this by attracting, developing and empowering top talent, in order to sustain our future. ',
				],
				years: ['2020/2021', '2019/2020'],
			},
		],
	},
	teams: {
		current: [
			{
				name: 'Tom Nudd',
				image: 'tom.jpg',
				role: 'President',
				description: 'In charge of overseeing everything in the society and reaching out to sponsors.',
			},
			{
				name: 'Disha Gupta',
				image: 'disha.jpg',
				role: 'Events Officer',
				description: 'Works with sponsors and guest speakers to organise talks and workshops.',
			},
			{
				name: 'Olivia Hampshire',
				image: 'olivia.jpg',
				role: 'Finance Officer',
				description: 'Manages CompSoc\'s finances.',
			},
			{
				name: 'Heidi Januszewski',
				image: 'heidi.jpg',
				role: 'Media & Publicity Officer',
				description: 'In charge of the website content, social media, the mailing list, and promoting the society around the university.',
			},
			{
				name: 'Ethan Waite',
				image: 'ethan.jpg',
				role: 'Technical Web Officer',
				description: 'Works with the Publicity Officer to manage the technical side of the website.',
			},
			{
				name: 'Steve Thomas',
				image: 'steve.jpg',
				role: 'Secretary',
				description: 'Responsible for working with sponsors and other organisations to ensure CompSoc runs smoothly, handling contracts and paperwork.',
			},
		],
		past: [
			{
				year: '2020/2021',
				members: [
					{
						name: 'Tom Nudd',
						image: 'tom.jpg',
						role: 'President',
					},
					{
						name: 'Irenitemi Agbejule',
						image: 'irenitemi.jpg',
						role: 'Events Officer',
					},
					{
						name: 'Heidi Januszewski',
						image: 'heidi.jpg',
						role: 'Finance Officer',
					},
					{
						name: 'Ethan Waite',
						image: 'ethan.jpg',
						role: 'Technical Web Officer',
					},
					{
						name: 'Meredith Gibbons',
						image: 'merry.jpg',
						role: 'Secretary',
					},
				],
			},
			{
				year: '2019/2020',
				members: [
					{
						name: 'Karl Southern',
						image: 'karl.jpg',
						role: 'President',
					},
					{
						name: 'Henry Westmacott',
						image: 'henry.jpg',
						role: 'Events Officer',
					},
					{
						name: 'Merry Gibbons',
						image: 'merry.jpg',
						role: 'Treasurer',
					},
					{
						name: 'Tom Nudd',
						image: 'tom.jpg',
						role: 'Publicity Officer',
					},
					{
						name: 'Ethan Waite',
						image: 'ethan.jpg',
						role: 'Technical Web Officer',
					},
					{
						name: 'Kanika Mehta',
						image: 'kanika.jpg',
						role: 'Secretary',
					},
				],
			},
			{
				year: '2018/2019',
				members: [
					{
						role: 'President',
						image: 'robbie.jpg',
						name: 'Robbie Jakob-Whitworth',
					},
					{
						role: 'Events Officer',
						image: 'karl.jpg',
						name: 'Karl Southern',
					},
					{
						role: 'Treasurer',
						image: 'jess.png',
						name: 'Jessica Ng',
					},
					{
						role: 'Education Officer',
						image: 'mitchel.jpg',
						name: 'Mitchel Starkie',
					},
					{
						role: 'Publicity Officer',
						image: 'kat.png',
						name: 'Kat Strachan',
					},
					{
						role: 'Technical Web Officer',
						image: 'soumya2.png',
						name: 'Soumya Singh',
					},
					{
						role: 'Secretary',
						image: 'Vivek Mehta.png',
						name: 'Vivek Mehta',
					},
					{
						role: 'Officers without Portfolio',
						image: 'dmytro.png',
						name: 'Dmytro Drobisher and Henrike Gbinigie',
					},
				],
			},
			{
				year: '2017/2018',
				members: [
					{
						role: 'President',
						image: 'robbie.jpg',
						name: 'Robbie Jakob-Whitworth',
					},
					{
						role: 'Secretary',
						image: 'Vivek Mehta.png',
						name: 'Vivek Mehta',
					},
					{
						role: 'Treasurer',
						image: 'Tom O\'Leary.jpg',
						name: 'Tom O\'Leary',
					},
					{
						role: 'Web Officer',
						image: 'soumya2.png',
						name: 'Soumya Singh',
					},
					{
						role: 'Social Sec',
						image: 'ryota.png',
						name: 'Ryota Sakai',
					},
				],
			},
			{
				year: '2016/2017',
				members: [
					{
						role: 'President',
						image: 'Alistair Madden.png',
						name: 'Alistair Madden',
					},
					{
						role: 'Secretary',
						image: null,
						name: 'Mitchel Starkie',
					},
					{
						role: 'Treasurer',
						image: 'Sara Chen.png',
						name: 'Sara Chen',
					},
					{
						role: 'Web Officer',
						image: 'Soumya Singh.jpg',
						name: 'Soumya Singh',
					},
				]
			},
			{
				year: '2015/2016',
				members: [
					{
						role: 'President',
						image: 'Alistair Madden.png',
						name: 'Alistair Madden',
					},
					{
						role: 'Secretary',
						image: null,
						name: 'Ersil Jabbar',
					},
					{
						role: 'Treasurer',
						image: null,
						name: 'Raffe-ul Islam',
					},
					{
						role: 'Publicity',
						image: null,
						name: 'Alan Go',
					},
					{
						role: 'Web Officer',
						image: null,
						name: 'Ram Gupta',
					},
					{
						role: 'Librarian',
						image: null,
						name: 'Gabor Veres',
					},
				],
			},
		],
	},
};

