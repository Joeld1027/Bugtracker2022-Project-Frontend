import { ProgressBarContainer, Label, BarFiller } from "./progress-bar.styles";

const ProgressBar = (props) => {
	const { bgcolor, completed } = props;
	return (
		<ProgressBarContainer>
			<BarFiller filled={completed}>
				<Label>{completed}%</Label>
			</BarFiller>
		</ProgressBarContainer>
	);
};

export default ProgressBar;
