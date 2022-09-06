import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PublicFormContainer } from "../../public-components/public.styled.components";
import { selectCurrentUser } from "../../store/user/user.selector";
import { editCurrentUser } from "../../store/user/user.action";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
	name: "",
	username: "",
};

const UserEditPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [formFields, setFormFields] = useState(defaultFormFields);
	const currentUser = useSelector(selectCurrentUser);
	const { name, username } = formFields;
	const { _id } = currentUser;

	useEffect(() => {
		setFormFields(currentUser);
	}, [currentUser]);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};
	const handleEdit = (e) => {
		e.preventDefault();
		dispatch(editCurrentUser(_id, formFields));
		navigate(-1);
	};

	return (
		<main>
			<PublicFormContainer>
				<form onSubmit={handleEdit}>
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
