import React, { useState, useEffect } from 'react';
import { PostDiv, Filter, FilterTitle, FilterCategory, FilterCategoryTitle, FilterField, Check, PaginationBtn, PageSpan } from "./Posts.styledComponents"
import PostCard from "./PostCard.component"
import { getPosts } from '../../Services/post.service';

const AllPosts = (props) => {
    const [values, setValues] = useState({});
    const [page, setPage] = useState(1);
    const [nextPage, setNextPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const programmingLanguage = values.programmingLanguage;
    const workHours = values.workHours
    const workPlace = values.workPlace
    const type = values.type
    const requirements = new URLSearchParams(props.location.search).getAll('requirements');
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
        console.log(values);
    }

    useEffect(() => {
        getPosts(page, programmingLanguage, workHours, workPlace, type, requirements)
            .then(res => {
                setPosts(res.data.posts);
                setNextPage(res.data.next);
                setTotalPages(res.data.total)
            })
            .catch(err => console.log(err))
    }
        , [posts]);
    let postList = '';
    if (posts)
        postList = posts.map((post, k) =>
            <PostCard post={post} key={k} />
        );

    return (
        <>
            <PostDiv>
                {postList.length === 0 ? <p>No posts to show</p> : postList}
                <div>
                    <PaginationBtn disabled={page <= 1} onClick={goPrevPage}> &lt; Previous Page</PaginationBtn>
                    <PageSpan>{page}</PageSpan>
                    <PaginationBtn disabled={!nextPage} onClick={goNextPage}>Next Page &gt;</PaginationBtn>

                </div>
                <p>Total pages: {totalPages}</p>
                <p>Next page: {nextPage}</p>
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
                        <input type="radio" id={`workplace-2`} name="workPlace" value="remote" onChange={handleChange} checked={values.workPlace === "remote"} />
                        <label htmlFor={`workplace-2`}>Remote</label>
                        <Check className="check" />
                    </FilterField>
                </FilterCategory>
            </Filter>
        </>
    );
}

export default AllPosts;