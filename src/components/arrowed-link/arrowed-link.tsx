import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import "./arrowed-link.scss";

export interface IArrowedTextProps {
	children: string;
	reverse?: boolean;
}

export interface IArrowedLinkProps extends IArrowedTextProps {
	to: string;
	external?: boolean;
}

const ArrowedText: React.FC<IArrowedTextProps> = (props) => (
	<span
		className={classnames("arrowed-link", "row", { reversed: props.reverse })}
	>
		{props.reverse && (
			<React.Fragment>
				<span className="arrow-head"></span>
				<span className="arrow-line"></span>
			</React.Fragment>
		)}
		<span className="text">{props.children}</span>
		{!props.reverse && (
			<React.Fragment>
				<span className="arrow-line"></span>
				<span className="arrow-head"></span>
			</React.Fragment>
		)}
	</span>
);

export const ArrowedLink: React.FC<IArrowedLinkProps> = (props) => {
	if (props.external) {
		return (
			<a
				href={props.to}
				target="_blank"
				rel="noopener noreferrer"
				className="arrowed-link-wrapper"
			>
				<ArrowedText {...props} />
			</a>
		);
	}

	return (
		<Link
			className={classnames("arrowed-link", "row", { reversed: props.reverse })}
			to={props.to}
		>
			<ArrowedText {...props} />
		</Link>
	);
};
