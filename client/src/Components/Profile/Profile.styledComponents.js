import styled from "styled-components";

export const ProfileContainer = styled.div`
	background: #1b1830;
	height: 100%;
	padding: 0.25rem;
`;

export const InputLink = styled.input`
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
`;

export const Container = styled.div`
	display: flex;
`;

export const ProfileCard = styled.div`
	background: #29283a;
	padding: 0.4rem 0.4rem 5rem 0.4rem;
	border-radius: 1rem;
	margin-bottom: 0.25rem;
	width: 100%;
`;

export const ProfilePicture = styled.div`
	width: 120px;
	height: 120px;
	position: relative;
	display: inline-block;
	margin-left: 2rem;
	top: 4rem;
	img {
		width: 120px;
		height: 120px;
		border-radius: 100%;
		border: 3px solid white;
	}
	button {
		position: absolute;
		top: -5px;
		font-size: 1.2rem;
		right: -10px;
		padding: 5px 5px;
		background-color: white;
		border-radius: 100%;
		border: 2px solid black;
		z-index: 5;
		&:hover {
			cursor: pointer;
			color: white;
			background-color: black;
		}
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
		border: "none",
	},
	overlay: {
		zIndex: 100,
		background: "rgba(0, 0, 0, 0.6)",
	},
};

export const ModalForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 1.5rem;
	input,
	select,
	textarea {
		resize: none;
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
	label {
		color: white;
	}
`;

export const ProfilePicThumbnail = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 30%;
	border: 3px solid white;
	margin-bottom: 0.25rem;
`;

export const ProfilePicSelect = styled.label`
	color: white;
	text-align: center;
	border: 0px solid #4caf50;
	font-size: 1.5rem;
	transition-duration: 0.4s;
	&:hover {
		cursor: pointer;
		color: #74718b;
	}
`;

export const ProfilePicSave = styled.button`
	padding: 0.25rem;
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
	top: 1rem;
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

export const NameContainer = styled.div`
	border-right: 1px solid white;
	justify-content: center;
	position: relative;
	display: flex;
	flex-direction: column;
	margin-top: 0.5rem;
	padding: 0.25rem 1rem;
	text-align: right;
	width: 50%;
	span {
		color: whitesmoke;
		font-size: 25px;
	}
`;

export const BackgroundPhoto = styled.div`
	background-image: linear-gradient(360deg, #e58c8a, #eec0c6);
	width: 100%;
	margin-bottom: 0.5rem;
`;

export const SpanLink = styled.a`
	color: white;
`;

export const LinksCard = styled.div`
	background: #29283a;
	display: flex;
	flex-direction: column;
	margin-right: 5px;
	position: relative;
	width: 50%;
	padding: 0.5rem;
	border-radius: 1rem;
	span {
		font-size: 15px;
		color: white;
	}
	p {
		color: white;
	}
`;

export const LinkList = styled.ul`
	width: 100%;
	list-style-type: none;
	overflow: hidden;
	color: white;
	span {
		font-size: 1rem;
	}
	a {
		color: white;
		font-size: 1rem;
	}
`;

export const Group = styled.div`
	width: 100%;
	color: white;
	p {
		float: left;
	}
`;

export const EditBtn = styled.button`
	float: right;
	background: transparent;
	color: #f0ffff;
	border: 0px solid #4caf50;
	font-size: 20px;
	transition-duration: 0.4s;
	padding: 0px 10px;
	&:hover {
		cursor: pointer;
		opacity: 0.5;
	}
`;

export const UserPostsContainer = styled.div`
	background: #29283a;
	width: 100%;
	padding: 0.5rem;
	border-radius: 1rem;
	min-height: 20rem;
	span {
		color: white;
	}
`;

export const Title = styled.p`
	padding: 0.5rem 0.5rem;
	margin-bottom: 15px;
	float: left;
	top: 15px;
	color: white;
`;

export const AboutContainer = styled.div`
	width: 100%;
	height: 100%;
	color: white;
	display: flex;
	flex-direction: column;
	position: relative;
	height: 100%;
	padding: 1rem;
	p {
		font-size: 1rem;
		font-weight: bold;
		float: left;
		text-aling: left;
	}
`;

export const ProfilePostContainer = styled.div`
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const ProfilePost = styled.div`
	display: flex;
	flex-direction: column;
	background: #1d1b31;
	border-radius: 0.5rem;
	padding: 1rem;
	margin-bottom: 0.25rem;
	width: 100%;
	@media (max-width: 1000px) {
		padding: 0 1rem;
	}
`;

export const ProfilePostTitle = styled.div`
	font-size: 1rem;
	a {
		transition: 0.5s;
		color: white;
		&:hover {
			cursor: pointer;
			opacity: 0.5;
		}
	}
	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

export const ProfilePostInformation = styled.div`
	font-size: 1rem;
	width: 100%;
	a {
		color: white;
	}
	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;
