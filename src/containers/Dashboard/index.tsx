import React, { useRef } from 'react';

import { useLogin } from 'hooks';

import { Button, Card } from 'components';

const Dashboard: React.FC = () => {
	const userNameInput = useRef<HTMLInputElement>(null);
	const listNameInput = useRef<HTMLInputElement>(null);

	const {
		userName,
		listName,
		isLoggedIn,
		isLoading,
		handleLogin,
		handleLogout,
		error
	} = useLogin();

	const handleSubmit = (event: any) => {
		event.preventDefault();
		if (userNameInput.current && listNameInput.current) {
			handleLogin(userNameInput.current.value, listNameInput.current.value);
		}
	}

	const renderForm = () => {
		return (
			<form className='form' onSubmit={handleSubmit}>
				<input
					type='text'
					ref={userNameInput}
					defaultValue=''
					placeholder='Your Name'
					className='form-field' />
				<input
					type='text'
					ref={listNameInput}
					defaultValue=''
					placeholder='List Name (e.g. Daily)'
					className='form-field' />
				<Button
					text="Let's Go"
					type='submit'
					fill
					large
					loading={isLoading} />
				{error && <div className='form-error'>{error}</div>}
			</form>
		);
	}

	const renderGreeting = () => {
		return (
			<div>
				<Card>
					Hey, {userName}!
				</Card>
				<Button text='Log out' onClick={handleLogout} />
			</div>
		);
	}

	return (
		<div className='todo-dashboard'>
			<div className='todo-dashboard-header'>
				<h1>Simple Todo</h1>
			</div>
			{isLoggedIn ? renderGreeting() : renderForm()}
		</div>
	);
}

export default Dashboard;
