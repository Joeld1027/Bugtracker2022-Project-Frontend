import styled from "styled-components";

export const MainContainer = styled.main`
	h2 {
		margin-top: 2rem;
	}
	.card-body {
		width: 100%;
	}
	section {
		box-shadow: var(--box-shadow);
		margin-top: 3rem;
		border-radius: 1.2rem;
		background: #fff;
		padding: 1.2rem;

		transition: all 300ms ease;

		.task-details-top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 1rem;
			line-height: 1.9rem;
			.task-date {
				border-bottom: 1px solid;
				border-radius: 0;
				padding: 0;
			}
			span {
				border-bottom: 1px solid;
			}
		}
		p:first-child {
			text-transform: uppercase;
		}
		p span {
			font-size: 1.1rem;
			font-weight: bold;
		}
	}
	section:hover {
		box-shadow: none;
	}

	@media (max-width: 400px) {
		.task-details-top {
			flex-direction: column;
		}
	}
`;

export const TaskDetailButtonContainer = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;

	a {
		color: rgb(242, 187, 5);
		border: 1px solid;
		border-radius: 1.3rem;
		padding: 0.3rem 1.3rem;
		margin-left: 1rem;
		font-size: 1rem;
		cursor: pointer;
		background: #fff;
	}

	button {
		border: 1px solid;
		border-radius: 1.3rem;
		padding: 0.6rem 1.3rem;
		margin-left: 1rem;
		font-size: 1rem;
		cursor: pointer;
		background: #fff;
	}
`;
