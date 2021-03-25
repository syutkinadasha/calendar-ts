import * as actionTypes from "./types";
import { ITicket, IUser, TicketActionTypes, UserActionTypes } from "../types";

const updateUser = (payload: IUser): UserActionTypes => {
	return {
		type: actionTypes.UPDATE_USER,
		payload: payload
	}
}

const addTicket = (payload: ITicket): TicketActionTypes => {
	return {
		type: actionTypes.ADD_TICKET,
		payload: payload
	}
}

const deleteTicket = (id: string): TicketActionTypes => {
	return {
		type: actionTypes.DEL_TICKET,
		payload: {
			id
		}
	}
}

export {
	updateUser,
	addTicket,
	deleteTicket
};