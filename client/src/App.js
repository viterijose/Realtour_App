import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostListing from './pages/PostListing';
import Register from "./pages/Register";
import Listing from "./pages/Listing";
import SavedListings from "./pages/SavedListings";
import Video from "./components/video/video";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/post/listing" component={PostListing} />
          <Route exact path="/listing/:id" component ={Listing}/>
          <Route exact path="/register" component={Register} />
          <Route exact path="/saved/listings" component={SavedListings} />
          <Route exact path="/video" component={Video} />
        </div>
      </Router>

    );
  }
}

export default App;
