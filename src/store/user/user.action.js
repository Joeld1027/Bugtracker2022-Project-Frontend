import { createAction } from "../../utils/reducer/reducer.utils";

import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user) =>
	createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const setToken = (token) => {
	createAction(USER_ACTION_TYPES.SET_USER_TOKEN, token);
};

export const setActiveMenu = (Boolean) => {
	return createAction(USER_ACTION_TYPES.SET_ACTIVE_MENU, Boolean);
};
