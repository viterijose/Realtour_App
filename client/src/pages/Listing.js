import React from "react";
import { Container } from "../../src/components/Grid"
import ContainerSpace from "../components/Containers"
import images from "../images.json"
import API from "../utils/API"
import NavHeader from "../components/NavHeader"
import {SaveBtn,ListingDetail} from "../components/ListingDetail";


class Listing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images,
            listing: {},
        }
        this.SaveListing = this.SaveListing.bind(this)

    }
    SaveListing = listing_id => {
        console.log(listing_id)
        API.saveListing({listing_id})
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    componentDidMount() {
        // alert("MOUNTED")
        API.getListing(this.props.match.params.id)
            .then(res => this.setState({ listing: res.data }))
            .catch(err => console.log(err))
    }


    render() {

        return (
            <div>
                <ContainerSpace />

                <ListingDetail
                    src={this.state.listing.imgSrc}
                    id={this.state.listing._id}
                    price={this.state.listing.price}
                    key={this.state.listing._id}
                    city={this.state.listing.city}
                    address={this.state.listing.street}
                    zipcode={this.state.listing.zipcode}

                />
                <SaveBtn onClick={() => this.SaveListing(this.state.listing._id)} />
                
            </div>

        )
    }

}

export default Listing;