import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { saveUserData, getUserData, isUserData } from "./Services/localStorageManagement";
import AllPosts from "./Components/Posts/AllPosts.component"
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";


const App = () => {

  const [connectedUser, setConnectedUser] = useState(null);

  const setData = (data) => {
    saveUserData(data); //Salveaza datele utilizatorului in local storage
    setConnectedUser(data);
  };

  useEffect(() => {
    if (isUserData()) {
      const userData = getUserData();
      setConnectedUser(userData);
      console.log(`User conectat: ${userData.email}`);
    }
    else {
      console.log(`Neconectat`);
    }
  }, [])

  return (
    <Router>
      <div>
        <Route
          exact path='/'
          render={(props) => (
            <AllPosts {...props} connectedUser={connectedUser} />
          )}
        />
        <Route
          path='/register'
          component={Register} />
        <Route
          path='/login'
          render={(props) => (
            <Login {...props} parentCallback={setData} />
          )}
        />
      </div>
    </Router>
  );
}

export default App;
