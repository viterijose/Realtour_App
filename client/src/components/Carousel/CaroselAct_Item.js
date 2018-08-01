import React from "react"
import PropTypes from "prop-types";
// import { Container } from "../Grid"

class CarouselAct_Item extends React.Component {
    render() {
        const {src, children,name} = this.props;
        return (
            <div className="carousel-item active">
                <img className="d-block w-100" src={src} alt={name} />
            </div>
        )
    }
}
CarouselAct_Item.props = {
    children: PropTypes.node,
    src: PropTypes.string,
    name:PropTypes.string
}

export default CarouselAct_Item
