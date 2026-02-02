import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";

import "./header.scss";

export const Header: React.FC = () => {
	const [open, setOpen] = useState(false);
	const [currentPath, setCurrentPath] = useState("");

	useEffect(() => {
		// Only run on client side
		if (typeof window === 'undefined') return;
		
		// Dynamically import WOW.js only on the client
		import('wow.js').then((WOW) => {
			const wow = new WOW.default();
			wow.init();
		});
		
		setCurrentPath(window.location.pathname);
		
		// Handle path changes
		const handlePopState = () => {
			setCurrentPath(window.location.pathname);
			window.scrollTo(0, 0);
		};
		
		window.addEventListener('popstate', handlePopState);
		return () => window.removeEventListener('popstate', handlePopState);
	}, []);

	const onToggle = () => {
		setOpen(!open);
	};

	const close = () => {
		setOpen(false);
	};

	const isActive = (path: string) => {
		return currentPath === path;
	};

	return (
		<header>
			<div
				className={classnames("row", "center", "container", {
					open,
					closed: !open,
				})}
			>
				<div className="row center">
					<div className="logo flex">
						<a href="/">
							<img src="/images/logos/logo-with-text.png" alt="Durham CompSoc Logo" />
						</a>
					</div>
					<div className="menu">
						<button onClick={onToggle}>
							<FontAwesomeIcon icon={faBars} />
						</button>
					</div>
				</div>
				<div className="flex"></div>
				<a 
					href="/events" 
					onClick={close}
					className={isActive('/events') ? 'active' : ''}
				>
					Events
				</a>
				<a 
					href="/sponsors" 
					onClick={close}
					className={isActive('/sponsors') ? 'active' : ''}
				>
					Sponsors
				</a>
				<a 
					href="/team" 
					onClick={close}
					className={isActive('/team') ? 'active' : ''}
				>
					The Team
				</a>
				<a 
					href="/durhack" 
					onClick={close}
					className={isActive('/durhack') ? 'active' : ''}
				>
					DurHack
				</a>
				<a 
					href="/contact" 
					onClick={close}
					className={isActive('/contact') ? 'active' : ''}
				>
					Contact
				</a>
			</div>
		</header>
	);
};
