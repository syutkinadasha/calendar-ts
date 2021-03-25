import React, {SyntheticEvent, useCallback, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../../../types";
import { updateUser } from "../../../actions";
import TextField from "@material-ui/core/TextField";
import { RootState } from "../../../reducers";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from "@material-ui/core/Button";

const initUser: IUser = {
	name: '',
	lastName: '',
	gender: '',
	dateBirthday: '',
	description: ''
}

const ProfileForm = () => {
	const [user, setUser] = useState<IUser>(initUser);
	const dispatch = useDispatch();
	const defaultUser = useSelector((state: RootState) => state.user);

	const handleSubmit = (e: SyntheticEvent): void => {
		e.preventDefault();
		if (user.name && user.lastName && user.gender) {
			dispatch(updateUser(user));
		}
	};

	const handleChange = useCallback((e: React.ChangeEvent<{ value: unknown }>, key: string) => {
		setUser({
			...user,
			[key]: e.target.value as string
		})
	}, [user]);

	useEffect(() => {
		setUser({
			name: defaultUser.name,
			lastName: defaultUser.lastName,
			gender: defaultUser.gender || 'other',
			dateBirthday: defaultUser.dateBirthday || '',
			description: defaultUser.description || ''
		});
	}, [defaultUser])

	return (
		<form noValidate autoComplete="off" onSubmit={handleSubmit}>
			<fieldset>
				<TextField
					id="name"
					label="Имя"
					variant="outlined"
					type="text"
					color="secondary"
					size="small"
					value={user.name}
					onChange={(e) => handleChange(e, 'name')}
					required
					fullWidth
				/>
			</fieldset>
			<fieldset>
				<TextField
					id="lastName"
					label="Фамилия"
					variant="outlined"
					type="text"
					color="secondary"
					size="small"
					value={user.lastName}
					onChange={(e) => handleChange(e, 'lastName')}
					required
					fullWidth
				/>
			</fieldset>
			<fieldset>
				<FormControl required component="fieldset">
					<FormLabel color="secondary" component="legend">Пол</FormLabel>
					<RadioGroup
						value={user.gender}
						onChange={(e) => handleChange(e, 'gender')}
						aria-label="gender"
						name="customGender"
					>
						<FormControlLabel value="female" control={<Radio />} label="Женский" />
						<FormControlLabel value="male" control={<Radio />} label="Мужской" />
						<FormControlLabel value="other" control={<Radio />} label="Рыбка" />
					</RadioGroup>
				</FormControl>
				<FormControl component="fieldset">
					<TextField
						id="dateBirthday"
						label="Дата рождения"
						type="date"
						color="secondary"
						value={user.dateBirthday}
						onChange={(e) => handleChange(e, 'dateBirthday')}
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</FormControl>
			</fieldset>
			<fieldset>
				<TextField
					id="description"
					label="О себе"
					variant="outlined"
					multiline
					rows={4}
					color="secondary"
					size="small"
					value={user.description}
					onChange={(e) => handleChange(e, 'description')}
					fullWidth
				/>
			</fieldset>
			<Button type="submit" variant="outlined" color="secondary">
				Сохранить
			</Button>
		</form>
	)
};

export default ProfileForm;