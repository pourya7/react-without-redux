import React  from 'react';

import { useLogin } from 'hooks';

import Todos from 'components/Todos';
import Login from 'components/Login';

const App: React.FC = () => {
	const { isLoggedIn } = useLogin();

	return (
		<div className='todo-app'>
			{isLoggedIn ?  <Todos /> : <Login />}
		</div>
	);
}

export default App;
