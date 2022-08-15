import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PublicFormContainer } from "../../public-components/public.styled.components";
import { apiCall } from "../../service/apiCall";

const defaultFormFields = {
	taskName: "",
	description: "",
	priority: "",
};

const NewTask = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { taskName, description, priority } = formFields;

	const navigate = useNavigate();

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		apiCall("post", "http://localhost:8081/tasks", {
			taskName,
			description,
			priority,
		})
			.then((res) => {
				setFormFields(defaultFormFields);
				navigate("/dashboard/tasks");
			})
			.catch((err) => console.log(err));
	};

	return (
		<main>
			<PublicFormContainer>
				<form onSubmit={handleSubmit}>
					<h2>Create New Task</h2>
					<div className="public-inputs">
						<div className="input-box">
							<label className="labels" htmlFor="taskName">
								Task Name
							</label>
							<input
								onChange={handleChange}
								type="text"
								name="taskName"
								required
							/>
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
						</div>
						<div className="input-box">
							<label className="labels" htmlFor="description">
								Description
							</label>
							<textarea onChange={handleChange} name="description" required />
						</div>
					</div>
					<div className="public-btn-container">
						<input className="public-btn" type="submit" value="Submit" />
					</div>
				</form>
			</PublicFormContainer>
		</main>
	);
};

export default NewTask;
