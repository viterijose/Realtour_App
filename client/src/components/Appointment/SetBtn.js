import React from "react"
import PropTypes from "prop-types";

class SetBtn extends React.Component{
    render(){
        const {onClick} = this.props
        return(
                <button className="btn btn-primary"  onClick={onClick}>Set Appointment   <i className="fa fa-calendar-check-o" aria-hidden="true"></i></button>
        )
    }
}

SetBtn.props={
    onClick: PropTypes.func,
}

export default SetBtn;