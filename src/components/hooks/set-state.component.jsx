import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllTasks } from "../../store/task/task.actions";

export const SetState = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchAll = async () => {
			Promise.all([dispatch(fetchAllTasks())]).then(() => {
				console.log("Set State called");
			});
		};

		fetchAll();
	}, [dispatch]);
};
