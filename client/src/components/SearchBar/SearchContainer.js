import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "../Grid"
// import SearchBtn from "./SearchBtn";

class SearchContainer extends React.Component {


    render() {
        const {children} = this.props;
        return (
            <div className="searchBar-container" style={{ height: "150px" }}>
                <Container >
                    <Row>
                        <Col size="lg-3" />
                        <Col size="lg-6">
                        <h4>Search for your next property</h4>
                        <br/>
                            <div className="input-group mb-3">
                                    {children}
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