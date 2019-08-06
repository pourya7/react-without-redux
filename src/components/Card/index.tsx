import React from 'react';

interface ICardProps {
	children: React.ReactNode;
}

const Card: React.FC<ICardProps> = props => {
	let cardClasses = 'card';
	return (
		<div className={cardClasses}>
			{props.children}
		</div>
	);
}

export default Card;
