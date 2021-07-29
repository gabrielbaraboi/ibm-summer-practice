import React, { useState } from 'react';
import {Card, Content, Div, Data, Icon, Group, PostTitle, PostItems, Author, FeatureListItem, PostDescription, PostRequirements, ActionButton } from './Posts.styledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import {Body} from './AddPost.styledComponents'


function Posts() {
    const [features] = useState([
        "Programming Language",
        "Work Hours",
        "Work Place"
    ])
    return (
      <>
        <div>
            <Body>
            <Card>
                <Content>
                    <Div>
                        <Icon>
                        <i><FontAwesomeIcon icon={faUserCircle} className="icon" /></i>
                        </Icon>
                    </Div> 
                    <Group>
                        <Author>Created by</Author>
                        <Data>Data</Data>
                    </Group>
                    <PostTitle>Job-title</PostTitle>
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
                    <PostRequirements>Requirements </PostRequirements>
                    <ActionButton>Show more</ActionButton>
                </Content>
            </Card>
            </Body>
        </div>
      </>
    )
}

export default Posts;