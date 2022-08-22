import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { apiCall } from "../../service/apiCall";
import { MainContainer, TaskDetailButtonContainer } from "../tasks/task.styles";

const ProjectDetailsPage = () => {
	const navigate = useNavigate();
	const { projectId } = useParams();
	const [project, setProject] = useState({});
	const { name, priority, createdBy, description, created } = project;
	const date = new Date(created).toLocaleDateString();

	const getProject = () => {
		apiCall("get", `http://localhost:8081/projects/${projectId}`)
			.then((res) => setProject(res))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getProject();
	}, []);

	const handleDelete = () => {
		apiCall("delete", `http://localhost:8081/projects/${projectId}`)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
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
		</MainContainer>
	);
};

export default ProjectDetailsPage;
