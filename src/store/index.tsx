import React, {
	createContext,
	useContext,
	useReducer,
	useCallback
} from 'react';

import { IContextProps } from 'common/types';

import { asyncer } from 'store/middlewares';
import mainReducer, { initialState } from 'store/reducers';

const StateContext = createContext({} as IContextProps);

export const useGlobalState = () => useContext(StateContext);

export default function Provider({ children } : { children: React.ReactNode}) {
	const [ state, dispatchBase ] = useReducer(mainReducer, initialState);

	const dispatch = useCallback(asyncer(dispatchBase, state), []);

	return (
		<StateContext.Provider value={{ state, dispatch }}>
			{children}
		</StateContext.Provider>
	);
}
