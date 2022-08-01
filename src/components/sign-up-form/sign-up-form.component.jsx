import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { SignUpContainer } from "./sign-up-form.styles.jsx";
import { setCurrentUser } from "../../store/user/user.action";
import { ButtonsContainer } from "../sign-in-form/sign-in-form.styles";
import { LoadingButtonContainer } from "../button/button.styles";

const defaultFormFields = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: "",
};
const testFields = [
	"firstName",
	"lastName",
	"email",
	"password",
	"confirmPassword",
];

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { firstName, lastName, email, password, confirmPassword } = formFields;
	const [error, setError] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsSubmitting(true);
		setError("");
		const genericErrorMessage = "Something went wrong! Please try again later.";

		if (password !== confirmPassword) {
			alert("passwords dont match");
			return;
		}

		fetch("http://localhost:8082/auth/signup", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ firstName, lastName, username: email, password }),
		})
			.then(async (response) => {
				setIsSubmitting(false);
				if (!response.ok) {
					if (response.status === 400) {
						setError("Please fill all the fields correctly!");
					} else if (response.status === 401) {
						setError("Invalid email and password combination.");
					} else if (response.status === 500) {
						console.log(response);
						const data = await response.json();
						if (data.message) setError(data.message || genericErrorMessage);
					} else {
						setError(genericErrorMessage);
					}
				} else {
					const data = await response.json();
					console.log(data);
					resetFormFields();
					dispatch(setCurrentUser(data.user));
					navigate("../dashboard", { replace: true });
				}
			})
			.catch((error) => {
				setIsSubmitting(false);
				setError(genericErrorMessage);
			});
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<SignUpContainer>
			{error && <div>{error}</div>}
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				{testFields.map((field) => {
					return (
						<FormInput
							key={field}
							label={field === "confirmPassword" ? "CONFIRM PASSWORD" : field}
							type={field === "confirmPassword" ? "password" : field}
							required
							onChange={handleChange}
							name={field}
							value={formFields[field]}
						/>
					);
				})}
				<ButtonsContainer>
					{isSubmitting ? (
						<LoadingButtonContainer>
							<Button buttonType="loading" type="submit"></Button>
						</LoadingButtonContainer>
					) : (
						<Button type="submit">Sign up</Button>
					)}
				</ButtonsContainer>
			</form>
		</SignUpContainer>
	);
};

export default SignUpForm;
