import { useGlobalState } from 'store';
import bindActions from 'store/bindActions';

import counterReducer from 'store/counter';

const { actions } = counterReducer;

/**
 * useCounter Custom Hook
 */
const useCounter: any = () => {
	const { state , dispatch } = useGlobalState();

	// List of Props
	const { counter } = state;

	// List of Actions
	const { incrementCounter } = actions;

	// Bind Actions
	const counterActions = bindActions({ incrementCounter }, dispatch);

	return { counter, ...counterActions };
}

export default useCounter;
