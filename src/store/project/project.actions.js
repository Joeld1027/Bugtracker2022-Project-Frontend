import { apiCall } from "../../service/apiCall";
import { createAction } from "../../utils/reducer/reducer.utils";
import { PROJECT_ACTION_TYPES } from "./project.types";

export const setAllProjects = (projects) =>
	createAction(PROJECT_ACTION_TYPES.SET_ALL_PROJECTS, projects);

export const fetchAllProjectsAsync = () => {
	return async (dispatch) => {
		try {
			const allProjects = await apiCall(
				"get",
				`http://localhost:8081/projects`
			);
			dispatch(setAllProjects(allProjects));
		} catch (err) {
			console.log(err);
		}
	};
};

export const editProjectAsync = (id, data) => {
	console.log(data);

	try {
		const editedProject = apiCall(
			"patch",
			`http://localhost:8081/projects/${id}`,
			{
				...data,
			}
		);
		console.log(editedProject);
	} catch (error) {
		console.log(error);
	}
};
