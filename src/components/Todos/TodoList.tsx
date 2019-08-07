import React from 'react';

import { useItems } from 'hooks';

import TodoItem from './Todo';

const TodoList: React.FC = () => {
	const { items } = useItems();

	return (
		<div className='todo-visible-list'>
			{items.map((item: any) => <TodoItem key={item.id} {...item} />)}
		</div>
	);
}

export default TodoList;
