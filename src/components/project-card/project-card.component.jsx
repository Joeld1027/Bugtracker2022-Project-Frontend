import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentProject } from "../../store/project/project.selector";
import ProgressBar from "../progressbar/progress-bar.component";
import "./project-card.styles.css";

const INITIAL_STATE = {
	name: "",
	deadline: new Date(),
	projectTasks: [],
};

const ProjectCard = ({ cardData }) => {
	const [percent, setPercent] = useState(0);
	const [project, setProject] = useState(INITIAL_STATE);
	const [selectedProject] = useSelector(selectCurrentProject(cardData));
	const { name, deadline } = project;
	const date = new Date(deadline).toDateString();

	const handleProgressBar = () => {
		const totalTasks = project.projectTasks.length;
		const completedTasks = project.projectTasks.filter(
			(task) => task.status === "Completed"
		);
		const percent = (completedTasks.length / totalTasks) * 100;
		return Math.round(percent * 100) / 100;
	};

	useEffect(() => {
		if (project.projectTasks) {
			setPercent(handleProgressBar());
		}
		if (selectedProject) {
			setProject(selectedProject);
		}
	}, [project, selectedProject]);

	return (
		<div className="card-body">
			<div>
				<div className="card-header">
					<span className="material-symbols-sharp"> bar_chart </span>
					<h1>{name}</h1>
				</div>
				<div>
					<div className="middle">
						<ProgressBar bgcolor="#6a1b9a" completed={percent} />
					</div>
					<small className="text-muted"> Due on {date} </small>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
