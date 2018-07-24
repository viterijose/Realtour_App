import React from "react";
import PropTypes from "prop-types";


const customStyles = {
    
    margin: 'auto',
    width: '120%',
    // margin:'auto',
    padding:'10px',
    // height: '200px',
    backgroundColor:'rgb(217,217,217)',
    borderRadius:'4px',
    // color:'rgb(217,217,217)'
};

class FormContainer extends React.Component {

    render() {
        const {children} = this.props
        return (
            <div className="container-form" style={customStyles}>
                {children}
            </div>
        )
    }
}

FormContainer.props = {
    children: PropTypes.node,
}

export default FormContainer