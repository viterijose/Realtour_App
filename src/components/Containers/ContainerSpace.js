import React from "react";

const customStyles = {
    
        margin: 'auto',
        width: '100%',
        height: '80px'
};

class ContainerSpace extends React.Component {
    render() {
        return (
            <div className="container-space" style={customStyles}>
            </div>
        )
    }
}

export default ContainerSpace