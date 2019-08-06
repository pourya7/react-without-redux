import { ITEMS } from './types';

export function addItem() {
	return {
		type: ITEMS.ADD
	};
}

export function deleteItem(id: number) {
	return {
		type: ITEMS.DELETE,
		payload: id
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
