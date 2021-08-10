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
    ImageCircleStyle,
    ButtonWrapper,
    Center,
} from "./Comment.styledComponents";
import { createComment, getAllComments } from "../../Services/comment.service";
import { useParams } from "react-router-dom";
import { Comment } from "./Comment.component";
import { PageSpan, PaginationBtn } from "../Posts/Posts.styledComponents";
import { Container } from "./Comment.styledComponents";

const CommentSection = ({ userData }) => {
    const { id } = useParams();
    const [comments, setComments] = useState([]);
    const [commentValue, setCommentValue] = useState("");
    const [commentsCount, setCommentsCount] = useState(0);
    const [page, setPage] = useState(1);
    const [nextPage, setNextPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const goNextPage = () => {
        if (nextPage) setPage(nextPage);
    };
    const goPrevPage = () => {
        if (page >= 2) setPage(page - 1);
    };
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
            getAllComments(id, page)
                .then((res) => {
                    setComments(res.data.comments);
                    setNextPage(res.data.next);
                    setTotalPages(res.data.total);
                    setCommentsCount(res.data.count);
                })
                .catch((err) => {
                    console.log(err.message);
                }),
        [page]
    );

    return (
        <>
            <CommentInfo>
                <h3>Comments</h3>
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
                            Post
                        </PostCommentButton>
                    </CommentInputContainer>
                </AddComment>
            )}
            {comments.length === 0 ? (
                <Center>
                    <center>No comments yet!</center>
                </Center> 
            ) : (
                comments?.map((comment, idx) => (
                    <Comment
                        key={comment._id}
                        comment={comment}
                        userData={userData}
                    ></Comment>
                ))
            )}
            <Container>
                <ButtonWrapper>
                    <PaginationBtn disabled={page <= 1} onClick={goPrevPage}>
                        {" "}
                        &lt; Previous Page
                    </PaginationBtn>
                    <PageSpan>
                        {page}/{totalPages ? totalPages : 1}
                    </PageSpan>
                    <PaginationBtn disabled={!nextPage} onClick={goNextPage}>
                        Next Page &gt;
                    </PaginationBtn>
                </ButtonWrapper>
            </Container>
        </>
    );
};

export default CommentSection;
