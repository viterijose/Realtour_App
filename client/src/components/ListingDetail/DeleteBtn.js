import React from "react";
import PropTypes from "prop-types";

class DeleteBtn extends React.Component{
    render(){
        const {onClick,listing_id} = this.props
        return(
            <button className="btn btn-danger" id={listing_id} onClick={onClick}>Delete</button>
        )
    }

}

DeleteBtn.props={
    onClick:PropTypes.func,
    id:PropTypes.string,
    children: PropTypes.node
}

export default DeleteBtn;