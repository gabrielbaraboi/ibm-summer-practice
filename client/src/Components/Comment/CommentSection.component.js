import { useEffect, useState } from "react";
import ReactImageFallback from "react-image-fallback";
import {
    AddComment,
    ImageDiv,
    CommentInputContainer,
    CommentInputTextArea,
    PostCommentButton,
    CommentInfo,
    CommentsCountDiv,
    CommentsCount,
    CommentsCountText,
    ImageCircleStyle
} from "./Comment.styledComponents";
import { createComment, getAllComments } from "../../Services/comment.service";
import { useParams } from "react-router-dom";
import { Comment } from "./Comment.component";

const CommentSection = ({ userData }) => {
    const { id } = useParams();
    const [comments, setComments] = useState([]);
    const [commentValue, setCommentValue] = useState("");
    const [commentsCount, setCommentsCount] = useState(0);
    const submitComment = (e) => {
        e.preventDefault();
        const comment = commentValue;
        if (/\S/.test(comment)) {
            createComment(id, { comment });
            window.location.reload();
        }
    };

    useEffect(
        () =>
            getAllComments(id)
                .then((res) => {
                    setComments(res.data.comments);
                    setCommentsCount(res.data.count)
                })
                .catch((err) => {
                    console.log(err.message);
                }),
        []
    );

    return (
        <>
            <CommentInfo>
                <h3>Comentarii</h3>
                <CommentsCountDiv>
                    <CommentsCount>{commentsCount}</CommentsCount>
                    <CommentsCountText>
                        {commentsCount > 1 ? `Comments` : `Comment`}
                    </CommentsCountText>
                </CommentsCountDiv>
            </CommentInfo>
            {userData && (
                <AddComment>
                    <ImageDiv>
                        <ReactImageFallback
                            src={`/profile/${userData?.id}/getProfilePic`}
                            fallbackImage={
                                process.env.PUBLIC_URL + "/iconUser.jpg"
                            }
                            style={ImageCircleStyle}
                        />
                    </ImageDiv>
                    <CommentInputContainer>
                        <CommentInputTextArea
                            placeholder="Add a comment..."
                            name="comment"
                            type="text"
                            value={commentValue}
                            onChange={(e) => setCommentValue(e.target.value)}
                        ></CommentInputTextArea>
                        <PostCommentButton onClick={submitComment}>
                            Posteaza
                        </PostCommentButton>
                    </CommentInputContainer>
                </AddComment>
            )}
            {comments.length === 0 ? (
                <center>No comments yet!</center>
            ) : (
                comments?.map((comment, idx) => (
                    <Comment
                        key={comment._id}
                        comment={comment}
                        userData={userData}
                    ></Comment>
                ))
            )}
        </>
    );
};

export default CommentSection;
