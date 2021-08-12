import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	margin: 0rem 0;
	padding: 0.25rem 1rem;
	position: relative;
	width: 100%;
	flex-direction: column;
	@media (max-width: 1366px) {
        width: 100%;
    }
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const Center = styled.div`
	color: white;
	margin: auto;
`;

export const AddComment = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	background: #29283a;
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	@media (max-width: 1000px) {
		width: 100%;
		margin: 0 0.5rem 0 0;
	}
`;

export const ImageDiv = styled.div`
	width: 60px;
	height: 60px;
	flex-shrink: 0;
	border: 1px solid white;
	border-radius: 100%;
	background-color: #c4c4c4;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0rem 0.5rem 0 0;
	@media (max-width: 1000px) {
		width: 50px;
		height: 50px;
	}
`;

export const CommentInputContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin: 0.5rem;
	width: 100%;
`;

export const CommentInputTextArea = styled.textarea`
	padding: 0.2rem 0 0 0.5rem;
	width: 85%;
	font-size: 13px;
	padding: 10px 15px;
	border-radius: 0.5rem 0 0 0.5rem;
	background-color: #414052;
	box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 2%),
		0 0px 0 1px rgb(10 10 10 / 2%);
	resize: vertical;
	color: white;
	border: none;
	&:focus {
		outline: none;
	}
	&::placeholder {
		color: darkgray;
	}
	@media (max-width: 768px) {
		width: 80%;
	}
	@media (max-width: 360px) {
		width: 60%;
		font-size: 0.5rem;
	}
	resize: none;
`;
export const PostCommentButton = styled.button`
	border: none;
	border-left: 3px solid #1d1b31;
	transition: 0.2s ease;
	color: white;
	font-size: 1rem;
	width: 15%;
	background: #414052;
	padding: 2px 0.6rem;
	color: white;
	border-radius: 0 0.5rem 0.5rem 0;
	&:hover {
		background: white;
		color: black;
		cursor: pointer;
	}
	@media (max-width: 768px) {
		padding: 0.5rem 0;
		font-size: 0.8rem;
		width: 20%;
	}
	@media (max-width: 360px) {
		width: 40%;
		font-size: 0.8rem;
	}
`;

export const CommentDiv = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.25rem 1rem;
	border-radius: 0.5rem;
	width: 100%;
	@media (max-width: 768px) {
		padding: 0 1rem;
	}
`;

export const CommentBox = styled.div`
	display: flex;
	width: 100%;
	margin-top: 20px;
	padding: 1rem 1rem;
	border-radius: 0.5rem;
	background: #29283a;
`;

export const CommentUserName = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: bold;
	flex-wrap: wrap;
	margin: 0 0 0.5rem 0;
	a {
		color: white;
		transition: 0.5s ease;
		&:hover {
			color: rgba(30, 30, 218);
		}
	}
	@media (max-width: 400px) {
		font-size: 0.8rem;
	}
`;

export const CommentText = styled.div`
	color: whitesmoke;
	word-break: break-all;
	background: #414052;
	padding: 0.5rem;
	border-radius: 0.5rem;
	@media (max-width: 400px) {
		font-size: 0.8rem;
	}
`;

export const SaveCommentButton = styled.button`
	padding: 0.25rem 0.4rem;
	border: none;
	border-radius: 0.5rem;
	background: #e4e9f7;
	color: black;
	margin: 0.25rem 0 0.2rem auto;
	transition: 0.5s ease;
	&:hover {
		cursor: pointer;
		transform: translateY(1px);
	}
	@media (max-width: 1000px) {
		padding: 0.5rem 0.4;
		font-size: 0.8rem;
	}
`;

export const CommentInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 1rem;
	color: white;
	width: 100%;
`;

export const CommentsCountDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const CommentsCount = styled.div`
	font-size: 1.5rem;
	text-align: center;
	font-weight: bold;
`;

export const CommentsCountText = styled.div`
	font-size: 0.8rem;
	color: #7c7c7c;
`;

export const ImageCircleStyle = {
	maxWidth: "100%",
	maxHeight: "100%",
	minWidth: "100%",
	minHeight: "100%",
	borderRadius: "100%",
	objectFit: "cover",
};
