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
          <Route exact path="/" component={Home} />
          <Route exact path="/post/listing" component={PostListing} />
          <Route exact path="/listing/:id" component ={Listing}/>
          <Route exact path="/register" component={Register} />
          <Route exact path="/myListings" component={MyListings} />
          <Route exact path="/saved/listings" component={SavedListings} />

        </div>
      </Router>
      
    );
  }
}

export default App;
