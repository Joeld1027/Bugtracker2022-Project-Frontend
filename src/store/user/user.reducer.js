import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
	currentUser: null,
	token: "",
};

export const userReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER:
			return {
				...state,
				currentUser: payload.user,
				token: payload.token,
			};
		case USER_ACTION_TYPES.SET_USER_TOKEN:
			return {
				...state,
				token: payload,
			};
		default:
			return state;
	}
};
