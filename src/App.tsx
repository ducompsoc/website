import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { AGM } from './components/agm/agm';
import { Events } from './components/events/events';
import { Sponsors } from './components/sponsors/sponsors';
import { Team } from './components/team/team';
import { PastSponsors } from './components/past-sponsors/past-sponsors';
import { PastTeam } from './components/past-team/past-team';
import { DurHack } from './components/durhack/durhack';
import { NotFound } from './components/not-found/not-found';
import { Contact, ContactSuccess } from './components/contact/contact';
import { Footer } from './components/footer/footer';

import './App.scss';

const App: React.FC = () => {
	return (
		<Router>
			<div>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/agm" component={AGM} />
					<Route path="/events" component={Events} />
					<Route path="/sponsors" exact component={Sponsors} />
					<Route path="/sponsors/previous" exact component={PastSponsors} />
					<Route path="/team" exact component={Team} />
					<Route path="/team/previous" exact component={PastTeam} />
					<Route path="/durhack" component={DurHack} />
					<Route path="/contact/success" component={ContactSuccess} />
					<Route path="/contact" component={Contact} />
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
