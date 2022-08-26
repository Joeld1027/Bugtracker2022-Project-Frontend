import { PROJECT_ACTION_TYPES } from "./project.types";

const INITIAL_STATE = {
	allProjects: [],
};

export const projectReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case PROJECT_ACTION_TYPES.SET_ALL_PROJECTS:
			return {
				...state,
				allProjects: payload,
			};
		default:
			return state;
	}
};
