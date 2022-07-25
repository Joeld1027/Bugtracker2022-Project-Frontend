import { useState } from "react";
import FormInput from "../../components/form-input/form-input.component";

const defaultFormFields = {
	name: "",
	description: "",
	priority: "",
};

const NewTask = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { name, description, priority } = formFields;

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<main>
			<form>
				<FormInput
					label="Name"
					type="text"
					name="name"
					required
					value={name}
					onChange={handleChange}
				/>
				<FormInput
					label="Description"
					type="text"
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
			</form>
		</main>
	);
};

export default NewTask;
