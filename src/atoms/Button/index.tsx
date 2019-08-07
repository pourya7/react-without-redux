import React from 'react';

interface IButtonProps {
	/**
	 * TODO: Icon name selected from an icon pack
	 */
	icon?: string;

	/**
	 * Button text
	 */
	text?: string;

	/**
	 * Button Theme
	 */
	theme?: 'primary' | 'secondary';

	/**
	 * Button type
	 */
	type?: 'submit' | 'reset' | 'button';

	/**
	 * is Button large
	 */
	large?: boolean;

	/**
	 * should Button fill the avialable width
	 */
	fill?: boolean;

	/**
	 * is Button state set to loading
	 */
	loading?: boolean;

	/**
	 * Button onClick callback
	 */
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button: React.FC<IButtonProps> = props => {
	let buttonClasses = 'button';
	buttonClasses += ` button-${props.theme}`;
	if (props.large) buttonClasses += ' button-large';
	if (props.fill) buttonClasses += ' button-fill';
	if (props.loading) buttonClasses += ' button-loading';
	return (
		<button
			type={props.type}
			disabled={props.loading}
			className={buttonClasses}
			onClick={props.onClick}>
			{props.loading && <span className='button-spinner' />}
			{props.icon && <span className='button-icon'>Icon</span>}
			<span className='button-text'>{props.text}</span>
		</button>
	);
}

Button.defaultProps = {
	// Button Text
	text: '',
	// Button Theme
	theme: 'primary',
	// Button Type
	type: 'button',
	// Button Size
	large: false,
	// Button Filled
	fill: false,
	// Button Loading
	loading: false,
	// Button onClick
	onClick: () => {}
};

export default Button;
