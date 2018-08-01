import React from "react";
import PropTypes from "prop-types";
import { Col, Row, Container } from "../Grid"
import "./NavHeader.css" 
import ModalWrapper from "../Modal"

class NavHeader extends React.Component {


    render() {
        const { children} = this.props;
        return (
            <Container fluid>

                <nav className="navbar navbar-light bg-dark">
                
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


        )
    }
}
NavHeader.props = {
    children: PropTypes.node,
}
export default NavHeader