import React from "react"
import PropTypes from "prop-types";

class OpenHouse extends React.Component {
    render() {
        const { listingId} = this.props
        return (
            <a href={"/video/:" + listingId}>View Open House</a>
        )
    }
}
OpenHouse.props = {
    listingId: PropTypes.string,
}

export default OpenHouse;