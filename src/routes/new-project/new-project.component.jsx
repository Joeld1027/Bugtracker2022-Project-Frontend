import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "../../components/table/data-table.component";
import { PublicFormContainer } from "../../public-components/public.styled.components";
import { apiCall } from "../../service/apiCall";

const defaultFormFields = {
	name: "",
	description: "",
	priority: "",
	dueDate: "",
	addTasks: [],
};

const NewProject = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const navigate = useNavigate();

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
				console.log(res);
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
							<label className="labels" htmlFor="projectName">
								Project Name
							</label>
							<input onChange={handleChange} type="text" name="name" required />
						</div>
						<div className="input-box">
							<div className="radio-group">
								<label className="labels" htmlFor="description">
									Priority
								</label>
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
								<input type="date" name="dueDate" onChange={handleChange} />
							</label>
						</div>
						<div className="input-box">
							<label className="labels" htmlFor="description">
								Description
							</label>
							<textarea onChange={handleChange} name="description" required />
						</div>
					</div>
					<DataTable url="tasks" handleCheckbox={handleCheckbox} type="Tasks" />
					 
					<div className="public-btn-container">
						<input className="public-btn" type="submit" value="Submit" />
					</div>
				</form>
			</PublicFormContainer>
		</main>
	);
};

export default NewProject;
