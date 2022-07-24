import { Outlet } from "react-router-dom";
import Aside from "../../components/aside/aside.component";
import RightSideMenu from "../../components/right-side-menu/right-side-menu.component";

const Dashboard = () => {
	return (
		<div className="main-container">
			<Aside />
			<Outlet />
			<RightSideMenu />
		</div>
	);
};
export default Dashboard;
