import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProjectCard from "../../components/project-card/project-card.component";
import { selectCurrentTask } from "../../store/task/task.selectors";
import { selectCurrentUser } from "../../store/user/user.selector";
import { MainContainer, TaskDetailButtonContainer } from "./task.styles";
import { handleStatus } from "../../utils/public-forms/form.utilities";
import { deleteTaskAsync, editTaskAsync } from "../../store/task/task.actions";

const TaskDetailsPage = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectCurrentUser);
	const { taskId } = useParams();
	const [task] = useSelector(selectCurrentTask(taskId));
	const { name, createdDate, status, priority, description, assignedDevs } =
		task;
	const [project] = task.assignedProject;
	const date = new Date(createdDate).toLocaleDateString();
	const navigate = useNavigate();

	const handleDelete = () => {
		dispatch(deleteTaskAsync(taskId));
		navigate("/dashboard/tasks");
	};

	const handleEdit = () => {
		dispatch(editTaskAsync(taskId, { assignUserToTask: user._id }));
		navigate(-1);
	};

	const handleComplete = () => {
		dispatch(editTaskAsync(taskId, { status: "Completed" }));
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
						{assignedDevs.length > 0 ? (
							<button
								onClick={handleComplete}
								className="success"
								children="Complete"
							/>
						) : (
							<button
								onClick={handleEdit}
								className="success"
								children="Start Task"
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
			{project ? (
				<Link to={`/dashboard/projects/${project._id}`}>
					<ProjectCard cardData={project._id} />
				</Link>
			) : (
				<h1>No Assigned Projects</h1>
			)}
		</MainContainer>
	);
};
export default TaskDetailsPage;
