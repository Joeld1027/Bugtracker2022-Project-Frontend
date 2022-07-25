import DataTable from "../../components/table/data-table.component";
import { Link } from "react-router-dom";

const Projects = () => {
	return (
		<main>
			<div className="tasks-header-container">
				<h1>Projects</h1>
				<Link className="success" to="new">
					<span className="material-symbols-sharp">post_add</span>
					<h2>Add New Project</h2>
				</Link>
			</div>
			<DataTable />
		</main>
	);
};

export default Projects;
