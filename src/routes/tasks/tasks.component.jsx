import DataTable from "../../components/table/data-table.component";
import { Link } from "react-router-dom";
import "./tasks.styles.css";
import { useSelector } from "react-redux";
import { selectAllTasks } from "../../store/task/task.selectors";

const Tasks = () => {
	const allTasks = useSelector(selectAllTasks);

	return (
		<main>
			<div className="tasks-header-container">
				<h1>All Tasks</h1>
				<Link className="primary" to="new">
					<span className="material-symbols-sharp">add</span>
					<h3>Add New Task</h3>
				</Link>
			</div>
			<DataTable url="tasks" type="Tasks" tableData={allTasks} />
		</main>
	);
};

export default Tasks;
