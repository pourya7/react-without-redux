import { ITEMS } from './types';

export function addItem(text: string) {
	return {
		type: ITEMS.ADD,
		payload: text
	};
}

export function resetItems() {
	return {
		type: ITEMS.RESET
	};
}

export function completeItem(id: number) {
	return {
		type: ITEMS.COMPLETE,
		payload: id
	};
}
