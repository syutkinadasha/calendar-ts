import React, {useState} from "react";
import FormDialog from "../../components/FormDialog";
import CreateTicket from "../../components/Forms/CreateTicket";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import TicketsList from "../../components/TicketsList";

const Tickets = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isNewTicket, setIsNewTicket] = useState(false);

	const handleOpen = () => {
		setIsOpen(true);
	};

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

	return (
		<div>
			<Button variant="outlined" color="secondary" onClick={handleOpen} startIcon={<AddIcon />}>
				Добавить задачу
			</Button>
			<TicketsList />
			<FormDialog title="Новая задача" isOpen={isOpen} closeDialog={handleClose} submitForm={submitForm}>
				<CreateTicket createTicket={isNewTicket} onCreateTicket={handleCreateTicket}/>
			</FormDialog>
		</div>
	)
};

export default Tickets;