import React from 'react';

import TodoItem from 'components/TodoItem';

interface TodoListProps {
	items: any
}

const TodoList: React.FC<TodoListProps> = ({ items }) => {
	return (
		<div className='todo-list'>
			{items.map((item: any) => <TodoItem key={item.id} {...item} />)}
		</div>
	);
}

export default TodoList;
