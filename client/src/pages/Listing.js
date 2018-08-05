import React from "react";
import ContainerSpace from "../components/Containers"
import API from "../utils/API"
import { SaveBtn, ListingDetail } from "../components/ListingDetail";
import withAuthorization from '../components/withAuthorization';

const authCondition = (authUser) => !!authUser;

class Listing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listing: {},
        }
        this.SaveListing = this.SaveListing.bind(this)

    }
    SaveListing = listing_id => {
        console.log(listing_id)
        API.saveListing({ listing_id })
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
        const { imgSrc, _id, price, city, street, zipcode } = this.state.listing;

        return (
            <div>
                <ContainerSpace />

                <ListingDetail
                    src={imgSrc}
                    id={_id}
                    price={price}
                    key={_id}
                    city={city}
                    address={street}
                    zipcode={zipcode}

                />
                <SaveBtn onClick={() => this.SaveListing(_id)} />

            </div>

        )
    }

}

export default withAuthorization(authCondition)(Listing);
//test