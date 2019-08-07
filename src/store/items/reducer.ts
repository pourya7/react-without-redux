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
					text: action.payload,
					completed: false,
				},
			];
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
