import React from "react";
import classnames from "classnames";

import "./button.scss";

export interface IButtonProps {
	size?: "small" | "medium" | "large";
	children?: React.ReactNode;
	to?: string;
	raised?: boolean;
	onClick?(): void;
}

export const Button: React.FC<IButtonProps> = ({ size, children, raised, to, onClick }) => {
	const className = classnames("button", size || "medium", { raised });

	const content = (
		<>
			<div className="hover"></div>
			<div className="inner row center">
				<div className="text">{children}</div>
				<div className="arrow-line"></div>
				<div className="arrow-head"></div>
			</div>
		</>
	);

	if (to) {
		return (
			<a href={to} className={className} onClick={onClick}>
				{content}
			</a>
		);
	}

	return (
		<button onClick={onClick} className={className}>
			{content}
		</button>
	);
};
