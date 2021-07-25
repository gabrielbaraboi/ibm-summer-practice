import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllPosts from "./Components/Posts/AllPosts.component"
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import AddPost from "./Components/Posts/AddPost";
import AuthVerify from "./Services/authVerify.service";
import { Main, Layout } from './Components/Global.styledComponents';
import NavBar from './Components/NavBar/NavBar.component';

const App = () => {

  return (
    <Layout>
      <NavBar />
      <Main className='main'>
        <Router>
          <Route
            exact path='/'
            component={AllPosts} />
          <Route
            path='/register'
            component={Register} />
          <Route
            path='/login'
            component={Login} />
          <Route
            exact path='/addpost'
            component={AddPost}
          />
          <AuthVerify />
        </Router>
      </Main>
    </Layout>

  );
}

export default App;
