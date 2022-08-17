import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiCall } from "../../service/apiCall";

const ProjectDetailsPage = () => {
	const { projectId } = useParams();
	const [project, setProject] = useState({});

	const getProject = () => {
		apiCall("get", `http://localhost:8081/projects/${projectId}`)
			.then((res) => setProject(res))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getProject();
	}, []);

	return (
		<main>
			<div className="tasks-header-container">
				<div>
					<h1>{project.name || "No name"}</h1>
					<p>{project.description}</p>
					<p>{project.priority}</p>
					<p>{project.deadline.split("T")[0]}</p>
					<p>{project.completed ? "Project Done" : "Project in progress"}</p>
				</div>
			</div>
		</main>
	);
};

export default ProjectDetailsPage;
