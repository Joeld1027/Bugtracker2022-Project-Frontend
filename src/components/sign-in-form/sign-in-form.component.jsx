import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import { LoadingButtonContainer } from "../button/button.styles";
import FormInput from "../form-input/form-input.component";
import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles.jsx";
import { setCurrentUser } from "../../store/user/user.action";
import { setTokenHeader } from "../../service/apiCall";

const defaultFormFields = {
	email: "",
	password: "",
};
const testFields = ["email", "password"];

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const [error, setError] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { email, password } = formFields;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsSubmitting(true);
		setError("");
		const genericErrorMessage = "Something went wrong! Please try again later.";

		fetch("http://localhost:8081/auth/login", {
			method: "POST",
			withCredentials: true,
			credentials: "include",
			headers: {
				Accept: "applicaiton/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username: email, password }),
		})
			.then(async (response) => {
				setIsSubmitting(false);
				if (!response.ok) {
					if (response.status === 400) {
						setError("Please fill all the fields correctly!");
					} else if (response.status === 401) {
						setError("Invalid email and password combination.");
					} else {
						setError(genericErrorMessage);
					}
				} else {
					const data = await response.json();
					resetFormFields();
					localStorage.setItem("jwToken", data.token);
					setTokenHeader(data.token);
					dispatch(setCurrentUser(data));
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
		<SignInContainer>
			{error && <div>{error}</div>}
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				{testFields.map((field) => {
					return (
						<FormInput
							key={field}
							label={field}
							type={field}
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
						<Button type="submit">Sign In</Button>
					)}
				</ButtonsContainer>
			</form>
		</SignInContainer>
	);
};

export default SignInForm;
