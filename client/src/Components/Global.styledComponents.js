import styled from "styled-components";

export const Layout = styled.div`
	display: flex;
`;

export const Main = styled.div`
	padding: 0px;
	width: calc(100% - 78px);
	margin-left: auto;
	transition: all 0.3s ease-in-out;
`;

export const DeleteButton = styled.button`
	padding: 0.25rem 0.4rem;
	border: none;
	border-radius: 0.5rem;
	background: red;
	color: white;
	font-size: 0.7rem;
	margin: 0.2rem auto;
	transition: 0.5s ease;
	&:hover {
		cursor: pointer;
		transform: translateY(1px);
	}
`;

export const EditButton = styled.button`
	padding: 0.25rem 0.4rem;
	border: none;
	border-radius: 0.5rem;
	background: orange;
	margin-top: 0.2rem;
	margin-left: 3px;
	font-size: 0.7rem;
	transition: 0.5s ease;
	&:hover {
		cursor: pointer;
		transform: translateY(1px);
	}
`;

export const ButtonWrapper = styled.div`
    float: right;
`
