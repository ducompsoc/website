import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import './arrowed-link.scss';

export interface IArrowedLinkProps {
	children: string;
	to: string;
	reverse?: boolean;
}

export const ArrowedLink: React.FC<IArrowedLinkProps> = (props: IArrowedLinkProps) => (
	<Link className={classnames('arrowed-link', 'row', { reversed: props.reverse })} to={props.to}>
		{props.reverse && <React.Fragment><span className="arrow-head"></span><span className="arrow-line"></span></React.Fragment>}
		<span className="text">{props.children}</span>
		{!props.reverse && <React.Fragment><span className="arrow-line"></span><span className="arrow-head"></span></React.Fragment>}
	</Link>
);
