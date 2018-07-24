import React from "react";
import PropTypes from "prop-types";

class FlexRow extends React.Component {


    render() {
        const { children,id} = this.props;
        return (
            <div className="p-2" id={id}>
                {children}
            </div>


        )
    }
}
FlexRow.props = {
    children: PropTypes.node,
    id:PropTypes.string
}
export default FlexRow