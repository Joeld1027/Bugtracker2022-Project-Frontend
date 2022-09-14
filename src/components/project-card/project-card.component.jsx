import { useEffect, useState } from "react";
import ProgressBar from "../progressbar/progress-bar.component";
import "./project-card.styles.css";

const ProjectCard = ({ cardData = {} }) => {
	const [project, setProject] = useState({});
	const { name, deadline, projectTasks } = project;
	const date = new Date(deadline).toDateString();

	useEffect(() => {
		if (cardData) {
			setProject(cardData);
		}
	}, [cardData]);

	const testData = [
		{ bgcolor: "#6a1b9a", completed: 60 },
		{ bgcolor: "#00695c", completed: 30 },
		{ bgcolor: "#ef6c00", completed: 53 },
	];

	return (
		<div className="card-body">
			<div>
				<div className="card-header">
					<span className="material-symbols-sharp"> bar_chart </span>
					<h1>{name}</h1>
				</div>
				<div>
					<div className="middle">
						<div className="left">
							<ProgressBar bgcolor="#6a1b9a" completed="60" />
						</div>
					</div>
					<small className="text-muted"> Due on {date} </small>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
