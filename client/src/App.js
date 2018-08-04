import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostListing from './pages/PostListing';
import Register from "./pages/Register";
import MyListings from "./pages/MyListings";
import Listing from "./pages/Listing";
import SavedListings from "./pages/SavedListings";
import images from "./images.json";
import Navbar from "./components/Navbar";
import { Container } from "./components/Grid"
import { firebase } from './firebase';
import AuthUserContext from './components/AuthUserContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images,
      authUser: null,
    }
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser ? this.setState({ authUser }) : this.setState({ authUser: null });
    });
  }

  render() {
    const { images, authUser } = this.state;

    return (
      <AuthUserContext.Provider value={authUser}>
        <div>
          <Container fluid>
            <Navbar
              src={images[0].src}
              auth={authUser ? true : false}
            />
          </Container>
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/listing" component={PostListing} />
              <Route exact path="/listing/:id" component={Listing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/myListings" component={MyListings} />
              <Route exact path="/saved/listings" component={SavedListings} />

            </div>
          </Router>
        </div>
      </AuthUserContext.Provider>
    );
  }
}

export default App;
