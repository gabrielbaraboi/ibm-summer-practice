import React, { useState, useEffect } from 'react';
import { PostDiv } from './Posts.styledComponents';
import PostCard from "./PostCard.component"
import { getPosts } from '../../Services/post.service';

const AllPosts = (props) => {
    const [page, setPage] = useState(1);
    const goNextPage = () => {
        if (nextPage)
            setPage(page + 1);
    }
    const goPrevPage = () => {
        if (page >= 2)
            setPage(page - 1);
    }
    const [nextPage, setNextPage] = useState(1);
    const programmingLanguage = new URLSearchParams(props.location.search).get('programmingLanguage');
    const workHours = new URLSearchParams(props.location.search).get('workHours');
    const workPlace = new URLSearchParams(props.location.search).get('workPlace');
    const type = new URLSearchParams(props.location.search).get('type');
    const requirements = new URLSearchParams(props.location.search).getAll('requirements');
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts(page, programmingLanguage, workHours, workPlace, type, requirements)
            .then(res => {
                setPosts(res.data.posts);
                setNextPage(res.data.next);
            })
            .catch(err => console.log(err))
    }
        , [posts]);
    let postList;
    console.log(nextPage);
    postList = posts.map((post, k) =>
        <PostCard post={post} key={k} />
    );

    return (
        <>
        <PostDiv>
            {postList}
            <button disabled={page <= 1} onClick={goPrevPage}>Previous Page</button>
            <span>{page}</span>
            <button disabled={!nextPage} onClick={goNextPage}>Next Page</button>
        </PostDiv>
        </>
    );
}

export default AllPosts;