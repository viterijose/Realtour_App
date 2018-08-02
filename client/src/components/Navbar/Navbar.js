import React from "react";
import PropTypes from "prop-types";
import { Container } from "../Grid"
import ModalWrapper from "../Modal"
import "./Navbar.css"

class Navbar extends React.Component {


    render() {
        const { src } = this.props;
        return (
            <Container fluid>

                <nav className="navbar navbar-light bg-light navbar1">
                
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
                                <a className="btn btn-secondary" href="/register">Register<span className="sr-only">(current)</span></a>
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