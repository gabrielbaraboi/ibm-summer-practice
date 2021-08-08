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

export const Comment = ({ comment, userData }) => {
    const deleteThisComment = () => {
        deleteComment(comment._id)
            .then(() => {
                window.location.reload();
            })
            .catch((err) => console.log(err));
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
                <CommentText>{comment?.comment}</CommentText>
                {userData && userData.id === comment?.createdBy?.id && (
                    <button
                        onClick={(e) => {
                            deleteThisComment();
                        }}
                    >
                        Delete
                    </button>
                )}
            </CommentDiv>
        </Container>
    );
};
