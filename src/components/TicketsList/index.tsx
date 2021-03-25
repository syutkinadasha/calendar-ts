import React, {useCallback} from "react";
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteTicket } from "../../actions";
import './TicketsList.css';

const TicketsList = () => {
	const tickets = useSelector((state: RootState) => state.tickets);
	const dispatch = useDispatch();

	const handlerDelete = useCallback((id: string) => {
		dispatch(deleteTicket(id));
	}, [dispatch]);

	return (
		<div className="tickets-list">
			{ tickets.map((ticket) => {
				const date = new Date(ticket.date);

				return (
					<div key={ticket.id} className="tickets-list__item">
						<Paper className="ticket__content">
							<div className="ticket__date">
								{date.toLocaleDateString()} {ticket.time}
							</div>
							<div className="ticket__title">
								{ticket.title}
							</div>
							<div className="ticket__buttons">
								<IconButton aria-label="delete" color="secondary" onClick={() => handlerDelete(ticket.id)}>
									<DeleteIcon />
								</IconButton>
							</div>
						</Paper>
					</div>
				)
			})}
		</div>
	)
};

export default TicketsList;