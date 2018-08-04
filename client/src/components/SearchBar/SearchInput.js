import React from "react";
import PropTypes from "prop-types";

class SearchInput extends React.Component {


    render() {
        // const { onClick} = this.props;
        return (

            <input className="form-control" placeholder="Enter a city or ZIP code"{...this.props} />



        )
    }
}
SearchInput.props = {
    name: PropTypes.string,
    placeholder: PropTypes.string
}
export default SearchInput