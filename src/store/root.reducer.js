import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { taskReducer } from "./task/task.reducer";
import { projectReducer } from "./project/project.reducer";

export const rootReducer = combineReducers({
	user: userReducer,
	tasks: taskReducer,
	projects: projectReducer,
});
