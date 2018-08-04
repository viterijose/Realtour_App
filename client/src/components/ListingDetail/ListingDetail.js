import React from "react";
import PropTypes from "prop-types";
import { Col, Row, Container } from "../Grid"

class ListingDetail extends React.Component {

    render() {
        const { name, src, address, price, city, zipcode, id ,description,openHouse} = this.props
        return (
            <div id={id}>
                <Container fluid>
                    <Row>
                        <Col size="lg-4">
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

                                    <li>
                                        <strong>Open House:</strong> {openHouse}
                                    </li>
                                    <li>
                                        <strong>Description:</strong>
                                    <p style={{textAlign:"justify"}}>{description}</p>
                                    </li>
                                </ul>
                            </div>

                        </Col >

                        <Col size="lg-8">
                            <div className="img-container">
                                <img alt={name} src={src} style={{width:"100%",height:"100%"}}/>
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
    description: PropTypes.string,
    price: PropTypes.number,
    openHouse: PropTypes.string
}

export default ListingDetail;