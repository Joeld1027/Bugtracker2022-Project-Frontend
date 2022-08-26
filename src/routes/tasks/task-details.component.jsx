import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiCall } from "../../service/apiCall";
import { selectCurrentTask } from "../../store/task/task.selectors";
import { MainContainer, TaskDetailButtonContainer } from "./task.styles";

const TaskDetailsPage = () => {
	const { taskId } = useParams();
	const [task] = useSelector(selectCurrentTask(taskId));
	const { name, createdDate, status, priority, description } = task;
	const date = new Date(createdDate).toLocaleDateString();
	const navigate = useNavigate();

	const handleDelete = () => {
		apiCall("delete", `http://localhost:8081/tasks/${taskId}`)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
		navigate("/dashboard/tasks");
	};

	const handleStatus = (status) => {
		switch (status) {
			case "Pending":
				return "warning";
			case "New":
				return "primary";
			case "In Progress":
				return "success";
			default:
				return "";
		}
	};
	return (
		<MainContainer>
			<section>
				<div className="task-details-top">
					<div>
						<h1>{name}</h1>
						<span className="task-date text-muted">Created On {date}</span>
					</div>
					<span className={` ${handleStatus(status)}`}>
						This task is {status}
					</span>
				</div>
				<div>
					<p>
						{" "}
						<span>Priority:</span> {priority}
					</p>
					<p>
						<span>Description:</span> <br />
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
export default TaskDetailsPage;
