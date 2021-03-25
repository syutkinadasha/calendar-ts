import { combineReducers } from "redux";
import tickets from "./tickets";
import user from "./user";

const reducer = combineReducers({tickets, user});

export default reducer;

export type RootState = ReturnType<typeof reducer>