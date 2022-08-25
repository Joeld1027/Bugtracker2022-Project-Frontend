import { TASK_ACTION_TYPES } from "./task.types";

const INITIAL_STATE = {
	allTasks: [],
};

export const taskReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case TASK_ACTION_TYPES.SET_ALL_TASKS:
			return {
				...state,
				allTasks: payload,
			};
		default:
			return state;
	}
};
