import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import Aside from "../../components/aside/aside.component";
import RightSideMenu from "../../components/right-side-menu/right-side-menu.component";
import { fetchAllTasksAsync } from "../../store/task/task.actions";
import { useEffect } from "react";

const Dashboard = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllTasksAsync());
	}, [dispatch]);

	return (
		<div className="container">
			<Aside />
			<Outlet />
			<RightSideMenu />
		</div>
	);
};
export default Dashboard;
