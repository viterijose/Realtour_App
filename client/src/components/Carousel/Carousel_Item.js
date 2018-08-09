import React from "react"
import PropTypes from "prop-types";
// import { Container } from "../Grid"
import images from "../../images.json"

class CarouselItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images
        }
    }
    render() {
        const { src, name } = this.props;
        if (src == undefined) {
            return (
                // ------------------- TEMPORARY IMAGE FIX------------------------
                <div className="carousel-item">
                    <img className="d-block w-100" src={images[5].src} alt={name} />
                </div>
            )
        }
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
    name: PropTypes.string
}

export default CarouselItem
