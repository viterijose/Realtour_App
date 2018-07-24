import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import postListing from './pages/postListing';
import Register from "./pages/Register"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/listing" component={postListing} />
          <Route exact path="/listings" component={postListing} />
          <Route exact path="/register" component={Register} />
        </div>
      </Router>

    );
  }
}

export default App;
