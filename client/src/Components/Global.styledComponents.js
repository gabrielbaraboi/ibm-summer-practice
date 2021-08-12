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

export const PaginationWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const PaginationBtn = styled.button`
	background: #6c7a89;
	padding: 2px 1rem;
	color: white;
	border-radius: 0.5rem;
	color: white;
	transition: all 0.2s ease-in-out;
	border: none;
	font-size: 1rem;
	&:hover {
		background-color: white;
		color: black;
		cursor: pointer;
	}
	&:disabled {
		background: lightgray;
		color: gray;
		pointer-events: none;
	}
	@media (max-width: 400px) {
		font-size: 0.8rem;
	}
`;

export const PageSpan = styled.span`
	margin-left: 10px;
	margin-right: 10px;
	text-decoration: none;
	border: none;
	color: white;
	@media (max-width: 400px) {
		font-size: 0.8rem;
	}
`;

export const ModalStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        minWidth: "50%",
        background: "#1d1b31",
        border:"none"
    },
    overlay:{
        zIndex:100,
        background: "rgba(0, 0, 0, 0.6)"
    }
};

export const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:100%;
    padding: 1.5rem;
    input,select,textarea {
        resize:none;
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
	label{
		color:white;
	}
`;

export const ModalClose = styled.button`
    position: relative;
    float: right;
    background: transparent;
    color: white;
    border: 0px solid #4caf50;
    font-size: 20px;
    transition-duration: 0.4s;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;

export const ModalSubmit = styled.button`
    position: relative;
    padding: 0.5rem 1rem;
    top:1rem;
    background-color: #7a77bb;
    color: white;
    transition-duration: 0.4s;
    border: none;
    border-radius: 1rem;
    &:hover {
        background-color: rgba(129, 129, 245, 0.3);
        cursor: pointer;
    }
`;