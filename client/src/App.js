import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostListing from './pages/PostListing';
import Register from "./pages/Register";
import MyListings from "./pages/MyListings";
import Listing from "./pages/Listing";
// import ListingCard from "./components/ListingCard"
import SavedListings from "./pages/SavedListings";
import images from "./images.json";//Andre Branch
import Navbar from "./components/Navbar";//Andre Branch
import NavHeader from './components/NavHeader';//Andre Branch
// import { Container } from "./components/Grid";//Andre Branch
import { firebase } from './firebase';//Andre Branch
import AuthUserContext from './components/AuthUserContext';//Andre Branch
import API from "./utils/API";
import Video from "./components/Video/video";
// import PropTypes from "prop-types"
// import ListingCard from './components/ListingCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images,
      authUser: null,
      userId: "",
      email: null,
    }
  }
  componentDidMount() {

    firebase.auth.onAuthStateChanged(authUser => {
      // ---------UNCOMMENT TO PASS USER ID TO PARAMS ------------------------
      // console.log(authUser)

      if (authUser) {
        this.setState({ authUser: authUser, email: authUser.email })
        const email = authUser.email
        API.getUser(email)
          .then(res => this.setState({ userId: res.data[0]._id }))
          .catch(err => console.log(err))
      } else {
        this.setState({ authUser: null, email: null });
      }
    })
  }
  render() {
    const { images, authUser, userId, email} = this.state;
    // console.log(images);
    return (
      <AuthUserContext.Provider value={authUser}>
        <div>

          <Navbar
            src={images[0].src}
            auth={authUser ? true : false}
            email={email}
          />
          {authUser && <NavHeader userId={userId} email={email} src={images[4].src}/>}
          
          <Router>
            <div>
              {/* Regular routes for no users ---- */}
              <Route exact path="/" component={Home} userId={userId}/>
              <Route exact path={"/"+userId} components={Home} />
              <Route exact path="/register" component={Register} />

              {/* Routes that show when user is signed in ---- */}
              <Route exact path="/postListing/:user" component={PostListing} />
              {/* <Route path="/listing/:id" component ={Listing}/> */}
              <Route path="/listing/:id" render ={()=><Listing userData={authUser}/>}/>
              <Route exact path="/myListings/:user" component={MyListings} user/>
              <Route exact path="/userListings/:user" component={SavedListings} />
              {/* The Drone route */}
              <Route path="/video" component={Video} />

            </div>
          </Router>
        </div>
      </AuthUserContext.Provider>
    );
  }
}
export default App;
