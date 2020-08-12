import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import AddFriendForm from "./components/AddFriendForm";
import FriendsList from "./components/FriendsList";
import Logout from './components/Logout';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Link to= "/login">Login</Link>
        <Link to= "/logoff">Logout</Link>
        <Link to="/friendsform">Add a Friend</Link>
        <Link to="/friendslist">Friends List</Link>
    <Switch>
      <Route  path="/login" component={Login}/>
      <PrivateRoute exact path="/logoff" component={Logout}/>
      <PrivateRoute exact path="/friendsform" component={AddFriendForm}/>
      <PrivateRoute exact path="/friendslist" component={FriendsList}/>
    </Switch>
    </Router>
      </header>
    </div>
  );
}

export default App;
