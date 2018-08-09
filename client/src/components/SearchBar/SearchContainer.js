import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "../Grid"
import "./SearchBar.css";

class SearchContainer extends React.Component {


    render() {
        const { children } = this.props;
        return (
            <div className="searchBar-container">
                <Container fluid>
                    <Row>
                        <Col size="lg-3" />
                        <Col size="lg-6" >
                            <div className="searchGroup">
                                <h4>Search for your next property</h4>
                                <br />
                                <br />
                                <div className="input-group mb-3">
                                    {children}
                                </div>
                            </div>
                        </Col>
                        <Col size="lg-3" />
                    </Row>

                </Container>
            </div>
        )
    }
}
SearchContainer.props = {
    children: PropTypes.node,
}
export default SearchContainer