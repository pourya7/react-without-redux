import { COUNTER, ICounter } from './types';

export const initialState: ICounter = 0;

export default function counter(state = initialState, action: any) {
	switch (action.type) {
		case COUNTER.INCREMENT:
			return state + 1;
		default:
			return state;
	}
}
