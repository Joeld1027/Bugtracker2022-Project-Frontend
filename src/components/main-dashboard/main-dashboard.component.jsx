import { useSelector } from "react-redux";
import ProjectCard from "../project-card/project-card.component";
import DataTable from "../table/data-table.component";
import "./main-dashboard.styles.css";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { selectCurrentUserTasks } from "../../store/task/task.selectors";

const MainDashboard = () => {
	const [user, setUser] = useState({});
	const currentUser = useSelector(selectCurrentUser);
	useEffect(() => {
		setUser(currentUser);
	}, [currentUser]);
	const { assignedTasks, assignedProjects } = user;
	const userTasks = useSelector(selectCurrentUserTasks(assignedTasks));

	return (
		<main>
			<h1>Dashboard</h1>
			{assignedProjects ? (
				<div className="card-container">
					{assignedProjects.map((project) => (
						<Link key={project._id} to={`/dashboard/projects/${project._id}`}>
							<ProjectCard cardData={project._id} />
						</Link>
					))}
				</div>
			) : (
				<div className="empty-message">
					<h2>No Projects Assigned to you.</h2>
				</div>
			)}

			{userTasks ? (
				<DataTable title="Your Tasks" type="Tasks" tableData={userTasks} />
			) : null}
		</main>
	);
};

export default MainDashboard;
