import React, { useState, useEffect } from 'react';
import { PostDiv, Filter, FilterTitle, FilterCategory, FilterCategoryTitle, FilterField, Check, PaginationBtn, PageSpan, Posts } from "./Posts.styledComponents"
import PostCard from "./PostCard.component"
import { getPosts, getWorkPlaces } from '../../Services/post.service';

const AllPosts = () => {
    const [values, setValues] = useState({});
    const [page, setPage] = useState(1);
    const [nextPage, setNextPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [posts, setPosts] = useState([]);
    const [workPlaces, setWorkPlaces] = useState([]);
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

    getWorkPlaces()
        .then(res => {
            setWorkPlaces(Array.from(new Set(res.data.workPlaces.map(a => a.workPlace))))
        })
        .catch(err => {
            console.log(err);
        });

    return (
        <Posts>
            <PostDiv>
                {posts ? posts.map((post, k) =>
                    <PostCard post={post} key={post?._id} />
                ) : <p>No posts to show</p>}
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
                    {workPlaces.map((workPlace, k) =>
                        <FilterField key={k}>
                            <input type="radio" id={`workplace-`, k} name="workPlace" value={workPlace} onChange={handleChange} checked={values.workPlace === workPlace} />
                            <label htmlFor={`workplace-`, k}>{workPlace}</label>
                            <Check className="check" />
                        </FilterField>
                    )}
                </FilterCategory>
                <br />
                <PaginationBtn onClick={clear}>Clear</PaginationBtn>
            </Filter>
        </Posts>
    );
}

export default AllPosts;