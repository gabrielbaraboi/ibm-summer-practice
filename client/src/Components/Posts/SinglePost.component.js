import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../Services/post.service";
import CommentSection from "../Comment/CommentSection.component";
import { getCurrentUser } from "../../Services/auth.service";
import { PostDivSinglePost } from "./Posts.styledComponents";
import {
    Card,
    Content,
    Div,
    Data,
    Icon,
    Group,
    PostTitle,
    PostItems,
    Author,
    FeatureListItem,
    PostDescription,
    PostRequirements,
    CardDivider,
} from "./Posts.styledComponents";
import moment from "moment";
import ReactImageFallback from "react-image-fallback";
import { Link } from "react-router-dom";
import { InputRequirements, InputRequirement } from "./AddPost.styledComponents";

const SinglePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState();
    const [userData, setUserData] = useState();

    useEffect(() => {
        const currentUserData = getCurrentUser();
        setUserData(currentUserData);
    }, []);

    const created_date = new Date(post?.dCreatedDate);

    useEffect(() => {
        getPost(id)
            .then((res) => {
                setPost(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <PostDivSinglePost>
            <Card>
                <Content>
                    <Div>
                        <Icon>
                            <ReactImageFallback
                                src={`/profile/${post?.createdBy._id}/getProfilePic`}
                                fallbackImage={
                                    process.env.PUBLIC_URL + "/iconUser.jpg"
                                }
                            />
                        </Icon>
                    </Div>

                    <PostTitle>
                        <Link to={`/post/${post?._id}`}>
                            {post?.title}
                        </Link>
                        <PostItems>
                        <FeatureListItem>
                            {post?.programmingLanguage}
                        </FeatureListItem>
                        <FeatureListItem>{post?.workHours}</FeatureListItem>
                        <FeatureListItem>{post?.workPlace}</FeatureListItem>
                    </PostItems>
                    </PostTitle>

                    <Group>
                        <Author>
                            Created by
                            <Link to={`/profile/${post?.createdBy?._id}`}>
                                {post?.createdBy?.firstName}
                                {post?.createdBy?.lastName}
                                {post?.createdBy?.companyName}
                            </Link>
                        </Author>
                        <Data>{moment(created_date).fromNow()}</Data>
                        <Data>{post?.type}</Data>
                    </Group>
                </Content>
                <CardDivider>
                    <PostDescription>
                        {post?.description}
                    </PostDescription>
                    <InputRequirements>
                    <InputRequirement>{post?.programmingLanguage}</InputRequirement>
                    {post?.requirements.map((req, idx) => (
                        <InputRequirement key={idx}>
                            {req}
                        </InputRequirement>
                    ))}
                </InputRequirements>
                </CardDivider>
            </Card>
            <CommentSection userData={userData} />
        </PostDivSinglePost>
    );
};

export default SinglePost;
