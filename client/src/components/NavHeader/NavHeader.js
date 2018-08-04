import React from "react";
import PropTypes from "prop-types";
import { Container } from "../Grid"
// import ModalWrapper from "../Modal"

class NavHeader extends React.Component {



    render() {
        const { userId, display } = this.props;
        // console.log(userId)
        // let user = JSON.stringify(userId)
        // console.log(user)
        return (
            
            <div style={{ display: display }}>
                <Container fluid>

                    <nav className="navbar navbar-light bg-light">

                        <div>
                            <a href={"/myListings/:"+userId} className="navbar-brand">My Listings</a>
                        </div>
                        <div>
                            <a href={"/postListing/:"+userId} className="navbar-brand"> Post Listing</a>
                        </div>
                        <div>
                            <a href={"/savedListings/:"+userId} className="navbar-brand"> Saved Listings</a>
                        </div>
                        {/* <div>
                            <a href={"/appointment/:"+userId} className="navbar-brand">Schedule Appointment</a>
                        </div> */}

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