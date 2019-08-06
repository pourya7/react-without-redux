export const asyncer = (dispatch: any) => (action: any) =>
	typeof action === 'function' ?  action(dispatch) : dispatch(action);

export const logger = (
	action: object,
	prevState: object,
	currentState: object
) => {
	console.groupCollapsed('Logger');
	console.log('%c Action:', 'color: blue', action);
	console.log('%c Previous State:', 'color: red', prevState);
	console.log('%c Current State:', 'color: green', currentState);
	console.groupEnd();
};
