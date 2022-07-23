import {
	BaseButton,
	GoogleSignInButton,
	InvertedButton,
} from "./button.styles.jsx";

export const BUTTON_TYPE_CLASSES = {
	base: "base",
	google: "google-sign-in",
	inverted: "inverted",
};

const geetButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
	({
		[BUTTON_TYPE_CLASSES.base]: BaseButton,
		[BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
		[BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
	}[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
	const CustomButton = geetButton(buttonType);
	return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
