import React from "react";
import PropTypes from "prop-types";
import { Col, Row, Container } from "../Grid"
import ModalWrapper from "../Modal"

class Navbar extends React.Component {


    render() {
        const { children, src } = this.props;
        return (
            <Container fluid>

                <nav className="navbar navbar-light bg-light">
                
                    <div>
                        <a href="/" className="navbar-brand"><img src={src} style={{ width: 40, height: 40 }} alt="drone" />  RealTour</a>
                    </div>
                    <div>
                        <ul className="nav justify-content-end">
                            <li className="nav-item active">
                            <ModalWrapper/>
                                {/* <a className="nav-link" >Sign In<span className="sr-only">(current)</span></a> */}
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/register">Register<span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </Container>


        )
    }
}
Navbar.props = {
    children: PropTypes.node,
    src: PropTypes.string
}
export default Navbar