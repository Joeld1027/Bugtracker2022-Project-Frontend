import { Outlet } from "react-router-dom";
import Aside from "../../components/aside/aside.component";
import UserRightInfo from "../../components/user-right-info/user-right-info.component";

const Dashboard = () => {
	return (
		<div className="container">
			<Aside />
			<Outlet />
			<div className="right">
				<UserRightInfo />
			</div>
		</div>
	);
};
export default Dashboard;
