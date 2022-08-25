import styled from "styled-components";

export const ProfileContainer = styled.main`
	section {
		display: flex;
		justify-content: space-around;
		margin-top: 3rem;
		background: #fff;
		padding: 1.3rem;
		border-radius: 1.2rem;
		box-shadow: var(--box-shadow);
		transition: all 300ms ease;
		h2 span {
			font-size: 1.2rem;
		}
		.avatar {
			width: 14rem;
			height: 14rem;
		}
		.user-information {
			flex-grow: 2;
			display: flex;
			flex-direction: column;
			margin-left: 4rem;
			justify-content: center;
			.contact-info {
				margin-top: 1rem;
			}
		}
		@media screen and (max-width: 560px) {
			flex-direction: column;
			align-items: center;
			text-align: center;

			.user-information {
				margin: 2rem 0;
			}
			.avatar {
				width: 12rem;
				height: 12rem;
			}
		}
	}
	section:hover {
		box-shadow: none;
	}
	.update-link {
		display: flex;
		justify-content: end;
		margin: 1rem 0;
		padding: 0.8rem;
	}
`;
