import { useGlobalState } from 'store';
import bindActions from 'store/bindActions';
import loginReducer from 'store/login';

const { actions } = loginReducer;

/**
 * useLogin Custom Hook
 */
const useLogin: any = () => {
	const { state, dispatch } = useGlobalState();

	// List of Props
	const { login } = state;

	// List of Actions
	const {
		handleLogin,
		handleLogout
	} = actions;

	// Bind Actions
	const loginActions = bindActions({
		handleLogin,
		handleLogout
	}, dispatch);

	return { ...login, ...loginActions };
}

export default useLogin;
