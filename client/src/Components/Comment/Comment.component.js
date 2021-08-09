import { deleteComment, updateComment } from "../../Services/comment.service";
import {
    Container,
    ImageDiv,
    CommentDiv,
    CommentUserName,
    CommentText,
    ImageCircleStyle,
    DeleteCommentButton,
    EditCommentButton,
    SaveCommentButton,
} from "./Comment.styledComponents";
import ReactImageFallback from "react-image-fallback";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
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
                    {userData && userData.id === comment?.createdBy?.id && (
                        <div style={{float:"right"}}>
                            <DeleteCommentButton
                                onClick={() => {
                                    deleteThisComment();
                                }}
                            >
                                <FontAwesomeIcon icon={faTrash} className="icon" fixedWidth />
                            </DeleteCommentButton>
                            {!edit && (
                                <EditCommentButton
                                    onClick={() => {
                                        setEdit(true);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faEdit} className="icon" fixedWidth />
                                </EditCommentButton>
                            )}
                        </div>
                    )}
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
                        <SaveCommentButton
                            type="submit"
                            onClick={(e) => {
                                editThisComment(e);
                            }}
                        >
                            Save
                        </SaveCommentButton>
                    </>
                )}
            </CommentDiv>
        </Container>
    );
};
