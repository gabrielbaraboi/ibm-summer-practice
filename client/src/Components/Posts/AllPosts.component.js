import React from 'react';
import { Main, SideBar, Layout } from '../Global.styledComponents';
import NavBar from '../NavBar/NavBar.component';


const AllPosts = () => {
    return (
        <Layout>
            
            <SideBar>
                <NavBar></NavBar>
            </SideBar>
            <Main>
                Main
            </Main>
        </Layout>
    );
}

export default AllPosts;