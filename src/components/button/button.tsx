import React from 'react';
import classnames from 'classnames';
import { withRouter, RouteComponentProps } from 'react-router';

import './button.scss';

export interface IButtonProps extends RouteComponentProps {
	size?: 'small' | 'medium' | 'large';
	children?: React.ReactNode;
	to?: string;
	raised?: boolean;
	onClick?(): void;
}

class ButtonComponent extends React.PureComponent<IButtonProps> {
	public render() {
		const { size, children, raised } = this.props;

		return (
			<button
				onClick={this.handleClick}
				className={classnames('button', size || 'medium', { raised })}>
				<div className="hover"></div>
				<div className="inner row center">
					<div className="text">{children}</div>
					<div className="arrow-line"></div>
					<div className="arrow-head"></div>
				</div>
			</button>
		);
	}

	private handleClick = () => {
		const { to, onClick, history } = this.props;
		if (onClick) {
			onClick();
		}

		if (to) {
			history.push(to);
		}
	}
}

export const Button = withRouter(ButtonComponent);
