import React, { useState, useCallback } from "react";
import { CalendarProps } from "../../utils/getCalendar";
import './Calendar.css';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { dateType, MONTH, WEEK_DAYS } from "../../utils/const";
import CreateTicket from "../../components/Forms/CreateTicket";
import FormDialog from "../../components/FormDialog";
import { getFormattedDate } from "../../utils/getFormattedDate";
import CalendarList from "../../components/CalendarList";

const Calendar = () => {
	const date = new Date();
	const [month, setMonth] = useState(date.getUTCMonth());
	const [year, setYear] = useState(date.getFullYear());
	const [currentDate, setCurrentDate] = useState('');
	const [isOpen, setIsOpen] = useState(false);
	const [isNewTicket, setIsNewTicket] = useState(false);

	const handleClose = () => {
		setIsOpen(false);
	};

	const submitForm = () => {
		setIsNewTicket(true);
	};

	const handleCreateTicket = () => {
		setIsNewTicket(false);
		handleClose();
	};

	const handleClickOpen = useCallback((item: CalendarProps) => {
		if (item.type !== dateType.hidden) {
			const newDate = new Date(year, month, item.day);
			setCurrentDate(getFormattedDate(newDate.toLocaleString()));
			setIsOpen(true);
		}
	}, [year, month]);

	const handlePrev = useCallback(() => {
		const prevMonth = month === 0 ? 11 : month - 1;

		setMonth(prevMonth);

		if (prevMonth === 11)
			setYear(year - 1);

	}, [month, year]);

	const handleNext = useCallback(() => {
		const nextMonth = month === 11 ? 0 : month + 1;

		setMonth(nextMonth);

		if (nextMonth === 0)
			setYear(year + 1);

	}, [month, year]);

	return (
		<div className="calendar">
			<div className="calendar__header">
				<ListItemIcon className="calendar__pagination" onClick={handlePrev}>
					<ArrowUpwardIcon color={'secondary'}/>
				</ListItemIcon>
				<ListItemIcon className="calendar__pagination" onClick={handleNext}>
					<ArrowDownwardIcon color={'secondary'}/>
				</ListItemIcon>
				<div className="calendar__title">{MONTH[month]} {year}</div>
			</div>
			<div className="calendar__content">
				<div className="calendar__week-days">
					{ WEEK_DAYS.map((day, key) => (<div key={key}>{day}</div>)) }
				</div>
				<CalendarList month={month} year={year} handleClickOpen={handleClickOpen}/>
			</div>
			<FormDialog title="Новая задача" isOpen={isOpen} closeDialog={handleClose} submitForm={submitForm}>
				<CreateTicket date={currentDate} time={'12:00'} createTicket={isNewTicket} onCreateTicket={handleCreateTicket}/>
			</FormDialog>
		</div>
	)
};

export default Calendar;