import React from "react";

import { Button } from "../button/button";

import "./not-found.scss";

export const NotFound: React.FC = () => (
	<div className="not-found column center">
		<div>
			<h3>404</h3>
			<p>We can't find what you're looking for.</p>
			<Button to="/">Get back to safety</Button>
		</div>
	</div>
);
