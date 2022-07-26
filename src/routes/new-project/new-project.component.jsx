import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DataTable from "../../components/table/data-table.component";
import { PublicFormContainer } from "../../public-components/public.styled.components";
import { apiCall } from "../../service/apiCall";
import { selectFreshTasks } from "../../store/task/task.selectors";
import UserTable from "../../components/user-table/user-table.component";

const defaultFormFields = {
	name: "",
	description: "",
	priority: "",
	deadline: "2022-08-06T00:00:00.000Z",
	addTasks: [],
	addDevelopers: [],
};

const NewProject = () => {
	const dispatch = useDispatch();
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { name, description } = formFields;
	const navigate = useNavigate();
	const allTasks = useSelector(selectFreshTasks);

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
				navigate("/dashboard/projects");
			})
			.catch((err) => console.log(err));
	};

	return (
		<main>
			<PublicFormContainer>
				<form onSubmit={handleSubmit}>
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
									type="radio"
									name="priority"
								/>
								Low
								<input
									onChange={handleChange}
									className="radio-task"
									value="medium"
									type="radio"
									name="priority"
								/>
								Medium
								<input
									onChange={handleChange}
									className="radio-task"
									value="high"
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

					<DataTable
						handleCheckbox={handleCheckbox}
						type="Tasks"
						title={"Open Tasks"}
						tableData={allTasks}
					/>

					<div className="public-btn-container">
						<input className="public-btn" type="submit" value="Submit" />
					</div>
				</form>
			</PublicFormContainer>
		</main>
	);
};

export default NewProject;
