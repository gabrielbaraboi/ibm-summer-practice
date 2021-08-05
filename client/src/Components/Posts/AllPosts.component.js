import React, { useState, useEffect } from 'react';
import { PostDiv, Filter, FilterTitle, FilterCategory, FilterCategoryTitle, FilterField, Check, PaginationBtn, PageSpan, Posts, Card, Content, 
    Div, Data, Icon, Group, PostTitle, PostItems, Author, FeatureListItem, PostDescription, PostRequirements, ActionButton  } from "./Posts.styledComponents"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import moment from "moment";
import PostCard from "./PostCard.component"
import { getPosts } from '../../Services/post.service';

const AllPosts = () => {
    const [values, setValues] = useState({});
    const [page, setPage] = useState(1);
    const [nextPage, setNextPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [posts, setPosts] = useState([]);
    const goNextPage = () => {
        if (nextPage)
            setPage(nextPage);
    }
    const goPrevPage = () => {
        if (page >= 2)
            setPage(page - 1);
    }
    const clear = () => {
        setValues({});
        setPage(1);
    }

    function handleChange(event) {
        setPage(1);
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    }

    useEffect(() => {
        getPosts(page, values.programmingLanguage, values.workHours, values.workPlace, values.type, values.requirements)
            .then(res => {
                setPosts(res.data.posts);
                setNextPage(res.data.next);
                setTotalPages(res.data.total)
            })
            .catch(err => console.log(err))
    }
        , [page, values]);

    return (
        <Posts>
            <PostDiv>
                {/* {posts ? posts.map((post, k) =>
                    <PostCard post={post} key={k} />
                ) : <p>No posts to show</p>} */}
                    {posts ? posts.map((post, index) => (
                        <Card key={index}>
                            <Content>
                                <Div>
                                    <Icon>
                                        <i><FontAwesomeIcon icon={faUserCircle} className="icon" /></i>
                                    </Icon>
                                </Div>
                                <Group>
                                    <Author>Created by
                                        <Link to={`/profile/${post?.createdBy?.id}`}>
                                            {post?.createdBy.name}
                                        </Link>
                                    </Author>
                                    <Data>{moment(new Date(post?.date)).fromNow()}</Data>
                                    <Data>{post?.type}</Data>
                                </Group>
                                <PostTitle>
                                    <Link to={`/post/${post?._id}`}>
                                        {post?.title.length > 45 ? post?.title.slice(0, 35) + '...' : post?.title}
                                    </Link>
                                </PostTitle>
                                <PostItems>
                                    <FeatureListItem>
                                        {`work hours: ` + post?.workHours}
                                    </FeatureListItem>
                                    <FeatureListItem>
                                        {`work place: ` + post?.workPlace}
                                    </FeatureListItem>
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
                    )) : <p>No posts to show</p>}
                <div>
                    <PaginationBtn disabled={page <= 1} onClick={goPrevPage}> &lt; Previous Page</PaginationBtn>
                    <PageSpan>{page}/{totalPages ? totalPages : 1}</PageSpan>
                    <PaginationBtn disabled={!nextPage} onClick={goNextPage}>Next Page &gt;</PaginationBtn>
                </div>
            </PostDiv>
            <Filter>
                <FilterTitle>Filter</FilterTitle>
                <FilterCategory>
                    <FilterCategoryTitle>Type</FilterCategoryTitle>
                    <FilterField>
                        <input type="radio" id="offer" name="type" value="offer" onChange={handleChange} checked={values.type === "offer"} />
                        <label htmlFor="offer">Offer</label><br />
                        <Check className="check" />
                    </FilterField>
                    <FilterField>
                        <input type="radio" id="request" name="type" value="request" onChange={handleChange} checked={values.type === "request"} />
                        <label htmlFor="request">Request</label>
                        <Check className="check" />
                    </FilterField>
                </FilterCategory>
                <FilterCategory>
                    <FilterCategoryTitle>Work Hours</FilterCategoryTitle>
                    <FilterField>
                        <input type="radio" id="full-time" name="workHours" value="full-time" onChange={handleChange} checked={values.workHours === "full-time"} />
                        <label htmlFor="full-time">Full Time</label><br />
                        <Check className="check" />
                    </FilterField>
                    <FilterField>
                        <input type="radio" id="part-time" name="workHours" value="part-time" onChange={handleChange} checked={values.workHours === "part-time"} />
                        <label htmlFor="part-time">Part Time</label>
                        <Check className="check" />
                    </FilterField>
                </FilterCategory>
                <FilterCategory>
                    <FilterCategoryTitle>Work Place</FilterCategoryTitle>
                    <FilterField>
                        <input type="radio" id={`workplace`} name="workPlace" value="Timișoara" onChange={handleChange} checked={values.workPlace === "Timișoara"} />
                        <label htmlFor={`workplace`}>Timișoara</label>
                        <Check className="check" />
                    </FilterField>
                    <FilterField>
                        <input type="radio" id={`workplace-1`} name="workPlace" value="Brașov" onChange={handleChange} checked={values.workPlace === "Brașov"} />
                        <label htmlFor={`workplace-1`}>Brașov</label>
                        <Check className="check" />
                    </FilterField>
                    <FilterField>
                        <input type="radio" id={`workplace-2`} name="workPlace" value="Iași" onChange={handleChange} checked={values.workPlace === "Iași"} />
                        <label htmlFor={`workplace-2`}>Iași</label>
                        <Check className="check" />
                    </FilterField>
                    <FilterField>
                        <input type="radio" id={`workplace-3`} name="workPlace" value="remote" onChange={handleChange} checked={values.workPlace === "remote"} />
                        <label htmlFor={`workplace-3`}>Remote</label>
                        <Check className="check" />
                    </FilterField>
                </FilterCategory>
                <br />
                <PaginationBtn onClick={clear}>Clear</PaginationBtn>
            </Filter>
        </Posts>
    );
}

export default AllPosts;