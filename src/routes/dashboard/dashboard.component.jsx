import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import Aside from "../../components/aside/aside.component";
import RightSideMenu from "../../components/right-side-menu/right-side-menu.component";
import { fetchAllTasksAsync } from "../../store/task/task.actions";
import { fetchAllProjectsAsync } from "../../store/project/project.actions";
import { fetchAllUsersAsync } from "../../store/user/user.action";
import { Spinner } from "../../public-components/public.styled.components";

const Dashboard = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllTasksAsync());
		dispatch(fetchAllProjectsAsync());
		dispatch(fetchAllUsersAsync());
	}, [dispatch]);

	return (
		<div className="container">
			<Aside />
			<Outlet />
			{/* <main>
				<Spinner>
					<div className="inner-text">LOADING...</div>
				</Spinner>
			</main> */}
			<RightSideMenu />
		</div>
	);
};
export default Dashboard;
