import { createSelector } from "reselect";

const allTasksReducer = (state) => state.tasks.allTasks;

export const selectAllTasks = createSelector(
	[allTasksReducer],
	(allTasks) => allTasks
);

export const selectCurrentTask = (id) =>
	createSelector([allTasksReducer], (allTasks) =>
		allTasks.filter((task) => task._id === id)
	);

export const selectFreshTasks = createSelector([allTasksReducer], (allTasks) =>
	allTasks.filter((task) => task.assignedProject.length <= 0)
);
