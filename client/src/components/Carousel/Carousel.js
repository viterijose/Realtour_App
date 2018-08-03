import React from "react";
import PropTypes from "prop-types";
// import { Container } from "../Grid"
// import ModalWrapper from "../Modal"
// import "./Navbar.css"

class Carousel extends React.Component {


    render() {
        const { children } = this.props;
        return (


            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {children}
                    {/* <div class="carousel-item active">
                        <img class="d-block w-100" src="http://theeconomiccollapseblog.com/wp-content/uploads/2011/07/Number-One.png" alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="http://theeconomiccollapseblog.com/wp-content/uploads/2011/07/Number-One.png" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="http://theeconomiccollapseblog.com/wp-content/uploads/2011/07/Number-One.png" alt="Third slide" />
                    </div> */}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>



        )
    }
}
Carousel.props = {
    children: PropTypes.node,
    // src: PropTypes.string
}
export default Carousel