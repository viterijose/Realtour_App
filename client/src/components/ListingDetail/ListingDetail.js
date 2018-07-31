import React from "react";
import PropTypes from "prop-types";
import { Col, Row, Container } from "../Grid"

class ListingDetail extends React.Component {

    render() {
        const { name, src, address, price, city, zipcode, id } = this.props
        return (
            <div id={id}>
                <Container fluid>
                    <Row>
                        <Col size="lg-6">
                            <div className="content">
                                <ul>
                                    <li>
                                        <strong>Price:</strong> ${price}
                                    </li>

                                    <li>
                                        <strong>Address:</strong> {address}
                                    </li>

                                    <li>
                                        <strong>City:</strong> {city}
                                    </li>

                                    <li>
                                        <strong>Zipcode:</strong> {zipcode}
                                    </li>
                                </ul>
                            </div>

                        </Col >

                        <Col size="lg-6">
                            <div className="img-container">
                                <img alt={name} src={src} />
                            </div>

                        </Col>
                    </Row>
                </Container >
            </div>
        )
    }
}

ListingDetail.props = {
    children:PropTypes.node,
    id: PropTypes.string,
    name: PropTypes.string,
    src: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    zipcode: PropTypes.string,
}

export default ListingDetail;