import { createSelector } from "reselect";

const allUsersReducer = (state) => state.user.allUsers;

export const selectCurrentUser = (state) => state.user.currentUser;

export const selectToken = (state) => state.user.token;

export const selectActive = (state) => state.user.active;

export const selectAllUsers = createSelector(
	[allUsersReducer],
	(allUsers) => allUsers
);

export const selectOneUser = (id) =>
	createSelector([allUsersReducer], (allUsers) =>
		allUsers.find((user) => user._id === id)
	);

export const selectAllUsersNotInProject = (id) =>
	createSelector([allUsersReducer], (allUsers) =>
		allUsers.filter((user) => !user.assignedProjects.includes(id))
	);
