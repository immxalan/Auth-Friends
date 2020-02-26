import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Friends from "./components/FriendsForm";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <Router>
    <div className="App">
    <ul>
      <li>
        <Link to= "/login">Login</Link>
      </li>
      <li>
        <Link to="/friends">Friends</Link>
      </li>
      <li>
        <Link to="/friendslist">Friends List</Link>
      </li>
    </ul>
    <Switch>
      <PrivateRoute exact path="/friends" component={Friends}/>
      <PrivateRoute exact path="/friendslist" component={FriendsList}/>
      <Route  path="/login" component={Login}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
