import styled from "styled-components";

export const SignUpContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 380px;

	h2 {
		margin: 10px 0;
	}
	@media only screen and (max-width: 960px) {
		margin-top: 3rem;
		width: 580px;
	}
`;
