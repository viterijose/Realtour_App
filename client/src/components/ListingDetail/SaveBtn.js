import React from "react";
import PropTypes from "prop-types";

class SaveBtn extends React.Component{
    render(){
        const {onClick} = this.props
        return(
            <button className="btn btn-success"  onClick={onClick}>Save Listing</button>
        )
    }

}

SaveBtn.props={
    onClick:PropTypes.func,
    // id:PropTypes.string,
    // children: PropTypes.node
}

export default SaveBtn;