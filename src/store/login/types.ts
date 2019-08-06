export interface ILogin {
	userName: string;
	listName: string;
	isLoading: boolean;
	isLoggedIn: boolean;
	error: string;
}

export enum LOGIN {
	INIT = 'INIT',
	SUCCESS = 'SUCCESS',
	ERROR = 'ERROR',
	TERMINATE = 'TERMINATE'
}
