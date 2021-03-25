import * as actionTypes from "./actions/types";

// store
export interface ITicket {
	id: string,
	title: string,
	description?: string,
	date: string,
	time: string
}

export interface IUser {
	name: string,
	lastName: string,
	gender: string,
	dateBirthday?: string,
	speciality?: string,
	description?: string,
	photo?: string
}

// actions
interface IAddTicket {
	type: typeof actionTypes.ADD_TICKET,
	payload: ITicket
}

interface IDeleteTicket {
	type: typeof actionTypes.DEL_TICKET,
	payload: {
		id: string
	}
}

interface IUpdateUser {
	type: typeof actionTypes.UPDATE_USER,
	payload: IUser
}

export type TicketActionTypes = IAddTicket | IDeleteTicket;
export type UserActionTypes = IUpdateUser;