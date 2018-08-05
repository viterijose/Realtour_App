import React from "react";
import PropTypes from "prop-types";

class TextArea extends React.Component{
    render(){
        return(
            <div>
                <textarea className="form-control" rows="10" {...this.props}/>
            </div>
        )
    }
}

TextArea.props = {
    name:PropTypes.string,
    placeholder: PropTypes.string
}

export default TextArea