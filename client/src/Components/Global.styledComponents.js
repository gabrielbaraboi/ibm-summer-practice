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
	margin-top: 0.2rem;
	transition: 0.5s ease;
	&:hover {
		cursor: pointer;
		transform: translateY(1px);
	}
	@media (max-width: 1000px) {
		padding: 0.5rem 0.4rem;
		font-size: 0.8rem;
	}
`;

export const EditButton = styled.button`
	padding: 0.25rem 0.4rem;
	border: none;
	border-radius: 0.5rem;
	background: orange;
	margin-top: 0.2rem;
	margin-left: 3px;
	transition: 0.5s ease;
	&:hover {
		cursor: pointer;
		transform: translateY(1px);
	}
	@media (max-width: 1000px) {
		padding: 0.5rem 0.4rem;
		font-size: 0.8rem;
	}
`;

export const ButtonWrapper = styled.div`
    float: right;
`
