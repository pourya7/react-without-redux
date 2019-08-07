import itemsReducer from 'store/items';
import loginReducer from 'store/login';

import { IItems } from 'store/items/types';
import { ILogin } from 'store/login/types';

import { logger } from 'store/middlewares';

interface IState {
	items: IItems[];
	login: ILogin;
}

export const initialState: IState = {
	items: itemsReducer.initialState,
	login: loginReducer.initialState
}

export default function mainReducer(state: IState, action: object) {
	// Receiving previous state here
	const { items, login } = state;

	// Receiving current state here
	const currentState = {
		items: itemsReducer.reducer(items, action),
		login: loginReducer.reducer(login, action)
	};

	// Middlewares
	logger(action, state, currentState);

	return currentState;
}
