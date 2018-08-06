import React from "react";
import PropTypes from "prop-types";

class FlexBox extends React.Component {

    render() {
        const { children} = this.props;
        return (
            <div className="d-flex flex-wrap" style={{width:"100%",padding:"0 100px"}}>
                {children}
            </div>
        )
    }
}
FlexBox.props = {
    children: PropTypes.node,
}
export default FlexBox