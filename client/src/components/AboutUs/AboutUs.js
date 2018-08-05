import React from "react";
import PropTypes from "prop-types";
import "./AboutUs.css"
import { Row, Col, Container } from "../Grid"

class AboutUs extends React.Component {


    render() {
        const { src } = this.props;
        return (
            <div className="aboutus-container">
                <Container>
                    <Row>
                        <Col size="lg-1" />
                        <Col size="lg-5">
                            <h3 className="aboutus-h3"> About Us </h3>
                            <br />
                            <h5 className="aboutus-h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue.</h5>
                            <br />
                            <p className="aboutus-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus porttitor
                                pharetra. Cras porta sapien sit amet odio interdum commodo. Aenean nulla lectus,
                                laoreet in blandit pulvinar, aliquet nec lectus. Nullam faucibus convallis erat,
                                vitae bibendum risus ullamcorper non. Cras nulla lorem, luctus sed erat ultricies,
                        venenatis semper augue. Nam vel ligula eros. Duis id elit ut justo venenatis cursus.</p>
                            <br />
                            <button className="aboutus-btn">READ MORE</button>
                        </Col>
                        <Col size="lg-5">
                            <img className="aboutUsImg" src={src} alt="aboutUs" />
                        </Col>
                        <Col size="lg-1" />
                    </Row >
                </Container>
            </div>

        )
    }
}
AboutUs.props = {
    children: PropTypes.node,
    src: PropTypes.string
}
export default AboutUs