export interface IItems {
	[index: number]: {
		id: number;
		text?: string;
		completed?: boolean;
	}
}

export enum ITEMS {
	ADD = 'ADD',
	DELETE = 'DELETE',
	RESET = 'RESET',
	COMPLETE = 'COMPLETE'
}
