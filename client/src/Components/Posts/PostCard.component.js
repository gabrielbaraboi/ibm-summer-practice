import React, { useState } from 'react';
import { Card, Content, Div, Data, Icon, Group, PostTitle, PostItems, Author, FeatureListItem, PostDescription, PostRequirements, ActionButton } from './Posts.styledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import moment from "moment";

const PostCard = ({ theRef, post }) => {
    const [features] = useState([
        post?.programmingLanguage,
        post?.workHours,
        post?.workPlace
    ])
    const created_date = new Date(post?.date);

    return (
        <Card>
            <Content>
                <Div>
                    <Icon>
                        <i><FontAwesomeIcon icon={faUserCircle} className="icon" /></i>
                    </Icon>
                </Div>
                <Group>
                    <Author>Created by {post?.createdBy.name}</Author>
                    <Data>{moment(created_date).fromNow()}</Data>
                </Group>
                <PostTitle>
                    <Link to={`/post/${post?._id}`}>
                        {post?.title.length > 45 ? post?.title.slice(0, 35) + '...' : post?.title}
                    </Link>
                </PostTitle>
                <PostItems>
                    {
                        features.map(item => (
                            <FeatureListItem>
                                {item}
                            </FeatureListItem>
                        ))
                    }
                </PostItems>
                <PostDescription>Job-Description</PostDescription>
                <PostRequirements>
                    {post?.requirements.map((req, idx) => (
                        <FeatureListItem key={idx}>{req.length > 30 ? req.slice(0, 30) + '...' : req}</FeatureListItem>
                    ))}
                </PostRequirements>
                <ActionButton>Show more</ActionButton>
            </Content>
        </Card>
    )
}

export default PostCard;