import React, { useMemo } from "react";
import { dateType } from "../../utils/const";
import { ITicket } from "../../types";
import { CalendarProps, getCalendar } from "../../utils/getCalendar";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import './CalendarList.css';

type CalendarListProps = {
	month: number,
	year: number,
	handleClickOpen: (param: CalendarProps) => void
}

const CalendarList = ({month, year, handleClickOpen}: CalendarListProps) => {
	const tickets = useSelector((state: RootState) => state.tickets);

	const filteredTickets = useMemo(() => {
		const filtered: any = {};

		tickets.forEach((ticket) => {
			const ticketDate = new Date(`${ticket.date}T${ticket.time}`);
			const y = ticketDate.getFullYear();
			const m = ticketDate.getUTCMonth();

			if (m === month && y === year) {
				const d = ticketDate.getDate();
				if (!filtered[d]) filtered[d] = [];

				filtered[d].push(ticket);
			}
		});

		return filtered;
	}, [tickets, month, year])

	const calendarDays = useMemo(() => {
		return getCalendar(month, year);
	}, [month, year]);

	return (
		<div className={`calendar-days__list calendar-days__list_${Math.round(calendarDays.length/7)}`}>
			{ calendarDays.map((itemDay , key) => {
				let classes = "calendar-days__item";
				const ticketsExist = filteredTickets[itemDay.day] && filteredTickets[itemDay.day].length > 0;

				if (itemDay.type === dateType.hidden)
					classes += ' calendar-days__item_disabled';

				if (ticketsExist)
					classes += ' calendar-days__item_events';

				return (
					<div key={key} className={classes} onClick={() => handleClickOpen(itemDay)}>
						<div className="calendar__days-day">{itemDay.day}</div>
						{ ticketsExist && filteredTickets[itemDay.day].map((ticket: ITicket) => {
							return (
								<div key={ticket.id} className="calendar__days-ticket" title={ticket.title}>
									{ticket.time} {ticket.title}
								</div>
							)
						})}
					</div>
				)
			}) }
		</div>
	)
};

export default CalendarList;