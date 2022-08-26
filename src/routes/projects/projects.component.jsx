import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DataTable from "../../components/table/data-table.component";
import { selectAllProjects } from "../../store/project/project.selector";

const Projects = () => {
	const allProjects = useSelector(selectAllProjects);

	return (
		<main>
			<div className="tasks-header-container">
				<h1>Projects</h1>
				<Link className="primary" to="new">
					<span className="material-symbols-sharp">add</span>
					<h3>Add New Project</h3>
				</Link>
			</div>
			<DataTable type="Projects" tableData={allProjects} />
		</main>
	);
};

export default Projects;
