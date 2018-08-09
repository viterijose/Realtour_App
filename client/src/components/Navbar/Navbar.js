import React from "react";
import PropTypes from "prop-types";
import { Container } from "../Grid"
import ModalWrapper from "../Modal"
import "./Navbar.css"

class Navbar extends React.Component {


    render() {
        const { src, auth } = this.props;

        return (
            <Container fluid>

                <nav className="navbar navbar-light">
                
                    <div>
                        <a href="/" className="navbar-brand"><img src={src} style={{ width: 40, height: 40 }} alt="drone" />  RealTour</a>
                    </div>
                    {/* <p>{this.props.email}</p> */}
                    <div>
                        <ul className="nav justify-content-end">
                            <li className="nav-item active">
                            <ModalWrapper auth={auth}/>
                            </li>
                            <li className="nav-item active">
                                {/* {auth === false && <button className="btn btn-primary" href="/register">Register<span className="sr-only">(current)</span></button>} */}
                                {auth === false && <button className="btn btn-info" onClick={()=>{  window.location.href="/register" }} href="/register">Register</button>}
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