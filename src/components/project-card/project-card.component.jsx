const ProjectCard = ({ cardData = {} }) => {
	const [project] = cardData;
	const { name, deadline, projectTasks } = project;
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
							<h3>Total Expenses</h3>
						</div>
					</div>
					<small className="text-muted"> Due on 08/08/2022 </small>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
