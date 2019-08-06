import React from 'react';
import { useItems } from 'hooks';

interface TodoItemProps {
	id: number;
	text?: string;
	completed?: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, completed = false, text = '' }) => {
	const { deleteItem, completeItem } = useItems();

	const handleDelete = () => deleteItem(id);
	const handleComplete = () => completeItem(id);

	return (
		<div className='todo-item'>
			<input type='checkbox' checked={completed} onChange={handleComplete} />
			<span>{text}</span>
			<button onClick={handleDelete}>
				Delete
			</button>
		</div>
	);
}

export default TodoItem;
