import React from "react";
import PropTypes from "prop-types";
import "./ListingCard.css";
import moment from 'moment';

class ListingCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert('hi')
    }

    render() {
        const { name, src, address, price, city, zipcode, id, openHouse } = this.props
        return (
            <div className="card" id={id} onClick={this.handleClick}>
                <div className="img-container">
                    <img alt={name} src={src} />
                </div>
                <div className="content">
                    <ul>
                        <li>
                            <strong>Price:</strong> ${price}
                        </li>

                        <li>
                            <strong>Address:</strong> {address}
                        </li>

                        <li>
                            <strong>City:</strong> {city}
                        </li>

                        <li>
                            <strong>Zipcode:</strong> {zipcode}
                        </li>

                        {openHouse &&
                            <li>
                                Open House from {moment(openHouse.start).format('lll')} to {moment(openHouse.end).format('lll')}
                            </li>
                        }
                    </ul>
                </div>

            </div>
        )
    }
}

ListingCard.props = {
    id: PropTypes.string,
    name: PropTypes.string,
    src: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    zipcode: PropTypes.string,
}

export default ListingCard;