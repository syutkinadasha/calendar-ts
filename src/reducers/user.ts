import * as actionTypes from "../actions/types";
import { IUser, UserActionTypes } from "../types";

const initUser: IUser = {
	name: '',
	lastName: '',
	gender: ''
}

const user = (state = initUser, action: UserActionTypes): IUser => {
	switch (action.type) {
		case actionTypes.UPDATE_USER:
			return {
				...state,
				...action.payload
			}
		default:
			return state;
	}
};

export default user;