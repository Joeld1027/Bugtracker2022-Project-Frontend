import {
	BaseButton,
	GoogleSignInButton,
	InvertedButton,
	LoadingButton,
} from "./button.styles.jsx";

export const BUTTON_TYPE_CLASSES = {
	base: "base",
	google: "google",
	inverted: "inverted",
	loading: "loading",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
	({
		[BUTTON_TYPE_CLASSES.base]: BaseButton,
		[BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
		[BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
		[BUTTON_TYPE_CLASSES.loading]: LoadingButton,
	}[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
	const CustomButton = getButton(buttonType);
	return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
