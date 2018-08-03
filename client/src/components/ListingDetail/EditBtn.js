import React from "react";
import PropTypes from "prop-types";

class EditBtn extends React.Component{
    render(){
        const {onClick,listing_id} = this.props
        return(
            <button className="btn btn-primary" id={listing_id} onClick={onClick}>Edit Listing</button>
        )
    }

}

EditBtn.props={
    onClick:PropTypes.func,
    id:PropTypes.string,
    children: PropTypes.node
}

export default EditBtn;