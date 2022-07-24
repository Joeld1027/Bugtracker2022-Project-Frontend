import styled from "styled-components";

export const AuthContainer = styled.div`
	display: flex;
	width: 960px;
	justify-content: space-between;
	margin: 3rem auto;

	@media only screen and (max-width: 960px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;
