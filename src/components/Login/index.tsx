import React, { useRef } from 'react';

import { useLogin } from 'hooks';

import { Button } from 'atoms';

const Login: React.FC = () => {
	const userNameInput = useRef<HTMLInputElement>(null);
	const listNameInput = useRef<HTMLInputElement>(null);

	const { isLoading, error, handleLogin } = useLogin();

	const handleSubmit = (event: any) => {
		event.preventDefault();
		if (userNameInput.current && listNameInput.current) {
			handleLogin(userNameInput.current.value, listNameInput.current.value);
		}
	}

	return (
		<div>
			<h1>Simple Todo</h1>
			<form className='form' onSubmit={handleSubmit}>
				<input
					type='text'
					ref={userNameInput}
					placeholder='Your Name'
					className='form-field' />
				<input
					type='text'
					ref={listNameInput}
					placeholder='List Name (e.g. Daily)'
					className='form-field' />
				<Button
					fill
					large
					type='submit'
					text="Let's Go"
					loading={isLoading} />
				{error && <div className='form-error'>{error}</div>}
			</form>
		</div>
	);
}

export default Login;
