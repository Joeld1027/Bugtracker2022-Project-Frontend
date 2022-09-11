import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import DataTable from "../../components/table/data-table.component";
import { PublicFormContainer } from "../../public-components/public.styled.components";
import { apiCall } from "../../service/apiCall";
import {
	editProjectAsync,
	fetchAllProjectsAsync,
} from "../../store/project/project.actions";
import { fetchAllTasksAsync } from "../../store/task/task.actions";
import { selectCurrentProject } from "../../store/project/project.selector";
import { selectFreshTasks } from "../../store/task/task.selectors";
import UserTable from "../../components/user-table/user-table.component";

const defaultFormFields = {
	name: "",
	description: "",
	priority: "",
	deadline: "2022-08-06T00:00:00.000Z",
	addTasks: [],
};

const NewProject = ({ edit = null }) => {
	const dispatch = useDispatch();
	const { projectId } = useParams();
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { name, description, priority } = formFields;
	const navigate = useNavigate();
	const [project] = useSelector(selectCurrentProject(projectId));
	const { projectTasks, assignedDevs } = project || [];
	const allTasks = useSelector(selectFreshTasks);

	const deadline = new Date(formFields.deadline).toLocaleDateString();

	useEffect(() => {
		if (edit === "edit") {
			setFormFields({
				name: project.name,
				description: project.description,
				priority: project.priority,
				deadline: project.deadline,
				addTasks: [],
			});
		}
	}, []);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const handleCheckbox = (e) => {
		let { name, value } = e.target;
		let { [name]: array } = formFields;
		if (!array.includes(value)) {
			array = [...array, value];
		} else {
			array = array.filter((a) => a !== value);
		}
		setFormFields({ ...formFields, [name]: array });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		apiCall("post", "http://localhost:8081/projects", {
			...formFields,
		})
			.then((res) => {
				setFormFields({ ...defaultFormFields, addTasks: [] });
				dispatch(fetchAllProjectsAsync());
				dispatch(fetchAllTasksAsync());
				navigate("/dashboard/projects");
			})
			.catch((err) => console.log(err));
	};

	const handleEdit = (e) => {
		e.preventDefault();
		editProjectAsync(projectId, formFields);
		dispatch(fetchAllProjectsAsync());
		dispatch(fetchAllTasksAsync());
		navigate(`/dashboard/projects/${projectId}`);
	};

	return (
		<main>
			<PublicFormContainer>
				<form onSubmit={edit !== null ? handleEdit : handleSubmit}>
					<h2>Create New Project</h2>
					<div className="public-inputs">
						<div className="input-box">
							<label className="labels" htmlFor="name">
								Project Name
							</label>
							<input
								onChange={handleChange}
								value={name}
								type="text"
								name="name"
								required
							/>
						</div>
						<div className="input-box">
							<div className="radio-group">
								<label className="labels">Priority</label>
								<input
									onChange={handleChange}
									className="radio-task"
									value="low"
									checked={edit !== null ? priority === "low" : null}
									type="radio"
									name="priority"
								/>
								Low
								<input
									onChange={handleChange}
									className="radio-task"
									value="medium"
									checked={edit !== null ? priority === "medium" : null}
									type="radio"
									name="priority"
								/>
								Medium
								<input
									onChange={handleChange}
									className="radio-task"
									value="high"
									checked={edit !== null ? priority === "high" : null}
									type="radio"
									name="priority"
								/>
								High
							</div>
							<label>
								Due Date
								<input
									type="date"
									name="deadline"
									onChange={handleChange}
									required
								/>
							</label>
							{edit === "edit" && (
								<p className="danger text-muted">Current Deadline {deadline}</p>
							)}
						</div>
						<div className="input-box">
							<label className="labels" htmlFor="description">
								Description
							</label>
							<textarea
								onChange={handleChange}
								value={description}
								name="description"
								required
							/>
						</div>
					</div>
					{!edit && (
						<DataTable
							handleCheckbox={handleCheckbox}
							type="Tasks"
							title={"Open Tasks"}
							tableData={allTasks}
						/>
					)}

					{edit && (
						<DataTable
							handleCheckbox={handleCheckbox}
							type="Tasks"
							title="Add Tasks"
							tableData={allTasks}
						/>
					)}
					<UserTable title="Add Developer" users={assignedDevs} />
					<div className="public-btn-container">
						<input className="public-btn" type="submit" value="Submit" />
					</div>
				</form>
			</PublicFormContainer>
		</main>
	);
};

export default NewProject;
