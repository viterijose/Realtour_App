import React from "react";
import PropTypes from "prop-types";
import { Col, Row, Container } from "../Grid"


class FlexBox extends React.Component {


    render() {
        const { children} = this.props;
        return (
            <div className="d-flex flex-row">
                {children}

            </div>


        )
    }
}
FlexBox.props = {
    children: PropTypes.node,
}
export default FlexBox