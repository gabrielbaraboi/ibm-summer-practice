import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllPosts from "./Components/Posts/AllPosts.component"
import Login from "./Components/Auth/Login";


const App = () => {

  return (
    <Router>
      <div>
        <Route
          exact path='/'
          component={AllPosts} />
       {/* <Route
          path='/register'
          component={Register} /> */}
          <Route
            exact path='/login'
            component={Login}
          />
      </div>
    </Router>
  );
}

export default App;
