import { createSelector } from "reselect";

const selectProjectReducer = (state) => state.projects.allProjects;

export const selectAllProjects = createSelector(
	[selectProjectReducer],
	(projects) => projects
);

export const selectCurrentProject = (id) =>
	createSelector([selectProjectReducer], (projects) =>
		projects.filter((project) => project._id === id)
	);
