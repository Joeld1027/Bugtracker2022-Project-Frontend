import Aside from "../../components/aside/aside.component";
import MainDashboard from "../../components/main-dashboard/main-dashboard.component";

const Dashboard = () => {
	return (
		<div className="main-container">
			<Aside />
			<MainDashboard />
		</div>
	);
};
export default Dashboard;
