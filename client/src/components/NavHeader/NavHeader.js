import React from "react";
import PropTypes from "prop-types";
import { Container } from "../Grid"
import { FlexBox } from "../FlexBox";
import SignOutButton from '../SignOutButton';
import "./NavHeader.css"
// import ModalWrapper from "../Modal"

class NavHeader extends React.Component {



    render() {
        const { userId, display } = this.props;
        return (

            <div style={{ display: display }}>
                <Container fluid>

                    {/* <nav className="navbar navheader">
                        <FlexBox>
                            <div className ="flex-fill">
                                <a href={"/myListings/" + userId} className="navbar-brand">My Listings</a>
                            </div>
                            <div className ="flex-fill">
                                <a href={"/postListing/" + userId} className="navbar-brand"> Post Listing</a>
                            </div>
                            <div className ="flex-fill">
                                <a href={"/userListings/" + userId} className="navbar-brand"> Saved Listings</a>
                            </div>
                          
                        </FlexBox>
                    </nav> */}



                    {/* <nav>
                        <ul className="navbar navbar-light" style={{ backgroundColor: " #e3f2fd" }}>
                            <li className = "nav-item">
                                <a className="nav-link" href={"/myListings/:" + userId} >My Listings </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li >
                                <a href={"/postListing/:" + userId} className="navbar-brand"> Post Listing</a>
                            </li>
                            <li role="presentation" >
                                <a href={"/savedListings/:" + userId} className="navbar-brand"> Saved Listings</a>
                            </li>
                        </ul>
                    </nav> */}



                    <nav className="navbar navbar-inverse navbar-expand-xl navbar-dark">
                        {/* <div>
                            <a href="/" className="navbar-brand"><img src={this.props.src} style={{ width: 40, height: 40 }} alt="drone" />  RealTour</a>
                        </div> */}
                        <div className="navbar-header d-flex col">
                            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle navbar-toggler ml-auto">
                                <span className="navbar-toggler-icon"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>

                        <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
                            <FlexBox>
                                <ul className="nav navbar-nav navbar-right ml-auto">
                                    <li className="nav-item "><a href="/" className="nav-link"><i className="fa fa-home"></i><span>Home</span></a></li>
                                    <li className="nav-item "><a href={"/myListings/" + userId} className="nav-link"><i className="fa fa-bars"></i><span>My Listings</span></a></li>
                                    <li className="nav-item"><a href={"/postListing/" + userId} className="nav-link"><i className="fa fa-sticky-note-o"></i><span>Post Listings</span></a></li>
                                    <li className="nav-item"><a href={"/userListings/" + userId} className="nav-link"><i className=" fa fa-floppy-o"></i><span>Saved Lisings </span></a></li>
                                    <li className="nav-item dropdown">
                                        <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle user-action"><img src={this.props.src} className="avatar" alt="Avatar"></img> {this.props.email} <b className="caret"></b></a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#" className="dropdown-item"><i className="fa fa-user-o"></i> Profile</a></li>
                                            <li><a href="#" className="dropdown-item"><i className="fa fa-calendar-o"></i> Calendar</a></li>
                                            <li><a href="#" className="dropdown-item"><i className="fa fa-sliders"></i> Settings</a></li>
                                            <li className="divider dropdown-divider"></li>
                                            {/* <li><button onClick={()=>{ console.log("SignedOUT")}} className="dropdown-item"> Logout</button></li> */}
                                            <li>< SignOutButton /></li>
                                        </ul>
                                    </li>
                                </ul>
                            </FlexBox>
                        </div>

                    </nav>









                </Container>
            </div>


        )
    }
}
NavHeader.props = {
    children: PropTypes.node,
    userId: PropTypes.string,
    login: PropTypes.string,
}
export default NavHeader