import React, {useEffect, useRef} from "react";
import TextField from "@material-ui/core/TextField";
import { ITicket } from "../../../types";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addTicket } from "../../../actions";
import './CreateTicket.css';

type CreateTicketProps = {
	date?: string,
	time?: string,
	createTicket?: boolean,
	onCreateTicket: () => void
}

const CreateTicket = ({date = '', time = '', createTicket = false, onCreateTicket}: CreateTicketProps) => {
	const titleRef = useRef<HTMLInputElement>(null);
	const descRef = useRef<HTMLInputElement>(null);
	const dateRef = useRef<HTMLInputElement>(null);
	const timeRef = useRef<HTMLInputElement>(null);
	const dispatch = useDispatch();

	useEffect(() => {
		if (createTicket) {
			const newTicket: ITicket = {
				id: uuid(),
				title: titleRef?.current?.value || '',
				description: descRef?.current?.value || '',
				date: dateRef?.current?.value || '',
				time: timeRef?.current?.value || '',
			};
			dispatch(addTicket(newTicket));
			onCreateTicket();
		}
	}, [createTicket, onCreateTicket, dispatch])

	return (
		<form noValidate autoComplete="off">
			<TextField
				id="title"
				inputRef={titleRef}
				label="Название задачи"
				variant="outlined"
				type="text"
				color="secondary"
				size="small"
				required
				fullWidth
			/>
			<TextField
				id="description"
				inputRef={descRef}
				label="Описание задачи"
				variant="outlined"
				multiline
				rows={4}
				color="secondary"
				size="small"
				fullWidth
			/>
			<TextField
				id="date"
				inputRef={dateRef}
				label="Дата"
				type="date"
				color="secondary"
				defaultValue={date}
				required
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				id="time"
				inputRef={timeRef}
				label="Время"
				type="time"
				color="secondary"
				defaultValue={time}
				required
				InputLabelProps={{
					shrink: true,
				}}
				inputProps={{
					step: 1800
				}}
			/>
		</form>
	)
};

export default CreateTicket;