import { ILogin, LOGIN } from './types';


export const initialState: ILogin = {
	userName: '',
	listName: '',
	isLoading: false,
	isLoggedIn: !!window.localStorage.getItem('USER'),
	error: ''
}

export default function login(state = initialState, action: any) {
	switch (action.type) {
		case LOGIN.INIT:
			return {
				...state,
				error: '',
				isLoading: true
			};
		case LOGIN.SUCCESS:
			return {
				...state,
				userName: action.payload.userName,
				listName: action.payload.listName,
				isLoading: false,
				isLoggedIn: true
			};
		case LOGIN.ERROR:
			return {
				...state,
				isLoading: false,
				isLoggedIn: false,
				error: action.payload
			};
		case LOGIN.TERMINATE:
			return {
				...state,
				userName: '',
				listName: '',
				isLoggedIn: false
			};
		default: {
			return state;
		}
	}
}
