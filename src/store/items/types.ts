export interface IItems {
	[index: number]: {
		id: number;
		text?: string;
		completed?: boolean;
	}
}

export enum ITEMS {
	ADD = 'ITEMS_ADD',
	RESET = 'ITEMS_RESET',
	COMPLETE = 'ITEMS_COMPLETE'
}
