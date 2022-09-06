import { createAction } from "../../utils/reducer/reducer.utils";
import { apiCall } from "../../service/apiCall";

import { USER_ACTION_TYPES } from "./user.types";

export const setAllUsers = (users) =>
	createAction(USER_ACTION_TYPES.SET_ALL_USERS, users);

export const setCurrentUser = (user) =>
	createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const updateCurrentUser = (user) =>
	createAction(USER_ACTION_TYPES.UPDATE_CURRENT_USER, user);

export const setToken = (token) => {
	createAction(USER_ACTION_TYPES.SET_USER_TOKEN, token);
};

export const setActiveMenu = (Boolean) => {
	return createAction(USER_ACTION_TYPES.SET_ACTIVE_MENU, Boolean);
};

export const fetchAllUsersAsync = () => {
	return async (dispatch) => {
		try {
			const allUsers = await apiCall("get", "http://localhost:8081/users");
			dispatch(setAllUsers(allUsers));
		} catch (error) {
			console.log(error);
		}
	};
};

export const editCurrentUser = (id, userInfo) => {
	return async (dispatch) => {
		try {
			const editedUser = await apiCall(
				"put",
				`http://localhost:8081/users/${id}`,
				userInfo
			);
			dispatch(updateCurrentUser(editedUser.editedUser));
		} catch (error) {
			console.log(error);
		}
	};
};

export const deleteUser = (id) => {
	return async (dispatch) => {
		try {
			await apiCall("delete", `http://localhost:8081/users/${id}`);

			const allUsers = await apiCall("get", "http://localhost:8081/users");
			dispatch(setAllUsers(allUsers));
		} catch (error) {
			console.log(error);
		}
	};
};
