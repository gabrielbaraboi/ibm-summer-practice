import { deleteComment, updateComment } from "../../Services/comment.service";
import {
    Container,
    ImageDiv,
    CommentDiv,
    CommentUserName,
    CommentText,
    ImageCircleStyle,
} from "./Comment.styledComponents";
import ReactImageFallback from "react-image-fallback";
import { useState } from "react";

export const Comment = ({ comment, userData }) => {
    const [edit, setEdit] = useState(false);
    const [newComment, setNewComment] = useState(comment?.comment);
    const deleteThisComment = () => {
        deleteComment(comment._id)
            .then(() => {
                window.location.reload();
            })
            .catch((err) => console.log(err));
    };

    const editThisComment = (e) => {
        e.preventDefault();
        const newCommentText = newComment;
        if (/\S/.test(newCommentText)) {
            updateComment(comment?.parentPostId, comment?._id, { comment: newCommentText });
            window.location.reload();
        }
    };

    return (
        <Container>
            <ImageDiv>
                <ReactImageFallback
                    src={`/profile/${comment?.createdBy?.id}/getProfilePic`}
                    fallbackImage={process.env.PUBLIC_URL + "/iconUser.jpg"}
                    style={ImageCircleStyle}
                />
            </ImageDiv>
            <CommentDiv>
                <CommentUserName>
                    <a href={`/profile/${comment?.createdBy?.id}`}>
                        {comment?.createdBy?.name}
                    </a>
                </CommentUserName>
                {!edit ? (
                    <CommentText>{comment?.comment}</CommentText>
                ) : (
                    <>
                        <input
                            onChange={(e) => {
                                setNewComment(e.target.value);
                            }}
                            value={newComment}
                        />
                        <button
                            type="submit"
                            onClick={(e) => {
                                editThisComment(e);
                            }}
                        >
                            Save
                        </button>
                    </>
                )}
                {userData && userData.id === comment?.createdBy?.id && (
                    <>
                        <button
                            onClick={() => {
                                deleteThisComment();
                            }}
                        >
                            Delete
                        </button>
                        {!edit && (
                            <button
                                onClick={() => {
                                    setEdit(true);
                                }}
                            >
                                Edit
                            </button>
                        )}
                    </>
                )}
            </CommentDiv>
        </Container>
    );
};
