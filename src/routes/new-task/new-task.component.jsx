import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { PublicFormContainer } from "../../public-components/public.styled.components";
import { apiCall } from "../../service/apiCall";

const defaultFormFields = {
	name: "",
	description: "",
	priority: "",
};

const NewTask = ({ edit = null }) => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { name, description, priority } = formFields;
	const { taskId } = useParams() || {};

	const getTask = () => {
		apiCall("get", `http://localhost:8081/tasks/${taskId}`)
			.then((res) => {
				setFormFields(res);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		if (edit === "edit") {
			getTask();
		}
	}, []);
	const navigate = useNavigate();

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const handleEdit = (e) => {
		e.preventDefault();
		apiCall("patch", `http://localhost:8081/tasks/${taskId}`, {
			name,
			description,
			priority,
		})
			.then((res) => {
				setFormFields(defaultFormFields);
			})
			.catch((err) => console.log(err));
		navigate(`/dashboard/tasks/${taskId}`);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		apiCall("post", "http://localhost:8081/tasks", {
			name,
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
				<form onSubmit={edit === null ? handleSubmit : handleEdit}>
					<h2>Create New Task</h2>
					<div className="public-inputs">
						<div className="input-box">
							<label className="labels" htmlFor="taskName">
								Task Name
							</label>
							<input
								onChange={handleChange}
								type="text"
								name="name"
								placeholder={name}
								value={name}
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
						</div>
						<div className="input-box">
							<label className="labels" htmlFor="description">
								Description
							</label>
							<textarea
								placeholder={description}
								onChange={handleChange}
								name="description"
								value={description}
								required
							/>
						</div>
					</div>
					<div className="public-btn-container">
						<input
							className="public-btn"
							type="submit"
							value={edit === null ? "Submit" : "Update"}
						/>
					</div>
				</form>
			</PublicFormContainer>
		</main>
	);
};

export default NewTask;
