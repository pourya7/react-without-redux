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
		} catch (error) {
			dispatch(failed(error.response.data));
		}
	};

	// return function (dispatch: any, state: any) {
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
	return {
		type: LOGIN.TERMINATE
	};
}
