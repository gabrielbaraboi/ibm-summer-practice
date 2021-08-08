import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../Services/post.service";
import CommentSection from "../Comment/CommentSection.component";
import { getCurrentUser } from "../../Services/auth.service";

const SinglePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState();
    const [userData, setUserData] = useState();
    const [commentsCount, setCommentsCount] = useState(0);

    useEffect(() => {
        const currentUserData = getCurrentUser();
        setUserData(currentUserData);
    }, []);

    useEffect(
        () =>
            getPost(id)
                .then((res) => {
                    setPost(res.data);
                })
                .catch((err) => {
                    console.log(err.message);
                }),
        []
    );

    return (
        <>
            {post?.title}
            <br />
            {post?.description}
            <br />
            {post?.createdBy?.name}
            <br />
            {post?.workHours}
            <br />
            {post?.workPlace}
            <br />
            {post?.programmingLanguage}
            <br />
            <CommentSection
                userData={userData}
                commentsCount={commentsCount}
            />
        </>
    );
};

export default SinglePost;
