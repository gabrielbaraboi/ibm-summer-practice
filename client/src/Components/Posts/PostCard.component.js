import React, { useState } from "react";
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
    ActionButton,
    CardDivider,
} from "./Posts.styledComponents";
import { Link } from "react-router-dom";
import moment from "moment";
import ReactImageFallback from "react-image-fallback";
import { InputRequirement, InputRequirements } from "./AddPost.styledComponents";

const PostCard = ({ post }) => {
    const [features] = useState([
        post?.type,
        post?.workHours,
        post?.workPlace,
    ]);

    const created_date = new Date(post?.dUpdatedDate);
    return (
        <Card>
            <Content>
                <Div>
                    <Icon>
                        <ReactImageFallback
                            src={`/profile/${post?.createdBy?._id}/getProfilePic`}
                            fallbackImage={
                                process.env.PUBLIC_URL + "/iconUser.jpg"
                            }
                        />
                    </Icon>
                </Div>

                <PostTitle>
                    <Link to={`/post/${post?._id}`}>
                        {post?.title.length > 45
                            ? post?.title.slice(0, 35) + "..."
                            : post?.title}
                    </Link>
					<PostItems>
                    {features.map((item) => (
                        <FeatureListItem>{item}</FeatureListItem>
                    ))}
                </PostItems>
                </PostTitle>

                <Group>
                    <Author>
                        <span>by</span>
                        <Link to={`/profile/${post?.createdBy?._id}`}>
                            {post?.createdBy?.firstName}&nbsp;
							{post?.createdBy?.lastName}
                            {post?.createdBy?.companyName}
                        </Link>
                    </Author>
                    <Data>
					{post?.dCreatedDate !== post?.dUpdatedDate &&
                            "updated "}
                        {moment(created_date).fromNow()}
                    </Data>

                    <Data>{post?.type}</Data>
                </Group>
            </Content>
            <CardDivider>
                <PostDescription>
                    {post?.description.length > 100
                        ? post?.description.slice(0, 100) + "..."
                        : post?.description}
                </PostDescription>
                <InputRequirements>
				<InputRequirement>{post?.programmingLanguage}</InputRequirement>
                    {post?.requirements.map((req, idx) => (
                        <InputRequirement key={idx}>
                            {req.length > 30 ? req.slice(0, 30) + "..." : req}
                        </InputRequirement>
                    ))}
                </InputRequirements>
            </CardDivider>

            <Link to={`/post/${post?._id}`}>
                <ActionButton>Show more</ActionButton>
            </Link>
        </Card>
    );
};

export default PostCard;
