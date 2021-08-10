import { deleteComment, updateComment } from "../../Services/comment.service";
import {
    Container,
    ImageDiv,
    CommentDiv,
    CommentUserName,
    CommentText,
    ImageCircleStyle,
    SaveCommentButton,
    CommentBox,
} from "./Comment.styledComponents";
import ReactImageFallback from "react-image-fallback";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { DeleteButton,EditButton } from "../Global.styledComponents";

export const Comment = ({ comment, userData }) => {
    const [edit, setEdit] = useState(false);
    const [newComment, setNewComment] = useState(comment?.comment);
    const deleteThisComment = () => {
        deleteComment(comment._id)
            .then()
            .catch((err) => console.log(err));
    };

    const editThisComment = (e) => {
        e.preventDefault();
        const newCommentText = newComment;
        if (/\S/.test(newCommentText)) {
            updateComment(comment?.parentPostId, comment?._id, {
                comment: newCommentText,
            });
        }
    };

    return (
        <CommentBox>
            <ImageDiv>
                <ReactImageFallback
                    src={`/profile/${comment?.createdBy?._id}/getProfilePic`}
                    fallbackImage={process.env.PUBLIC_URL + "/iconUser.jpg"}
                    style={ImageCircleStyle}
                />
            </ImageDiv>
            <CommentDiv>
                <CommentUserName>
                    <a href={`/profile/${comment?.createdBy?._id}`}>
                        {comment?.createdBy?.firstName}{" "}
                        {comment?.createdBy?.lastName}
                        {comment?.createdBy?.companyName}
                    </a>
                    {userData && userData.id === comment?.createdBy?._id && (
                        <div style={{ float: "right" }}>
                            <DeleteButton
                                onClick={() => {
                                    deleteThisComment();
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    className="icon"
                                    fixedWidth
                                />
                            </DeleteButton>
                            {!edit && (
                                <EditButton
                                    onClick={() => {
                                        setEdit(true);
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={faEdit}
                                        className="icon"
                                        fixedWidth
                                    />
                                </EditButton>
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
        </CommentBox>
    );
};
