import React from "react";

import "./page-title.scss";
import Helmet from "react-helmet";

export interface IPageTitleProps {
	image: string;
	verticalPosition?: number;
	title?: string;
	children: string;
}

export const PageTitle: React.FC<IPageTitleProps> = (
	props: IPageTitleProps
) => {
	const style = {
		backgroundImage: `url(/images/${props.image})`,
		backgroundPosition: props.verticalPosition
			? `0% ${props.verticalPosition}%`
			: "center",
	};

	return (
		<div className="page-title" style={style}>
			<Helmet>
				<title>{props.title || props.children} » Durham CompSoc</title>
			</Helmet>

			<div className="container">
				<h2>{props.children}</h2>
			</div>
		</div>
	);
};
