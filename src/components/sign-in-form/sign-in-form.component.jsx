import { useState } from "react";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles.jsx";

const defaultFormFields = {
	email: "",
	password: "",
};
const testFields = ["email", "password"];

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	// const { email, password } = formFields;

	// const resetFormFields = () => {
	// 	setFormFields(defaultFormFields);
	// };

	// const signInWithGoogle = async () => {
	// 	await signInWithGooglePopup();
	// };

	// const handleSubmit = async (event) => {
	// 	event.preventDefault();

	// 	try {
	// 		await signInAuthUserWithEmailAndPassword(email, password);

	// 		resetFormFields();
	// 	} catch (err) {
	// 		switch (err.code) {
	// 			case "auth/wrong-password":
	// 				alert("Email or Password is incorrect");
	// 				break;
	// 			case "auth/user-not-found":
	// 				alert("This email does not exist");
	// 				break;
	// 			default:
	// 				console.log(err);
	// 		}
	// 	}
	// };

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<SignInContainer>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form>
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
					<Button type="submit">Sign in</Button>
				</ButtonsContainer>
			</form>
		</SignInContainer>
	);
};

export default SignInForm;
