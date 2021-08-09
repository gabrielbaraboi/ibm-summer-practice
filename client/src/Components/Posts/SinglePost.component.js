import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../Services/post.service";
import CommentSection from "../Comment/CommentSection.component";
import { getCurrentUser } from "../../Services/auth.service";
import PostCard from "./PostCard.component";
import { PostDiv } from "./Posts.styledComponents";

const SinglePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState();
    const [userData, setUserData] = useState();

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
        <PostDiv>
            <PostCard post={post}/>
            <CommentSection userData={userData} />
        </PostDiv>
    );
};

export default SinglePost;
