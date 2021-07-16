import { BrowserRouter as Router, Route } from "react-router-dom";
import AllPosts from "./Components/Posts/AllPosts.component"


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
      </div>
    </Router>
  );
}

export default App;
