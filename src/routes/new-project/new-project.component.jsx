import { useState } from "react";
import FormInput from "../../components/form-input/form-input.component";

const defaultFormFields = {
	name: "",
	description: "",
	priority: "",
};

const NewProject = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { name, description, priority } = formFields;

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<main>
			<div className="task-form-container">
				<form>
					<FormInput
						label="Name"
						type="text"
						name="name"
						required
						value={name}
						onChange={handleChange}
					/>
					<label>DESCRIPTION :</label>
					<textarea
						rows={10}
						cols={50}
						name="description"
						required
						value={description}
						onChange={handleChange}
					/>

					<FormInput
						label="Priority"
						type="text"
						name="priority"
						required
						value={priority}
						onChange={handleChange}
					/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		</main>
	);
};

export default NewProject;
