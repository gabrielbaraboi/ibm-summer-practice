import styled from "styled-components";

export const Card = styled.div`
	padding: 3rem 0;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background: #1d1b31;
	text-align: center;
	height: fit-content;
	width: 50%;
	margin: 0 auto;
	@media (max-width: 768px) {
		width: 80%;
	}
`;
export const Form = styled.form`
	text-align: center;
`;

export const InputContainer = styled.div`
	max-width: 100%;
	width: 100%;
	min-width: 100px;
	padding: 10px 0 0 0;
	input,
	select,
	textarea {
		width: 100%;
		border: 2px solid;
		border-color: #29283a;
		color: white;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		display: block;
		padding: 10px 15px;
		border-radius: 0.5rem;
		background-color: #414052;
		box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 2%),
			0 0px 0 1px rgb(10 10 10 / 2%);
		&:focus {
			outline: none;
		}
		&::placeholder {
			color: darkgray;
		}
	}
	select {
		color: darkgray;
		option {
			color: white;
		}
	}
`;

export const Content = styled.div`
	position: relative;
	z-index: 3;
	text-align: left;
	padding: 10px 25px;
`;

export const InputDescription = styled.textarea`
	resize: vertical;
	&:focus {
		outline: none;
	}
`;

export const Input = styled.input`
	background-color: #ffffff;
	width: 100%;
	&:focus {
		outline: none;
	}
`;

export const Label = styled.div`
	display: block;
	font-size: 0.8rem;
	font-weight: 400;
	padding: 6px 0 3px 0;
	color: gray;
	padding-top: 10px;
`;

export const Choose = styled.div`
	width: 100%;
`;

export const InputRequirements = styled.div`
	display: inline-flex;
	flex-wrap: wrap;
	margin: 10px 0 0 0;
	padding: 0;
	width: 100%;
`;

export const InputRequirement = styled.div`
	align-items: center;
	display: flex;
	margin-bottom: 5px;
	margin-right: 5px;
	padding: 8px 14px;
	background: #f1ebfc;
	border-radius: 8px;
	font-size: 14px;
	color: #7243e4;
	button {
		align-items: center;
		border: none;
		appearance: none;
		background: #ff4949ab;
		border-radius: 50%;
		color: white;
		cursor: pointer;
		display: inline-flex;
		font-size: 12px;
		height: 15px;
		justify-content: center;
		line-height: 0;
		margin-left: 8px;
		padding: 0;
		transform: rotate(45deg);
		width: 15px;
	}
`;

export const CardStyle = styled.div`
	color: white;
	background: #29283a;
	width: 100%;
	align-items: left;
	border-radius: 0.5rem;
	box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
		0 9px 46px 8px rgba(0, 0, 0, 0.025), 0 11px 15px -7px rgba(0, 0, 0, 0.025);
`;
export const TitleCard = styled.div`
	font-size: 30px;
	color: white;
	margin-bottom: 30px;
`;

export const ReqButton = styled.button`
	background: #6c7a89;
	padding: 2px 1rem;
	color: white;
	border-radius: 0.5rem;
	margin-top: 10px;
	height: 30px;
	border: none;
	transition: all 0.2s ease-in-out;
	&:hover {
		background: white;
		color: #29283a;
	}
`;

export const SubmitButton = styled.button`
	flex: 0 0 auto;
	height: 40px;
	border: none;
	padding: 0 2rem;
	margin-top: 30px;
	border-radius: 0.5rem;
	color: white;
	background: #6c7a89;
	transition: all 0.2s ease-in-out;
	box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 2%),
		0 0px 0 1px rgb(10 10 10 / 2%);
	transition: background 0.25;
	&:hover {
		background: white;
		color: #29283a;
	}
	margin-bottom: 20px;
`;
