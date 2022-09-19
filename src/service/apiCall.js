import axios from "axios";
import { fetchAllUsersAsync } from "../store/user/user.action";
import { fetchAllTasksAsync } from "../store/task/task.actions";
import { fetchAllProjectsAsync } from "../store/project/project.actions";

export function setTokenHeader(token) {
	if (token) {
		axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	} else {
		delete axios.defaults.headers.common["Authorization"];
	}
}

export function apiCall(method, path, data) {
	return new Promise((resolve, reject) => {
		return axios[method](path, data)
			.then((res) => {
				return resolve(res.data);
			})
			.catch((err) => {
				return reject(err);
			});
	});
}

export function setState(dispatch) {
	const fetchAll = async () => {
		return Promise.all([
			dispatch(fetchAllUsersAsync()),
			dispatch(fetchAllTasksAsync()),
			dispatch(fetchAllProjectsAsync()),
		]).then(() => {
			console.log("state set");
		});
	};
	fetchAll();
}
