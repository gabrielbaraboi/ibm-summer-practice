import React from 'react';
import { Main, Layout } from '../Global.styledComponents';
import NavBar from '../NavBar/NavBar.component';


const AllPosts = () => {
    return (
        <Layout>
            <NavBar/>
            <Main className='main'>
                Main
            </Main>
        </Layout>
    );
}

export default AllPosts;