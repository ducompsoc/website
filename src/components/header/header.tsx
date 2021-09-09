import React from 'react';
import { Link, RouteComponentProps, withRouter, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import { WOW } from 'wowjs';

import './header.scss';

const wow = new WOW();
wow.init();

export interface IHeaderState {
	open: boolean;
}

class HeaderComponent extends React.PureComponent<RouteComponentProps, IHeaderState> {
	constructor(props: RouteComponentProps) {
		super(props);
		this.state = { open: false };
	}

	// This is a little hacky. :-( But we need to do a couple of things when we
	// hop to another page.
	componentDidUpdate(prevProps: RouteComponentProps) {
		if (this.props.location.pathname !== prevProps.location.pathname) {
			wow.sync(); // tell wow.js we've changed the DOM so our animations reset
			window.scrollTo(0, 0); // scroll back to the top
		}
	}

	public render() {
		const { open } = this.state;

		return (
			<header>
				<div className={classnames('row', 'center', 'container', { open, closed: !open })}>
					<div className="row center">
						<div className="logo flex">
							<Link to="/">
								<img src="/images/logos/logo-with-text.png" alt="Durham CompSoc Logo" />
							</Link>
						</div>
						<div className="menu">
							<button onClick={this.onToggle}><FontAwesomeIcon icon={faBars} /></button>
						</div>
					</div>
					<div className="flex"></div>
					<NavLink to="/agm" onClick={this.close}>AGM</NavLink>
					<NavLink to="/events" onClick={this.close}>Events</NavLink>
					<NavLink to="/sponsors" onClick={this.close}>Sponsors</NavLink>
					<NavLink to="/team" onClick={this.close}>The Team</NavLink>
					<NavLink to="/durhack" onClick={this.close}>DurHack</NavLink>
					<NavLink to="/contact" onClick={this.close}>Contact</NavLink>
				</div>
			</header>
		);
	}

	private onToggle = () => {
		const { open } = this.state;

		this.setState({ open: !open });
	}

	private close = () => {
		this.setState({ open: false });
	}
}

export const Header = withRouter(HeaderComponent);
