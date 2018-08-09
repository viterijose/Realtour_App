import React from "react";
import PropTypes from "prop-types";
import { Col, Row, Container } from "../Grid";
import moment from "moment";
import { Carousel } from "../Carousel"

class ListingDetail extends React.Component {

    render() {
        const { children, address, price, city, zipcode, id, description, openHouse } = this.props

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

                                    {openHouse &&
                                        <li>
                                            <strong>Open House:</strong> {moment(openHouse.start).format('lll')} to {moment(openHouse.end).format('lll')}
                                        </li>
                                    }
                                    <li>
                                        <strong>Description:</strong>
                                        <p style={{ textAlign: "justify" }}>{description}</p>
                                    </li>
                                </ul>
                            </div>

                        </Col >

                        <Col size="lg-6">
                                {children}
                        </Col>
                    </Row>
                </Container >

            </div>
        )
    }
}

ListingDetail.props = {
    children: PropTypes.node,
    id: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    zipcode: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    openHouse: PropTypes.string
}

export default ListingDetail;