import React from "react"
import PropTypes from "prop-types";
// import { Container } from "../Grid"

class CarouselItem extends React.Component {
    render() {
        const {src,name} = this.props;
        return (
            <div className="carousel-item">
                <img className="d-block w-100" src={src} alt={name} />
            </div>
        )
    }
}
CarouselItem.props = {
    children: PropTypes.node,
    src: PropTypes.string,
    name:PropTypes.string
}

export default CarouselItem
