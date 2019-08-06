import itemsReducer from 'store/items';
import counterReducer from 'store/counter';
import loginReducer from 'store/login';

import { IItems } from 'store/items/types';
import { ILogin } from 'store/login/types';
import { ICounter } from 'store/counter/types';

import { logger } from 'store/middlewares';

interface IState {
	items: IItems[];
	login: ILogin;
	counter: ICounter;
}

export const initialState: IState = {
	items: itemsReducer.initialState,
	counter: counterReducer.initialState,
	login: loginReducer.initialState
}

export default function mainReducer(state: IState, action: object) {
	const { items, login, counter } = state;

	const currentState = {
		items: itemsReducer.reducer(items, action),
		login: loginReducer.reducer(login, action),
		counter: counterReducer.reducer(counter, action)
	};
	
	logger(action, state, currentState);

	return currentState;
}
