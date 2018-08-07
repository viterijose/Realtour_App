import React from "react";
import PropTypes from "prop-types";
import { Container } from "../Grid"
import { FlexBox} from "../FlexBox"
import "./NavHeader.css"
// import ModalWrapper from "../Modal"

class NavHeader extends React.Component {



    render() {
        const { userId, display } = this.props;
        return (

            <div style={{ display: display }}>
                <Container fluid>

                    <nav className="navbar navheader">
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
                            {/* <div>
                            <a href={"/appointment/:"+userId} className="navbar-brand">Schedule Appointment</a>
                        </div> */}
                        </FlexBox>
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