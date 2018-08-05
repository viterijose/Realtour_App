import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostListing from './pages/PostListing';
import Register from "./pages/Register";
import MyListings from "./pages/MyListings";
import Listing from "./pages/Listing";
import SavedListings from "./pages/SavedListings";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* Regular routes for no users ---- */}
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
         
          {/* Routes that show when user is signed in ---- */}
          <Route exact path="/:user" component={Home} />
          <Route exact path="/postListing/:user" component={PostListing} />
          <Route exact path="/listing/:id" component ={Listing}/>
          <Route exact path="/myListings/:id" component={MyListings} />
          <Route exact path="/savedListings/:user" component={SavedListings} />

        </div>
      </Router>
      
    );
  }
}

export default App;
//test