import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllProjectsAsync } from "../../store/project/project.actions";
import { fetchAllTasksAsync } from "../../store/task/task.actions";
import { fetchAllUsersAsync } from "../../store/user/user.action";

export const SetState = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchAll = async () => {
			Promise.all([
				dispatch(fetchAllTasksAsync()),
				dispatch(fetchAllProjectsAsync()),
				dispatch(fetchAllUsersAsync()),
			]).then(() => {
				console.log("Set State called");
			});
		};

		fetchAll();
	}, [dispatch]);
};
