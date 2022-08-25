import { apiCall } from "../../service/apiCall";
import { createAction } from "../../utils/reducer/reducer.utils";
import { TASK_ACTION_TYPES } from "./task.types";

export const setAllTasks = (tasks) =>
	createAction(TASK_ACTION_TYPES.SET_ALL_TASKS, tasks);

export const fetchAllTasksAsync = () => {
	return async (dispatch) => {
		try {
			const allTasks = await apiCall("get", `http://localhost:8081/tasks`);
			dispatch(setAllTasks(allTasks));
		} catch (err) {
			console.log(err);
		}
	};
};
