import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import DataTable from "../../components/table/data-table.component";
import { selectCurrentProject } from "../../store/project/project.selector";
import { deleteProjectAsync } from "../../store/project/project.actions";
import { MainContainer, TaskDetailButtonContainer } from "../tasks/task.styles";
import UserTable from "../../components/user-table/user-table.component";
import { useEffect, useState } from "react";

const ProjectDetailsPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { projectId } = useParams();
	const [project, setProject] = useState({});
	const [selectedProject] = useSelector(selectCurrentProject(projectId));
	useEffect(() => {
		setProject(selectedProject);
	}, [selectedProject]);

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
		dispatch(deleteProjectAsync(projectId));
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
					<div>
						<button
							onClick={handleDelete}
							className="success"
							children="Complete"
						/>
					</div>
					<div>
						<Link to="./edit">Edit</Link>
						<button
							onClick={handleDelete}
							className="danger"
							children="Delete"
						/>
					</div>
				</TaskDetailButtonContainer>
			</section>

			<DataTable type="Tasks" tableData={projectTasks} title="Project Tasks" />
			<UserTable users={assignedDevs} title="Assigned Developers" />
		</MainContainer>
	);
};

export default ProjectDetailsPage;
