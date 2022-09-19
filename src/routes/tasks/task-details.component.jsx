import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProjectCard from "../../components/project-card/project-card.component";
import { apiCall } from "../../service/apiCall";
import { selectCurrentTask } from "../../store/task/task.selectors";
import { MainContainer, TaskDetailButtonContainer } from "./task.styles";
import { handleStatus } from "../../utils/public-forms/form.utilities";

const TaskDetailsPage = () => {
	const { taskId } = useParams();
	const [task] = useSelector(selectCurrentTask(taskId));
	const { name, createdDate, status, priority, description } = task;
	const [project] = task.assignedProject;
	const date = new Date(createdDate).toLocaleDateString();
	const navigate = useNavigate();

	const handleDelete = () => {
		apiCall("delete", `http://localhost:8081/tasks/${taskId}`)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
		navigate("/dashboard/tasks");
	};

	const handleComplete = () => {
		apiCall("patch", `http://localhost:8081/tasks/${taskId}`, {
			status: "Completed",
		})
			.then((res) => console.log(res))
			.catch((error) => console.log(error));
		navigate(-1);
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
					<div>
						{status !== "Completed" && (
							<button
								onClick={handleComplete}
								className="success"
								children="Complete"
							/>
						)}
					</div>
					<div>
						<Link to="./edit">Edit</Link>
						<button onClick={handleDelete} children="Delete" />
					</div>
				</TaskDetailButtonContainer>
			</section>
			<h2>Assigned Project</h2>
			<Link to={`/dashboard/projects/${project._id}`}>
				<ProjectCard cardData={project} />
			</Link>
		</MainContainer>
	);
};
export default TaskDetailsPage;
