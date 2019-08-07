import React, { useRef } from 'react';

import { useItems } from 'hooks';

const AddTodo: React.FC = () => {
	const todoInput = useRef<HTMLInputElement>(null);

	const { addItem } = useItems();

	const handleSubmit = (event: any) => {
		event.preventDefault();
		if (todoInput.current) {
			addItem(todoInput.current.value);
			todoInput.current.value = '';
		}
	}

	return (
		<div className='todo-add'>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					ref={todoInput}
					className='form-field'
					placeholder='e.g. Buy Tickets' />
			</form>
		</div>
	);
}

export default AddTodo;
