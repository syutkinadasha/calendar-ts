import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

type FormDialogProps = {
	title: string,
	isOpen: boolean,
	closeDialog: () => void,
	submitForm: () => void,
	children: React.ReactNode
}

const FormDialog = ({title, isOpen, closeDialog, submitForm, children}: FormDialogProps) => {

	const handleClose = (): void => {
		closeDialog();
	};

	const handleSubmit = (): void => {
		submitForm();
	}

	return (
		<Dialog open={ isOpen } onClose={handleClose}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				{ children }
				<DialogActions>
					<Button type="submit" onClick={handleSubmit} variant="outlined" color="secondary">
						Сохранить
					</Button>
					<Button onClick={handleClose} variant="outlined">
						Закрыть
					</Button>
				</DialogActions>
			</DialogContent>
		</Dialog>
	);
};

export default FormDialog;