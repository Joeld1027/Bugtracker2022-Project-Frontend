import styled from "styled-components";

export const ProgressBarContainer = styled.div`
	width: 100%;
	background-color: #e0e0de;
	border-radius: 10px !important;
	margin: 0.5rem;
	height: 23px;
`;

export const BarFiller = styled.div`
	height: 22px;
	width: 60%;
	background: #7380ec;
	border-radius: 10px !important;
	text-align: right;
`;

export const Label = styled.span`
	font-size: 0.8rem !important;
	padding: 1px !important;
	color: white;
	font-weight: bold;
	border-radius: 50% !important;
`;
