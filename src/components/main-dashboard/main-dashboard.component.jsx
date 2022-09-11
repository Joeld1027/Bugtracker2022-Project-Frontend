import { useSelector } from "react-redux";
import ProjectCard from "../project-card/project-card.component";
import DataTable from "../table/data-table.component";
import "./main-dashboard.styles.css";
import { selectCurrentUser } from "../../store/user/user.selector";

const MainDashboard = () => {
	const currentUser = useSelector(selectCurrentUser);
	const { assignedTasks, assignedProjects } = currentUser;

	return (
		<main>
			<h1>Dashboard</h1>
			{assignedProjects.legnth > 0 ? (
				<div className="card-container">
					<ProjectCard cardData={assignedProjects} />
				</div>
			) : (
				<div className="empty-message">
					<h2>No Projects Assigned to you.</h2>
				</div>
			)}

			<DataTable title="Your Tasks" type="Tasks" tableData={assignedTasks} />
		</main>
	);
};

export default MainDashboard;
