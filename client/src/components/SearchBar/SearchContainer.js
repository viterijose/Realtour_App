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
    // onClick: PropTypes.func,
    // name:PropTypes.string,
    // placeholder:PropTypes.string
}
export default SearchContainer