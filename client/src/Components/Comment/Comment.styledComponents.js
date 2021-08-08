import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin: 1rem 0;
    border-bottom: 1px solid #c4c4c4;
    padding: 1rem 0.5rem 2rem 0.5rem;
    position: relative;
`;

export const AddComment = styled.div`
    display: flex;
    margin: 1rem 0;
    padding: 0 0.5rem;
`;

export const ImageDiv = styled.div`
    width: 80px;
    height: 80px;
    flex-shrink: 0;
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
    margin: 0 0 0 1.3rem;
    height: 200px;
`;

export const CommentInputTextArea = styled.textarea`
    font-size: 1.2rem;
    padding: 0.2rem 0 0 0.5rem;
    width: 100%;
    height: 100%;
    @media (max-width: 1000px) {
        height: 150px;
    }
`;

export const CommentDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    @media (max-width: 1000px) {
        padding: 0 1rem;
    }
`;

export const CommentUserName = styled.div`
    font-weight: bold;
    margin: 0 0 0.5rem 0;
    @media (max-width: 1000px) {
        font-size: 1rem;
    }
`;

export const CommentText = styled.div`
    color: #7c7c7c;
    word-break: break-all;
    @media (max-width: 1000px) {
        font-size: 1rem;
    }
`;

export const PostCommentButton = styled.button`
    padding: 1rem 0;
    margin: 1rem 0;
    font-weight: bold;
    transition: 0.5s ease;
    font-size: 1rem;
    &:hover {
        cursor: pointer;
        transform: translateY(5px);
    }
    @media (max-width: 1000px) {
        padding: 0.5rem 0;
        font-size: 0.8rem;
    }
`;

export const CommentInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
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
