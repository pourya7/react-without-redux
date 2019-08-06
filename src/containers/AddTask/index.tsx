import React from 'react';

import { Button } from 'components';

import { useLogin, useCounter } from 'hooks';

const AddTask: React.FC = () => {
	const { userName, handleLogout } = useLogin();
	const { counter, incrementCounter } = useCounter();

	return (
		<div className='todo-add-task'>
			<h1>
				Hello {userName}
			</h1>
			<div>{counter}</div>
			<Button text='Increment' onClick={incrementCounter} />
			<Button text='Log out' onClick={handleLogout} />
		</div>
	);
}

export default AddTask;
