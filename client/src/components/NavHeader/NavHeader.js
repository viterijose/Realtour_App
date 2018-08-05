import React from "react";
import PropTypes from "prop-types";
import { Container } from "../Grid"
<<<<<<< HEAD
=======
import { FlexBox} from "../FlexBox"
import "./NavHeader.css"
>>>>>>> joseBranch
// import ModalWrapper from "../Modal"

class NavHeader extends React.Component {



    render() {
<<<<<<< HEAD
        // const { children } = this.props;
=======
        const { userId, display } = this.props;
        // console.log(userId)
        // let user = JSON.stringify(userId)
        // console.log(user)
>>>>>>> joseBranch
        return (

<<<<<<< HEAD
                <nav className="navbar navbar-light bg-light">

                    <div>
                        <a href="/saved/listings" className="navbar-brand">My Listings</a>
                    </div>
                    <div>
                        <a href="/post/listing" className="navbar-brand"> Post Listing</a>
                    </div>
                    <div>
                        <a href="/appointment" className="navbar-brand">Schedule Appointment</a>
                    </div>

                </nav>

            </Container>
=======
            <div style={{ display: display }}>
                <Container fluid>

                    <nav className="navbar navheader">
                        <FlexBox>
                            <div className ="flex-fill">
                                <a href={"/myListings/:" + userId} className="navbar-brand">My Listings</a>
                            </div>
                            <div className ="flex-fill">
                                <a href={"/postListing/:" + userId} className="navbar-brand"> Post Listing</a>
                            </div>
                            <div className ="flex-fill">
                                <a href={"/savedListings/:" + userId} className="navbar-brand"> Saved Listings</a>
                            </div>
                            {/* <div>
                            <a href={"/appointment/:"+userId} className="navbar-brand">Schedule Appointment</a>
                        </div> */}
                        </FlexBox>
                    </nav>

                </Container>
            </div>
>>>>>>> joseBranch


        )
    }
}
NavHeader.props = {
    children: PropTypes.node,
    userId: PropTypes.string,
    login: PropTypes.string,
}
export default NavHeader