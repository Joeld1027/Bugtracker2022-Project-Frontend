import styled from "styled-components";

export const PublicFormContainer = styled.section`
	display: flex;
	justify-content: center;
	width: 100%;
	margin-top: 3.8rem;
	padding: 10px;
	background: var(--color-white);
	border-radius: var(--card-border-radius);
	box-shadow: var(--box-shadow);
	transition: all 300ms ease;
	form {
		width: 100%;
		.data-table table {
			box-shadow: none;
		}
		.public-btn-container {
			display: flex;
			width: 100%;
			justify-content: end;
		}
		.public-btn {
			color: var(--color-dark);
			padding: 10px 20px;
			border: 1px solid var(--color-dark);
			border-radius: 20px;
			background: none;
			font-size: 1.2rem;
			cursor: pointer;
		}
		h2 {
			text-align: center;
			color: var(--color-primary);
			font-size: 1.6rem;
		}
		.public-inputs {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			flex-wrap: wrap;
			margin-top: 2rem;
			label {
				font-size: 1.3rem;
				font-weight: 500;
			}
			.input-box {
				width: calc(100% / 2 - 20px);
				text-align: center;
				select {
					border: 1px solid black;
					border-radius: 40px;
					font-size: 1.1rem;
					height: 40px;
					text-align: center;
					cursor: pointer;
					padding: 10px;
					appearance: auto;
					width: 100%;
				}
				textarea {
					width: 100%;
					border: 1px solid black;
					border-radius: 10px;
					height: 100px;
					padding: 5px;
					font-size: 1.1rem;
				}
				input {
					height: 40px;
					border: 1px solid black;
					border-radius: 10px;
					width: 100%;
					padding: 5px;
					font-size: 1.1rem;
				}
			}
		}
	}

	.radio-task {
		appearance: auto;
		cursor: pointer;
		margin: 1rem;
		width: 2.1rem !important;
		min-width: 1.7rem !important;
	}

	.radio-group {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px;
		font-size: 1.1rem;
	}
`;
