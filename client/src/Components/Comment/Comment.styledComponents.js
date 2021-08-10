import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	margin: 0rem 0;
	padding: 0.25rem 1rem;
	position: relative;
	width: 100%;
`;

export const ButtonWrapper = styled.div`
	margin-left: auto;
`;

export const Center = styled.div`
	color: white;
	margin: auto;
`;

export const AddComment = styled.div`
	display: flex;
	width: 100%;
	margin: 0rem 0rem;
	padding: 0.5rem 1rem;
	@media (max-width: 1000px) {
		width: 100%;
		margin: 0 0.5rem 0 0;
	}
`;

export const ImageDiv = styled.div`
	width: 80px;
	height: 80px;
	flex-shrink: 0;
	border: 1px solid white;
	border-radius: 100%;
	background-color: #c4c4c4;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0rem 1.5rem 0 0;
	@media (max-width: 1000px) {
		width: 50px;
		height: 50px;
		margin: 0 0.5rem 0 0;
	}
`;

export const CommentInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	margin: 0 0 0 0.5rem;
	${"" /* height: 200px; */}
`;

export const CommentInputTextArea = styled.textarea`
	font-size: 1.2rem;
	padding: 0.2rem 0 0 0.5rem;
	width: 100%;
	height: 50%;
	min-width: 150px;
	@media (max-width: 1000px) {
		${"" /* height: 150px; */}
	}
	resize: none;
`;

export const CommentDiv = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.25rem 1rem;
	border: 1px solid #c4c4c4;
	border-radius: 0.5rem;
	width: 100%;
	@media (max-width: 1000px) {
		padding: 0 1rem;
	}
`;

export const CommentUserName = styled.div`
	font-weight: bold;
	margin: 0 0 0.5rem 0;
	a {
		color: white;
		transition: 0.5s ease;
		&:hover {
			color: rgba(30, 30, 218);
		}
	}
	@media (max-width: 1000px) {
		font-size: 1rem;
	}
`;

export const CommentText = styled.div`
	color: whitesmoke;
	word-break: break-all;
	@media (max-width: 1000px) {
		font-size: 1rem;
	}
`;

export const PostCommentButton = styled.button`
	padding: 0.5rem 1rem;
	margin: 0.5rem 0;
	margin-left: auto;
	border: none;
	border-radius: 0.5rem;
	font-weight: bold;
	transition: 0.5s ease;
	background-color: #e4e9f7;
	color: black;
	font-size: 1rem;
	${"" /* height: 30%; */}
	width: 15%;
	&:hover {
		cursor: pointer;
		transform: translateY(5px);
	}
	@media (max-width: 1000px) {
		padding: 0.5rem 0;
		font-size: 0.8rem;
	}
`;

export const DeleteCommentButton = styled.button`
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

export const EditCommentButton = styled.button`
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
