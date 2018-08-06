import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostListing from './pages/PostListing';
import Register from "./pages/Register";
import MyListings from "./pages/MyListings";
import Listing from "./pages/Listing";
import SavedListings from "./pages/SavedListings";
import images from "./images.json";//Andre Branch
import Navbar from "./components/Navbar";//Andre Branch
import NavHeader from './components/NavHeader';//Andre Branch
import { Container } from "./components/Grid";//Andre Branch
import { firebase } from './firebase';//Andre Branch
import AuthUserContext from './components/AuthUserContext';//Andre Branch
import Video from "./components/Video/video";
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
      authUser ? this.setState({ authUser }) : this.setState({ authUser: null });//if authUser is true, set state to true, else set to null
    })
  }
  render() {
    const { images, authUser } = this.state;

    return (
      <AuthUserContext.Provider value={authUser}>
        <div>
          <Navbar
            src={images[0].src}
            auth={authUser ? true : false}
          />
          {authUser && <NavHeader />}
          <Router>
            <div>
              {/* Regular routes for no users ---- */}
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />

              {/* Routes that show when user is signed in ---- */}
              {/* <Route exact path="/:user" component={Home} /> */}
              <Route exact path="/postListing/:user" component={PostListing} />
              <Route exact path="/listing/:id" component={Listing} />
              <Route exact path="/myListings/:id" component={MyListings} />
              <Route exact path="/savedListings/:user" component={SavedListings} />
              {/* The Drone route */}
              <Route exact path="/video" component={Video} />
            </div>
          </Router>
        </div>
      </AuthUserContext.Provider>
    );
  }
}
export default App;
