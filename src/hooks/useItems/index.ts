import { useGlobalStore } from 'store';

import bindActions from 'store/bindActions';
import itemsReducer from 'store/items';

const { actions } = itemsReducer;

/**
 * useItems Custom Hook
 */
const useItems: any = () => {
	const { state , dispatch } = useGlobalStore();

	// List of Props
	const { items } = state;

	// List of Actions
	const {
		addItem,
		resetItems,
		completeItem
	} = actions;

	// Bind Actions
	const itemsActions = bindActions({
		addItem,
		resetItems,
		completeItem
	}, dispatch);

	return { items, ...itemsActions };
}

export default useItems;
