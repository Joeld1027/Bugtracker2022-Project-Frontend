import { useState } from "react";
import { useSelector } from "react-redux";
import { PublicFormContainer } from "../../public-components/public.styled.components";
import { selectCurrentUser } from "../../store/user/user.selector";

const defaultFormFields = {
	name: "",
	description: "",
	priority: "",
	deadline: "2022-08-06T00:00:00.000Z",
	addTasks: [],
};

const UserEditPage = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const currentUser = useSelector(selectCurrentUser);
	const { name, username } = currentUser;

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};
	return (
		<main>
			<PublicFormContainer>
				<form>
					<h2>Edit your Personal Information</h2>
					<div className="public-inputs">
						<div className="input-box">
							<label className="labels" htmlFor="name">
								Full Name
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
							<label className="labels" htmlFor="username">
								Email
							</label>
							<input
								onChange={handleChange}
								value={username}
								type="text"
								name="username"
								required
							/>
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

export default UserEditPage;
