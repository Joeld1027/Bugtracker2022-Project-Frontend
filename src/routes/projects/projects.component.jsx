import DataTable from "../../components/table/data-table.component";
import { Link } from "react-router-dom";

const Projects = () => {
	return (
		<main>
			<div className="tasks-header-container">
				<h1>Projects</h1>
				<Link className="primary" to="new">
					<span className="material-symbols-sharp">add</span>
					<h3>Add New Project</h3>
				</Link>
			</div>
			<DataTable />
		</main>
	);
};

export default Projects;
