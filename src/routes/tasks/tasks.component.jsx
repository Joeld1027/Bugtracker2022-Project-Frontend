import DataTable from "../../components/table/data-table.component";
import { Link } from "react-router-dom";
import "./tasks.styles.css";

const Tasks = () => {
	return (
		<main>
			<div className="tasks-header-container">
				<h1>Tasks</h1>
				<Link className="primary" to="new">
					<span className="material-symbols-sharp">add_task</span>
					<h2>Add New Task</h2>
				</Link>
			</div>
			<DataTable />
		</main>
	);
};

export default Tasks;
