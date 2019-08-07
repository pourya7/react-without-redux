import React from 'react';

import { useItems } from 'hooks';

interface TodoItemProps {
	/**
	 * Todo ID
	 */
	id: number;

	/**
	 * Todo Text
	 */
	text: string;

	/**
	 * is Todo completed
	 */
	completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = props => {
	const { completeItem } = useItems();

	const handleComplete = () => {
		completeItem(props.id);
	}

	return (
		<div className='todo-item'>
			<input
				id={props.id.toString()}
				type='checkbox'
				checked={props.completed}
				onChange={handleComplete} />
			<label htmlFor={props.id.toString()} className={'todo-item-text' + (props.completed ? ' completed' : '')}>{props.text}</label>
		</div>
	);
}

export default TodoItem;
