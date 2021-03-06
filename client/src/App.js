import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllPosts from "./Components/Posts/AllPosts.component";
import Login from "./Components/Auth/Login.component";
import Register from "./Components/Auth/Register.component";
import AddPost from "./Components/Posts/AddPost.component";
import AuthVerify from "./Services/auth.service";
import { Main, Layout } from "./Components/Global.styledComponents";
import NavBar from "./Components/NavBar/NavBar.component";
import PrivateRoute from "./Components/PrivateRoute.component";
import PublicRoute from "./Components/PublicRoute.component";
import Profile from "./Components/Profile/Profile.component";
import SinglePost from "./Components/Posts/SinglePost.component";
import AllConversations from "./Components/Inbox/AllConversations.component";
import Settings from "./Components/Settings/Settings.component";

const App = () => {
    return (
        <Layout>
            <Router>
                <NavBar />
                <Main className="main">
                    <PublicRoute exact path="/" component={AllPosts} />
                    <PublicRoute
                        path="/register"
                        restricted
                        component={Register}
                    />
                    <PublicRoute path="/login" restricted component={Login} />
                    <PrivateRoute path="/addpost" component={AddPost} />
                    <PublicRoute path="/profile/:id" component={Profile} />
                    <PrivateRoute path="/settings/:id" component={Settings} />
                    <PublicRoute path="/post/:id" component={SinglePost} />
                    <PrivateRoute path="/inbox" component={AllConversations} />
                    <AuthVerify />
                </Main>
            </Router>
        </Layout>
    );
};

export default App;
