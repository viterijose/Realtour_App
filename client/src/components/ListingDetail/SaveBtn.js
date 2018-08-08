import React from "react";
import PropTypes from "prop-types";

class SaveBtn extends React.Component {
    render() {
        const { onClick, disable } = this.props
        return (
            <button className="btn btn-success" disabled={disable} onClick={onClick}>Watch Listing</button>
        )
    }

}

SaveBtn.props = {
    onClick: PropTypes.func,
    disable: PropTypes.bool
    // id:PropTypes.string,
    // children: PropTypes.node
}

export default SaveBtn;