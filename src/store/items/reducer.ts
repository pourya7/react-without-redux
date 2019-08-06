import { ITEMS, IItems } from './types';

export const initialState: IItems[] = [];

export default function items(state = initialState, action: any) {
	switch (action.type) {
		case ITEMS.RESET: {
			return [];
		}
		case ITEMS.ADD: {
			return [
				...state,
				{
					id: Date.now(),
					text: '',
					completed: false,
				},
			];
		}
		case ITEMS.DELETE: {
			return state.filter((item: any) => item.id !== action.payload);
		}
		case ITEMS.COMPLETE: {
			return state.map((item: any) => {
				if (item.id === action.payload) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			});
		}
		default: {
			return state;
		}
	}
}
