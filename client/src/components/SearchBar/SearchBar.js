import React from "react";
import PropTypes from "prop-types";
import { Container } from "../Grid"

class SearchBar extends React.Component {


    render() {
        // const { src } = this.props;
        return (
            <Container fluid>

                <nav className="navbar navbar-light">
                
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
SearchBar.props = {
    children: PropTypes.node,
}
export default SearchBar