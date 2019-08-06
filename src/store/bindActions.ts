import { INameToValueMap } from 'common/types';

export default function bindActions(actions: any, dispatch: any) {
	const bindAction = (action: any, dispatch: any) => {
		return function() {
			return dispatch(action.apply(null, arguments));
		};
	}
	// if it's a single action
	if (typeof actions === 'function') {
		return bindAction(actions, dispatch);
	}
	if (typeof actions !== 'object' || actions === null) {
		throw new Error(
			`bindActions expected an object or a function, instead received ${
				actions === null ? 'null' : typeof actions
			}. `
		)
	}
	const boundActions: INameToValueMap = {};
	for (const key in actions) {
		const action: any = actions[key];
		if (typeof action === 'function') {
			boundActions[key] = bindAction(action, dispatch);
		}
	}
	return boundActions;
}
