import styled from "styled-components";

export const BaseButton = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	background-color: black;
	color: white;
	text-transform: uppercase;
	font-family: "Open Sans Condensed";
	font-weight: bolder;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

export const GoogleSignInButton = styled(BaseButton)`
	background-color: #4285f4;
	color: white;

	&:hover {
		background-color: #357ae8;
		border: none;
	}
`;

export const InvertedButton = styled(BaseButton)`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`;

export const LoadingButton = styled.button`
	content: "";
	position: absolute;
	width: 26px;
	height: 26px;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	border: 4px solid transparent;
	background: black;
	border-top-color: white;
	border-radius: 50%;
	animation: button-loading-spinner 1s ease infinite;

	@keyframes button-loading-spinner {
		from {
			transform: rotate(0turn);
		}
		to {
			transform: rotate(1turn);
		}
	}
`;

export const LoadingButtonContainer = styled.div`
	min-width: 165px;
	height: 50px;
	position: relative;
	padding: 8px 16px;
	background: black;
	border: none;
	outline: none;
	border-radius: 2px;
	cursor: pointer;
`;
