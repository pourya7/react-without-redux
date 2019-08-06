import { LOGIN } from './types';

import { fakeLogin } from 'common/utils';

function login() {
	return {
		type: LOGIN.INIT
	};
}

function success(userName: string, listName: string) {
	return {
		type: LOGIN.SUCCESS,
		payload: { userName, listName }
	};
}

function failed(error: string) {
	return {
		type: LOGIN.ERROR,
		payload: error
	};
}

export function handleLogin(userName: string, listName: string) {
	return async function (dispatch: any) {
		dispatch(login());
		try {
			await fakeLogin(userName, listName);
			dispatch(success(userName, listName));
			window.localStorage.setItem('USER', userName);
		} catch (error) {
			dispatch(failed(error.response.data));
			window.localStorage.removeItem('USER');
		}
	};

	// return function (dispatch: any) {
	// 	dispatch(login());
	// 	return fakeLogin(userName, listName)
	// 		.then((result: any) => {
	// 			dispatch(success(userName, listName));
	// 			return result;
	// 		})
	// 		.catch((error: any) => {
	// 			console.error(error);
	// 			dispatch(failed());
	// 		})
	// };
}

export function handleLogout() {
	window.localStorage.removeItem('USER');
	return {
		type: LOGIN.TERMINATE
	};
}
