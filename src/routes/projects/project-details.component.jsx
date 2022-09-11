import { useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import DataTable from "../../components/table/data-table.component";
import { apiCall } from "../../service/apiCall";
import { selectCurrentProject } from "../../store/project/project.selector";
import { MainContainer, TaskDetailButtonContainer } from "../tasks/task.styles";
import UserTable from "../../components/user-table/user-table.component";

const ProjectDetailsPage = () => {
	const navigate = useNavigate();
	const { projectId } = useParams();
	const [project] = useSelector(selectCurrentProject(projectId));
	const {
		name,
		priority,
		createdBy,
		description,
		created,
		projectTasks,
		assignedDevs,
	} = project;
	const date = new Date(created).toLocaleDateString();

	const handleDelete = () => {
		apiCall("delete", `http://localhost:8081/projects/${projectId}`)
			.then((res) => console.log("deleted " + res.name))
			.catch((err) => {
				console.log(err);
				if (err.response.status === 401) {
					navigate("/auth");
					return;
				}
			});
		navigate("/dashboard/projects");
	};

	return (
		<MainContainer>
			<section>
				<div className="task-details-top">
					<div>
						<h1>{name}</h1>
						<span className="task-date text-muted">Created On {date}</span>
					</div>
					<span>Created by {createdBy}</span>
				</div>
				<div>
					<p>
						{" "}
						<span>Priority:</span> {priority}
					</p>
					<p>
						<span>DESCRIPTION</span> <br />
						{description}
					</p>
				</div>
				<TaskDetailButtonContainer>
					<Link to="./edit">Edit</Link>
					<button onClick={handleDelete} className="danger" children="Delete" />
				</TaskDetailButtonContainer>
			</section>

			<DataTable type="Tasks" tableData={projectTasks} title="Project Tasks" />
			<UserTable users={assignedDevs} title="Assigned Developers" />
		</MainContainer>
	);
};

export default ProjectDetailsPage;
