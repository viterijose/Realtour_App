import React from "react"
import PropTypes from "prop-types";

class OpenHouse extends React.Component {
    render() {
        const { listingId} = this.props
        return (
            <button className="btn btn-success" onClick={()=>{  window.location.href="/video" }} > <i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Open House</button>
        )
    }
}
OpenHouse.props = {
    listingId: PropTypes.string,
}

export default OpenHouse;