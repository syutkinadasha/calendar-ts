import { createStore } from "redux";
import reducer from "./reducers";

const configureStore = (prevState: any) => {
	return createStore(reducer, prevState)
};

const store = configureStore({});

export default store;