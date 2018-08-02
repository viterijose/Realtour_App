import React from "react";
import PropTypes from "prop-types";
import { Container } from "../Grid"
import ModalWrapper from "../Modal"
import "./Footer.css"

class Footer extends React.Component {


    render() {
        const { src } = this.props;
        return (
            <Container fluid>

                <nav className="navbar footer">
                
                    <div>
                        <a href="/" className="footer-brand">
                        <img src={src} style={{ width: 40, height: 40 }} alt="drone" /> © Copyright 2017. All Rights Reserved. Designed by RealTour LLC </a>
                    </div>
                    <div>
                        Footer
                    </div>
                </nav>

            </Container>


        )
    }
}
Footer.props = {
    children: PropTypes.node,
    src: PropTypes.string
}
export default Footer