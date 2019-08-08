import React, {
	createContext,
	useContext,
	useReducer,
	useCallback
} from 'react';

import { IContextProps } from 'common/types';

import { asyncer } from 'store/middlewares';
import mainReducer, { initialState } from 'store/reducers';

const GlobalStore = createContext({} as IContextProps);

export const useGlobalStore = () => useContext(GlobalStore);

export default function Provider({ children } : { children: React.ReactNode}) {
	const [ state, dispatchBase ] = useReducer(mainReducer, initialState);

	const dispatch = useCallback(asyncer(dispatchBase, state), []);

	return (
		<GlobalStore.Provider value={{ state, dispatch }}>
			{children}
		</GlobalStore.Provider>
	);
}
