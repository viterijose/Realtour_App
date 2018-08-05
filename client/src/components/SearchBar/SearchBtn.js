import React from "react";
import PropTypes from "prop-types";

class SearchBtn extends React.Component {
    render() {
        const { onClick } = this.props
        return (
            <div className="input-group-append">
                <button onClick={onClick} className="btn btn-secondary">
                    Search
            </button>
            </div>
        )
    }
}

SearchBtn.props = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
}

export default SearchBtn