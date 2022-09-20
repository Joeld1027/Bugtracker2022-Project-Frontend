import { apiCall, setState } from "../../service/apiCall";
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

export const deleteTaskAsync = (taskId) => {
	return async (dispatch) => {
		try {
			await apiCall("delete", `http://localhost:8081/tasks/${taskId}`);
			setState(dispatch);
		} catch (err) {
			console.log(err);
		}
	};
};

export const editTaskAsync = (taskId, obj) => {
	return async (dispatch) => {
		try {
			apiCall("patch", `http://localhost:8081/tasks/${taskId}`, {
				...obj,
			});
			setState(dispatch);
		} catch (err) {
			console.log(err);
		}
	};
};
