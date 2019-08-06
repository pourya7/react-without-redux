import { COUNTER } from './types';

export function incrementCounter() {
	return {
		type: COUNTER.INCREMENT
	};
}
