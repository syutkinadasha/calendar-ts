import * as actionTypes from "../actions/types";
import { ITicket, TicketActionTypes } from "../types";

type TicketsType = ITicket[];
const initTickets: TicketsType = [];

const tickets = (state = initTickets, action: TicketActionTypes): TicketsType => {
	switch (action.type) {
		case actionTypes.ADD_TICKET:
			return [
				...state,
				{
					id: action.payload.id,
					title: action.payload.title,
					description: action.payload.description,
					date: action.payload.date,
					time: action.payload.time
				}
			];
		case actionTypes.DEL_TICKET:
			return [...state].filter((ticket) => ticket.id !== action.payload.id);
		default:
			return state;
	}
};

export default tickets;
